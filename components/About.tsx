"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Zap, Target, Users, Heart } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1pQiP6C_ZHMH4m1a9UNZI_aT5GbGVjFBA/",
      "_blank"
    );
  };

  const values = [
    {
      icon: Zap,
      title: "Production AI Systems",
      description:
        "Built LLM and RAG powered SaaS platforms that automate customer workflows and reduce manual operations by 60%."
    },
    {
      icon: Target,
      title: "AI Agents & Automation",
      description:
        "Designed AutoGen and CrewAI agents handling multi-step business logic with secure RBAC and OAuth-based access."
    },
    {
      icon: Users,
      title: "Scalable Cloud Architecture",
      description:
        "Deployed LangChain + vector search platforms on Azure and AWS using Docker, Terraform, and CI/CD pipelines."
    },
    {
      icon: Heart,
      title: "Secure Enterprise Engineering",
      description:
        "Production-ready systems with encryption, auditability, and role-based access for enterprise-grade reliability."
    }
  ];

  const personalStats = [
    { label: "Years of Experience", value: "7+" },
    { label: "AI Systems Delivered", value: "25+" },
    { label: "Manual Work Reduced", value: "60%" },
    { label: "Production Deployments", value: "40+" }
  ];

  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI Full Stack Engineer with 7+ years of experience building intelligent,
            scalable SaaS platforms. I specialize in embedding LLMs, RAG pipelines,
            and AI agents into real business workflows to automate operations and
            improve decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold font-display mb-4">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm an AI Full Stack Engineer based in Las Vegas, specializing
                  in building production-ready AI platforms that combine modern
                  web technologies with intelligent automation. My work focuses
                  on integrating LLMs, vector databases, and cloud infrastructure
                  to create scalable enterprise solutions.
                </p>
                <p>
                  At WonderBotz, I architected AI-powered SaaS systems using
                  LangChain, Azure OpenAI, and Pinecone, reducing manual ticket
                  resolution time by 60%. I built intelligent AI agents capable
                  of executing multi-step workflows securely using RBAC and OAuth.
                </p>
                <p>
                  My architecture philosophy emphasizes scalability, clean system
                  design, and production reliability. I design microservices,
                  implement CI/CD pipelines, and deploy secure AI-driven systems
                  on Azure and AWS environments.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">LangChain</Badge>
              <Badge variant="secondary">OpenAI / Azure OpenAI</Badge>
              <Badge variant="secondary">RAG / Pinecone</Badge>
              <Badge variant="secondary">AutoGen</Badge>
              <Badge variant="secondary">CrewAI</Badge>
              <Badge variant="secondary">React / Next.js</Badge>
              <Badge variant="secondary">Node.js / FastAPI</Badge>
              <Badge variant="secondary">.NET Core</Badge>
              <Badge variant="secondary">Azure / AWS</Badge>
              <Badge variant="secondary">Docker / Terraform</Badge>
            </div>

            <Button
              onClick={handleDownloadResume}
              className="hover-elevate"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats and Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold font-display mb-6 text-center">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {personalStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1
                    }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Values */}
            <div>
              <h3 className="text-xl font-semibold font-display mb-6">
                What Drives Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1
                      }}
                    >
                      <Card className="p-4 h-full hover-elevate transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">
                                {value.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {value.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}