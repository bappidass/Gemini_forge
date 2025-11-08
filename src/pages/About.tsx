import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Building2,
  Target,
  Eye,
  Sparkles,
  Users,
  ShieldCheck,
  Heart,
  Box,
  Phone,
} from "lucide-react";

const ValueCard = ({ value }) => {
  const Icon = value.icon;
  return (
    <div className="bg-card border border-border rounded-xl p-8 text-center h-full">
      <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
      <p className="text-muted-foreground">{value.description}</p>
    </div>
  );
};

const About = () => {
  const coreValues = [
    {
      icon: Sparkles,
      title: "Innovation with Purpose ",
      description:
        "We constantly explore new technologies and creative approaches to deliver future-proof solutions.",
    },
    {
      icon: Users,
      title: "Partnership Mindset ",
      description:
        "We believe in true partnership, working closely with our clients and our team to achieve shared goals.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Trust ",
      description:
        "We build reliable, secure products and conduct our business with transparency and honesty.",
    },
    {
      icon: Heart,
      title: "Agility & Adaptability ",
      description:
        "Your success is our success. We are passionate about understanding your needs and exceeding your expectations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">About GeminiForge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We Are Your Digital Innovation Partner
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GeminiForge is a forward-thinking software development company
              focused on delivering intelligent, secure, and scalable enterprise
              solutions. We empower organizations to embrace digital
              transformation, optimize operations, and unlock new growth
              opportunities through AI-driven technologies, automation, and
              modern software architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Our Mission Card */}
            <div className="group bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To design and deliver enterprise-grade software solutions that
                drive efficiency, accelerate transformation, and enable
                businesses to compete in the digital era.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="group bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-all">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the trusted innovation partner empowering enterprises with
                intelligent, secure, and scalable digital solutions for the
                future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our values are the foundation of our culture and guide every
              decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Re-used for consistency) */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Box className="w-10 h-10 text-background" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Let's discuss your project and create a digital solution that
              drives real results. Our team is ready to bring your vision to
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/916026072045?text=Hi!%20I%27m%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-background hover:bg-accent/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Sparkles className="w-5 h-5" />
                Start Your Project
              </a>
              <div className="flex gap-3">
                <a
                  href="tel:+916026072045"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 6026072045
                </a>
                <span className="text-muted-foreground">or</span>
                <a
                  href="tel:+919957703382"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 9957703382
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
