'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Send,
  User,
  Mail,
  Phone,
  Calendar,
  Euro,
  MapPin,
  MessageSquare,
  Upload,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.string().min(1, 'Veuillez sélectionner un service'),
  eventDate: z.string().optional(),
  budget: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange'
  });

  // const selectedServiceType = watch('serviceType');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form Data:', data);
      console.log('Files:', selectedFiles);

      setSubmitStatus('success');
      reset();
      setSelectedFiles(null);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
              Demandez votre <span className="text-gradient">devis gratuit</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Partagez-nous votre projet et recevez une proposition personnalisée sous 24h
            </p>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white font-medium">
                    Prénom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('firstName')}
                      type="text"
                      className={cn(
                        "w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all",
                        errors.firstName ? "border-red-500" : "border-gray-600"
                      )}
                      placeholder="Votre prénom"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-400 text-sm">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-white font-medium">
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('lastName')}
                      type="text"
                      className={cn(
                        "w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all",
                        errors.lastName ? "border-red-500" : "border-gray-600"
                      )}
                      placeholder="Votre nom"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-400 text-sm">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white font-medium">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('email')}
                      type="email"
                      className={cn(
                        "w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all",
                        errors.email ? "border-red-500" : "border-gray-600"
                      )}
                      placeholder="votre@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-white font-medium">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                </div>
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Type de prestation *
                </label>
                <select
                  {...register('serviceType')}
                  className={cn(
                    "w-full p-3 bg-gray-900/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all",
                    errors.serviceType ? "border-red-500" : "border-gray-600"
                  )}
                >
                  <option value="">Sélectionnez une prestation</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="text-red-400 text-sm">{errors.serviceType.message}</p>
                )}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-white font-medium">
                    Date d&apos;événement
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('eventDate')}
                      type="date"
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-white font-medium">
                    Budget estimé
                  </label>
                  <div className="relative">
                    <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      {...register('budget')}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="500-1000">500€ - 1000€</option>
                      <option value="1000-2500">1000€ - 2500€</option>
                      <option value="2500-5000">2500€ - 5000€</option>
                      <option value="5000+">5000€+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-white font-medium">
                    Lieu
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('location')}
                      type="text"
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                      placeholder="Ville, région"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Décrivez votre projet *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                  <textarea
                    {...register('message')}
                    rows={5}
                    className={cn(
                      "w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none",
                      errors.message ? "border-red-500" : "border-gray-600"
                    )}
                    placeholder="Parlez-nous de votre événement, vos attentes, vos besoins spécifiques..."
                  />
                </div>
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message.message}</p>
                )}
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Documents annexes (optionnel)
                </label>
                <div className="relative">
                  <Upload className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  />
                </div>
                <p className="text-gray-400 text-sm">
                  Formats acceptés : PDF, Word, Images (max 10Mo par fichier)
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isValid || isSubmitting}
                whileHover={{ scale: isValid && !isSubmitting ? 1.02 : 1 }}
                whileTap={{ scale: isValid && !isSubmitting ? 0.98 : 1 }}
                className={cn(
                  "w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2",
                  isValid && !isSubmitting
                    ? "bg-yellow-400 text-black hover:bg-yellow-300 cursor-pointer"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Envoyer ma demande</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Votre demande a été envoyée avec succès ! Nous vous recontacterons sous 24h.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Une erreur est survenue. Veuillez réessayer ou nous contacter directement.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-4">
              Ou contactez-nous directement :
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <a
                href="tel:+33123456789"
                className="flex items-center space-x-2 hover:text-yellow-400 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+33 1 23 45 67 89</span>
              </a>
              <a
                href="mailto:contact@mis-production.fr"
                className="flex items-center space-x-2 hover:text-yellow-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contact@mis-production.fr</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}