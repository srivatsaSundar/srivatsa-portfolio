import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Stars, Text } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

const Particles = ({ count = 5000 }) => {
    const points = useRef()
    const { size } = useThree()

    const particlesPosition = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15
        }
        return pos
    }, [count])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        points.current.rotation.y = time * 0.02
        points.current.rotation.x = time * 0.01
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.012}
                color="#ffffff"
                transparent
                opacity={0.3}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 2]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                    <ambientLight intensity={0.2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} color="#fff" intensity={0.5} />

                    <Particles />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
                        <mesh position={[2, 0, 0]} scale={0.8}>
                            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                            <MeshDistortMaterial
                                color="#111"
                                speed={2}
                                distort={0.4}
                                radius={1}
                                metalness={0.9}
                                roughness={0.1}
                            />
                        </mesh>
                    </Float>

                    <Float speed={2} rotationIntensity={1} floatIntensity={3}>
                        <mesh position={[-2, 1, -1]} scale={0.5}>
                            <sphereGeometry args={[1, 64, 64]} />
                            <meshStandardMaterial color="#fff" wireframe />
                        </mesh>
                    </Float>
                </Canvas>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="space-y-2"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-white/40 uppercase tracking-[0.8em] text-[10px] md:text-xs font-medium mb-4 block"
                    >
                        Digital Portfolio &copy; 2026
                    </motion.p>

                    <h1 className="text-[12vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter text-white uppercase italic overflow-hidden">
                        <motion.span
                            initial={{ y: "150%" }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="block"
                        >
                            Agentic AI
                        </motion.span>
                        <motion.span
                            initial={{ y: "150%" }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="block text-white/20"
                        >
                            Engineer.
                        </motion.span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between pt-12 border-t border-white/10 mt-12 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="max-w-md"
                        >
                            <h2 className="text-2xl font-medium text-white mb-4">Srivatsa Sundarraj</h2>
                            <p className="text-white/50 leading-relaxed text-sm md:text-base">
                                AI Engineer with 2+ years of experience designing and deploying enterprise-scale Generative AI and Agentic AI systems. Specializing in LLM applications, RAG, multi-agent orchestration, MCP, LangChain, LangGraph, and Azure AI at Johnson Electric.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex flex-col gap-3"
                        >
                            <a href="#projects" className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-none hover:bg-neutral-200 transition-all active:scale-95 inline-block text-center">
                                Explore Work
                            </a>
                            <a href="#contact" className="px-10 py-4 border border-white/20 text-white font-bold uppercase text-[10px] tracking-widest rounded-none hover:bg-white hover:text-black transition-all active:scale-95 inline-block text-center">
                                Get in Touch
                            </a>
                            <a 
                                href={`${import.meta.env.BASE_URL}Srivatsa_Sundarraj_Resume.pdf`}
                                download="Srivatsa_Sundarraj_Resume.pdf"
                                className="text-white/30 hover:text-white transition-colors uppercase tracking-[0.2em] text-[9px] font-bold text-center pt-2"
                            >
                                [ Download Resume ]
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-12 right-12 z-10 hidden md:block">
                <div className="flex gap-8">
                    <div className="flex flex-col gap-1 items-end">
                        <span className="text-white/20 text-[10px] uppercase tracking-widest">Location</span>
                        <span className="text-white text-xs">India, Chennai</span>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                        <span className="text-white/20 text-[10px] uppercase tracking-widest">Status</span>
                        <span className="text-white text-xs">Junior Engineer – AI</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
