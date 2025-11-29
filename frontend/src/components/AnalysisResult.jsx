import React from 'react';

const AnalysisResult = ({ analysis, skillGap }) => {
    if (!analysis) return null;

    // Calculate match score if not provided (mocking it based on skill gap if needed, or using a placeholder)
    const matchScore = skillGap ? Math.round((skillGap.skills_matched.length / (skillGap.skills_matched.length + skillGap.skills_missing.length)) * 100) : 0;

    return (
        <div className="space-y-8">
            {/* Row 1: The Executive Summary (Full Width) */}
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-premium-gold/5 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-700 group-hover:bg-premium-gold/10"></div>

                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-premium-gold">
                                {analysis.experience_level}
                            </span>
                            <span className="text-premium-text-muted text-sm">{analysis.company}</span>
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-white tracking-tight">
                            {analysis.job_title}
                        </h2>
                    </div>

                    {/* Match Score Circle */}
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <div className="text-sm text-premium-text-muted uppercase tracking-widest font-bold">Match Score</div>
                            <div className="text-xs text-premium-text-muted/50">Based on your skills</div>
                        </div>
                        <div className="relative w-20 h-20 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={226} strokeDashoffset={226 - (226 * matchScore) / 100} className="text-premium-gold transition-all duration-1000 ease-out" />
                            </svg>
                            <span className="absolute text-xl font-bold text-white">{matchScore}%</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                    <p className="text-premium-text-secondary text-lg font-light leading-relaxed">
                        {analysis.summary}
                    </p>
                </div>
            </div>

            {/* Row 2: The Skills Grid (2 Columns) */}
            {skillGap && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Matched Skills */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                            <h3 className="text-lg font-serif font-bold text-white">Matched Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-3 content-start">
                            {skillGap.skills_matched.length > 0 ? (
                                skillGap.skills_matched.map((skill, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-sm font-medium transition-all hover:bg-green-500/20 hover:scale-105 cursor-default">
                                        {skill}
                                    </span>
                                ))
                            ) : (
                                <span className="text-premium-text-muted italic text-sm">No direct matches found yet.</span>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Missing Skills */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]"></div>
                            <h3 className="text-lg font-serif font-bold text-white">Skills to Acquire</h3>
                        </div>
                        <div className="flex flex-wrap gap-3 content-start">
                            {skillGap.skills_missing.length > 0 ? (
                                skillGap.skills_missing.map((skill, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-sm font-medium transition-all hover:bg-red-500/20 hover:scale-105 cursor-default">
                                        {skill}
                                    </span>
                                ))
                            ) : (
                                <span className="text-premium-text-muted italic text-sm">You have all required skills!</span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnalysisResult;
