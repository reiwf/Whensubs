'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Wifi, Bath, TreePine, Coffee, ShoppingBag, UtensilsCrossed, Bed, Tv, Snowflake, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function KyotoMachiya() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">京都の伝統的な町家 - 庭園と露天風呂付き</h1>
          <p className="text-lg text-stone-600 mb-2">日本の伝統美とおもてなしを体験する</p>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">町家</Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">庭園付き</Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">露天風呂</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="md:col-span-2">
            <CardContent className="p-0">
              <div className="relative w-full h-[400px]">
                <Image 
                  src="/Whensubs_demo_minpaku.jpg" 
                  alt="風情ある日本庭園と縁側のある町家" 
                  fill
                  className="object-cover rounded-t-lg"
                  priority
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-stone-800">ようこそ</h2>
                <p className="text-stone-600">
                  京都の歴史ある祇園地区の中心に位置する、愛情を込めて修復された町家へようこそ。日本の伝統的な建築と現代の快適さが見事に調和した空間で、魅惑的な庭園と贅沢な露天風呂をお楽しみいただけます。古都で真に本物の、くつろぎのひとときをお過ごしください。
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-stone-800">基本情報</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Users className="mr-2 text-amber-600" /> 最大4名様</li>
                  <li className="flex items-center"><Bed className="mr-2 text-amber-600" /> 寝室2室（布団）</li>
                  <li className="flex items-center"><Bath className="mr-2 text-amber-600" /> バスルーム1室</li>
                  <li className="flex items-center"><TreePine className="mr-2 text-amber-600" /> プライベート庭園</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-stone-800">料金</h3>
                <p className="text-2xl font-bold text-amber-600 mb-2">¥35,000 / 泊</p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">予約する</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="space" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 bg-stone-100">
            <TabsTrigger value="space">お部屋</TabsTrigger>
            <TabsTrigger value="amenities">設備</TabsTrigger>
            <TabsTrigger value="access">アクセス</TabsTrigger>
            <TabsTrigger value="rules">ハウスルール</TabsTrigger>
          </TabsList>
          <TabsContent value="space">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-stone-800">お部屋</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>畳の寝室2室（布団付き）</li>
                  <li>モダンなバスルーム（シャワー付き）と別途トイレ</li>
                  <li>座卓と座布団のある広々としたリビングエリア</li>
                  <li>伝統的でモダンな設備を備えた簡易キッチン</li>
                  <li>露天風呂付きのプライベート庭園</li>
                  <li>最大4名様まで快適にお泊まりいただけます</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="amenities">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-stone-800">設備</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-stone-700">室内</h4>
                    <ul className="space-y-2 text-stone-600">
                      <li className="flex items-center"><Wifi className="mr-2 text-amber-600" /> 高速Wi-Fi</li>
                      <li className="flex items-center"><Tv className="mr-2 text-amber-600" /> スマートTV</li>
                      <li className="flex items-center"><Snowflake className="mr-2 text-amber-600" /> エアコン</li>
                      <li className="flex items-center"><Coffee className="mr-2 text-amber-600" /> 茶道具セット</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-stone-700">屋外</h4>
                    <ul className="space-y-2 text-stone-600">
                      <li className="flex items-center"><Bath className="mr-2 text-amber-600" /> 露天風呂</li>
                      <li className="flex items-center"><TreePine className="mr-2 text-amber-600" /> 日本庭園</li>
                      <li>竹の水琴窟</li>
                      <li>枯山水</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="access">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-stone-800">アクセス</h3>
                <p className="mb-4 text-stone-600">ゲストは町家全体を専有利用いただけます：</p>
                <ul className="space-y-2 text-stone-600">
                  <li>伝統的な引き戸のある専用入口</li>
                  <li>全ての室内リビングスペースと寝室</li>
                  <li>設備の整った簡易キッチン</li>
                  <li>プライベート庭園と露天風呂</li>
                  <li>地域散策用の無料レンタル自転車</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="rules">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-stone-800">ハウスルール</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>町家内は禁煙です</li>
                  <li>入室の際は靴を脱いでください</li>
                  <li>夜10時から朝7時までは静かにお過ごしください</li>
                  <li>パーティーや大きなイベントはご遠慮ください</li>
                  <li>歴史ある建物と近隣の方々へご配慮ください</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-stone-800">周辺情報</h3>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center"><MapPin className="mr-2 text-amber-600" /> 八坂神社まで徒歩5分</li>
                <li className="flex items-center"><UtensilsCrossed className="mr-2 text-amber-600" /> 祇園の有名店まで徒歩10分</li>
                <li className="flex items-center"><ShoppingBag className="mr-2 text-amber-600" /> 錦市場まで徒歩15分</li>
                <li className="flex items-center">清水寺まで徒歩20分</li>
                <li className="flex items-center">近くにバス停と駅があり、市内観光に便利</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-stone-800">ホスト紹介</h3>
              <p className="text-stone-600 mb-4">
                こんにちは、明子です。京都生まれの京都育ちで、故郷の美しさと文化を共有することに情熱を注いでいます。この町家を愛情込めて修復し、ゲストの皆様に本物の日本体験をお届けしたいと思っています。ホストとして、地元の情報提供や文化体験のアレンジ、滞在中のサポートなど、いつでもお手伝いさせていただきます。美しい京都での素敵な思い出作りのお手伝いができることを楽しみにしています！
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-stone-800">よくある質問</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-stone-700">露天風呂の使い方は難しくありませんか？</h4>
                <p className="text-stone-600">全く難しくありません。詳しい説明書をご用意しています。入浴前にかけ湯をするのを忘れずに。</p>
              </div>
              <div>
                <h4 className="font-semibold text-stone-700">布団は快適ですか？</h4>
                <p className="text-stone-600">はい、高品質で快適な布団をご用意しています。必要に応じて追加の敷布団もございます。</p>
              </div>
              <div>
                <h4 className="font-semibold text-stone-700">京都駅から町家までのアクセス方法は？</h4>
                <p className="text-stone-600">ご予約後に、タクシー、バス、徒歩でのアクセス方法を詳しくご案内いたします。</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-stone-800">ゲストの声</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 italic">
                  京都の隠れ家的存在！町家は美しく、庭園は静寂で、星空の下での露天風呂は忘れられない体験でした。明子さんは素晴らしいホストで、私たちの滞在を本当に特別なものにしてくれました。 - エマとジョン、イギリス
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 italic">
                  ここでの滞在は日本旅行のハイライトでした。伝統的な要素を保ちながら現代の快適さを提供する細部へのこだわりに感銘を受けました。まるで時代を超えて旅をしているようでしたが、必要な全ての便利さも備わっていました。 - 田中家、アメリカ
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">京都での思い出づくりを</h2>
          <p className="text-xl text-stone-600 mb-6">
            古都京都の魅力を、この美しい町家で体験してください。今すぐご予約いただき、日本の文化とおもてなしに浸ってください。
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            今すぐ予約
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

