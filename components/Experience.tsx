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
      company: "Simform",
      position: "Senior Full Stack Developer",
      location: "Orlando, FL",
      startDate: "May 2024",
      endDate: "Present",
      description: [
        "Architected a cloud-native farm intelligence platform using Angular 16, .NET 7, and Python/Django, reducing data latency by 60% and supporting over 200 enterprise clients.",
        "Led migration from monolithic .NET Framework to Dockerized microservices (.NET Core and Node.js), cutting Azure costs by 25% and tripling deployment frequency.",
        "Built a real-time telemetry dashboard with React, SignalR, and WebSockets, processing 10,000+ sensor events per hour with sub-second response.",
        "Implemented CI/CD via GitHub Actions and infrastructure-as-code, reducing release cycles from hours to minutes.",
        "Mentored 4 developers in Angular best practices and C# performance tuning, improving team velocity by 20%."
      ],
      technologies: ["Angular", ".NET 7", "C#", "Python", "Django", "React", "SignalR", "WebSockets", "Azure", "Docker", "GitHub Actions", "IaC"],
    },
    {
      id: "2",
      company: "AptlyLabs Inc",
      position: "Full Stack Developer",
      location: "Chicago, IL",
      startDate: "Mar 2022",
      endDate: "Dec 2023",
      description: [
        "Developed React and .NET Core SaaS applications for healthcare logistics with role-based access control, audit logging, and JWT/OAuth 2.0 security.",
        "Created RESTful APIs serving 10,000+ monthly users, achieving 99.95% uptime and under 200ms response time using PostgreSQL and Redis.",
        "Drove test coverage from 35% to 80% using xUnit, Jest, and Cypress through TDD adoption.",
        "Containerized applications with Docker and deployed to Azure App Services."
      ],
      technologies: ["React", ".NET Core", "C#", "PostgreSQL", "Redis", "JWT", "OAuth 2.0", "Docker", "Azure", "xUnit", "Jest", "Cypress"],
    },
    {
      id: "3",
      company: "Bluelight",
      position: "Software Engineer",
      location: "Sacramento, CA",
      startDate: "Jan 2020",
      endDate: "Dec 2021",
      description: [
        "Refactored legacy ASP.NET MVC UIs into React components, reducing UI-related bug reports by 40%.",
        "Automated reporting pipelines using Python (Pandas, Flask), saving over 8 hours per week in manual work.",
        "Delivered 3–4 production features per sprint in Agile teams with consistent on-time delivery."
      ],
      technologies: ["React", "ASP.NET MVC", "C#", "Python", "Pandas", "Flask", "SQL Server", "JavaScript", "HTML/CSS"],
    },
    {
      id: "4",
      company: "Chicago Tech Innovations",
      position: "Junior Web Developer",
      location: "Chicago, IL",
      startDate: "Feb 2019",
      endDate: "Dec 2019",
      description: [
        "Built internal tools with ASP.NET Web Forms, SQL Server, and Python/Flask for task and data management.",
        "Learned Git, debugging, and requirements gathering during internship; converted to full-time role after graduation."
      ],
      technologies: ["ASP.NET Web Forms", "C#", "SQL Server", "Python", "Flask", "Git", "Agile"],
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
            Over 10 years of experience building secure, high-performance web applications using Angular, React, .NET Core, C#, and cloud-native solutions on Azure and AWS.
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