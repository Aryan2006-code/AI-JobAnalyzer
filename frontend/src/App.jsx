import React, { useState } from 'react';
import JobInputForm from './components/JobInputForm';
import AnalysisResult from './components/AnalysisResult';
import RoadmapView from './components/RoadmapView';
import ResumeTips from './components/ResumeTips';
import InterviewPrep from './components/InterviewPrep';
import Footer from './components/Footer';
import { parseJob, analyzeSkillGap, generateRoadmap, optimizeResume, generateInterviewPrep } from './api';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobAnalysis, setJobAnalysis] = useState(null);
  const [skillGap, setSkillGap] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [interviewData, setInterviewData] = useState(null);
  const [error, setError] = useState(null);

  const [showHistory, setShowHistory] = useState(false);

  const handleAnalyze = async (jobDescription, userSkills) => {
    setIsLoading(true);
    setError(null);
    setJobAnalysis(null);
    setSkillGap(null);
    setRoadmap(null);
    setResumeData(null);
    setInterviewData(null);

    try {
      // Step 1: Parse Job
      const analysis = await parseJob(jobDescription);
      setJobAnalysis(analysis);

      // Step 2: Skill Gap
      const gap = await analyzeSkillGap(analysis, userSkills);
      setSkillGap(gap);

      // Step 3: Parallel requests for Roadmap, Resume, Interview
      const [roadmapRes, resumeRes, interviewRes] = await Promise.all([
        generateRoadmap(gap.skills_missing),
        optimizeResume(analysis.job_title, analysis.ats_keywords, userSkills),
        generateInterviewPrep(analysis.job_title, analysis.technical_skills_required, analysis.responsibilities)
      ]);

      setRoadmap(roadmapRes);
      setResumeData(resumeRes);
      setInterviewData(interviewRes);

    } catch (err) {
      console.error(err);
      setError("An error occurred during analysis. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-premium-black text-premium-text-main font-sans selection:bg-premium-gold selection:text-premium-black relative">
      {/* Header */}
      <header className="glass-panel sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-premium-gold to-premium-gold-muted flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <span className="font-serif font-bold text-premium-black text-xl">AI</span>
            </div>
            <h1 className="text-2xl font-serif font-bold tracking-wide text-white">
              Job<span className="text-premium-gold">Analyzer</span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-premium-text-muted tracking-widest uppercase">
            <a href="#" className="hover:text-premium-gold transition-colors duration-300">Dashboard</a>
            <button
              onClick={() => setShowHistory(!showHistory)}
              className={`hover:text-premium-gold transition-colors duration-300 uppercase tracking-widest ${showHistory ? 'text-premium-gold' : ''}`}
            >
              History
            </button>
            <a href="#" className="hover:text-premium-gold transition-colors duration-300">Profile</a>
          </nav>
        </div>
      </header>

      {/* History Modal Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${showHistory ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setShowHistory(false)}
      ></div>

      {/* History Modal Content */}
      <div
        className={`fixed top-24 right-4 md:right-8 z-50 w-full max-w-md transform transition-all duration-300 ${showHistory ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
      >
        <div className="glass-panel p-6 rounded-2xl shadow-2xl border border-white/10">
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <h3 className="text-lg font-serif font-bold text-white">Recent Scans</h3>
            <button onClick={() => setShowHistory(false)} className="text-premium-text-muted hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-premium-gold/30 transition-all cursor-pointer group hover:bg-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-base font-bold text-white group-hover:text-premium-gold transition-colors">Senior React Dev</span>
                <span className="text-xs text-premium-text-muted">2h ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[85%] shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                </div>
                <span className="text-xs text-green-400 font-bold">85%</span>
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-premium-gold/30 transition-all cursor-pointer group hover:bg-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-base font-bold text-white group-hover:text-premium-gold transition-colors">Full Stack Eng</span>
                <span className="text-xs text-premium-text-muted">1d ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full w-[60%] shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                </div>
                <span className="text-xs text-yellow-500 font-bold">60%</span>
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-premium-gold/30 transition-all cursor-pointer group hover:bg-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-base font-bold text-white group-hover:text-premium-gold transition-colors">Backend Python Dev</span>
                <span className="text-xs text-premium-text-muted">3d ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full w-[45%] shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                </div>
                <span className="text-xs text-red-500 font-bold">45%</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5 text-center">
            <button className="text-xs font-bold text-premium-gold uppercase tracking-widest hover:text-white transition-colors">
              View All History
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Sidebar: Control Center (30%) */}
          <div className="w-full lg:w-[30%] sticky top-24 space-y-6">
            <JobInputForm onAnalyze={handleAnalyze} isLoading={isLoading} />

            {/* Status / Error */}
            {error && (
              <div className="bg-red-900/20 border border-red-800/50 text-red-300 p-6 rounded-lg text-sm backdrop-blur-sm">
                {error}
              </div>
            )}

            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-serif font-bold text-white mb-4 border-b border-white/10 pb-2">How it works</h3>
              <ol className="list-decimal list-inside text-premium-text-muted space-y-2 text-sm leading-relaxed">
                <li>Paste the Job Description.</li>
                <li>Enter your current skills.</li>
                <li>Get instant analysis & roadmap.</li>
              </ol>
            </div>
          </div>

          {/* Right Feed: Insights (70%) */}
          <div className="w-full lg:w-[70%] space-y-8">
            {!jobAnalysis && !isLoading && (
              <div className="flex flex-col items-center justify-center h-[60vh] text-premium-text-muted border border-dashed border-white/10 rounded-2xl bg-premium-charcoal/30">
                <svg className="w-16 h-16 mb-6 opacity-30 text-premium-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <p className="text-xl font-serif tracking-wide">Ready to analyze your next opportunity</p>
              </div>
            )}

            {isLoading && (
              <div className="flex flex-col items-center justify-center h-[60vh]">
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 border-t-2 border-premium-gold rounded-full animate-spin"></div>
                  <div className="absolute inset-2 border-r-2 border-premium-gold-muted rounded-full animate-spin animation-delay-150"></div>
                </div>
                <p className="text-premium-gold font-serif tracking-widest animate-pulse">ANALYZING...</p>
              </div>
            )}

            {jobAnalysis && (
              <div className="space-y-8 animate-fade-in">
                {/* Row 1 & 2: Executive Summary & Skills Grid (Handled in AnalysisResult) */}
                <AnalysisResult analysis={jobAnalysis} skillGap={skillGap} />

                {/* Row 3: Optimization & Prep */}
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="w-full lg:w-[60%]">
                    <ResumeTips resumeData={resumeData} />
                  </div>
                  <div className="w-full lg:w-[40%]">
                    <InterviewPrep interviewData={interviewData} />
                  </div>
                </div>

                {/* Row 4: Roadmap */}
                <RoadmapView roadmap={roadmap} />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
