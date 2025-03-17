import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "./craft";
import Logo from "../../public/logo.png";
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="not-prose relative border-t border-gray-300 dark:border-gray-700 py-16 px-6 bg-gray-900 text-white">      
      <Section className="relative">
        <div>
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand Column */}
            <div className="md:col-span-2 space-y-8">
              <Link href="/" className="block">
                <h3 className="sr-only">NavAI</h3>
                <Image
                  src={Logo}
                  alt="NavAI"
                  width={160}
                  height={40}
                  className="transition-all hover:opacity-80 dark:invert"
                />
              </Link>
              <p className="text-gray-300 max-w-md">
                <Balancer>
                  NavAI is revolutionizing accessibility by providing innovative AI-powered tools that help visually impaired individuals navigate their surroundings with ease. Our mission is to create a more inclusive world where technology empowers everyone.
                </Balancer>
              </p>
              <div className="flex gap-6">
                {[ 
                  { icon: <Github className="h-6 w-6" />, href: "#" },
                  { icon: <Linkedin className="h-6 w-6" />, href: "#" },
                  { icon: <Twitter className="h-6 w-6" />, href: "#" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="p-3 rounded-full bg-gray-700 dark:bg-gray-800 text-gray-300 dark:text-gray-400 
                             hover:bg-green-600 dark:hover:bg-green-700 hover:text-white dark:hover:text-white 
                             transition-all duration-300"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-gray-200 dark:text-gray-100">Explore</h4>
              <ul className="space-y-4">
                {['About Us', 'Technology', 'Support', 'Careers'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-gray-200 dark:text-gray-100">Get in Touch</h4>
              <ul className="space-y-4">
                {[ 
                  { icon: <Mail className="h-5 w-5" />, text: "support@NavAI.com" },
                  { icon: <Phone className="h-5 w-5" />, text: "+1 (800) 234-5678" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex flex-wrap gap-8 text-sm text-gray-400 dark:text-gray-500">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                © {new Date().getFullYear()}{" "}
                <a 
                  className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  NavAI
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
