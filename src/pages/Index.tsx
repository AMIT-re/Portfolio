import { InteractiveDots } from "@/components/InteractiveDots";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Interactive dot background */}
      <InteractiveDots />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 px-6 border-t glass-morphism">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground">
              © 2025 Amit Kumar Singh
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
