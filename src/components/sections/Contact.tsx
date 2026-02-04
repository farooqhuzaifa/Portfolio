import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";

const Contact: React.FC = () => {
  const contacts = [
    {
      name: "Email",
      value: "huzaifabegawn@gmail.com",
      href: "mailto:huzaifabegawn@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/huzaifa-farooq",
      href: "https://www.linkedin.com/in/huzaifa-farooq-59a964230",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      value: "github.com/farooqhuzaifa",
      href: "https://github.com/farooqhuzaifa",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "Phone",
      value: "+91 8090494252",
      href: "tel:+918090494252",
      icon: <Phone className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Let’s Build Something <span className="text-green-400">Scalable</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Full-stack developer focused on{" "}
            <span className="text-white">Server • Web • Mobile</span>.  
            Let’s talk about your project.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contacts.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              target={item.name === "Email" || item.name === "Phone" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <GlassCard className="h-full p-6 flex flex-col justify-between transition-all duration-300 group-hover:border-green-500/40">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 text-green-400">
                    {item.icon}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm break-words">
                    {item.value}
                  </p>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <a
            href="https://wa.me/918090494252"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_25px_rgba(34,197,94,0.35)]"
          >
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          <p className="text-gray-600 text-xs tracking-widest uppercase">
            Scalable Systems • Clean Code • Reliable Apps
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
