import { motion } from "motion/react";
import { Users, GraduationCap } from "lucide-react";

export function ForWhom() {
  const groups = [
    {
      icon: Users,
      title: "Первая группа",
      grade: "4–5 класс",
      description: "Основы английского для путешествий в игровом формате",
      color: "from-[#14b8a6] to-[#06b6d4]"
    },
    {
      icon: GraduationCap,
      title: "Вторая группа",
      grade: "6–8 класс",
      description: "Продвинутая практика и реальные сценарии общения",
      color: "from-[#f59e0b] to-[#f97316]"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#f59e0b] bg-clip-text text-transparent">
              Для кого курс
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Два уровня обучения для разных возрастных групп
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--${group.color}))`
                }}
              />
              
              <div className="bg-[#12182b] border border-white/10 rounded-2xl p-8 h-full hover:border-[#14b8a6]/50 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${group.color} mb-6`}>
                  <group.icon className="w-8 h-8 text-[#0a0e1a]" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{group.title}</h3>
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${group.color} text-[#0a0e1a] mb-4`}>
                  {group.grade}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {group.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
