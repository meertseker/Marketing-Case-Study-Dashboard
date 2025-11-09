export default function TeamCard({ member, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 h-full">
        {/* Header */}
        <div className={`bg-gradient-to-r ${member.color} rounded-xl p-4 mb-4 transform group-hover:scale-105 transition-transform duration-300`}>
          <div className="flex items-center justify-between">
            <div className="text-4xl">{member.icon}</div>
            <div className={`text-xs px-3 py-1 rounded-full ${member.language === 'en' ? 'bg-blue-500' : 'bg-purple-500'} text-white font-semibold`}>
              {member.language === 'en' ? '🇬🇧 English' : '🇹🇷 Türkçe'}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mt-3">{member.name}</h3>
        </div>

        {/* Slide Numbers */}
        <div className="bg-white/10 rounded-lg p-3 mb-4">
          <div className="text-white/70 text-xs mb-1 font-semibold">
            {member.language === 'en' ? 'YOUR SLIDES' : 'SLAYTLARIN'}
          </div>
          <div className="flex flex-wrap gap-2">
            {member.slides.map((slide, idx) => (
              <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-1">
                <span className="text-white font-bold text-sm">#{slide.slideNumber}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/20">
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-xl">📊</span>
            <span className="text-sm font-medium">{member.totalSlides} {member.language === 'en' ? 'slides' : 'slayt'}</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-xl">⏰</span>
            <span className="text-sm font-medium">{member.deadline}</span>
          </div>
        </div>

        {/* Click Indicator */}
        <div className="mt-4 text-center">
          <span className="text-white/60 text-sm group-hover:text-white transition-colors duration-300">
            Click to view details →
          </span>
        </div>
      </div>
    </div>
  )
}

