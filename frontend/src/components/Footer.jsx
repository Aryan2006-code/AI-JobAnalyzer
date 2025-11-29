import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand & Location (35% approx) */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-premium-gold to-premium-gold-muted flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                                <span className="font-serif font-bold text-premium-black text-sm">SC</span>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                                Shadow <span className="text-premium-gold">Crushers</span>
                            </h3>
                        </div>
                        <p className="text-[#B3B3B3] text-sm leading-relaxed">
                            Empowering careers with AI-driven insights. <br />
                            Based in Lucknow, India.
                        </p>
                    </div>

                    {/* Team (30% approx) */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6">
                            The Team
                        </h4>
                        <div className="space-y-6">
                            {/* Abhay */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-medium text-base">Abhay</span>
                                    <a
                                        href="https://www.linkedin.com/in/abhay-raj-pathak-471768342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-premium-gold hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                </div>
                                <span className="text-xs text-[#B3B3B3]">Frontend Developer</span>
                            </div>

                            {/* Aryan */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-medium text-base">Aryan</span>
                                    <a
                                        href="https://www.linkedin.com/in/aryankumar2006"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-premium-gold hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                </div>
                                <span className="text-xs text-[#B3B3B3]">Backend Developer</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact (35% approx) */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-6">
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            <a href="mailto:aryan2006bui@gmail.com" className="flex items-center gap-3 text-[#B3B3B3] hover:text-white group transition-colors">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-premium-gold/20 transition-colors">
                                    <svg className="w-4 h-4 text-premium-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <span className="text-sm">aryan2006bui@gmail.com</span>
                            </a>
                            <a href="mailto:abhayrajpathak5@gmail.com" className="flex items-center gap-3 text-[#B3B3B3] hover:text-white group transition-colors">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-premium-gold/20 transition-colors">
                                    <svg className="w-4 h-4 text-premium-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <span className="text-sm">abhayrajpathak5@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-[#B3B3B3]">
                        &copy; 2025 Aryan, Abhay. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-[#B3B3B3]">
                        <span className="hover:text-premium-gold cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-premium-gold cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
