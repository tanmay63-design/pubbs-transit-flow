import { MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in touch with us</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-background/80 text-sm leading-relaxed">
                    Department of Architecture and Regional Planning,
                    <br />
                    Indian Institute of Technology, Kharagpur,
                    <br />
                    West Bengal, India - 721302
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Phone Number</h3>
                  <p className="text-background/80 text-sm">+91-3222283202</p>
                  <p className="text-background/80 text-sm">+91-9433944708</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email ID</h3>
                  <a
                    href="mailto:debapratim.pandit@gmail.com"
                    className="text-background/80 text-sm hover:text-primary transition-colors"
                  >
                    debapratim.pandit@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-background/60 text-sm">
                © 2024 PUBBS Transit. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
