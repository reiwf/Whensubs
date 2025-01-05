
import { Clock, CheckCircle, Smartphone, Globe, TrendingUp, Smile, Languages, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-amber-600" />,
    title: '24時間年中無休の対応',
    description: 'When民泊は眠りません！ゲストは昼夜を問わずいつでもすぐに回答。'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
    title: '即時正確な情報',
    description: '包括的な知識ベースとリアルタイム情報で正確な回答を提供。'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-amber-600" />,
    title: '合理化チェックイン/アウト',
    description: '明確な指示とパスコードでスムーズなセルフチェックインを実現。'
  },
  {
    icon: <Globe className="w-8 h-8 text-amber-600" />,
    title: 'パーソナライズおすすめ情報',
    description: 'レストラン、カフェ、観光スポットなどカスタマイズ提案でゲスト体験を向上。'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
    title: 'ホストの作業負荷軽減',
    description: '反復的なタスクを自動化し、重要な業務に集中できる時間を作り。'
  },
  {
    icon: <Smile className="w-8 h-8 text-amber-600" />,
    title: '向上したゲスト満足度',
    description: '即時サポートとパーソナライズ情報でより良いレビューと予約を促進。'
  },
  {
    icon: <Languages className="w-8 h-8 text-amber-600" />,
    title: '多言語対応',
    description: 'ゲストの言語に適応し、誰でも歓迎されていると感じさせ。'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-amber-600" />,
    title: 'コスト削減',
    description: '24時間体制の人的サポートを雇う代わりに手頃な価格でサービスを提供。'
  }
]

export function MinpakuBenefitsSection() {
  return (
    <section className="py-12 px-3">
      <div className="container mx-auto px-4">
      <Badge variant="gray" className="mb-4">When民泊を選ぶ理由</Badge>
        <h2 className="text-3xl font-normal text-stone-800 mt-3 mb-3">
        同じような質問に何度も答えるのに...
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
        うんざりしていませんか？
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-normal text-stone-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-stone-600">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
