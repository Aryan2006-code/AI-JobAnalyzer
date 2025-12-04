# Job Analyzer by Shadow Crushers

![Job Analyzer Logo](frontend/public/logo.svg)

**Job Analyzer** is an AI-powered career development tool designed to bridge the gap between job seekers and their dream roles. By analyzing job descriptions against user skills, it provides actionable insights, personalized learning roadmaps, and interview preparation strategies.

## 🚀 Features

-   **Job Parsing & Analysis**: Instantly extracts key requirements, skills, and responsibilities from any job description.
-   **Skill Gap Analysis**: Identifies missing skills and provides a match percentage to help users understand their standing.
-   **Personalized Roadmap**: Generates a day-by-day or week-by-week learning plan to acquire missing skills.
-   **Resume Optimization**: Offers tailored suggestions to optimize resumes for Applicant Tracking Systems (ATS).
-   **Interview Preparation**: Generates role-specific interview questions and answers based on the job description.

## 🛠️ Tech Stack

### Frontend
-   **React**: UI Library
-   **Vite**: Build Tool
-   **Tailwind CSS**: Styling & Design System

### Backend
-   **Python**: Core Language
-   **FastAPI**: Web Framework
-   **Google Gemini API**: AI/LLM Integration
-   **MongoDB**: NoSQL Database (Atlas)
-   **Motor**: Async MongoDB Driver

## ⚙️ Setup Instructions

### Prerequisites
-   Node.js & npm
-   Python 3.8+

### Backend Setup
1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3.  Set up environment variables:
    -   Create a `.env` file in the `backend` directory.
    -   Add your Google Gemini API key: `GEMINI_API_KEY=your_api_key_here`
    -   Add your MongoDB connection string: `MONGODB_URL=mongodb://localhost:27017`
4.  Start the server:
    ```bash
    uvicorn main:app --reload
    ```
    The backend will run at `http://localhost:8000`.

### Frontend Setup
1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash     
    npm run dev
    ```
    The application will run at `http://localhost:5173`.

## 👥 The Team - Shadow Crushers

**Based in Lucknow, India**

-   **Abhay** - Frontend Developer
    -   [LinkedIn](https://www.linkedin.com/in/abhay-raj-pathak-471768342)
    -   Email: abhayrajpathak5@gmail.com

-   **Aryan** - Backend Developer
    -   [LinkedIn](https://www.linkedin.com/in/aryankumar2006)
    -   Email: aryan2006bui@gmail.com

## 📄 License

&copy; 2025 Shadow Crushers. All rights reserved.
