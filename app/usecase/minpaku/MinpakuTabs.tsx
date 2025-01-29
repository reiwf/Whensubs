'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AmenityList } from './AmenityList'
import { 
  Wifi, Bath, TreePine, Coffee, Tv, Snowflake 
} from 'lucide-react'

interface Amenity {
  icon: React.ReactNode
  text: string
}

const ROOM_FEATURES = [
  { icon: <Bath className="text-amber-600" />, text: 'モダンなバスルーム（シャワー付き）と別途トイレ' },
  { icon: <Wifi className="text-amber-600" />, text: '高速Wi-Fi' },
  { icon: <Tv className="text-amber-600" />, text: 'スマートTV' },
  { icon: <Snowflake className="text-amber-600" />, text: 'エアコン' },
  { icon: <Coffee className="text-amber-600" />, text: '茶道具セット' },
  { icon: <TreePine className="text-amber-600" />, text: '日本庭園' }
]

export default function MinpakuTabs() {
  return (
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
            <h3 className="text-xl font-normal mb-4 text-stone-800">お部屋</h3>
            <AmenityList items={ROOM_FEATURES} />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="amenities">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-normal mb-4 text-stone-800">設備</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-normal mb-2 text-stone-700">室内</h4>
                <ul className="space-y-2 text-stone-600">
                  {ROOM_FEATURES.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-center">
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-normal mb-2 text-stone-700">屋外</h4>
                <ul className="space-y-2 text-stone-600">
                  {ROOM_FEATURES.slice(4).map((item, i) => (
                    <li key={i} className="flex items-center">
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="access">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-normal mb-4 text-stone-800">アクセス</h3>
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
            <h3 className="text-xl font-normal mb-4 text-stone-800">ハウスルール</h3>
            <ul className="space-y-2 text-stone-600">
              <li>町家内は禁煙です</li>
              <li>入室の際は靴を脱いでください</li>
              <li>夜10時から朝7時までは静かにお過ごしください</li>
              <li>パーティーや大きなイベントはご遠慮ください</li>
              <li>歴史ある建物と近隣の方々へご配慮ください</li>
              <li>チェックインは16時から、チェックアウトは11時まで</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
