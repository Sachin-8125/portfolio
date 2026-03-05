import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { useState } from 'react';

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-teal-400 to-green-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg">
              Have a project in mind? Let's work together!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm currently looking for new opportunities and exciting projects.
                  Whether you have a question, want to collaborate, or just want to say hi,
                  feel free to reach out !
                </p>
              </motion.div>

              <motion.div
                className="space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                <motion.div variants={cardVariants} className="flex items-center gap-4 p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg hover:bg-teal-900/30 transition-all duration-300">
                  <div className="p-3 bg-teal-600/20 rounded-lg">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">sachin2317080@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div variants={cardVariants} className="flex items-center gap-4 p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg hover:bg-teal-900/30 transition-all duration-300">
                  <div className="p-3 bg-teal-600/20 rounded-lg">
                    <Phone className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-medium">+91 6205459275</p>
                  </div>
                </motion.div>

                <motion.div variants={cardVariants} className="flex items-center gap-4 p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg hover:bg-teal-900/30 transition-all duration-300">
                  <div className="p-3 bg-green-600/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium">Agartala, India</p>
                  </div>
                </motion.div>
                </motion.div>
            </div>
            <motion.div
              className="bg-teal-900/20 backdrop-blur-sm border border-teal-500/30 rounded-xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  <motion.div variants={formVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Sachin Kumar"
                    />
                  </motion.div>

                  <motion.div variants={formVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="sachin2317080@gmail.com"
                    />
                  </motion.div>

                  <motion.div variants={formVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Hello Sachin, I have a project in mind..."
                    />
                  </motion.div>

                  <motion.button
                    variants={formVariants}
                    type="submit"
                    className="w-full px-6 py-3 bg-linear-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}