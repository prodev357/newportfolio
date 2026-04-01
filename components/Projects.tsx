"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Play, Eye, Calendar, TrendingUp } from "lucide-react";

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

  const projects: Project[] = [
    {
      id: "1",
      title: "Enterprise AI Support Automation",
      description: "LLM + RAG powered customer support automation platform.",
      fullDescription:
        "Built an enterprise AI support automation system using Azure OpenAI, LangChain, and Pinecone. Implemented RAG pipelines for knowledge retrieval and AI agents for multi-step resolution workflows integrated with CRM systems.",
      technologies: [
        "Azure OpenAI",
        "LangChain",
        "Pinecone",
        "FastAPI",
        "Node.js",
        "React",
        "AWS",
      ],
      category: "ai",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      features: [
        "RAG-based enterprise knowledge search",
        "AI agent multi-step resolution",
        "CRM integration automation",
        "Secure RBAC access control",
      ],
      stats: { metric: "Ticket Resolution", value: "60% Faster" },
      completedDate: "2024–2025",
    },
    {
      id: "2",
      title: "AI Workflow Automation Engine",
      description: "No-code AI agent workflow builder for business users.",
      fullDescription:
        "Designed and deployed a workflow automation platform allowing users to trigger AI agents through webhooks. Integrated OpenAI, vector search, and backend orchestration for enterprise automation.",
      technologies: [
        "OpenAI",
        "CrewAI",
        "AutoGen",
        "Next.js",
        "TypeScript",
        "Docker",
        "Azure",
      ],
      category: "ai",
      image:
        "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&h=400&fit=crop",
      features: [
        "AI agent orchestration engine",
        "Webhook-based triggers",
        "Multi-step automation flows",
        "Cloud-native deployment",
      ],
      stats: { metric: "Manual Tasks", value: "80% Reduced" },
      completedDate: "2023–2024",
    },
    {
      id: "3",
      title: "Enterprise RAG Knowledge Platform",
      description: "Secure enterprise document intelligence platform.",
      fullDescription:
        "Developed a retrieval-augmented generation platform allowing teams to query internal documentation using Azure OpenAI and vector embeddings with Pinecone.",
      technologies: [
        "Azure OpenAI",
        "RAG",
        "Pinecone",
        "React",
        "FastAPI",
        "PostgreSQL",
      ],
      category: "ai",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      features: [
        "Semantic enterprise search",
        "Document ingestion pipeline",
        "Secure access layers",
        "Real-time AI responses",
      ],
      stats: { metric: "Search Accuracy", value: "90%+" },
      completedDate: "2023",
    },
    {
      id: "4",
      title: "Full Stack SaaS Platform",
      description: "Scalable SaaS system serving 50K+ users.",
      fullDescription:
        "Built scalable SaaS web platform using React, .NET Core, and cloud infrastructure. Implemented REST APIs, microservices, and CI/CD pipelines.",
      technologies: [
        "React",
        ".NET Core",
        "Node.js",
        "Docker",
        "Kubernetes",
        "AWS",
      ],
      category: "fullstack",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      features: [
        "Microservices architecture",
        "CI/CD pipelines",
        "Cloud scaling",
        "Secure authentication",
      ],
      stats: { metric: "Active Users", value: "50K+" },
      completedDate: "2022",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI Systems" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-ready AI systems, RAG platforms, and enterprise SaaS
            applications designed and deployed for real-world impact.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover-elevate">
              <img
                src={project.image}
                className="w-full h-52 object-cover"
              />

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4" />
                  {project.stats.metric}: {project.stats.value}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>

                    <p className="text-muted-foreground">
                      {project.fullDescription}
                    </p>

                    <ul className="mt-4 space-y-1">
                      {project.features.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}