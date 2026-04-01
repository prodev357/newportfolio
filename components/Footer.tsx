"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSocialClick = (platform: string) => {
    const links = {
      github: "https://github.com/prodev357",
      email: "mailto:hunteroffice7@gmail.com"
    };

    if (links[platform as keyof typeof links]) {
      window.open(links[platform as keyof typeof links], "_blank");
    }
  };

  const handleQuickNavigation = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", section: "about" },
    { label: "Experience", section: "experience" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Branding */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold font-display text-primary mb-4">
                Hunterj J ZACPAL
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                AI Full Stack Engineer specializing in LLM integrations, RAG
                pipelines, and intelligent automation systems. I build scalable
                SaaS platforms that transform business workflows into
                AI-powered solutions.
              </p>

              <div className="flex gap-2">
                {[
                  { icon: Github, label: "GitHub", platform: "github" },
                  { icon: Mail, label: "Email", platform: "email" },
                ].map(({ icon: Icon, label, platform }) => (
                  <Button
                    key={platform}
                    variant="ghost"
                    size="icon"
                    onClick={() => handleSocialClick(platform)}
                    className="hover-elevate text-muted-foreground hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{label}</span>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Button
                    key={link.section}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuickNavigation(link.section)}
                    className="justify-start p-0 h-auto font-normal text-muted-foreground hover:text-foreground hover-elevate"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 hunteroffice7@gmail.com</p>
                <p>📍 Las Vegas, NV</p>
                <p className="mt-4">
                  Open to AI full-stack engineering, LLM platform development,
                  and intelligent automation opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Hunterj J ZACPAL. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover-elevate"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}