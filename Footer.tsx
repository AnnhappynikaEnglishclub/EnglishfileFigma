import { motion } from "motion/react";
import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  MapPin, 
  AlertCircle, 
  Ticket,
  Users,
  Trophy
} from "lucide-react";

export function Program() {
  const modules = [
    {
      icon: Plane,
      number: "01",
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      result: "Уверенность уже в первые часы за границей.",
      color: "from-[#14b8a6] to-[#06b6d4]"
    },
    {
      icon: Hotel,
      number: "02",
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      result: "Практика вежливых фраз и повседневной лексики.",
      color: "from-[#f59e0b] to-[#f97316]"
    },
    {
      icon: UtensilsCrossed,
      number: "03",
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      result: "Развитие гастрономического словаря и уверенности в общении.",
      color: "from-[#8b5cf6] to-[#a855f7]"
    },
    {
      icon: MapPin,
      number: "04",
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      result: "Понимание устной речи и произношения в реальных ситуациях.",
      color: "from-[#ec4899] to-[#f472b6]"
    },
    {
      icon: AlertCircle,
      number: "05",
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      result: "Важные фразы, которые могут спасти отпуск.",
      color: "from-[#ef4444] to-[#f87171]"
    },
    {
      icon: Ticket,
      number: "06",
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      result: "Погружение в культурный контекст через язык.",
      color: "from-[#06b6d4] to-[#22d3ee]"
    },
    {
      icon: Users,
      number: "07",
      title: "Дружба в путешествиях",
      description: "Как познакомиться с другими детьми или подростками за границей.",
      result: "Игровая практика диалогов и неформального общения.",
      color: "from-[#10b981] to-[#34d399]"
    },
    {
      icon: Trophy,
      number: "08",
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      result: "Развитие связной речи и творческого самовыражения.",
      color: "from-[#f59e0b] to-[#fbbf24]"
    }
  ];

  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#f59e0b] bg-clip-text text-transparent">
              Программа курса
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            8 практических модулей для уверенного общения в любой ситуации
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`} />
              
              <div className="relative bg-[#12182b] border border-white/10 rounded-2xl p-6 hover:border-[#14b8a6]/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center`}>
                    <module.icon className="w-6 h-6 text-[#0a0e1a]" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-500">{module.number}</span>
                      <h3 className="text-xl font-bold">{module.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {module.description}
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-[#14b8a6] mt-1">👉</span>
                      <p className={`text-sm bg-gradient-to-r ${module.color} bg-clip-text text-transparent font-medium`}>
                        {module.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
