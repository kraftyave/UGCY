"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(window.innerWidth >= 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600">UGCY</Link>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li><a href="#features" className="hover:text-purple-600 transition-colors">Features</a></li>
            <li><a href="#testimonials" className="hover:text-purple-600 transition-colors">Testimonials</a></li>
            <li><a href="#pricing" className="hover:text-purple-600 transition-colors">Pricing</a></li>
            <li><Link href="/login" className="hover:text-purple-600 transition-colors">Login</Link></li>
            <li><Link href="/register" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <img src="/placeholder.svg?height=1080&width=1920" alt="Background" className="w-full h-full object-cover" />
          </motion.div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white shadow-text">Unleash Your Creative Potential</h1>
            <p className="text-xl md:text-2xl mb-8 text-white shadow-text">The ultimate platform for UGC creators to shine and brands to thrive</p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-all transform hover:scale-105">
              Get Started for Free
            </Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Creators Love UGCY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "AI-Powered Insights", description: "Get smart recommendations to improve your content and reach" },
                { title: "Seamless Collaboration", description: "Work effortlessly with brands and fellow creators" },
                { title: "Monetization Made Easy", description: "Turn your passion into profit with our intuitive tools" }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">What Creators Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Alex K.", quote: "UGCY has completely transformed how I approach UGC. It's a game-changer!", avatar: "/placeholder.svg?height=100&width=100" },
                { name: "Samantha L.", quote: "I've tripled my income since joining UGCY. The opportunities here are endless!", avatar: "/placeholder.svg?height=100&width=100" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="italic mb-2">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Choose Your Path to Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "Free", features: ["Basic analytics", "5 project slots", "Community access"] },
                { name: "Pro", price: "$19/month", features: ["Advanced analytics", "Unlimited projects", "Priority support", "AI-powered insights"] },
                { name: "Enterprise", price: "Custom", features: ["All Pro features", "Dedicated account manager", "Custom integrations", "Team collaboration"] }
              ].map((plan, index) => (
                <div key={index} className="border border-purple-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-3xl font-semibold mb-6">{plan.price}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Choose Plan</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Take Your Content to the Next Level?</h2>
            <p className="text-xl mb-8">Join thousands of creators who are already crushing it with UGCY</p>
            <form className="max-w-md mx-auto flex">
              <Input type="email" placeholder="Enter your email" className="flex-grow mr-2 bg-white text-gray-900" />
              <Button type="submit" className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400">Instagram</a></li>
                <li><a href="#" className="hover:text-purple-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 UGCY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}