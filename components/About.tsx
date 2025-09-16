'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Camera, Heart, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: Camera,
      title: "Expertise Technique",
      description: "Équipement professionnel dernière génération et maîtrise des techniques les plus avancées"
    },
    {
      icon: Heart,
      title: "Approche Humaine",
      description: "Chaque projet est unique, nous prenons le temps de comprendre vos besoins et émotions"
    },
    {
      icon: Award,
      title: "Qualité Premium",
      description: "Livraison de contenus haute définition avec post-production soignée et créative"
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Suivi personnalisé de A à Z, conseils et direction artistique professionnelle"
    }
  ];

  return (
    <section id="apropos" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              L'art de <span className="text-[#C9A66B] italic">capturer</span>
              <br />l'émotion
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-display font-semibold text-[#C9A66B] mb-4">
                Madani Marzuk
              </h3>
              <p className="text-lg text-[#666] leading-relaxed mb-6">
                Fondateur de MIS – Mémoire Image & Sons, je suis passionné par l'art de raconter des histoires 
                à travers l'image et le son. Avec plus de 8 années d'expérience dans la photographie et 
                l'audiovisuel, j'ai développé une approche unique qui mêle technique professionnelle et 
                sensibilité artistique.
              </p>
              <p className="text-lg text-[#666] leading-relaxed">
                Mon objectif ? Transformer chaque moment en souvenir éternel, chaque émotion en œuvre d'art. 
                Que ce soit pour immortaliser votre mariage, valoriser votre entreprise ou créer du contenu 
                audiovisuel percutant, je m'engage à livrer un travail d'exception qui dépasse vos attentes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {['Photographie', 'Vidéographie', 'Post-production', 'Direction artistique'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full text-[#C9A66B] font-medium text-sm border border-[#E5E5E5]"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Madani Marzuk - Photographe"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C9A66B]/20 to-transparent" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A66B] rounded-full flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl">500+</h4>
                  <p className="text-[#666] text-sm">Projets réalisés</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A66B] rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl">100%</h4>
                  <p className="text-[#666] text-sm">Satisfaction client</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover-glow"
              >
                <div className="w-16 h-16 bg-[#C9A66B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-display font-bold text-lg mb-3">
                  {achievement.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;