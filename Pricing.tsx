import { motion } from "motion/react";
import { Plane } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/40 via-[#0a0e1a]/70 to-[#0a0e1a] z-10" />
        <img
          src="https://images.unsplash.com/photo-1627670276798-0c4751b1beac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMHN1bnNldHxlbnwxfHx8fDE3NzQxODQyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Декоративные элементы */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#14b8a6]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f59e0b]/20 rounded-full blur-3xl" />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/30 mb-6"
          >
            <Plane className="w-5 h-5 text-[#14b8a6]" />
            <span className="text-sm text-[#14b8a6]">Новый курс для детей</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#14b8a6] to-[#f59e0b] bg-clip-text text-transparent">
            Английский для путешествий
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? Этот курс научит вашего ребёнка <span className="text-[#14b8a6]">реальному разговорному английскому</span>, который пригодится в отпуске, поездках и будущих путешествиях!
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-[#0a0e1a] rounded-xl hover:shadow-lg hover:shadow-[#14b8a6]/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Записаться на курс</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="#program"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <span>Узнать подробнее</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-[#14b8a6]/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-[#14b8a6] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
