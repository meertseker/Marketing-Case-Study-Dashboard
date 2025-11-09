export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
              🎓
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">UniMe Project</h1>
              <p className="text-sm text-white/70">Marketing Case Study Dashboard</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="text-white/80 text-sm">
              <span className="font-semibold">6 Members</span> • <span className="font-semibold">10 Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

