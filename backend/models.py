from pydantic import BaseModel
from typing import List, Optional

class JobDescriptionRequest(BaseModel):
    job_description: str

class SkillGapRequest(BaseModel):
    job_analysis: dict
    user_skills: List[str]

class RoadmapRequest(BaseModel):
    missing_skills: List[str]

class ResumeOptimizerRequest(BaseModel):
    job_role: str
    ats_keywords: List[str]
    user_skills: List[str]

class InterviewPrepRequest(BaseModel):
    job_role: str
    required_skills: List[str]
    responsibilities: List[str]

# Response Models
class JobAnalysisResponse(BaseModel):
    job_title: str
    company: str
    summary: str
    experience_level: str
    technical_skills_required: List[str]
    soft_skills_required: List[str]
    tools_and_technologies: List[str]
    responsibilities: List[str]
    preferred_qualifications: List[str]
    ats_keywords: List[str]

class SkillGapResponse(BaseModel):
    user_skills: List[str]
    skills_required: List[str]
    skills_matched: List[str]
    skills_missing: List[str]
    priority_missing_skills: List[str]

class RoadmapItem(BaseModel):
    day: int
    topic: str
    tasks: List[str]
    resources: List[str]

class RoadmapResponse(BaseModel):
    seven_day_plan: List[RoadmapItem]
    thirty_day_plan: List[RoadmapItem]

class ResumeOptimizerResponse(BaseModel):
    keywords_to_add: List[str]
    resume_summary_section: str
    role_specific_bullet_points: List[str]
    common_mistakes: List[str]

class InterviewPrepResponse(BaseModel):
    technical_questions: List[str]
    behavioral_questions: List[str]
    scenario_questions: List[str]
    coding_questions: List[str]
