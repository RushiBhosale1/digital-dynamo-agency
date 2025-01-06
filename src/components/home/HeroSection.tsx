import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_70%,rgba(255,91,121,0.1))]" />
      
      {/* 3D Model Background - Now visible on mobile */}
      <div className="absolute inset-0 w-full h-full opacity-20 lg:opacity-100 lg:relative lg:w-[600px] lg:h-[600px] pointer-events-none">
        <Spline 
          scene="https://prod.spline.design/5AcQQet4ePZMr7dd/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 text-left">
            Transform Your Digital Presence
          </h1>
          <p className="text-lg md:text-xl text-secondary/80 mb-8 text-left">
            We craft digital experiences that drive growth, engage audiences, and deliver measurable results for your business.
          </p>
          <div className="text-left">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};