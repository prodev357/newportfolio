"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/lib/hooks/use-toast";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const watchedFields = watch();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );

      const emailUrl = `mailto:hunteroffice7@gmail.com?subject=${subject}&body=${body}`;
      window.open(emailUrl, "_blank");

      setIsSubmitted(true);
      reset();

      toast({
        title: "Email client opened!",
        description:
          "Your message has been prepared. Please send it to complete your inquiry.",
      });
    } catch (error) {
      toast({
        title: "Unable to open email client",
        description:
          "Please contact me directly at hunteroffice7@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hunteroffice7@gmail.com",
      action: () =>
        window.open("mailto:hunteroffice7@gmail.com", "_blank"),
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Las Vegas, NV",
      action: () => {},
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for an AI Full Stack Engineer to build intelligent SaaS
            platforms, RAG systems, or AI agents? Let's collaborate to create
            scalable and production-ready solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-display">
                  Contact Information
                </CardTitle>
                <p className="text-muted-foreground">
                  Open to AI Engineer, Senior Full Stack, and AI SaaS roles.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + index * 0.1,
                      }}
                      className="flex items-center gap-4 p-4 rounded-lg hover-elevate transition-all duration-300 cursor-pointer"
                      onClick={info.action}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {info.label}
                        </h3>
                        <p className="text-muted-foreground">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}

                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-4">
                    Professional Focus
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    I specialize in building production AI systems using:
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• LLM integration with OpenAI and Azure OpenAI</div>
                    <div>• RAG pipelines with Pinecone and vector search</div>
                    <div>• AI agents using AutoGen and CrewAI</div>
                    <div>• React, Next.js, Node.js, and FastAPI</div>
                    <div>• Cloud deployment on Azure and AWS</div>
                    <div>• Docker, Kubernetes, and CI/CD pipelines</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-display">
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  I typically respond within 24–48 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Message Prepared!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Your email draft has been opened. Please review
                      and send it to complete your inquiry.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Compose Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          className={`mt-1 ${
                            errors.name
                              ? "border-destructive"
                              : ""
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={`mt-1 ${
                            errors.email
                              ? "border-destructive"
                              : ""
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        className={`mt-1 ${
                          errors.subject
                            ? "border-destructive"
                            : ""
                        }`}
                        placeholder="AI SaaS project or job opportunity"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        className="mt-1 min-h-32"
                        placeholder="Tell me about your AI project, SaaS platform, or automation needs..."
                      />
                      <div className="text-xs text-muted-foreground mt-1 text-right">
                        {watchedFields.message?.length || 0} characters
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Preparing Email..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}