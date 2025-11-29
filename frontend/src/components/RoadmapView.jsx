import React, { useState } from 'react';

const RoadmapView = ({ roadmap }) => {
    const [activeTab, setActiveTab] = useState('7day');

    if (!roadmap) return null;

    const plan = activeTab === '7day' ? roadmap.seven_day_plan : roadmap.thirty_day_plan;

    return (
        <div className="glass-panel p-8 rounded-2xl shadow-2xl border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-white mb-2">Learning Roadmap</h2>
                    <p className="text-premium-text-muted text-sm">Your personalized path to mastery</p>
                </div>
                <div className="flex bg-black/40 rounded-xl p-1 border border-white/5">
                    <button
                        onClick={() => setActiveTab('7day')}
                        className={`px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === '7day' ? 'bg-premium-gold text-premium-black shadow-lg' : 'text-premium-text-muted hover:text-white'}`}
                    >
                        7-Day Crash Course
                    </button>
                    <button
                        onClick={() => setActiveTab('30day')}
                        className={`px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === '30day' ? 'bg-premium-gold text-premium-black shadow-lg' : 'text-premium-text-muted hover:text-white'}`}
                    >
                        30-Day Deep Dive
                    </button>
                </div>
            </div>

            <div className="relative border-l-2 border-premium-gold/20 ml-4 md:ml-8 space-y-12">
                {plan.map((item, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-premium-black border-2 border-premium-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>

                        <div className="bg-premium-charcoal/50 border border-white/5 rounded-xl p-6 hover:border-premium-gold/30 transition-colors duration-300">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                <span className="text-xs font-bold text-premium-gold uppercase tracking-widest border border-premium-gold/30 px-3 py-1 rounded-full">
                                    Day {item.day}
                                </span>
                                <h3 className="text-xl font-serif font-bold text-white">{item.topic}</h3>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {item.tasks.map((task, tIdx) => (
                                    <li key={tIdx} className="flex items-start gap-3 text-premium-text-main text-sm font-light leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-premium-gold/50 flex-shrink-0"></span>
                                        {task}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                                {item.resources && item.resources.map((res, rIdx) => (
                                    <span
                                        key={rIdx}
                                        className="text-xs font-medium text-premium-gold-muted bg-premium-gold/5 px-3 py-1.5 rounded border border-premium-gold/10"
                                    >
                                        {res}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoadmapView;
