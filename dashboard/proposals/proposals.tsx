import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProposalsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Proposals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Summer Campaign Proposal", "Product Launch Strategy", "Brand Refresh Pitch"].map((proposal, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{proposal}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Proposal details go here...</p>
              <Button className="w-full">Edit Proposal</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}