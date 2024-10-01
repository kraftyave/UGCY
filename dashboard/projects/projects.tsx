import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Summer Campaign", "Product Launch", "Brand Refresh", "Social Media Blitz", "Influencer Collab"].map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Project details go here...</p>
              <Button className="w-full">View Project</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}