"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2 } from "lucide-react";

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
      company: "WonderBotz",
      position: "Senior AI Full Stack Engineer",
      location: "Remote",
      startDate: "Nov 2022",
      endDate: "Dec 2025",
      description: [
        "Architected and deployed production-ready AI SaaS platforms integrating LLMs and RAG to automate customer support workflows, reducing manual resolution time by 60%.",
        "Developed intelligent AI agents using AutoGen and CrewAI to handle multi-step business logic with secure OAuth 2.0 and RBAC access control.",
        "Migrated legacy monolithic systems to microservices using Node.js and Python FastAPI hosted on Azure App Services and AWS Lambda.",
        "Implemented semantic vector search using Pinecone for enterprise knowledge retrieval across large datasets."
      ],
      technologies: [
        "OpenAI",
        "Azure OpenAI",
        "LangChain",
        "RAG",
        "AutoGen",
        "CrewAI",
        "Node.js",
        "Python",
        "FastAPI",
        "Azure",
        "AWS",
        "Pinecone",
        "OAuth 2.0",
        "RBAC"
      ]
    },
    {
      id: "2",
      company: "Inter-Tech",
      position: "Full Stack Developer",
      location: "Las Vegas, NV",
      startDate: "May 2020",
      endDate: "Jul 2022",
      description: [
        "Built scalable web applications using React.js, Next.js, and .NET Core serving 50,000+ monthly active users.",
        "Designed REST and GraphQL APIs to unify multiple third-party services and internal platforms.",
        "Established CI/CD pipelines using Docker and Kubernetes to streamline deployment and reduce downtime.",
        "Integrated payment gateways and webhook-based real-time transaction processing."
      ],
      technologies: [
        "React",
        "Next.js",
        ".NET Core",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "REST APIs",
        "Docker",
        "Kubernetes",
        "CI/CD"
      ]
    },
    {
      id: "3",
      company: "Raster Media",
      position: "Software Engineer",
      location: "Las Vegas, NV",
      startDate: "Mar 2017",
      endDate: "Dec 2020",
      description: [
        "Developed responsive frontend interfaces using TypeScript and Tailwind CSS with cross-device compatibility.",
        "Contributed to backend development using Python Django focusing on secure coding and encryption.",
        "Implemented asynchronous task processing with RabbitMQ message queues.",
        "Participated in full SDLC from requirements gathering to production deployment."
      ],
      technologies: [
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Python",
        "Django",
        "RabbitMQ",
        "REST APIs",
        "Secure Coding"
      ]
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
            7+ years building AI-powered SaaS platforms, scalable full-stack
            applications, and enterprise automation systems using modern cloud
            and LLM technologies.
          </p>
        </motion.div>

        <div className="relative">
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
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-2 border-background" />

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
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
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
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden md:block w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}