import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

const Contact = () => {
  const [budget, setBudget] = useState([12000]);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const reasons = ["Web Design", "Mobile App Design", "Coustome software", "Others"];

  const handleReasonToggle = (reason: string) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
            <p className="text-muted-foreground">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8 bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Full Name</label>
                <Input
                  placeholder="John Doe"
                  required
                  className="bg-background border-border focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-background border-border focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4">Why are you contacting us?</label>
              <div className="grid grid-cols-2 gap-3">
                {reasons.map((reason) => (
                  <div 
                    key={reason} 
                    className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-accent/50 transition-colors"
                  >
                    <Checkbox
                      id={reason}
                      checked={selectedReasons.includes(reason)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedReasons(prev => [...prev, reason]);
                        } else {
                          setSelectedReasons(prev => prev.filter(r => r !== reason));
                        }
                      }}
                      className="border-accent data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <label
                      htmlFor={reason}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                    >
                      {reason}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4">Your Budget</label>
              <p className="text-xs text-muted-foreground mb-4">
                Slide to indicate your budget range
              </p>
              <Slider
                value={budget}
                onValueChange={setBudget}
                min={12000}
                max={1000000}
                step={100}
                className="mb-4"
              />
              <div className="flex justify-between text-sm">
                <span className="text-accent font-bold">₹{budget[0]}</span>
                <span className="text-muted-foreground">₹1000000</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Your Message</label>
              <Textarea
                placeholder="Tell us about your project..."
                required
                className="bg-background border-border focus:border-accent transition-colors min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 shadow-md hover:shadow-lg transition-all"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;