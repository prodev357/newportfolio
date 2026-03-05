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
    // Cleaned URL (no trailing spaces)
    window.open("https://drive.google.com/file/d/1GsMt57wHqWjedcV19sbZrgmyAM-uiDjp/view?usp=drive_link", '_blank');
  };

  const values = [
    {
      icon: Zap,
      title: "AI-Powered Business Automation",
      description: "Embedded LLMs and RAG into real workflows—replacing manual case routing in Dynamics 365 + SAP with auditable AI agents."
    },
    {
      icon: Target,
      title: "Secure CRM/ERP Integration",
      description: "Built compliant middleware between SAP, NetSuite, and custom apps—reducing reconciliation errors by 70% with full audit trails."
    },
    {
      icon: Users,
      title: "End-to-End Production AI",
      description: "Architected LangChain + Pinecone systems on Azure/AWS with Terraform, Docker, and CI/CD—trusted by enterprise clients."
    },
    {
      icon: Heart,
      title: "Compliance by Design",
      description: "GDPR/HIPAA-compliant solutions with RBAC, OAuth 2.0, and secure coding—built for production from day one."
    }
  ];

  const personalStats = [
    { label: "Years of Experience", value: "20+" },
    { label: "Enterprise Systems Integrated", value: "50+" },
    { label: "Reconciliation Errors", value: "70% Reduction" },
    { label: "Invoice Processing Time", value: "80% Faster" }
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
            AI Automation Architect with 20+ years of experience designing and delivering production-grade systems that connect CRM, ERP, and custom applications using AI, cloud, and modern web technologies.
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
              <h3 className="text-2xl font-semibold font-display mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I’m an AI Automation Architect based in Media, PA, with over two decades of experience designing and delivering production-grade systems that bridge CRM (Microsoft Dynamics 365, Salesforce), ERP (SAP, NetSuite, Oracle ERP Cloud), and custom applications using AI, cloud, and modern web technologies.
                </p>
                <p>
                  At Vention, I designed end-to-end AI automation systems integrating Dynamics 365, Salesforce, and SAP using LangChain, Azure OpenAI, and RAG—replacing manual case routing with auditable AI agents. At Eco York LLC, I automated invoice processing using Python and Azure Cognitive Services, reducing manual work by 80%.
                </p>
                <p>
                  My architectures are built for production from day one—with GDPR/HIPAA compliance, infrastructure-as-code (Terraform), zero-downtime deployments, and full auditability—trusted by financial institutions, healthcare providers, and enterprise clients.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="hover-elevate">LangChain</Badge>
              <Badge variant="secondary" className="hover-elevate">OpenAI / Azure OpenAI</Badge>
              <Badge variant="secondary" className="hover-elevate">RAG / Pinecone</Badge>
              <Badge variant="secondary" className="hover-elevate">Dynamics 365</Badge>
              <Badge variant="secondary" className="hover-elevate">SAP / NetSuite</Badge>
              <Badge variant="secondary" className="hover-elevate">Oracle ERP Cloud</Badge>
              <Badge variant="secondary" className="hover-elevate">Python / .NET</Badge>
              <Badge variant="secondary" className="hover-elevate">Azure / AWS</Badge>
              <Badge variant="secondary" className="hover-elevate">Terraform / Docker</Badge>
            </div>

            <Button 
              onClick={handleDownloadResume}
              className="hover-elevate"
              data-testid="button-about-resume"
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
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
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
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <Card className="p-4 h-full hover-elevate transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{value.title}</h4>
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