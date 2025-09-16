'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typePrestation: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          typePrestation: '',
          date: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "01 23 45 67 89",
      link: "tel:+33123456789"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@mis-photo.fr",
      link: "mailto:contact@mis-photo.fr"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Paris & Région Parisienne",
      link: null
    },
    {
      icon: Clock,
      title: "Disponibilité",
      value: "Lun - Sam : 9h - 19h",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Contactez<span className="text-[#C9A66B] italic">-nous</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed"
          >
            Prêt à donner vie à votre projet ? Contactez-nous pour un devis personnalisé 
            et découvrons ensemble comment immortaliser vos moments précieux.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-display font-bold mb-6">
              Demander un devis gratuit
            </h3>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6"
              >
                <p className="text-green-800 font-medium">
                  Merci ! Votre demande a été envoyée avec succès. Nous vous recontacterons dans les plus brefs délais.
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
              >
                <p className="text-red-800 font-medium">
                  Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-[#111] mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:border-[#C9A66B] focus:ring-2 focus:ring-[#C9A66B]/20 transition-all duration-300 outline-none"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#111] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:border-[#C9A66B] focus:ring-2 focus:ring-[#C9A66B]/20 transition-all duration-300 outline-none"
                    placeholder="votre@email.fr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-[#111] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:border-[#C9A66B] focus:ring-2 focus:ring-[#C9A66B]/20 transition-all duration-300 outline-none"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label htmlFor="typePrestation" className="block text-sm font-semibold text-[#111] mb-2">
                    Type de prestation *
                  </label>
                  <select
                    id="typePrestation"
                    required
                    value={formData.typePrestation}
                    onChange={(e) => setFormData({...formData, typePrestation: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:border-[#C9A66B] focus:ring-2 focus:ring-[#C9A66B]/20 transition-all duration-300 outline-none"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="mariage">Mariage</option>
                    <option value="corporate">Corporate</option>
                    <option value="evenement">Événement</option>
                    <option value="portrait">Portrait</option>
                    <option value="clip">Clip musical</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-[#111] mb-2">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:border-[#C9A66B] focus:ring-2 focus:ring-[#C9A66B]/20 transition-all duration-300 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#111] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] focus:border-[#C9A66B] focus:ring-2 focus:ring-[#C9A66B]/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Décrivez votre projet, vos attentes, le lieu, le nombre d'invités..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#C9A66B] text-white py-4 rounded-xl font-semibold hover:bg-[#B8956B] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 hover-glow"
                  >
                    <div className="w-12 h-12 bg-[#C9A66B] rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-white" size={20} />
                    </div>
                    <h4 className="font-display font-semibold mb-2">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-[#666] hover:text-[#C9A66B] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#666]">{info.value}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-2xl p-6 h-64 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin size={48} className="text-[#C9A66B] mx-auto mb-4" />
                <h4 className="font-display font-semibold mb-2">Nous intervenons</h4>
                <p className="text-[#666]">Paris & Région Parisienne</p>
                <p className="text-sm text-[#999] mt-2">Déplacements possibles en France</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl p-6"
            >
              <h4 className="font-display font-semibold mb-4">Suivez-nous</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-[#FAFAFA] rounded-full flex items-center justify-center hover:bg-[#C9A66B] hover:text-white transition-all duration-300"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;