import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Alex K.",
      role: "Fashion Influencer",
      content: "UGCY has completely transformed how I approach UGC. The AI-powered insights have helped me create content that resonates with my audience like never before.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Samantha L.",
      role: "Tech Reviewer",
      content: "I've tripled my income since joining UGCY. The opportunities here are endless, and the collaboration tools make working with brands a breeze.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Mike R.",
      role: "Travel Vlogger",
      content: "The analytics dashboard on UGCY is a game-changer. I can now make data-driven decisions to grow my channel and engage with my audience more effectively.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emily T.",
      role: "Beauty Guru",
      content: "UGCY's creative toolkit has expanded my content possibilities. I'm creating more diverse and engaging content, and my followers love it!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "David W.",
      role: "Fitness Creator",
      content: "The monetization features on UGCY have allowed me to turn my passion into a full-time career. I'm so grateful for this platform!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sophie M.",
      role: "Lifestyle Blogger",
      content: "UGCY's brand safety tools give me peace of mind. I can confidently create content knowing it aligns with brand guidelines and regulations.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Creator Success Stories</h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          Hear from the creators who have transformed their content and careers with UGCY.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}