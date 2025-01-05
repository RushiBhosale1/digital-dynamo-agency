import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, BarChart2, Award } from 'lucide-react';
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We deliver exceptional results through our expertise, dedication, and innovative approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how our digital marketing expertise can help achieve your goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Expert Team",
    description: "Our team of digital marketing experts brings years of experience and proven success.",
    icon: Users
  },
  {
    title: "Data-Driven Approach",
    description: "We make decisions based on real data and analytics to ensure optimal results.",
    icon: BarChart2
  },
  {
    title: "Proven Results",
    description: "Our track record speaks for itself with numerous successful campaigns.",
    icon: Award
  }
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "95%", label: "Client Retention" },
  { value: "150M+", label: "Ad Impressions" },
  { value: "200%", label: "Average ROI" }
];

const testimonials = [
  {
    content: "Working with this team has transformed our online presence. Our sales have increased by 200% since implementing their strategies.",
    name: "Sarah Johnson",
    position: "CEO, TechStart"
  },
  {
    content: "The level of expertise and dedication they bring to the table is unmatched. They truly care about our success.",
    name: "Michael Chen",
    position: "Marketing Director, GrowthCo"
  },
  {
    content: "Their data-driven approach and transparent communication make them the perfect partner for our business.",
    name: "Emily Rodriguez",
    position: "Founder, EcoStyle"
  }
];

export default Home;
