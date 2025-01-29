
import { Card, CardContent } from '@/components/ui/card'

interface FAQItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'チェックイン前やチェックアウト後荷物を預けることできますか？',
    answer: 'はい。'
  },
  {
    question: '露天風呂の使い方は難しくありませんか？',
    answer: '全く難しくありません。詳しい説明書をご用意しています。入浴前にかけ湯をするのを忘れずに。'
  },
  {
    question: '布団は快適ですか？',
    answer: 'はい、高品質で快適な布団をご用意しています。必要に応じて追加の敷布団もございます。'
  },
  {
    question: '京都駅から町家までのアクセス方法は？',
    answer: 'ご予約後に、タクシー、バス、徒歩でのアクセス方法を詳しくご案内いたします。'
  }
]

export default function FAQSection() {
  return (
    <Card className="mb-12">
      <CardContent className="p-6">
        <h3 className="text-xl font-normal mb-4 text-stone-800">よくある質問</h3>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index}>
              <h4 className="font-normal text-stone-700">Q: {item.question}</h4>
              <p className="text-stone-600">A: {item.answer}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
