import { useState } from 'react'
import { slideAssignments } from './data/slideData'
import TeamCard from './components/TeamCard'
import MemberDetail from './components/MemberDetail'
import Header from './components/Header'

function App() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      {!selectedMember ? (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              🎓 UniMe Marketing Case Study
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Apply to UniMe - Highlighting Opportunities
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mt-4">
              <p className="text-white font-semibold">
                👥 Team Members: Click to view tasks
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {slideAssignments.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      ) : (
        <MemberDetail
          member={selectedMember}
          onBack={() => setSelectedMember(null)}
        />
      )}
    </div>
  )
}

export default App

