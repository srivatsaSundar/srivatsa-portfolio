import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
    {
        title: "Junior Engineer \u2013 AI",
        company: "Johnson Electric",
        period: "Nov 2025 \u2013 Present",
        description: "Lead end-to-end AI solution architecture, implementation planning, deployment, testing, and optimization within the enterprise Innovation Lab.",
        metrics: "80% Email Triage Cut / Multi-Agent MCP / Docker & K8s CI/CD",
        achievements: [
            "Architected and deployed a LangChain-based Agentic AI workflow using Python, LLM APIs, and Power Automate to process 100\u2013200 daily sales team emails across sales, finance, HR, and billing contexts.",
            "Replaced a fully manual, human-forwarded triage process with automated intent classification, auto-draft responses, and deterministic routing to the correct department and region-specific team.",
            "Cut manual email triage by 80% and accelerated response times across departments.",
            "Built a multi-agent system using the DeepAgent framework with skill-based sub-agents connecting to multiple MCP servers across enterprise systems to fetch real-time production data \u2014 stock availability, product specifications, and machine capacity.",
            "Replaced a manual process where engineers spent 4\u20135 hours per request cross-checking systems, reducing lookup time to under a minute. Currently used by nearly 100 engineers.",
            "Deployed and maintained production AI services using Docker, Kubernetes, and Jenkins CI/CD pipelines across cloud infrastructure."
        ]
    },
    {
        title: "Graduate Engineer Trainee \u2013 AI",
        company: "Johnson Electric",
        period: "Nov 2024 \u2013 Oct 2025",
        description: "Architected and deployed production-grade Agentic RAG infrastructures and global enterprise policy assistants serving 10,000+ employees.",
        metrics: "Agentic RAG / 96% HR Chatbot Accuracy / 10K+ Users",
        achievements: [
            "Architected and productionized an Agentic RAG system using ReAct-based orchestration and MCP integrations to dynamically retrieve information across multiple distributed vector databases \u2014 spanning HR, IT, and company-wide policies.",
            "Integrated with ITPL to enable employees to fetch live ticket data and status alongside policy and procedural information.",
            "Built and deployed a global HR policy chatbot using LangGraph and Azure AI Search, serving all 10,000+ employees across the enterprise.",
            "Achieved 96% production accuracy, with 100\u2013200 employees using it every hour. Eliminated the need for employees to search through lengthy policy documents or wait on HR responses."
        ]
    },
    {
        title: "AI Intern",
        company: "Johnson Electric",
        period: "June 2024 \u2013 Oct 2024",
        description: "Built full-stack AI applications including a natural language-to-SQL interface for enterprise warehouse retrieval and analytics.",
        metrics: "LlamaIndex SQL / Enterprise Analytics",
        achievements: [
            "Built a LlamaIndex-powered natural language-to-SQL interface for the internal data team, converting plain-language prompts into SQL queries for enterprise warehouse retrieval and analytics.",
            "Enabled business users without SQL expertise to independently query thousands of warehouse records, removing dependency on the data team for routine data pulls."
        ]
    },
    {
        title: "Data Science Intern",
        company: "Marico Ltd",
        period: "July 2023 \u2013 Jan 2024",
        description: "Data Science internship focusing on supply chain analytics, behavioral tracking, and automated repository intelligence.",
        metrics: "Supply Chain ML / 80% Audit Reduction",
        achievements: [
            "Built and evaluated machine learning models using Scikit-learn and Pandas to analyze supply chain behavior, purchasing trends, and distribution efficiency for business strategy optimization.",
            "Implemented an NLP- and API-driven metadata analysis pipeline to process GitHub repositories and Jira datasets, reducing manual technical auditing effort by 80%."
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
