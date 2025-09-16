'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const portfolioItems = [
    {
      id: 1,
      title: "Mariage Sarah & Thomas",
      category: "Mariage",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      size: "large", // col-span-8 row-span-2
      description: "Une célébration élégante au Château de Versailles"
    },
    {
      id: 2,
      title: "Portrait Corporate",
      category: "Corporate",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
      size: "medium", // col-span-4 row-span-1
      description: "Série de portraits pour entreprise technologique"
    },
    {
      id: 3,
      title: "Clip Musical",
      category: "Audiovisuel",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
      size: "medium", // col-span-4 row-span-1
      description: "Production complète pour artiste émergent",
      isVideo: true
    },
    {
      id: 4,
      title: "Événement d'Entreprise",
      category: "Événement",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      size: "small", // col-span-6 row-span-1
      description: "Couverture complète du lancement produit"
    },
    {
      id: 5,
      title: "Session Portrait Mode",
      category: "Portrait",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
      size: "small", // col-span-6 row-span-1
      description: "Shooting mode pour nouvelle collection"
    },
    {
      id: 6,
      title: "Mariage Intime",
      category: "Mariage",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600",
      size: "medium", // col-span-4 row-span-2
      description: "Cérémonie privée en bord de mer"
    }
  ];

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-8 md:row-span-2';
      case 'medium':
        return 'md:col-span-4 md:row-span-1';
      case 'small':
        return 'md:col-span-6 md:row-span-1';
      default:
        return 'md:col-span-4 md:row-span-1';
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
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
            Notre <span className="text-[#C9A66B] italic">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#666] max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez une sélection de nos réalisations les plus récentes. 
            Chaque projet raconte une histoire unique, capturée avec passion et expertise.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer hover-glow ${getGridClasses(item.size)}`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Video Play Button */}
              {item.isVideo && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </motion.div>
              )}

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <span className="inline-block px-3 py-1 bg-[#C9A66B] text-white text-sm font-medium rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#C9A66B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <ExternalLink size={20} className="text-[#C9A66B]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#C9A66B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#B8956B] transition-all duration-300 shadow-lg"
          >
            Voir tous nos projets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;