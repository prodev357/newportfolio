"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "1",
      company: "Vention",
      position: "AI Automation Architect | Full Stack & CRM/ERP Integration",
      location: "New York, USA",
      startDate: "Jan 2022",
      endDate: "Dec 2025",
      description: [
        "Designed and delivered end-to-end AI automation systems integrating Microsoft Dynamics 365, Salesforce, and SAP using LLMs, Azure OpenAI, LangChain, and RAG—replacing manual case routing with auditable AI agents.",
        "Built secure middleware using Python (FastAPI) and .NET Core to synchronize real-time data between legacy ERP systems and modern CRMs, reducing reconciliation errors by 70%.",
        "Implemented vector-based knowledge retrieval with Pinecone and PostgreSQL to enable context-aware AI responses while maintaining strict data privacy controls.",
        "Deployed and managed solutions on Azure and AWS using Docker, Terraform, and CI/CD pipelines, supporting zero-downtime releases and infrastructure-as-code governance."
      ],
      technologies: ["LangChain", "Azure OpenAI", "RAG", "Pinecone", "Dynamics 365", "Salesforce", "SAP", "Python", "FastAPI", ".NET Core", "Azure", "AWS", "Docker", "Terraform", "CI/CD"]
    },
    {
      id: "2",
      company: "Eco York LLC",
      position: "Senior Full Stack Developer | Enterprise Integration",
      location: "Pennsylvania, USA",
      startDate: "Feb 2018",
      endDate: "Feb 2022",
      description: [
        "Integrated NetSuite ERP and Oracle Cloud with custom SaaS platforms using REST/SOAP APIs, Azure Logic Apps, and Kafka—enabling real-time inventory and financial synchronization for over 50 clients.",
        "Automated document processing with Python and Azure Cognitive Services, reducing manual invoice processing by 80%.",
        "Developed responsive front-end applications with React and Angular, and back-end services with Node.js and C#, deployed via GitHub Actions to AWS ECS."
      ],
      technologies: ["NetSuite", "Oracle ERP Cloud", "Azure Logic Apps", "Kafka", "Python", "Azure Cognitive Services", "React", "Angular", "Node.js", "C#", "AWS ECS", "GitHub Actions"]
    },
    {
      id: "3",
      company: "LMSNinjas",
      position: "Software Engineer | Financial Systems",
      location: "Pennsylvania, USA",
      startDate: "Jan 2012",
      endDate: "Nov 2017",
      description: [
        "Built and maintained mission-critical applications for banking clients using Java Spring Boot, React, and Oracle Database—supporting KYC workflows and regulatory reporting.",
        "Developed RESTful microservices for transaction analysis and integrated alerting into ServiceNow and internal dashboards.",
        "Implemented OAuth 2.0, role-based access control (RBAC), and comprehensive audit logging to meet regulatory and compliance requirements."
      ],
      technologies: ["Java Spring Boot", "React", "Oracle Database", "RESTful APIs", "ServiceNow", "OAuth 2.0", "RBAC", "Audit Logging"]
    },
    {
      id: "4",
      company: "Valyr",
      position: "Web Application Developer",
      location: "Pennsylvania, USA",
      startDate: "Feb 2004",
      endDate: "Dec 2011",
      description: [
        "Led development of logistics and CRM applications using ASP.NET, SQL Server, and jQuery for regional manufacturing and distribution clients.",
        "Modernized legacy VB6 applications to C# and the .NET Framework, improving system performance by 45%."
      ],
      technologies: ["ASP.NET", "SQL Server", "jQuery", "VB6", "C#", ".NET Framework"]
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 20 years of experience designing and delivering production-grade AI automation and enterprise integration systems—connecting CRM, ERP, and custom applications with secure, scalable, and compliant architectures.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-2 border-background" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover-elevate transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-semibold font-display text-foreground">
                            {experience.company}
                          </h3>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {experience.startDate} – {experience.endDate}
                        </Badge>
                      </div>
                      
                      <h4 className="text-lg font-medium text-primary mb-2">
                        {experience.position}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover-elevate"
                            data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}