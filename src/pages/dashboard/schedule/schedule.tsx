import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export default function SchedulePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={new Date()} className="rounded-md border" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Client Meeting - 10:00 AM</li>
              <li>Content Shoot - 2:00 PM</li>
              <li>Team Brainstorm - 4:30 PM</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}