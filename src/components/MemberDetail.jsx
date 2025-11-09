import SlideDetail from './SlideDetail'

export default function MemberDetail({ member, onBack }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200 bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20 hover:bg-white/20"
      >
        <span className="text-xl">←</span>
        <span className="font-semibold">Back to Team</span>
      </button>

      {/* Header */}
      <div className={`bg-gradient-to-r ${member.color} rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl`}>
        <div className="flex items-center gap-6">
          <div className="text-7xl">{member.icon}</div>
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">{member.name}</h1>
            <div className={`inline-block text-sm px-4 py-2 rounded-full ${member.language === 'en' ? 'bg-blue-600' : 'bg-purple-600'} text-white font-semibold`}>
              {member.language === 'en' ? '🇬🇧 English' : '🇹🇷 Türkçe'}
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
            <div className="text-white/80 text-sm">{member.language === 'en' ? 'Total Slides' : 'Toplam Slayt'}</div>
            <div className="text-white text-2xl font-bold">{member.totalSlides}</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
            <div className="text-white/80 text-sm">Deadline</div>
            <div className="text-white text-2xl font-bold">{member.deadline}</div>
          </div>
        </div>
      </div>

      {/* Slide by Slide Breakdown */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
          <span>📊</span>
          <span>{member.language === 'en' ? 'Slide-by-Slide Guide' : 'Slayt Slayt Rehber'}</span>
        </h2>
        <div className="space-y-6">
          {member.slides.map((slide, idx) => (
            <SlideDetail 
              key={idx} 
              slide={slide} 
              memberColor={member.color}
              language={member.language}
            />
          ))}
        </div>
      </div>


      {/* Competitors (if All Together) */}
      {member.competitors && (
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-8 border border-orange-300/30 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🏛️</span>
            <span>{member.language === 'en' ? 'Competitor Universities' : 'Rakip Üniversiteler'}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {member.competitors.map((comp, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{comp.name}</span>
                  {comp.badge && (
                    <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      {comp.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* General Tips */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-300/30">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-4xl">🎨</span>
          <span>{member.language === 'en' ? 'General Presentation Tips' : 'Genel Sunum İpuçları'}</span>
        </h2>
        <ul className="space-y-3">
          {member.language === 'en' ? (
            <>
              <TipItem text="Use consistent fonts and colors throughout all slides" />
              <TipItem text="Keep text minimal - max 6 bullet points per slide" />
              <TipItem text="Use high-quality images and graphics" />
              <TipItem text="Add slide numbers and your name at the bottom" />
              <TipItem text="Practice timing - aim for 2-3 minutes per slide" />
              <TipItem text="Prepare speaker notes for each slide" />
            </>
          ) : (
            <>
              <TipItem text="Tüm slaytlarda tutarlı font ve renkler kullan" />
              <TipItem text="Metni minimal tut - slayt başına max 6 madde" />
              <TipItem text="Yüksek kaliteli görsel ve grafikler kullan" />
              <TipItem text="Altta slayt numarası ve ismini ekle" />
              <TipItem text="Zamanlama pratiği yap - slayt başına 2-3 dakika" />
              <TipItem text="Her slayt için konuşma notları hazırla" />
            </>
          )}
        </ul>
      </div>

      {/* Checklist */}
      <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-4xl">✅</span>
          <span>{member.language === 'en' ? 'Completion Checklist' : 'Tamamlanma Kontrol Listesi'}</span>
        </h2>
        <div className="space-y-3">
          {member.language === 'en' ? (
            <>
              <ChecklistItem text="Research completed for opportunities" />
              <ChecklistItem text="Data and statistics collected" />
              <ChecklistItem text="Slides created with visuals" />
              <ChecklistItem text="Content reviewed and proofread" />
              <ChecklistItem text="Shared with team" />
            </>
          ) : (
            <>
              <ChecklistItem text="Fırsatlar için araştırma tamamlandı" />
              <ChecklistItem text="Veriler ve istatistikler toplandı" />
              <ChecklistItem text="Slaytlar görselli olarak hazırlandı" />
              <ChecklistItem text="İçerik gözden geçirildi" />
              <ChecklistItem text="Ekiple paylaşıldı" />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function ChecklistItem({ text }) {
  return (
    <div className="flex items-center gap-3 text-white/90 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200">
      <div className="w-6 h-6 border-2 border-white/40 rounded-md"></div>
      <span className="text-lg">{text}</span>
    </div>
  )
}

function TipItem({ text }) {
  return (
    <li className="flex items-start gap-3 text-white/90">
      <span className="text-yellow-400 text-xl mt-1">★</span>
      <span className="text-lg">{text}</span>
    </li>
  )
}

