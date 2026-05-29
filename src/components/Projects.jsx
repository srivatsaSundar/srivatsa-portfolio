import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react'

const projects = [
    {
        title: "Microsoft Fabric Enterprise Agent",
        category: "Fabric & Lakehouse",
        description: "Built an enterprise intelligence agent leveraging Direct Lake connectivity and custom API integrations to enable secure real-time querying of lakehouse datasets.",
        tags: ["Fabric", "Direct Lake", "API Integration", "Data Lakehouse"],
        link: "#"
    },
    {
        title: "Autonomous Material Discovery",
        category: "Agentic AI",
        description: "LangGraph-based autonomous research agent capable of web scraping, multi-format document ingestion, and automated comparison against catalogs.",
        tags: ["LangGraph", "Web Scraping", "Data Ingestion", "Agentic Workflows"],
        link: "#"
    },
    {
        title: "Automated Sales Email Orchestration",
        category: "Enterprise Automation",
        description: "Intelligent sales email automation system using Power Automate and custom LLM APIs to automate analysis, drafting, routing, and escalation.",
        tags: ["Power Automate", "LLM APIs", "Workflow Automation", "Routing"],
        link: "#"
    },
    {
        title: "Multi-Database Agentic RAG System",
        category: "Agentic RAG",
        description: "Production-grade Agentic RAG system using ReAct-based orchestration and MCP integrations across distributed vector databases.",
        tags: ["Agentic RAG", "ReAct", "MCP Integration", "Vector DB"],
        link: "#"
    },
    {
        title: "Global Enterprise HR Chatbot",
        category: "Global Rollout (96% Acc)",
        description: "Global HR policy assistant built using LangGraph and Azure AI Search, achieving 96% production accuracy.",
        tags: ["LangGraph", "Azure AI Search", "RAG", "Production AI"],
        link: "#"
    },
    {
        title: "Component Detection System",
        category: "Computer Vision (98% Acc)",
        description: "OpenCV-based deep learning vision system to detect component misalignment on machinery with Azure ML Studio pipelines.",
        tags: ["OpenCV", "Deep Learning", "Computer Vision", "Azure ML"],
        link: "#"
    },
    {
        title: "Self Help Mental Health Companion",
        category: "Personal Project",
        description: "LLaMA-based chatbot application with automated chat session reporting to doctors and emergency SOS alerts.",
        tags: ["LLaMA", "Prompt Engineering", "NLP", "Companionship"],
        link: "#"
    },
    {
        title: "Tweets Classification on Sexism",
        category: "Academic Publication",
        description: "Feminism tweets classification using various ML models for binary and multiclass classification, reaching 83% - 87% accuracy.",
        tags: ["Machine Learning", "NLP", "Classification", "Research Paper"],
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
