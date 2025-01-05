import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Your Partner in Digital Success</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, we've been at the forefront of digital marketing innovation. Our passion for helping businesses grow in the digital space has driven us to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-600">
              We believe in combining creativity with data-driven strategies to create marketing solutions that not only look good but deliver measurable results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To empower businesses with innovative digital marketing solutions that drive growth and create lasting impact in the digital landscape.
            </p>
            <p className="text-gray-600">
              We're committed to staying ahead of digital trends and delivering exceptional value to our clients through strategic thinking and creative execution.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const values = [
  {
    title: "Innovation",
    description: "We stay ahead of digital trends to provide cutting-edge solutions.",
    icon: "💡"
  },
  {
    title: "Integrity",
    description: "We believe in transparent communication and honest relationships.",
    icon: "🤝"
  },
  {
    title: "Impact",
    description: "We focus on delivering measurable results that matter.",
    icon: "🎯"
  }
];

export default About;