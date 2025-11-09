export default function CoordinationGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          🤝 Ekip Koordinasyon Rehberi
        </h1>
        <p className="text-2xl text-white/90">
          Kim Kimle Neden Çalışıyor?
        </p>
      </div>

      {/* Coordination Pairs */}
      <div className="space-y-6">
        {/* Ali ↔ Ada */}
        <CoordinationCard
          number="1"
          person1={{ name: "Ali", emoji: "💼", role: "Internships & Academic" }}
          person2={{ name: "Ada", emoji: "🌍", role: "International & Alumni" }}
          color="from-blue-500 to-green-500"
        >
          <Reason>
            Uluslararası staj programları her ikisini de ilgilendiriyor
          </Reason>
          <Reason>
            Yurtdışı akademik değişim programları ortaklaşa
          </Reason>
          
          <SharedTopics>
            <Topic label="Ali'nin konusu">Internship programs (domestic & international)</Topic>
            <Topic label="Ada'nın konusu">Erasmus+, Study abroad programs</Topic>
            <CommonArea>Yurtdışı staj imkanları ve değişim programları</CommonArea>
          </SharedTopics>

          <Examples>
            <Example person="Ali">UniMe'nin career office yurtdışı staj imkanları sunuyor</Example>
            <Example person="Ada">Erasmus+ ile 40+ partner üniversite var, staj yapılabilir</Example>
            <Result>İkisi de aynı konudan bahsediyor, tutarlı olmalı!</Result>
          </Examples>
        </CoordinationCard>

        {/* Ali ↔ Berkay */}
        <CoordinationCard
          number="2"
          person1={{ name: "Ali", emoji: "💼", role: "Internships & Academic" }}
          person2={{ name: "Berkay", emoji: "💰", role: "Digital" }}
          color="from-blue-500 to-indigo-500"
        >
          <Reason>
            Dijital öğrenme platformları akademik destek kapsamında
          </Reason>
          <Reason>
            Online eğitim araçları her ikisini de etkiliyor
          </Reason>
          
          <SharedTopics>
            <Topic label="Ali'nin konusu">Academic support services, Online learning platforms</Topic>
            <Topic label="Berkay'ın konusu">Digital tools (Coursera, LinkedIn Learning)</Topic>
            <CommonArea>Online öğrenme platformları ve dijital araçlar</CommonArea>
          </SharedTopics>

          <Examples>
            <Example person="Ali">24/7 online learning platform erişimi var</Example>
            <Example person="Berkay">Coursera & LinkedIn Learning partnerlikleri</Example>
            <Result>Aynı sistemlerden bahsediyorlar, koordine olmalılar!</Result>
          </Examples>
        </CoordinationCard>

        {/* Ece ↔ Ali */}
        <CoordinationCard
          number="3"
          person1={{ name: "Ece", emoji: "🔬", role: "Research & Entrepreneurship" }}
          person2={{ name: "Ali", emoji: "💼", role: "Academic" }}
          color="from-purple-500 to-blue-500"
        >
          <Reason>
            Araştırma programları akademik eğitimin bir parçası
          </Reason>
          <Reason>
            Profesörlerle işbirliği hem araştırma hem öğrenme
          </Reason>
          
          <SharedTopics>
            <Topic label="Ece'nin konusu">Research labs, Student research participation</Topic>
            <Topic label="Ali'nin konusu">Academic workshops, Study programs</Topic>
            <CommonArea>Araştırma bursları ve akademik destek</CommonArea>
          </SharedTopics>

          <Examples>
            <Example person="Ece">Öğrenciler profesörlerle araştırma projelerinde çalışabilir</Example>
            <Example person="Ali">Academic support ile araştırma imkanları sunuluyor</Example>
            <Result>Araştırma desteğini ikisi de vurguluyor!</Result>
          </Examples>
        </CoordinationCard>

        {/* Ece ↔ Ada */}
        <CoordinationCard
          number="4"
          person1={{ name: "Ece", emoji: "🔬", role: "Research" }}
          person2={{ name: "Ada", emoji: "🌍", role: "International" }}
          color="from-purple-500 to-green-500"
        >
          <Reason>
            Uluslararası araştırma işbirlikleri
          </Reason>
          <Reason>
            Global research projects ve konferanslar
          </Reason>
          
          <SharedTopics>
            <Topic label="Ece'nin konusu">Research collaborations, International conferences</Topic>
            <Topic label="Ada'nın konusu">International programs, Global projects</Topic>
            <CommonArea>Uluslararası araştırma projeleri ve konferanslar</CommonArea>
          </SharedTopics>

          <Examples>
            <Example person="Ece">Uluslararası konferanslarda sunum yapma imkanı</Example>
            <Example person="Ada">Global projelere katılım ve uluslararası işbirlikleri</Example>
            <Result>İkisi de global research'ten bahsediyor!</Result>
          </Examples>
        </CoordinationCard>

        {/* Ada ↔ Defne */}
        <CoordinationCard
          number="5"
          person1={{ name: "Ada", emoji: "🌍", role: "International" }}
          person2={{ name: "Defne", emoji: "🎨", role: "Social & Cultural" }}
          color="from-green-500 to-yellow-500"
        >
          <Reason>
            Kültürlerarası etkinlikler her ikisini de ilgilendiriyor
          </Reason>
          <Reason>
            Uluslararası öğrenciler için kültürel aktiviteler
          </Reason>
          
          <SharedTopics>
            <Topic label="Ada'nın konusu">International student integration</Topic>
            <Topic label="Defne'nin konusu">Cultural events, International night</Topic>
            <CommonArea>Kültürlerarası etkinlikler ve festivaller</CommonArea>
          </SharedTopics>

          <Examples>
            <Example person="Ada">30+ ülkeden öğrenci var, kültürel çeşitlilik</Example>
            <Example person="Defne">Kültürlerarası gece etkinliği, 100+ sosyal aktivite</Example>
            <Result>Uluslararası öğrenciler için etkinlikler!</Result>
          </Examples>
        </CoordinationCard>

        {/* Berkay ↔ Everyone */}
        <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-indigo-300/30">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-4">
              💰
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">
                Berkay ↔ HERKES
              </h3>
              <p className="text-white/80">Scholarships → All Opportunities</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-bold text-white mb-4">🎯 Neden Herkesle Çalışıyor?</h4>
            <ul className="space-y-2 text-white/90">
              <li>→ Burslar TÜM alanlarda öğrencilere yardım ediyor!</li>
              <li>→ Her fırsat için finansal destek var</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <BerkayConnection to="Ali" color="blue">
              <li>"Part-time work opportunities"</li>
              <li>"Internship financial support"</li>
            </BerkayConnection>

            <BerkayConnection to="Ece" color="purple">
              <li>"Research scholarships (€3,000-5,000)"</li>
              <li>"Funding for innovation projects"</li>
            </BerkayConnection>

            <BerkayConnection to="Ada" color="green">
              <li>"Erasmus+ grants (€500-800/month)"</li>
              <li>"Study abroad scholarships"</li>
            </BerkayConnection>

            <BerkayConnection to="Defne" color="yellow">
              <li>"Student club funding"</li>
              <li>"Event participation support"</li>
            </BerkayConnection>
          </div>
        </div>
      </div>

      {/* How to Coordinate */}
      <div className="mt-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-300/30">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span>💡</span>
          <span>Koordinasyon Nasıl Yapılır?</span>
        </h2>

        <div className="space-y-4 mb-6">
          <Step number="1">Slaytını yapmadan önce ilgili kişiyle konuş</Step>
          <Step number="2">"Ben şunu yazacağım, sen ne yazıyorsun?" diye sor</Step>
          <Step number="3">Çakışma olmasın, tutarlı olsun</Step>
          <Step number="4">Sayıları koordine edin (örnek: kaç staj, kaç burs)</Step>
        </div>

        <div className="bg-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">📱 Örnek Konuşma:</h3>
          <div className="space-y-4">
            <MessageBubble from="Ali" to="Ada">
              "Merhaba Ada! Ben internship bölümümde 'yurtdışı staj imkanları' 
              yazacağım. Sen Erasmus'ta bu konuya değiniyor musun? Koordine olalım!"
            </MessageBubble>
            <MessageBubble from="Ada" to="Ali">
              "Evet! Ben Erasmus+ ile partner üniversitelerde staj yapılabileceğini 
              yazıyorum. Sen de 'career office aracılığıyla' diyebilirsin, ben de 
              'Erasmus+ programı ile' diyeyim, böylece tamamlarız!"
            </MessageBubble>
            <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
              <p className="text-white font-semibold flex items-center gap-2">
                <span>✅</span>
                <span>Sonuç: İki slayt birbirini tamamlıyor, çelişmiyor!</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-12 bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-8 border border-orange-300/30">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <span>🎯</span>
          <span>Her Üye İçin Hızlı Rehber</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <QuickRef name="Ali" emoji="💼">
            <span className="font-semibold">Konuş:</span> Ada (yurtdışı staj), Berkay (dijital araçlar), Ece (araştırma)
          </QuickRef>

          <QuickRef name="Ece" emoji="🔬">
            <span className="font-semibold">Konuş:</span> Ali (akademik araştırma), Ada (international research), Berkay (fonlar)
          </QuickRef>

          <QuickRef name="Ada" emoji="🌍">
            <span className="font-semibold">Konuş:</span> Ali (değişim programları), Ece (global research), Defne (kültürel)
          </QuickRef>

          <QuickRef name="Defne" emoji="🎨">
            <span className="font-semibold">Konuş:</span> Ada (kültürlerarası etkinlikler), Berkay (kulüp fonları)
          </QuickRef>

          <QuickRef name="Berkay" emoji="💰">
            <span className="font-semibold">Konuş:</span> HERKES! (her alanda finansal destek var)
          </QuickRef>
        </div>
      </div>

      {/* Final Note */}
      <div className="mt-12 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-red-300/30 text-center">
        <p className="text-2xl font-bold text-white">
          🔗 ÖNEMLİ: Slaytını yapmadan önce ilgili kişilerle konuş!
        </p>
        <p className="text-xl text-white/90 mt-2">
          Çakışma olmasın, birbirinizi tamamlayın! 🤝
        </p>
      </div>
    </div>
  )
}

