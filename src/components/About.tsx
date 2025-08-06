import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Terminal, Database, Globe, Smartphone, Coffee, Github, Figma, Settings } from "lucide-react";
import { useState } from "react";

export const About = () => {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "Tailwind CSS", "Figma", "AWS", "Docker", "GraphQL", "MongoDB","HTML", "CSS", "JavaScript", "Git", "REST APIs", "UI/UX Design", "Agile Methodologies  "
  ];

  const desktopApps = [
    { id: "code", name: "VS Code", icon: Code, color: "#007ACC", description: "Frontend Development\nBuilding modern web applications with React, Next.js, and TypeScript." },
    { id: "terminal", name: "Terminal", icon: Terminal, color: "#000000", description: "Backend Development\nServer-side solutions with Node.js, Python, and database management." },
    { id: "figma", name: "Figma", icon: Figma, color: "#F24E1E", description: "UI/UX Design\nCreating beautiful and intuitive user interfaces and experiences." },
    { id: "database", name: "Database", icon: Database, color: "#336791", description: "Data Management\nDesigning and optimizing database structures and queries." },
    { id: "globe", name: "Safari", icon: Globe, color: "#1B82F7", description: "Web Technologies\nStaying updated with latest web standards and frameworks." },
    { id: "mobile", name: "Simulator", icon: Smartphone, color: "#FF3B30", description: "Mobile Development\nResponsive design and mobile-first approaches." },
    { id: "github", name: "GitHub", icon: Github, color: "#181717", description: "Version Control\nCollaborative development and open source contributions." },
    { id: "coffee", name: "Coffee", icon: Coffee, color: "#8B4513", description: "Fuel\nThe essential ingredient for late-night coding sessions." },
    { id: "settings", name: "System Preferences", icon: Settings, color: "#8E8E93", description: "Optimization\nFine-tuning performance and development workflows." }
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Modern, responsive web applications using the latest technologies and best practices."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Backend Development",
      description: "Scalable server-side solutions with robust APIs and database design."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive and beautiful interfaces."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer creating digital solutions 
            that blend creativity with functionality. I love turning ideas into reality through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-slide-up">
            <div className="imac-container">
              <div className="imac-screen">
                <div className="imac-bezel">
                  <div className="imac-desktop">
                    {/* Desktop wallpaper */}
                    <div className="desktop-wallpaper"></div>
                    
                    {/* Menu bar */}
                    <div className="menu-bar">
                      <div className="menu-left">
                        <span className="apple-logo">🍎</span>
                        <span className="menu-item">Developer</span>
                      </div>
                      <div className="menu-right">
                        <span className="time">10:10 PM</span>
                      </div>
                    </div>

                    {/* Desktop icons */}
                    <div className="desktop-icons">
                      {desktopApps.map((app) => {
                        const IconComponent = app.icon;
                        return (
                          <div 
                            key={app.id}
                            className={`desktop-app ${selectedApp === app.id ? 'selected' : ''}`}
                            onClick={() => setSelectedApp(selectedApp === app.id ? null : app.id)}
                          >
                            <div 
                              className="app-icon"
                              style={{ backgroundColor: app.color }}
                            >
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <span className="app-name">{app.name}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Dock */}
                    <div className="dock">
                      {desktopApps.slice(0, 6).map((app) => {
                        const IconComponent = app.icon;
                        return (
                          <div 
                            key={`dock-${app.id}`}
                            className="dock-app"
                            onClick={() => setSelectedApp(selectedApp === app.id ? null : app.id)}
                          >
                            <div 
                              className="dock-icon"
                              style={{ backgroundColor: app.color }}
                            >
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="imac-stand"></div>
              <div className="imac-base"></div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-1">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* App details */}
            {selectedApp && (
              <div className="app-details">
                <div className="app-window">
                  <div className="window-header">
                    <div className="window-controls">
                      <span className="control close" onClick={() => setSelectedApp(null)}></span>
                      <span className="control minimize"></span>
                      <span className="control maximize"></span>
                    </div>
                    <span className="window-title">
                      {desktopApps.find(app => app.id === selectedApp)?.name}
                    </span>
                  </div>
                  <div className="window-content">
                    <pre className="app-description">
                      {desktopApps.find(app => app.id === selectedApp)?.description}
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-morphism border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-primary mx-auto w-fit">{service.icon}</div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};