export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500 animate-spin animation-delay-150" style={{ animationDirection: 'reverse' }}></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Loading Portfolio
          </h2>
          <p className="text-gray-400 text-sm">Preparing your experience...</p>
        </div>
      </div>
    </div>
  );
}
