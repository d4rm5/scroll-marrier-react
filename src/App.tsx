import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import confetti from 'canvas-confetti'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Component() {
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [showEmojis, setShowEmojis] = useState(false)

  const handleMarry = () => {
    setShowEmojis(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      shapes: ['circle'],
      colors: ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF1493']
    })
  }

  useEffect(() => {
    if (showEmojis) {
      const timer = setTimeout(() => setShowEmojis(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showEmojis])

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="heart-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5z" fill="#FFB6C1" fillOpacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heart-pattern)" />
        <circle cx="5%" cy="10%" r="50" fill="#FFC0CB" fillOpacity="0.2" />
        <circle cx="95%" cy="90%" r="70" fill="#FF69B4" fillOpacity="0.2" />
        <path d="M0,50 Q50,0 100,50 T200,50" stroke="#FF1493" strokeWidth="2" fill="none" strokeOpacity="0.2" />
      </svg>
   
      <div className='fixed right-6 top-6'>
        <ConnectButton/>
      </div>
      

      <h1 className="text-4xl font-bold text-pink-600 mb-8 z-10 text-center px-4 py-2 bg-white bg-opacity-70 rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
        Scroll Marrier 📜💍
      </h1>

      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full space-y-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">💖 Love Unites 💖</h2>
        <Input
          type="text"
          placeholder="Address 1"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          className="border-pink-300 focus:border-pink-500 focus:ring-pink-500"
        />
        <Input
          type="text"
          placeholder="Address 2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          className="border-pink-300 focus:border-pink-500 focus:ring-pink-500"
        />
        <Button
          onClick={handleMarry}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-full transform transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          MARRY 💍
        </Button>
        {showEmojis && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-6xl animate-bounce">
              {'💖💕👰🤵💐🎉'.split('').map((emoji, index) => (
                <span
                  key={index}
                  className="inline-block animate-emoji"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: `translate(${Math.sin(index) * 50}px, ${Math.cos(index) * 50}px)`,
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}