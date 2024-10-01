import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users, DollarSign, Lightbulb, TrendingUp, Shield } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      title: "AI-Powered Insights",
      description: "Get smart recommendations to improve your content and reach.",
      icon: Zap,
    },
    {
      title: "Seamless Collaboration",
      description: "Work effortlessly with brands and fellow creators.",
      icon: Users,
    },
    {
      title: "Monetization Made Easy",
      description: "Turn your passion into profit with our intuitive tools.",
      icon: DollarSign,
    },
    {
      title: "Creative Toolkit",
      description: "Access a suite of tools to enhance your content creation process.",
      icon: Lightbulb,
    },
    {
      title: "Analytics Dashboard",
      description: "Track your performance and growth with detailed analytics.",
      icon: TrendingUp,
    },
    {
      title: "Brand Safety",
      description: "Ensure your content aligns with brand guidelines and regulations.",
      icon: Shield,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Powerful Features for Creators</h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          Discover the tools and features that will take your UGC creation to the next level.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}