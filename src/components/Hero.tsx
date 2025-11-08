import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight, Code2, Smartphone, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
    
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-5xl mx-auto text-center space-y-8">
   

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
            <span className="block ">We Build Scalable</span>
            <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-300% animate-gradient pb-3">
             Secure software solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           GeminiForge craft stunning <span className="text-foreground font-semibold">websites</span> and powerful <span className="text-foreground font-semibold">mobile apps</span> for businesses across{" "}
            <span className="text-accent font-semibold">Financial Services</span>,{" "}
            <span className="text-accent font-semibold">Retail</span>,{" "}
                <span className="text-accent font-semibold">Energy, and Real Estate.</span>,{" "}
            <span className="text-accent font-semibold">Healthcare</span> & more
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="outline" 
              onClick={()=>navigate('/services')}
              className="text-lg px-8 py-6 border-2 border-foreground/20 transition-all group"
            >
              View Our Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a 
              href="https://wa.me/916026072045?text=Hi!%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-accent text-background hover:bg-accent/90 shadow-lg hover:shadow-accent/50 transition-all group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact Us on WhatsApp
              </Button>
            </a>
          </div>

          {/* Stats or Features */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-1">100+</h3>
              <p className="text-sm text-muted-foreground">Websites Delivered</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-1">50+</h3>
              <p className="text-sm text-muted-foreground">Mobile Apps Built</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-1">98%</h3>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 2s;
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
        
        .delay-1000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;