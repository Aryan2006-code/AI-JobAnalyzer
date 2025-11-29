const API_BASE_URL = "http://localhost:8000";

export const parseJob = async (jobDescription) => {
    const response = await fetch(`${API_BASE_URL}/parse-job`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_description: jobDescription }),
    });
    if (!response.ok) throw new Error("Failed to parse job");
    return response.json();
};

export const analyzeSkillGap = async (jobAnalysis, userSkills) => {
    const response = await fetch(`${API_BASE_URL}/skill-gap`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_analysis: jobAnalysis, user_skills: userSkills }),
    });
    if (!response.ok) throw new Error("Failed to analyze skill gap");
    return response.json();
};

export const generateRoadmap = async (missingSkills) => {
    const response = await fetch(`${API_BASE_URL}/roadmap`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ missing_skills: missingSkills }),
    });
    if (!response.ok) throw new Error("Failed to generate roadmap");
    return response.json();
};

export const optimizeResume = async (jobRole, atsKeywords, userSkills) => {
    const response = await fetch(`${API_BASE_URL}/resume-optimizer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_role: jobRole, ats_keywords: atsKeywords, user_skills: userSkills }),
    });
    if (!response.ok) throw new Error("Failed to optimize resume");
    return response.json();
};

export const generateInterviewPrep = async (jobRole, requiredSkills, responsibilities) => {
    const response = await fetch(`${API_BASE_URL}/interview-prep`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_role: jobRole, required_skills: requiredSkills, responsibilities: responsibilities }),
    });
    if (!response.ok) throw new Error("Failed to generate interview prep");
    return response.json();
};
