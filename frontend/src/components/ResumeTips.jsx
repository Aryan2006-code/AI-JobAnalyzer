import React from 'react';

const ResumeTips = ({ resumeData }) => {
    if (!resumeData) return null;

    return (
        <div className="glass-panel p-8 rounded-2xl h-full flex flex-col">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3 shrink-0">
                <span className="w-8 h-1 bg-premium-gold rounded-full"></span>
                Resume Optimization
            </h2>

            <div className="space-y-8 overflow-y-auto pr-2 custom-scrollbar flex-grow max-h-[600px]">
                <div>
                    <h3 className="text-xs font-bold text-premium-text-muted uppercase tracking-widest mb-4">Keywords to Add</h3>
                    <div className="flex flex-wrap gap-2">
                        {resumeData.keywords_to_add.map((kw, idx) => (
                            <span key={idx} className="px-3 py-1 bg-premium-gold/10 text-premium-gold border border-premium-gold/20 rounded text-sm font-medium">
                                + {kw}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-premium-text-muted uppercase tracking-widest mb-4">Suggested Summary</h3>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-premium-text-secondary italic leading-relaxed font-light">
                        "{resumeData.resume_summary_section}"
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-premium-text-muted uppercase tracking-widest mb-4">Role-Specific Improvements</h3>
                    <ul className="space-y-4">
                        {resumeData.role_specific_bullet_points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-premium-text-main font-light">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                                <span className="leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">Mistakes to Avoid</h3>
                    <ul className="space-y-3">
                        {resumeData.common_mistakes.map((mistake, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-premium-text-secondary text-sm font-light">
                                <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{mistake}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ResumeTips;
