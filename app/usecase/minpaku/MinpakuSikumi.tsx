import { Badge } from 'components/ui/badge'


export const MinpakuSikumi = () => {
  return (
    <section className="relative px-12 py-20 bg-white border-container">
      <div className="container mx-auto">
        <div className="mb-8">
          <Badge variant="gray" className="mb-4">When民泊の仕組み</Badge>
          <h2 className="text-3xl sm:text-4xl font-normal text-gray-800 leading-tight mb-3">
          ハウスルールや道順などのPDFを
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            ゲストとの会話に自動的に送信
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* NLP Feature */}
          <div className="p-6 border-container hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4">🤖</div>
            <h3 className="text-xl mb-2">自然言語処理</h3>
            <p className="text-gray-600">
              ゲストの質問を自然言語で理解し、適切な応答を提供
            </p>
          </div>

          {/* Knowledge Base */}
          <div className="p-6 border-container hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4">📚</div>
            <h3 className="text-xl font-normal mb-2">知識ベース統合</h3>
            <p className="text-gray-600">
              物件情報と地域情報を統合し、包括的なサポートを実現
            </p>
          </div>

          {/* Real-time Info */}
          <div className="p-6 border-container hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4">⏱️</div>
            <h3 className="text-xl mb-2">リアルタイム情報</h3>
            <p className="text-gray-600">
              地元のイベントや交通情報を最新状態で提供
            </p>
          </div>

          {/* Automated Communication */}
          <div className="p-6 border-container hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4">✉️</div>
            <h3 className="text-xl mb-2">自動コミュニケーション</h3>
            <p className="text-gray-600">
              チェックイン/アウトの自動リマインダーとガイド
            </p>
          </div>
        </div>

       
      </div>
    </section>
  )
}
