import React, { useState } from 'react';

const JobInputForm = ({ onAnalyze, isLoading }) => {
    const [jobDescription, setJobDescription] = useState('');
    const [userSkills, setUserSkills] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (jobDescription.trim() && userSkills.trim()) {
            const skillsList = userSkills.split(',').map(s => s.trim()).filter(s => s);
            onAnalyze(jobDescription, skillsList);
        }
    };

    return (
        <div className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-xl font-serif font-bold text-white mb-6 border-l-4 border-premium-gold pl-4">
                    Start Analysis
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-premium-gold uppercase tracking-widest mb-2">
                            Job Description
                        </label>
                        <textarea
                            className="w-full h-32 bg-premium-black/50 border border-white/10 rounded-lg p-3 text-sm text-premium-text-main placeholder-premium-text-muted/30 focus:border-premium-gold focus:ring-1 focus:ring-premium-gold transition-all duration-300 resize-none font-light leading-relaxed custom-scrollbar"
                            placeholder="Paste the full job description here..."
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-premium-gold uppercase tracking-widest mb-2">
                            Your Skills
                        </label>
                        <textarea
                            className="w-full h-20 bg-premium-black/50 border border-white/10 rounded-lg p-3 text-sm text-premium-text-main placeholder-premium-text-muted/30 focus:border-premium-gold focus:ring-1 focus:ring-premium-gold transition-all duration-300 resize-none font-light custom-scrollbar"
                            placeholder="React, Python, AWS..."
                            value={userSkills}
                            onChange={(e) => setUserSkills(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || !jobDescription || !userSkills}
                        className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-300 ${isLoading || !jobDescription || !userSkills
                            ? 'bg-white/5 text-white/20 cursor-not-allowed'
                            : 'bg-gradient-to-r from-premium-gold to-premium-gold-muted text-premium-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02]'
                            }`}
                    >
                        {isLoading ? 'Analyzing...' : 'Analyze Profile'}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default JobInputForm;
