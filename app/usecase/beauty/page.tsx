'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Star, Zap, Syringe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import '@n8n/chat/style.css'
import '../../styles/chat1.css'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

interface Review {
  rating: number
  text: string
  author: string
  location: string
}

const SERVICES: Service[] = [
  
  {
    icon: <Zap className="text-blue-400" />,
    title: 'IV Drips',
    description: 'NMN点滴, 高濃度ビタミンC点滴, レバケア点滴, 白玉点滴, エクソソーム点滴'
  },
  {
    icon: <Syringe className="text-purple-400" />,
    title: '美容注射',
    description: 'にんにく注射, ビタミン注射, ダイエット注射, プラセンタ注射, 白玉注射'
  },
  {
    icon: <Heart className="text-pink-400" />,
    title: '訪問美容',
    description: '特定のIV治療の訪問サービス（要事前相談）'
  }
]

const REVIEWS: Review[] = [
  {
    rating: 5,
    text: '最高の施術でした！スタッフの方が丁寧にカウンセリングしてくださり、自分にぴったりのプランを提案してくれました。リラックスできる空間で、また通いたいと思います。',
    author: '山田 花子',
    location: '東京都'
  },
  {
    rating: 5,
    text: '初めてのエステ体験でしたが、とてもリラックスできました。スタッフの方が親切で、施術も丁寧。またぜひ利用したいと思います。',
    author: '佐藤 美咲',
    location: '神奈川県'
  }
]

export default function BeautyClinic() {
  const [chatVisible, setChatVisible] = useState(false)
  const [chatInitialized, setChatInitialized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatVisible && !chatInitialized && typeof window !== 'undefined') {
      setIsLoading(true)
      import('@n8n/chat')
        .then(({ createChat }) => {
          if (chatContainerRef.current) {
            createChat({
              webhookUrl: 'https://n8n-1-9y7i.onrender.com/webhook/f3ff51e0-953e-4a12-ad74-ea0b831b946e/chat',
              target: '#n8n-chat',
              mode: 'window',
              initialMessages: ['ライズ１のAIです 👋 '],
              i18n: {
                en: {
                  title: '',
                  subtitle: "美のエージェントです👋24時間365日対応",
                  footer: '',
                  getStarted: 'ニューチャット',
                  inputPlaceholder: 'こちらに入力...',
                  closeButtonTooltip: ''
                }
              }
            })
            setChatInitialized(true)
          }
        })
        .catch((error) => {
          console.error('Failed to initialize chat:', error)
          toast.error('チャットの初期化に失敗しました')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [chatVisible, chatInitialized])

  const handleOpenChat = () => {
    setChatVisible(true)
    toast('ピンポン👋 ', {
      duration: 1000,
      className: 'toast-container',
      style: {
        background: 'rgb(102, 89, 91)',
        color: '#fff',
        fontSize: '20px',
        padding: '16px'
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-light text-rose-800 mb-6">
            輝く美しさを手に入れる
          </h1>
          <p className="text-xl text-rose-600 mb-8 max-w-2xl mx-auto">
            最新の美容技術と伝統的なケアの融合。あなただけの美しさを引き出す、完全個室のプライベートサロン
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Badge variant="secondary" className="bg-rose-100 text-rose-800">完全予約制</Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">最新機器</Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">カウンセリング</Badge>
          </div>
          <Button 
            size="lg" 
            className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-8 py-6 text-lg"
            onClick={handleOpenChat}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : '無料カウンセリング予約'}
          </Button>
        </section>

        {/* Services Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-light text-rose-800 mb-12 text-center">
            私たちのサービス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-rose-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-rose-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-light text-rose-800 mb-12 text-center">
            ギャラリー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((_, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <div className="relative h-96">
                    <Image
                      src={`/beauty${index + 1}.jpg`}
                      alt={`Before & After ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-light text-rose-800 mb-12 text-center">
            お客様の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-rose-600 mb-4">{review.text}</p>
                  <p className="text-rose-800 font-medium">{review.author}</p>
                  <p className="text-rose-500">{review.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Chat Container */}
        {chatVisible && (
          <div 
            id="n8n-chat" 
            className="fixed bottom-20 right-20 w-[300px] h-[400px]" 
            ref={chatContainerRef}
            aria-live="polite"
          />
        )}
      </main>
      <Footer />
    </div>
  )
}
