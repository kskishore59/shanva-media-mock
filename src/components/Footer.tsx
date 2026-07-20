import { Phone, Mail, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Shanva', href: '#why-shanva' },
    { name: 'Process', href: '#process' },
    { name: 'Dashboard', href: '#dashboard' },
  ];

  const resources = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Strategy Call', href: '#cta' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200/80 pt-20 pb-10 relative overflow-hidden bg-mesh-footer bg-noise">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-14">
        {/* Brand Col */}
        <div className="space-y-5">
          <a href="#" className="flex items-center gap-2.5 group">
            <BrandLogo className="w-10 h-10 hover:scale-105 transition-transform duration-300" />
            <span className="font-heading font-extrabold text-lg text-text">
              SHANVA<span className="text-primary">MEDIA</span>
            </span>
          </a>
          <p className="text-xs text-muted font-light leading-[1.7] max-w-xs">
            A creator-led content growth and social media studio designed to build brands people can't stop watching.
          </p>
          <div className="flex gap-2.5">
            {[
              { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, href: "https://instagram.com" },
              { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, href: "https://youtube.com" },
              { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: "https://linkedin.com" },
              { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, href: "https://facebook.com" },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200/80 flex items-center justify-center text-muted hover:text-primary hover:border-primary/20 hover:shadow-glow-sm transition-all duration-300"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text font-heading">
            Studio Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs text-muted hover:text-text transition-colors duration-300 glow-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text font-heading">
            Case Studies
          </h4>
          <ul className="space-y-2.5">
            {resources.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs text-muted hover:text-text transition-colors duration-300 glow-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text font-heading">
            Contact Us
          </h4>
          <ul className="space-y-2.5 text-xs text-muted font-light">
            <li className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              <a href="tel:+918977687916" className="hover:text-text transition-colors duration-300">
                +91 8977687916
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
              <a href="tel:+917416007557" className="hover:text-text transition-colors duration-300">
                +91 7416007557
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
              <a href="mailto:shanvamedia@gmail.com" className="hover:text-text transition-colors duration-300">
                shanvamedia@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>Hyderabad, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-200/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[10px] text-zinc-500">
          &copy; {currentYear} Shanva Media. All rights reserved. Prepared by Shanva Media Team.
        </span>
        <div className="flex gap-5 text-[10px] text-zinc-500">
          <a href="#" className="hover:text-text transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-text transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
