import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Our Digital Marketing Services</h1>
        <p className="text-xl text-gray-600">Elevate your online presence with our comprehensive solutions</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost your website's visibility and rank higher in search results with our data-driven SEO strategies.",
    icon: "🔍"
  },
  {
    title: "Social Media Marketing",
    description: "Build a strong social media presence and engage with your audience across multiple platforms.",
    icon: "📱"
  },
  {
    title: "Content Marketing",
    description: "Create compelling content that resonates with your target audience and drives conversions.",
    icon: "✍️"
  },
  {
    title: "Website Design & Development",
    description: "Get a stunning, responsive website that delivers an exceptional user experience.",
    icon: "💻"
  },
  {
    title: "Facebook Advertising",
    description: "Reach your ideal customers with targeted Facebook ad campaigns that deliver results.",
    icon: "📢"
  },
  {
    title: "Analytics & Reporting",
    description: "Track your success with detailed analytics and actionable insights.",
    icon: "📊"
  }
];

export default Services;