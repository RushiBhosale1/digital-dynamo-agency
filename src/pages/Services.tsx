import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Digital Marketing Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elevate your online presence with our comprehensive digital marketing solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-20 mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your digital marketing success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-secondary text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital marketing services can help you achieve your business goals
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors inline-flex items-center group">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost your website's visibility and rank higher in search results with our data-driven SEO strategies.",
    icon: "🔍",
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "Link Building Strategy"
    ]
  },
  {
    title: "Social Media Marketing",
    description: "Build a strong social media presence and engage with your audience across multiple platforms.",
    icon: "📱",
    features: [
      "Content Strategy & Planning",
      "Community Management",
      "Social Media Analytics",
      "Engagement Optimization"
    ]
  },
  {
    title: "Content Marketing",
    description: "Create compelling content that resonates with your target audience and drives conversions.",
    icon: "✍️",
    features: [
      "Content Strategy Development",
      "Blog Writing & Management",
      "Content Distribution",
      "Performance Tracking"
    ]
  },
  {
    title: "Website Design & Development",
    description: "Get a stunning, responsive website that delivers an exceptional user experience.",
    icon: "💻",
    features: [
      "Custom Website Design",
      "Mobile Optimization",
      "Speed Optimization",
      "SEO-Friendly Development"
    ]
  },
  {
    title: "Facebook Advertising",
    description: "Reach your ideal customers with targeted Facebook ad campaigns that deliver results.",
    icon: "📢",
    features: [
      "Campaign Strategy",
      "Audience Targeting",
      "Ad Creative Design",
      "Performance Optimization"
    ]
  },
  {
    title: "Analytics & Reporting",
    description: "Track your success with detailed analytics and actionable insights.",
    icon: "📊",
    features: [
      "Custom Dashboard Setup",
      "Monthly Performance Reports",
      "Data Analysis",
      "ROI Tracking"
    ]
  }
];

const process = [
  {
    title: "Discovery",
    description: "We analyze your business goals, target audience, and current digital presence"
  },
  {
    title: "Strategy",
    description: "Develop a customized digital marketing plan aligned with your objectives"
  },
  {
    title: "Implementation",
    description: "Execute the strategy with our expert team and proven methodologies"
  },
  {
    title: "Optimization",
    description: "Continuously monitor, analyze, and improve performance for better results"
  }
];

export default Services;