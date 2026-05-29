import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Cpu, Layers, Database, Code2, Globe } from 'lucide-react'

const skillGroups = [
    {
        title: "AGENTIC & GEN AI",
        skills: ["LangGraph", "LangChain", "LlamaIndex", "MCP (Model Context Protocol)", "Microsoft Agent Framework", "AutoGen", "Multi-Agent Systems", "Agentic RAG"]
    },
    {
        title: "CLOUD, DEVOPS & MLOPS",
        skills: ["Azure AI Foundry", "Azure ML Studio", "Azure AI Search", "Kubernetes & Docker", "Azure Functions & Logic Apps", "Power Automate", "Git & Azure DevOps", "MLflow & App Insights"]
    },
    {
        title: "ML, VISION & BACKEND",
        skills: ["Machine Learning", "Deep Learning", "NLP & SpaCy", "OCR & OpenCV", "Python & FastAPI", "Pydantic & REST APIs", "Django & Flask", "Streamlit"]
    },
    {
        title: "DATABASES & VECTORS",
        skills: ["FAISS Vector DB", "Neo4j Graph DB", "MySQL", "SQLite", "Direct Lake (Fabric)", "Data Lakehouse", "SQL Pipelines", "Document Ingestion"]
    }
]

const Skills = () => {
    return (
        <section className="py-32 px-6 md:px-24 bg-[#030303] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
                    <h2 className="text-6xl md:text-8xl font-bold text-white italic tracking-tighter uppercase leading-[0.8]">
                        Technical <br /> <span className="text-white/20">Arsenal.</span>
                    </h2>
                    <p className="max-w-xs text-white/30 text-xs uppercase tracking-[0.4em] leading-relaxed">
                        Synthesizing complex data into intelligent architectures.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="space-y-8"
                        >
                            <h3 className="text-white text-xs font-bold tracking-[0.5em] uppercase border-b border-white/10 pb-4">
                                {group.title}
                            </h3>

                            <ul className="space-y-4">
                                {group.skills.map((skill, i) => (
                                    <li key={i} className="text-white/40 text-sm hover:text-white hover:pl-2 transition-all cursor-default">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
