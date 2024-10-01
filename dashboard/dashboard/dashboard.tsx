import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Summer Campaign</li>
              <li>Product Launch</li>
              <li>Brand Refresh</li>
            </ul>
            <Button className="mt-4 w-full">View All Projects</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Proposal Draft - 2 days</li>
              <li>Content Delivery - 1 week</li>
              <li>Client Meeting - Tomorrow</li>
            </ul>
            <Button className="mt-4 w-full">View Schedule</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Active Projects: 5</li>
              <li>Pending Proposals: 3</li>
              <li>Overdue Invoices: 1</li>
            </ul>
            <Button className="mt-4 w-full">View Analytics</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}