export default function SlideDetail({ slide, memberColor, language }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300">
      {/* Slide Header */}
      <div className={`bg-gradient-to-r ${memberColor} rounded-xl p-4 mb-4`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{slide.emoji}</span>
            <div>
              <div className="text-white/80 text-sm font-semibold">
                {language === 'en' ? 'SLIDE' : 'SLAYT'} {slide.slideNumber}
              </div>
              <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
            </div>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 mt-2">
          <span className="text-white/90 text-sm">
            <strong>{language === 'en' ? 'Layout:' : 'Düzen:'}</strong> {slide.layout}
          </span>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4 mb-4">
        {slide.sections.map((section, idx) => (
          <div key={idx} className="bg-white/5 rounded-xl p-4">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-yellow-400">▸</span>
              {section.heading}
            </h4>
            <ul className="space-y-2 ml-4">
              {section.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx} className="text-white/90 text-sm flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Table (for competitor analysis) */}
      {slide.table && (
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-4 mb-4 border border-orange-300/30">
          <h4 className="text-lg font-bold text-white mb-3">
            📋 {language === 'en' ? 'Comparison Table' : 'Karşılaştırma Tablosu'}
          </h4>
          <div className="space-y-2">
            {slide.table.universities.map((uni, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                <span>{uni.name}</span>
                {uni.badge && (
                  <span className="bg-yellow-500 text-yellow-900 px-2 py-0.5 rounded-full text-xs font-bold">
                    {uni.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-white/80 text-sm mt-3 italic">💡 {slide.table.comparison}</p>
        </div>
      )}

      {/* Visuals */}
      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 mb-4 border border-blue-300/30">
        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <span>🖼️</span>
          <span>{language === 'en' ? 'Visuals to Include' : 'Eklenecek Görseller'}</span>
        </h4>
        <ul className="space-y-2">
          {slide.visuals.map((visual, idx) => (
            <li key={idx} className="text-white/90 text-sm flex items-start gap-2">
              <span className="text-cyan-400">▸</span>
              <span>{visual}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-yellow-300/30">
        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>{language === 'en' ? 'Design Tips' : 'Tasarım İpuçları'}</span>
        </h4>
        <ul className="space-y-2">
          {slide.tips.map((tip, idx) => (
            <li key={idx} className="text-white/90 text-sm flex items-start gap-2">
              <span className="text-yellow-400">★</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

