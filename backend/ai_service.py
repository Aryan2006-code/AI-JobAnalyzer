import google.generativeai as genai
import os
import json
from dotenv import load_dotenv

from pathlib import Path

print(f"DEBUG: CWD is {os.getcwd()}")
env_path = Path(__file__).parent / '.env'
print(f"DEBUG: Loading .env from {env_path}")
load_dotenv(dotenv_path=env_path, override=True)

api_key = os.getenv("GEMINI_API_KEY")
print(f"DEBUG: Loaded API Key: {api_key[:5]}...{api_key[-5:] if api_key else 'None'}")

if not api_key:
    print("Warning: GEMINI_API_KEY not found in environment variables.")

genai.configure(api_key=api_key)

# Generation config to enforce JSON
generation_config = {
    "temperature": 0.7,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "application/json",
}

model = genai.GenerativeModel(
    model_name="gemini-flash-latest",
    generation_config=generation_config,
)

async def generate_content(prompt: str):
    if not api_key or api_key == "your_api_key_here":
        print("Using mock response due to missing API key.")
        return get_mock_response(prompt)

    try:
        response = model.generate_content(prompt)
        return json.loads(response.text)
    except Exception as e:
        with open("backend_error.log", "a") as f:
            f.write(f"Error generating content: {e}\n")
        print(f"Error generating content: {e}")
        print("Falling back to mock response.")
        return get_mock_response(prompt)

def get_mock_response(prompt):
    # Simple keyword matching to return appropriate mock data
    if "Job Description Analyzer" in prompt:
        return {
            "job_title": "Software Engineer (Mock)",
            "company": "Tech Corp",
            "summary": "A mock role summary for testing purposes.",
            "experience_level": "Mid-Level",
            "technical_skills_required": ["Python", "React", "FastAPI"],
            "soft_skills_required": ["Communication", "Problem Solving"],
            "tools_and_technologies": ["Git", "Docker"],
            "responsibilities": ["Build features", "Fix bugs"],
            "preferred_qualifications": ["CS Degree"],
            "ats_keywords": ["Software Engineering", "Full Stack"]
        }
    elif "Skill Gap Analysis" in prompt:
        return {
            "user_skills": ["Python"],
            "skills_required": ["Python", "React", "FastAPI"],
            "skills_matched": ["Python"],
            "skills_missing": ["React", "FastAPI"],
            "priority_missing_skills": ["React", "FastAPI"]
        }
    elif "Roadmap Generator" in prompt:
        return {
            "seven_day_plan": [{"day": 1, "topic": "React Basics", "tasks": ["Learn Components"], "resources": ["React Docs"]}],
            "thirty_day_plan": [{"day": 1, "topic": "Deep Dive", "tasks": ["Build a project"], "resources": ["React Tutorial"]}]
        }
    elif "Resume & ATS" in prompt:
        return {
            "keywords_to_add": ["FastAPI", "React"],
            "resume_summary_section": "Experienced developer...",
            "role_specific_bullet_points": ["Implemented REST APIs"],
            "common_mistakes": ["Typos"]
        }
    elif "Interview Preparation" in prompt:
        return {
            "technical_questions": ["What is React?"],
            "behavioral_questions": ["Tell me about a challenge."],
            "scenario_questions": ["How to scale an API?"],
            "coding_questions": ["Reverse a string"]
        }
    return {"error": "Unknown prompt type"}

def get_parse_job_prompt(job_description: str):
    return f"""
    You are an AI Job Description Analyzer.
    Analyze the following Job Description and extract structured insights.
    Return ONLY JSON.
    
    Job Description:
    {job_description}
    
    OUTPUT JSON FORMAT:
    {{
      "job_title": "",
      "company": "",
      "summary": "",
      "experience_level": "",
      "technical_skills_required": [],
      "soft_skills_required": [],
      "tools_and_technologies": [],
      "responsibilities": [],
      "preferred_qualifications": [],
      "ats_keywords": []
    }}
    """

def get_skill_gap_prompt(job_analysis: dict, user_skills: list):
    return f"""
    You are an AI Skill Gap Analysis Engine.
    Compare the job requirements with user skills.
    
    Job Analysis: {json.dumps(job_analysis)}
    User Skills: {json.dumps(user_skills)}
    
    OUTPUT JSON FORMAT:
    {{
      "user_skills": [],
      "skills_required": [],
      "skills_matched": [],
      "skills_missing": [],
      "priority_missing_skills": []
    }}
    """

def get_roadmap_prompt(missing_skills: list):
    return f"""
    You are an AI Roadmap Generator.
    Create a 7-day and 30-day learning plan for these missing skills: {json.dumps(missing_skills)}
    
    OUTPUT JSON FORMAT:
    {{
      "7_day_plan": [
        {{
          "day": 1,
          "topic": "",
          "tasks": [],
          "resources": []
        }}
      ],
      "30_day_plan": [
        {{
          "day": 1,
          "topic": "",
          "tasks": [],
          "resources": []
        }}
      ]
    }}
    """

def get_resume_opt_prompt(job_role: str, ats_keywords: list, user_skills: list):
    return f"""
    You are an AI Resume & ATS Optimization Engine.
    Optimize resume for:
    Role: {job_role}
    ATS Keywords: {json.dumps(ats_keywords)}
    User Skills: {json.dumps(user_skills)}
    
    OUTPUT JSON FORMAT:
    {{
      "keywords_to_add": [],
      "resume_summary_section": "",
      "role_specific_bullet_points": [],
      "common_mistakes": []
    }}
    """

def get_interview_prep_prompt(job_role: str, required_skills: list, responsibilities: list):
    return f"""
    You are an AI Interview Preparation System.
    Generate interview questions for:
    Role: {job_role}
    Skills: {json.dumps(required_skills)}
    Responsibilities: {json.dumps(responsibilities)}
    
    OUTPUT JSON FORMAT:
    {{
      "technical_questions": [],
      "behavioral_questions": [],
      "scenario_questions": [],
      "coding_questions": []
    }}
    """
