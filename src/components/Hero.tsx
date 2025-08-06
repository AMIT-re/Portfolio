import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Amit Kumar Singh
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            Front End Developer & UI Designer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with modern technologies. 
            Passionate about creating innovative solutions that make a difference.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-8">
          <Button 
            size="lg" 
            className="group"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/cv.pdf';
              link.download = 'CV.pdf';
              link.click();
            }}
          >
            Download CV
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a href="https://github.com/AMIT-re" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Github className="h-5 w-5" />
          </Button></a>
          <a href="https://www.linkedin.com/in/amit-kumar-singh-5094712a4/" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Linkedin className="h-5 w-5" />
          </Button>
          </a>
          <a href="mailto:amitkumarsingh21feb2005@gmail.com" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Mail className="h-5 w-5" />
          </Button>
          </a>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </button>
    </section>
  );
};