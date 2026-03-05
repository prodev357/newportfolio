"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Play, Eye, Calendar, Download } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  image: string;
  liveUrl?: string;
  features: string[];
  stats: {
    metric?: string;
    value?: string;
  };
  completedDate: string;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "AI Automation System – Vention",
      description: "End-to-end AI automation integrating Microsoft Dynamics 365, Salesforce, and SAP using LLMs and RAG.",
      fullDescription: "Designed and delivered an AI automation system that replaces manual case routing with auditable AI agents. Built secure middleware using Python (FastAPI) and .NET Core to synchronize real-time data between legacy ERP systems and modern CRMs, reducing reconciliation errors by 70%.",
      technologies: ["LangChain", "Azure OpenAI", "RAG", "Pinecone", "Dynamics 365", "Salesforce", "SAP", "Python", "FastAPI", ".NET Core", "Azure", "AWS"],
      category: "ai-automation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      liveUrl: "https://vention.ai",
      features: [
        "LLM-powered case routing with human-in-the-loop validation",
        "Vector-based knowledge retrieval using Pinecone + PostgreSQL",
        "Real-time ERP-CRM data sync with audit trails",
        "Zero-downtime deployments via Terraform + GitHub Actions"
      ],
      stats: { metric: "Reconciliation Errors", value: "70% Reduction" },
      completedDate: "2022–2025"
    },
    {
      id: "2",
      title: "Invoice Processing Automation – Eco York LLC",
      description: "Automated document processing for financial operations using Python and Azure Cognitive Services.",
      fullDescription: "Integrated NetSuite ERP and Oracle Cloud with custom SaaS platforms using REST/SOAP APIs and Azure Logic Apps. Automated invoice processing with Python and Azure Cognitive Services, reducing manual work by 80% while maintaining data integrity and compliance.",
      technologies: ["NetSuite", "Oracle ERP Cloud", "Azure Logic Apps", "Kafka", "Python", "Azure Cognitive Services", "React", "Node.js", "AWS ECS"],
      category: "erp-integration",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      liveUrl: "https://eco-york.com",
      features: [
        "OCR-powered invoice extraction and validation",
        "Real-time inventory and financial synchronization",
        "Custom SaaS platform with React + Node.js frontend",
        "CI/CD pipeline via GitHub Actions on AWS ECS"
      ],
      stats: { metric: "Manual Processing", value: "80% Reduction" },
      completedDate: "2018–2022"
    },
    {
      id: "3",
      title: "Banking Compliance System – LMSNinjas",
      description: "Mission-critical applications for Tier-2 banks with KYC, fraud monitoring, and regulatory reporting.",
      fullDescription: "Built and maintained mission-critical applications for banking clients using Java Spring Boot, React, and Oracle Database—supporting KYC workflows, transaction monitoring, and regulatory reporting with full auditability and RBAC.",
      technologies: ["Java Spring Boot", "React", "Oracle Database", "ServiceNow", "OAuth 2.0", "RBAC", "Audit Logging"],
      category: "financial-systems",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
      liveUrl: "https://lmsninjas.com",
      features: [
        "KYC and fraud monitoring dashboards",
        "RESTful microservices for transaction analysis",
        "Role-based access control and audit logging",
        "WCAG 2.1 AA-compliant UIs for 50K+ users"
      ],
      stats: { metric: "Regulatory Compliance", value: "100% Audit Pass" },
      completedDate: "2012–2017"
    },
    {
      id: "4",
      title: "Logistics CRM Modernization – Valyr",
      description: "Modernized legacy VB6 logistics applications to C#/.NET with 45% performance improvement.",
      fullDescription: "Led development of logistics and CRM applications using ASP.NET, SQL Server, and jQuery. Modernized legacy VB6 applications to C# and the .NET Framework, improving system performance by 45% and enabling cloud deployment.",
      technologies: ["ASP.NET", "SQL Server", "jQuery", "VB6", "C#", ".NET Framework"],
      category: "legacy-modernization",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      liveUrl: "https://valyr.com",
      features: [
        "VB6 to C#/.NET migration",
        "Responsive CRM interfaces for logistics clients",
        "Performance optimization and cloud readiness",
        "Client-specific workflow customization"
      ],
      stats: { metric: "System Performance", value: "45% Improvement" },
      completedDate: "2004–2011"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-automation", label: "AI Automation" },
    { id: "erp-integration", label: "CRM/ERP Integration" },
    { id: "financial-systems", label: "Financial Systems" },
    { id: "legacy-modernization", label: "Legacy Modernization" },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleProjectAction = (action: string, project: Project) => {
    if (action === "view-details") {
      setSelectedProject(project);
    } else if (action === "live-site" && project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world AI automation and enterprise integration systems I've designed and delivered—connecting CRM, ERP, and custom applications with secure, scalable, and compliant architectures.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className="hover-elevate"
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover-elevate transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleProjectAction("live-site", project)}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      View Live Site
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.completedDate}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    {project.stats.metric && project.stats.value && (
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {project.stats.metric}: {project.stats.value}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => handleProjectAction("view-details", project)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg mb-4"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop";
                              }}
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                            {project.stats.metric && project.stats.value && (
                              <div className="text-sm text-muted-foreground">
                                {project.stats.metric}: {project.stats.value}
                              </div>
                            )}
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-2">About</h3>
                            <p className="text-muted-foreground mb-4">
                              {project.fullDescription}
                            </p>
                            
                            <h3 className="font-semibold mb-2">Key Features</h3>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex gap-4 pt-4 border-t">
                          <Button onClick={() => handleProjectAction("live-site", project)}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Live Site
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}