import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-16" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">EMK</span>
              <span className="text-cyan-400">Tech</span>
            </div>
            <p className="text-slate-400 mb-6">
              Nearshore consulting in AI, automation, and digital transformation. Delivering world-class solutions at competitive rates.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:sales@emktech.com" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">RPA Development</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">AI Solutions</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Process Automation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Digital Transformation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Finance</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Healthcare</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Retail</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Logistics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Case Studies</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Blog</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            &copy; 2023 EMK Tech. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
