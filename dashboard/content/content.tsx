import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContentLibraryPage() {
  const contentItems = [
    { id: "1", title: "Summer Beach Photoshoot", type: "Image", date: "2024-03-01" },
    { id: "2", title: "Product Unboxing Video", type: "Video", date: "2024-03-02" },
    { id: "3", title: "Tech Gadget Review", type: "Blog Post", date: "2024-03-03" },
    { id: "4", title: "Fitness Challenge Reel", type: "Video", date: "2024-03-04" },
    { id: "5", title: "Brand Collaboration Announcement", type: "Social Post", date: "2024-03-05" },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Content Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Type: {item.type}</p>
              <p>Date: {item.date}</p>
              <Button className="mt-4">View Content</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}