
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface Review {
  rating: number
  text: string
  author: string
  location: string
}

const ReviewCard = ({ review }: { review: Review }) => (
  <div>
    <div className="flex items-center mb-2">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="text-amber-400 fill-current" />
      ))}
    </div>
    <p className="text-stone-600 italic">
      {review.text} - {review.author}, {review.location}
    </p>
  </div>
)

export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <Card className="mb-12">
      <CardContent className="p-6">
        <h3 className="text-xl font-normal mb-4 text-stone-800">ゲストの声</h3>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
