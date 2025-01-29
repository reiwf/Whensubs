'use client'

import { Card, CardContent } from '@/components/ui/card'
import { AmenityList } from './AmenityList'
import { MapPin, UtensilsCrossed, ShoppingBag, MapPinHouse, BusFront } from 'lucide-react'

const NEARBY_PLACES = [
  { icon: <MapPin className="text-amber-600" />, text: '八坂神社まで徒歩5分' },
  { icon: <UtensilsCrossed className="text-amber-600" />, text: '祇園の有名店まで徒歩10分' },
  { icon: <ShoppingBag className="text-amber-600" />, text: '錦市場まで徒歩15分' },
  { icon: <MapPinHouse className="text-amber-600" />, text: '清水寺まで徒歩20分' },
  { icon: <BusFront className="text-amber-600" />, text: '近くにバス停と駅があり、市内観光に便利' }
]

export const LocationHostInfo = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-normal mb-4 text-stone-800">周辺情報</h3>
        <AmenityList items={NEARBY_PLACES} />
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-normal mb-4 text-stone-800">ホスト紹介</h3>
        <p className="text-stone-600 mb-4">
          こんにちは、明子です。京都生まれの京都育ちで、故郷の美しさと文化を共有することに情熱を注いでいます。
          この町家を愛情込めて修復し、ゲストの皆様に本物の日本体験をお届けしたいと思っています。
          ホストとして、地元の情報提供や文化体験のアレンジ、滞在中のサポートなど、いつでもお手伝いさせていただきます。
          美しい京都での素敵な思い出作りのお手伝いができることを楽しみにしています！
        </p>
      </CardContent>
    </Card>
  </div>
)
