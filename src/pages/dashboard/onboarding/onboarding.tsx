import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ClientOnboardingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Client Onboarding</h1>
      <Card>
        <CardHeader>
          <CardTitle>New Client Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="clientName">Client Name</Label>
              <Input id="clientName" placeholder="Enter client name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="client@example.com" />
            </div>
            <div>
              <Label htmlFor="projectType">Project Type</Label>
              <select id="projectType" className="w-full p-2 border rounded">
                <option>Social Media Campaign</option>
                <option>Product Launch</option>
                <option>Brand Refresh</option>
                <option>Influencer Collaboration</option>
              </select>
            </div>
            <div>
              <Label htmlFor="budget">Budget</Label>
              <Input id="budget" type="number" placeholder="Enter budget" />
            </div>
            <div>
              <Label htmlFor="timeline">Project Timeline</Label>
              <Input id="timeline" type="date" />
            </div>
            <Button type="submit" className="w-full">Start Onboarding</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}