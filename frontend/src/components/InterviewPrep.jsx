import React, { useState } from 'react';

const InterviewPrep = ({ interviewData }) => {
    const [activeTab, setActiveTab] = useState('technical');
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    if (!interviewData) return null;

    const tabs = [
        { id: 'technical', label: 'Technical' },
        { id: 'behavioral', label: 'Behavioral' },
        { id: 'scenario', label: 'Scenario' },
        { id: 'coding', label: 'Coding' },
    ];

    const getQuestions = () => {
        switch (activeTab) {
            case 'technical': return interviewData.technical_questions;
            case 'behavioral': return interviewData.behavioral_questions;
            case 'scenario': return interviewData.scenario_questions;
            case 'coding': return interviewData.coding_questions;
            default: return [];
        }
    };

    const toggleQuestion = (idx) => {
        setExpandedQuestion(expandedQuestion === idx ? null : idx);
    };

    return (
        <div className="glass-panel p-8 rounded-2xl h-full flex flex-col">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-premium-gold rounded-full"></span>
                Interview Prep
            </h2>

            <div className="flex overflow-x-auto gap-2 mb-8 pb-2 custom-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => { setActiveTab(tab.id); setExpandedQuestion(null); }}
                        className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${activeTab === tab.id
                            ? 'bg-premium-gold text-premium-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                            : 'bg-white/5 text-premium-text-muted hover:bg-white/10 hover:text-white border border-white/5'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-grow max-h-[600px]">
                {getQuestions().length > 0 ? (
                    getQuestions().map((q, idx) => (
                        <div key={idx} className="group">
                            <button
                                onClick={() => toggleQuestion(idx)}
                                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex justify-between items-start gap-4 ${expandedQuestion === idx
                                    ? 'bg-white/10 border border-premium-gold/30'
                                    : 'bg-white/5 border border-white/5 hover:border-white/20'
                                    }`}
                            >
                                <span className={`font-medium text-sm leading-relaxed ${expandedQuestion === idx ? 'text-premium-gold' : 'text-premium-text-main'}`}>
                                    {q}
                                </span>
                                <span className={`text-premium-gold transition-transform duration-300 ${expandedQuestion === idx ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedQuestion === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                <div className="p-4 bg-black/20 rounded-xl border border-white/5 text-premium-text-secondary text-sm font-light leading-relaxed italic">
                                    Tip: Structure your answer using the STAR method (Situation, Task, Action, Result). Focus on specific examples from your past experience.
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 text-premium-text-muted italic text-sm border border-dashed border-white/10 rounded-xl">
                        No questions available for this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default InterviewPrep;
