from pydantic import BaseModel, Field, BeforeValidator
from typing import List, Optional, Annotated
from datetime import datetime

# Helper for MongoDB ObjectId
PyObjectId = Annotated[str, BeforeValidator(str)]

class DBModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True

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
class JobAnalysisResponse(DBModel):
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

class SkillGapResponse(DBModel):
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

class RoadmapResponse(DBModel):
    seven_day_plan: List[RoadmapItem]
    thirty_day_plan: List[RoadmapItem]

class ResumeOptimizerResponse(DBModel):
    keywords_to_add: List[str]
    resume_summary_section: str
    role_specific_bullet_points: List[str]
    common_mistakes: List[str]

class InterviewPrepResponse(DBModel):
    technical_questions: List[str]
    behavioral_questions: List[str]
    scenario_questions: List[str]
    coding_questions: List[str]
