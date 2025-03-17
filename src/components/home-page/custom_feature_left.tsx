import React from 'react';
import Image from "next/image";
import Link from "next/link";
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Eye, Compass, ArrowRight } from "lucide-react";  // Updated icons for navigation and AI
import farmerImage2 from "../../../public/farmer2.jpg"; 

const ModernFeatureLeft = () => {
  return (
      <div className="relative grid items-center md:grid-cols-2 md:gap-12 px-8 md:px-16">
        {/* Image container with modern styling */}
        <div className="relative h-[300px] md:h-[400px] mb-6 md:mb-0">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl z-10" />
          <div className="relative h-full overflow-hidden rounded-xl border border-white/10 shadow-xl transform md:hover:scale-[1.02] transition-all duration-700">
            <Image
              src={farmerImage2}
              alt="AI-Assisted Navigation for Visually Impaired"
              className="object-cover object-center rounded-xl"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Floating status card */}
          <div className="absolute bottom-4 left-4 z-20 bg-white/90 dark:bg-black/90 backdrop-blur-lg rounded-lg p-3 shadow-lg border border-white/20 transform hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                <Compass className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-300">Navigation Active</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-4">
          {/* Badge */}
          <div className="inline-flex items-center w-fit px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-500 text-white border border-blue-500">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse" />
            Assistance en Temps Réel
          </div>

          {/* Heading with gradient */}
          <h3 className="!my-0 text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            Navigation Assistée et Recommandations Personnalisées
          </h3>

          {/* Description with better typography */}
          <p className="text-base leading-relaxed text-white">
            NavAI utilise des lunettes intelligentes pour fournir des recommandations personnalisées et une assistance en temps réel. 
            Grâce à l'intelligence artificielle, nous permettons aux personnes malvoyantes de se déplacer de manière autonome et sécurisée.
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-2 gap-4 mt-3">
            {[ 
              'Navigation en Temps Réel',
              'Reconnaissance d\'Objets',
              'Assistance Vocale 24/7',
              'Précision Optimisée'
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-1.5 text-sm text-white">
                <ArrowRight className="h-4 w-4 text-blue-200" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ModernFeatureLeft;
