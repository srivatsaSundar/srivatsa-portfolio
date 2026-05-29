import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, ArrowRight } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 md:px-24 bg-[#030303] border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-white/20 uppercase tracking-[0.5em] text-[10px] mb-8 block">Connect</span>
                        <h2 className="text-7xl md:text-9xl font-bold text-white mb-12 tracking-tighter leading-[0.85]">
                            Let's speak <br /> <span className="text-white/10 italic">Intelligence.</span>
                        </h2>

                        <div className="space-y-12 mt-20">
                            <a href="mailto:srivatsas0503@gmail.com" className="group block">
                                <span className="text-[10px] uppercase tracking-widest text-white/20 block mb-2">Primary Contact</span>
                                <div className="flex items-center gap-4 text-3xl md:text-4xl text-white group-hover:italic transition-all">
                                    srivatsas0503@gmail.com
                                    <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-white/40" />
                                </div>
                            </a>

                            <div className="flex gap-12">
                                <a href="https://www.linkedin.com/in/srivatsa-s05/" target="_blank" className="text-white/40 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">LinkedIn</a>
                                <a href="https://github.com/srivatsaSundar" className="text-white/40 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">GitHub</a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="relative"
                    >
                        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-white transition-colors">
                                <label className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Identifer</label>
                                <input type="text" placeholder="Your Name" className="w-full bg-transparent text-white text-2xl focus:outline-none placeholder:text-white/10 italic" />
                            </div>

                            <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-white transition-colors">
                                <label className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Response Endpoint</label>
                                <input type="email" placeholder="email@address.com" className="w-full bg-transparent text-white text-2xl focus:outline-none placeholder:text-white/10 italic" />
                            </div>

                            <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-white transition-colors">
                                <label className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Query Payload</label>
                                <textarea rows="2" placeholder="Tell me about your mission..." className="w-full bg-transparent text-white text-2xl focus:outline-none placeholder:text-white/10 italic resize-none"></textarea>
                            </div>

                            <button className="text-white font-bold uppercase text-xs tracking-[0.5em] hover:italic flex items-center gap-4 group">
                                [ Execute Message ]
                                <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-white transition-all"></div>
                            </button>
                        </form>
                    </motion.div>
                </div>

                <footer className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-white/5 opacity-20 text-[8px] uppercase tracking-[0.8em] font-medium">
                    <span>&copy; Srivatsa Sundarraj // Junior Engineer – AI // 2026</span>
                    <span>Designed for the Future of Thought.</span>
                </footer>
            </div>

            {/* Background visual detail */}
            <div className="absolute -bottom-10 -left-1/4 w-1/2 h-1/2 bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>
        </section>
    )
}

export default Contact
