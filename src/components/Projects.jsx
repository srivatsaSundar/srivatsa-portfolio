import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react'

const projects = [
    {
        title: "Automated Sales Email Orchestration",
        category: "Agentic AI \u2014 Enterprise",
        description: "LangChain-based Agentic AI workflow processing 100\u2013200 daily sales emails with automated intent classification, auto-draft responses, and deterministic routing. Cut manual email triage by 80%.",
        tags: ["LangChain", "Power Automate", "LLM APIs", "Python"],
        link: "#"
    },
    {
        title: "Multi-Enterprise Production Stock Agent",
        category: "Multi-Agent MCP",
        description: "Multi-agent system using DeepAgent framework with skill-based sub-agents connecting to multiple MCP servers for real-time production data \u2014 stock, specs, and machine capacity. Used by ~100 engineers.",
        tags: ["DeepAgent", "MCP", "Multi-Agent", "Real-Time Data"],
        link: "#"
    },
    {
        title: "Multi-Database Agentic RAG System",
        category: "Agentic RAG",
        description: "Production-grade Agentic RAG system using ReAct-based orchestration and MCP integrations to dynamically retrieve across distributed vector databases spanning HR, IT, and company-wide policies.",
        tags: ["ReAct", "MCP", "Vector DB", "ITPL Integration"],
        link: "#"
    },
    {
        title: "Global Enterprise HR Chatbot",
        category: "Global Rollout \u2014 96% Accuracy",
        description: "Global HR policy chatbot using LangGraph and Azure AI Search, serving all 10,000+ employees with 96% production accuracy. 100\u2013200 employees using it every hour.",
        tags: ["LangGraph", "Azure AI Search", "RAG", "Production AI"],
        link: "#"
    },
    {
        title: "Generative AI SQL Data Chatbot",
        category: "Enterprise Analytics",
        description: "LlamaIndex-powered natural language-to-SQL interface converting plain-language prompts into SQL queries for enterprise warehouse retrieval and analytics.",
        tags: ["LlamaIndex", "NL-to-SQL", "Enterprise Data", "Analytics"],
        link: "#"
    },
    {
        title: "Supply Chain & Behavioral Analytics",
        category: "Data Science \u2014 Marico Ltd",
        description: "Machine learning models using Scikit-learn and Pandas to analyze supply chain behavior, purchasing trends, and distribution efficiency. NLP-driven metadata pipeline reducing audit effort by 80%.",
        tags: ["Scikit-learn", "Pandas", "NLP", "Supply Chain ML"],
        link: "#"
    }
]

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 md:px-24 bg-[#030303] relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="w-full text-center md:text-left mb-24">
                    <span className="text-white/20 uppercase tracking-[0.5em] text-[10px] mb-4 block">Selected Works</span>
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white italic opacity-80">PROJECTS.</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 w-full border-t border-white/5">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className="group p-10 border-b border-r border-white/5 relative overflow-hidden transition-all hover:bg-white/[0.02]"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                                <ArrowUpRight className="w-6 h-6 text-white" />
                            </div>

                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-12 block">
                                {project.category}
                            </span>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tighter group-hover:italic transition-all">
                                {project.title}
                            </h3>

                            <p className="text-white/40 text-sm leading-relaxed mb-12 max-w-xs">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-x-4 gap-y-2 opacity-30 group-hover:opacity-100 transition-opacity">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] font-medium text-white uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