// Helper Components
function CoordinationCard({ number, person1, person2, color, children }) {
  return (
    <div className={`bg-gradient-to-r ${color}/20 backdrop-blur-md rounded-3xl p-8 border border-white/20`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`text-3xl bg-gradient-to-r ${color} rounded-full w-12 h-12 flex items-center justify-center text-white font-bold`}>
            {number}
          </div>
          <div className="flex items-center gap-3">
            <PersonBadge {...person1} />
            <span className="text-3xl text-white">↔</span>
            <PersonBadge {...person2} />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

function PersonBadge({ name, emoji, role }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        <div>
          <div className="text-white font-bold">{name}</div>
          <div className="text-white/70 text-sm">{role}</div>
        </div>
      </div>
    </div>
  )
}

function Reason({ children }) {
  return (
    <div className="text-white/90 mb-2 flex items-start gap-2">
      <span className="text-yellow-400">→</span>
      <span>{children}</span>
    </div>
  )
}

function SharedTopics({ children }) {
  return (
    <div className="bg-white/10 rounded-xl p-6 my-6">
      <h4 className="text-xl font-bold text-white mb-4">📋 Ne Paylaşmalı?</h4>
      {children}
    </div>
  )
}

function Topic({ label, children }) {
  return (
    <div className="mb-3">
      <span className="text-white/80 font-semibold">{label}:</span>
      <span className="text-white/90 ml-2">{children}</span>
    </div>
  )
}

function CommonArea({ children }) {
  return (
    <div className="mt-4 bg-cyan-500/20 rounded-lg p-3 border border-cyan-400/30">
      <span className="text-cyan-300 font-semibold">ORTAK ALAN: </span>
      <span className="text-white">{children}</span>
    </div>
  )
}

function Examples({ children }) {
  return (
    <div className="bg-white/5 rounded-xl p-6 mt-6">
      <h4 className="text-xl font-bold text-white mb-4">💬 Örnek:</h4>
      {children}
    </div>
  )
}

function Example({ person, children }) {
  return (
    <div className="mb-2 flex items-start gap-2">
      <span className="text-green-400">•</span>
      <span className="text-white/90">
        <strong>{person}:</strong> "{children}"
      </span>
    </div>
  )
}

function Result({ children }) {
  return (
    <div className="mt-3 text-yellow-300 flex items-center gap-2">
      <span>→</span>
      <span>{children}</span>
    </div>
  )
}

function BerkayConnection({ to, color, children }) {
  const colorMap = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-teal-500',
    yellow: 'from-yellow-500 to-orange-500'
  }

  return (
    <div className={`bg-gradient-to-r ${colorMap[color]}/20 rounded-xl p-4 border border-white/20`}>
      <div className="text-white font-bold mb-2">Berkay → {to}:</div>
      <ul className="text-white/90 text-sm space-y-1">
        {children}
      </ul>
    </div>
  )
}

function Step({ number, children }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
      <div className="bg-cyan-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <span className="text-white/90">{children}</span>
    </div>
  )
}

function MessageBubble({ from, to, children }) {
  return (
    <div className="bg-white/10 rounded-lg p-4">
      <div className="text-cyan-300 text-sm font-semibold mb-2">{from} → {to}:</div>
      <p className="text-white/90 italic">"{children}"</p>
    </div>
  )
}

function QuickRef({ name, emoji, children }) {
  return (
    <div className="bg-white/10 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{emoji}</span>
        <span className="text-white font-bold text-lg">{name}</span>
      </div>
      <p className="text-white/90 text-sm">{children}</p>
    </div>
  )
}

