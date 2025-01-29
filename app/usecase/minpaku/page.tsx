'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
   Bath, TreePine, Bed, Users, Waves, LandPlot, } from 'lucide-react'
import { MinpakuSection } from './MinpakuSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'
import '@n8n/chat/style.css'
import '../../styles/chat1.css'
import { MinpakuBenefitsSection } from './MinpakuBenefitsSection'
import { MinpakuSikumi} from './MinpakuSikumi'
import { LocationHostInfo } from './LocationHostInfo'
import MinpakuTabs from './MinpakuTabs'
import FAQSection from './FAQSection'
import ReviewsSection from './ReviewsSection'


interface Amenity {
  icon: React.ReactNode
  text: string
}

interface Review {
  rating: number
  text: string
  author: string
  location: string
}

const BASIC_INFO: Amenity[] = [
  { icon: <Users className="text-amber-600" />, text: '最大4名様' },
  { icon: <Bed className="text-amber-600" />, text: '寝室2室' },
  { icon: <Bath className="text-amber-600" />, text: 'バスルーム1室' },
  { icon: <Waves className="text-amber-600" />, text: '露天風呂' },
  { icon: <TreePine className="text-amber-600" />, text: 'プライベート庭園' },
  { icon: <LandPlot className="text-amber-600" />, text: '敷地101平米' }
]

const REVIEWS: Review[] = [
  {
    rating: 5,
    text: '京都の隠れ家的存在！町家は美しく、庭園は静寂で、星空の下での露天風呂は忘れられない体験でした。明子さんは素晴らしいホストで、私たちの滞在を本当に特別なものにしてくれました。',
    author: 'エマとジョン',
    location: 'イギリス'
  },
  {
    rating: 5,
    text: 'ここでの滞在は日本旅行のハイライトでした。伝統的な要素を保ちながら現代の快適さを提供する細部へのこだわりに感銘を受けました。まるで時代を超えて旅をしているようでしたが、必要な全ての便利さも備わっていました。',
    author: 'ジャック',
    location: 'アメリカ'
  }
]

export const AmenityList = ({ items }: { items: Amenity[] }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-center">
        <span className="mr-2">{item.icon}</span>
        {item.text}
      </li>
    ))}
  </ul>
)


export default function KyotoMachiya() {
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
              webhookUrl: 'https://n8n-1-9y7i.onrender.com/webhook/2624357d-bde6-45cc-a10d-41b54a179678/chat',
              target: '#n8n-chat',
              mode: 'window',
              initialMessages: ['明子のAIです 👋 御用は何でしょうか'],
              i18n: {
                en: {
                  title: '',
                  subtitle: "明子のエージェントです👋24時間365日対応いたします。",
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
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        {/* Minpaku AI Section */}
        <MinpakuSection />
        <MinpakuBenefitsSection/>
        <MinpakuSikumi/>

        <div className="flex items-center justify-center my-12 mt-24">
        <div className="h-px bg-gray-200 dark:bg-gray-700 w-3/4"></div>
        <span className="mx-4 text-gray-400 dark:text-gray-500">DEMO</span> {/* Or an icon */}
        <div className="h-px bg-gray-200 dark:bg-gray-700 w-3/4"></div>
        </div>
       
        {/* Main Section */}
        <div id="main-section" className="mt-24 mb-8">     
        <div className="mb-4"> 
        <Badge variant="gray" className="">When民泊デモ</Badge>            
          </div>     
          <h1 className="text-3xl md:text-4xl font-normal text-stone-800 mb-2">
            京都の伝統的な町家 - 庭園と露天風呂付き
          </h1>
          <p className="text-lg text-stone-600 mb-2">
            日本の伝統美とおもてなしを体験する
          </p>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-amber-100 font-thin text-amber-800">町家</Badge>
            <Badge variant="secondary" className="bg-green-100 font-thin text-green-800">庭園付き</Badge>
            <Badge variant="secondary" className="bg-blue-100 font-thin text-blue-800">露天風呂</Badge>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Image Card */}
          <Card className="md:col-span-2">
            <CardContent className="p-0">
              <div className="relative border-container w-full h-[400px]">
                <Image 
                  src="/Whensubs_demo_minpaku.jpg" 
                  alt="風情ある日本庭園と縁側のある町家" 
                  fill
                  className="object-cover rounded-t-lg"
                  priority
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-normal mb-4 text-stone-800">ようこそ</h2>
                <p className="text-stone-600">
                  京都の歴史ある祇園地区の中心に位置する、愛情を込めて修復された町家へようこそ。
                  日本の伝統的な建築と現代の快適さが見事に調和した空間で、魅惑的な庭園と贅沢な露天風呂をお楽しみいただけます。
                  古都で真に本物の、くつろぎのひとときをお過ごしください。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar Cards */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-normal mb-4 text-stone-800">基本情報</h3>
                <AmenityList items={BASIC_INFO} />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-normal mb-4 text-stone-800">料金</h3>
                <p className="text-2xl font-normal text-amber-600 mb-2">¥85,000 / 泊</p>
                {!chatVisible && (
                  <Button 
                    size="lg"                     
                    className="bg-amber-600 rounded-xl hover:bg-amber-700 text-white w-full"
                    onClick={handleOpenChat}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : 'When民泊とチャット'}
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-normal mb-4 text-stone-800">住所</h3>
                <p className="text-xl font-normal text-stone-600 mb-2">
                  京都市東山区梅宮町000-1
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <MinpakuTabs/>
        <LocationHostInfo />      
        <FAQSection />   
        <ReviewsSection reviews={REVIEWS} />

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-normal text-stone-800 mb-4">
            京都での思い出づくりを
          </h2>
          <p className="text-xl text-stone-600 mb-6">
            古都京都の魅力を、この美しい町家で体験してください。今すぐご予約いただき、日本の文化とおもてなしに浸ってください。
          </p>
          {!chatVisible && (
            <Button 
              size="lg" 
              className="bg-amber-600 rounded-xl hover:bg-amber-700 text-white"
              onClick={handleOpenChat}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'When民泊とチャット'}
            </Button>
          )}
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
