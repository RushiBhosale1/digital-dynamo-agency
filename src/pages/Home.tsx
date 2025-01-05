import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_70%,rgba(255,91,121,0.1))]" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-lg md:text-xl text-secondary/80 mb-8">
              We craft digital experiences that drive growth, engage audiences, and deliver measurable results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Services
            </h2>
            <p className="text-secondary/80 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Search Engine Optimization",
    description: "Boost your visibility and rank higher in search results with our data-driven SEO strategies.",
    icon: "🔍",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness across all major social platforms.",
    icon: "📱",
  },
  {
    title: "Content Marketing",
    description: "Create compelling content that resonates with your audience and drives conversions.",
    icon: "✍️",
  },
  {
    title: "Website Design & Development",
    description: "Custom websites that combine stunning design with powerful functionality.",
    icon: "💻",
  },
  {
    title: "Facebook Advertising",
    description: "Targeted campaigns that reach your ideal customers and drive measurable results.",
    icon: "📢",
  },
  {
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your marketing strategy and ROI.",
    icon: "📊",
  },
];

export default Home;