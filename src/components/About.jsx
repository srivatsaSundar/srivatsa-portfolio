import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <section className="py-32 px-6 md:px-24 bg-[#030303] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-4 mb-20">
                    <span className="text-white/20 uppercase tracking-[0.5em] text-[10px]">About Srivatsa</span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                        The Evolution of <br />
                        <span className="text-[#444]">Machine Intelligence.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-light italic border-l-2 border-white/10 pl-8">
                            "My mission is to build systems that don't just process data, but understand context and create value."
                        </p>

                        <div className="space-y-6 text-white/40 text-base md:text-lg leading-relaxed">
                            <p>
                                My trajectory at <strong>Johnson Electric</strong> represents a rapid professional evolution—climbing the ranks from an <strong>AI Intern</strong> to a <strong>Graduate Engineer Trainee</strong>, and finally to my current impact as a <strong>Junior Engineer – AI</strong>.
                            </p>
                            <p>
                                With a B.Tech in Artificial Intelligence and Data Science (GPA: 8.4/10.0) from KPR Institute of Engineering and Technology, I bridge the gap between academic theory and enterprise-scale implementation.
                                Within the enterprise Innovation Lab, I lead end-to-end AI solution architecture, implementation planning, deployment, testing, and optimization.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="aspect-[4/5] glass rounded-none flex flex-col items-center justify-center p-8">
                            <span className="text-4xl font-bold text-white mb-2 italic">8.4</span>
                            <span className="text-white/20 uppercase tracking-widest text-[8px] text-center">Academic GPA</span>
                        </div>
                        <div className="aspect-[4/5] glass rounded-none flex flex-col items-center justify-center p-8 translate-y-12">
                            <span className="text-4xl font-bold text-white mb-2 italic">2+</span>
                            <span className="text-white/20 uppercase tracking-widest text-[8px] text-center">Years Enterprise AI</span>
                        </div>
                        <div className="aspect-[4/5] glass rounded-none flex flex-col items-center justify-center p-8">
                            <span className="text-4xl font-bold text-white mb-2 italic">Agentic AI</span>
                            <span className="text-white/20 uppercase tracking-widest text-[8px] text-center">Specialization</span>
                        </div>
                        <div className="aspect-[4/5] glass rounded-none flex flex-col items-center justify-center p-8 translate-y-12">
                            <span className="text-4xl font-bold text-white mb-2 italic">5x</span>
                            <span className="text-white/20 uppercase tracking-widest text-[8px] text-center">Enterprise Awards</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
