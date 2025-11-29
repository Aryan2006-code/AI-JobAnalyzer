from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import (
    JobDescriptionRequest, JobAnalysisResponse,
    SkillGapRequest, SkillGapResponse,
    RoadmapRequest, RoadmapResponse,
    ResumeOptimizerRequest, ResumeOptimizerResponse,
    InterviewPrepRequest, InterviewPrepResponse
)
import ai_service

app = FastAPI(title="AI Job Analyzer API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "AI Job Analyzer API is running"}

@app.post("/parse-job", response_model=JobAnalysisResponse)
async def parse_job(request: JobDescriptionRequest):
    prompt = ai_service.get_parse_job_prompt(request.job_description)
    result = await ai_service.generate_content(prompt)
    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])
    return result

@app.post("/skill-gap", response_model=SkillGapResponse)
async def skill_gap(request: SkillGapRequest):
    prompt = ai_service.get_skill_gap_prompt(request.job_analysis, request.user_skills)
    result = await ai_service.generate_content(prompt)
    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])
    return result

@app.post("/roadmap", response_model=RoadmapResponse)
async def roadmap(request: RoadmapRequest):
    prompt = ai_service.get_roadmap_prompt(request.missing_skills)
    result = await ai_service.generate_content(prompt)
    # Map keys to match model if necessary (7_day_plan vs seven_day_plan)
    # The prompt asks for "7_day_plan" but pydantic model has "seven_day_plan"
    # Actually, let's fix the model to match the prompt or vice versa.
    # I will stick to the prompt's output format and use alias in Pydantic or just update the model.
    # Updating model in next step if needed, but for now let's assume I'll fix the mapping here.
    
    # Fix mapping
    if "7_day_plan" in result:
        result["seven_day_plan"] = result.pop("7_day_plan")
    if "30_day_plan" in result:
        result["thirty_day_plan"] = result.pop("30_day_plan")
        
    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])
    return result

@app.post("/resume-optimizer", response_model=ResumeOptimizerResponse)
async def resume_optimizer(request: ResumeOptimizerRequest):
    prompt = ai_service.get_resume_opt_prompt(request.job_role, request.ats_keywords, request.user_skills)
    result = await ai_service.generate_content(prompt)
    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])
    return result

@app.post("/interview-prep", response_model=InterviewPrepResponse)
async def interview_prep(request: InterviewPrepRequest):
    prompt = ai_service.get_interview_prep_prompt(request.job_role, request.required_skills, request.responsibilities)
    result = await ai_service.generate_content(prompt)
    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])
    return result
