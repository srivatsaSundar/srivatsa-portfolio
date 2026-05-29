import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
    {
        title: "Junior Engineer – AI",
        company: "Johnson Electric",
        period: "Nov 2025 – Present",
        description: "Lead end-to-end AI solution architecture, implementation planning, deployment, testing, and optimization initiatives within the enterprise Innovation Lab. Collaborate with global stakeholders to deliver production-grade enterprise AI MVPs and automation systems.",
        metrics: "Fabric Agent / LangGraph Research / Email Automation",
        achievements: [
            "Built a Microsoft Fabric enterprise intelligence agent leveraging Direct Lake connectivity and custom API integrations for real-time querying of lakehouse datasets.",
            "Developed a LangGraph-based autonomous research agent for web scraping, technical specification extraction, and catalog comparison.",
            "Designed and deployed an intelligent sales email automation and routing system using Power Automate and custom LLM APIs.",
            "Architected and delivered key projects in the Innovation Lab, driving AI innovation and leading cross-functional stakeholder management."
        ]
    },
    {
        title: "Graduate Engineer Trainee – AI",
        company: "Johnson Electric",
        period: "Nov 2024 – Oct 2025",
        description: "Architected and deployed production-grade Agentic RAG infrastructures, global enterprise policy assistants, and vision systems. Delivered business value through high-accuracy predictive and automated solutions.",
        metrics: "Agentic RAG / 96% HR RAG / 98% CV Accuracy",
        achievements: [
            "Architected and deployed a production-grade Agentic RAG system using ReAct-based orchestration and MCP integrations.",
            "Built and deployed a global HR policy chatbot using LangGraph and Azure AI Search, achieving 96% production accuracy.",
            "Developed an autonomous customer support and escalation engine in Microsoft Copilot Studio handling 60–100 emails daily.",
            "Built an OpenCV-based deep learning vision system to detect component misalignment on machinery with 98% accuracy.",
            "Migrated enterprise material price forecasting workflows to Azure ML Studio, keeping 94% accuracy with improved stability.",
            "Developed industrial machine manual discovery engines, executive summarization pipelines, and specialized IT compliance sub-agents."
        ]
    },
    {
        title: "AI Intern",
        company: "Johnson Electric",
        period: "June 2024 – Oct 2024",
        description: "Built full-stack AI applications and conducted performance benchmarking for enterprise semantic search systems.",
        metrics: "LlamaIndex SQL / RAG Benchmarking / Cloud-Native",
        achievements: [
            "Built a LlamaIndex-powered natural language SQL database chatbot for warehouse retrieval and analytics.",
            "Conducted benchmarking across vector databases to optimize semantic retrieval accuracy and inference latency.",
            "Containerized and deployed enterprise warehouse applications using Django, Flask, Docker, and Kubernetes."
        ]
    },
    {
        title: "Data Science Intern",
        company: "Marico Ltd",
        period: "July 2023 – Jan 2024",
        description: "Data Science internship focusing on supply chain analytics, behavioral tracking, and code repository intelligence.",
        metrics: "Supply Chain ML / Metadata Automation",
        achievements: [
            "Built machine learning models using Scikit-learn and Pandas to analyze supply chain behavior and purchasing trends.",
            "Developed an NLP-driven metadata analysis pipeline to parse GitHub and Jira datasets, reducing auditing efforts."
        ]
    }
]

const Experience = () => {
    return (
        <section className="py-32 px-6 md:px-24 bg-[#030303] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <h2 className="text-6xl md:text-9xl font-bold text-white italic tracking-tighter uppercase leading-[0.8]">
                        Career <br /> <span className="text-white/20">Trajectory.</span>
                    </h2>
                    <p className="max-w-[150px] text-white/30 text-[10px] uppercase tracking-[0.5em] leading-relaxed text-right">
                        From Intern to Junior Engineer – AI.
                    </p>
                </div>

                <div className="space-y-0 border-t border-white/5">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className="group border-b border-white/5 py-12 md:py-20 flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-start relative hover:bg-white/[0.01] transition-all px-4"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Period</span>
                                <span className="text-white font-medium text-xs">{exp.period}</span>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter group-hover:italic transition-all">
                                    {exp.title}
                                </h3>
                                <p className="text-white/40 text-sm md:text-base max-w-xl leading-relaxed">
                                    {exp.description}
                                </p>
                                {exp.achievements && exp.achievements.length > 0 && (
                                    <ul className="list-disc list-outside ml-4 space-y-2 mt-4">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="text-white/60 text-xs md:text-sm leading-relaxed pl-1 marker:text-white/30">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold block pt-4">@ {exp.company}</span>
                            </div>

                            <div className="flex flex-col gap-1 md:items-end w-full">
                                <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Impact Metrics</span>
                                <span className="text-white text-xs md:text-right">{exp.metrics}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
