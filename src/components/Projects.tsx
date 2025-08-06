import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, user authentication, and order processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "WebSeries Streaming App",
      description: "A web series streaming app that lets users browse, watch, and track their favorite shows online anytime, anywhere.",
      image: "https://res.cloudinary.com/dq3rul8yt/image/upload/v1754225280/WhatsApp_Image_2025-08-03_at_18.08.15_f54bf970_arm2hc.jpg",
      tags: ["Next.js", "TypeScript", "React.js" , "Tailwind CSS"],
      github: "https://github.com/AMIT-re/html-css-js-react-project.git",
      demo: "#"
    },
    {
      title: "DextroToolX",
      description: "A Python-based hotkey launcher that activates various cheat codes for in-game effects using shift keycombinations",
      image: "https://wallpapers.com/images/featured/gta-5-pictures-a13v9zf0xizyife4.jpg",
      tags: ["Python", "pynput", "pyinstaller", "Windows API"],
      github: "https://github.com/AMIT-re/DextroToolX.git",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and approaches 
            to solving real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:scale-105 transition-all duration-300 animate-slide-up">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      if (project.github && project.github !== "#") {
                        window.open(project.github, "_blank");
                      }
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};