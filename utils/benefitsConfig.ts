import { Zap, DollarSign, Clock, Shield } from 'lucide-react'

export interface Benefit {
  title: string
  description: string
  icon: React.ElementType
  gradient: string
}

export const benefits: Benefit[] = [
  {
    title: "顧客体験の向上",
    description: "スピーディかつ的確な回答により、お客様のストレスを軽減。問い合わせから解決までの時間を大幅に短縮し、満足度アップに貢献します。",
    icon: Zap,
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "コスト効率の高い運用",
    description: "オペレーターの負担を軽減し、人件費や教育コストを削減。スタッフは複雑な課題対応や戦略的タスクに集中することができます。",
    icon: DollarSign,
    gradient: "from-green-400 to-emerald-500"
  },
  {
    title: "24時間体制のサポート",
    description: "AIチャットボットなら時間や休日を問わず稼働。国内・海外の顧客にも同じ品質のサポートを提供できます。",
    icon: Clock,
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    title: "一貫したサービス品質",
    description: "ヒューマンエラーのリスクを減らし、常に安定した対応が可能。どの部署・店舗でも同水準のサポートを実現します。",
    icon: Shield,
    gradient: "from-indigo-400 to-purple-500"
  }
]
