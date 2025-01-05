import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl text-gray-600">Discover our successful digital marketing campaigns</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    title: "E-commerce Growth Campaign",
    description: "Increased online sales by 150% through targeted Facebook ads and SEO optimization.",
    image: "/placeholder.svg",
    tags: ["E-commerce", "Facebook Ads", "SEO"]
  },
  {
    title: "Brand Awareness Success",
    description: "Built a strong social media presence resulting in 200% follower growth.",
    image: "/placeholder.svg",
    tags: ["Social Media", "Content Marketing"]
  },
  {
    title: "Local Business Expansion",
    description: "Helped a local business expand their customer base through digital marketing.",
    image: "/placeholder.svg",
    tags: ["Local SEO", "Google Ads"]
  },
  {
    title: "Website Redesign Impact",
    description: "Redesigned website leading to 80% increase in conversion rate.",
    image: "/placeholder.svg",
    tags: ["Web Design", "UX/UI"]
  },
  {
    title: "Content Strategy Success",
    description: "Developed content strategy that doubled organic traffic.",
    image: "/placeholder.svg",
    tags: ["Content Marketing", "SEO"]
  },
  {
    title: "Social Media Campaign",
    description: "Viral social media campaign reaching over 1M impressions.",
    image: "/placeholder.svg",
    tags: ["Social Media", "Viral Marketing"]
  }
];

export default Portfolio;