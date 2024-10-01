import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContractsPage() {
  const contracts = [
    { id: "CON-001", client: "BeachWear Co.", type: "Collaboration Agreement", status: "Active" },
    { id: "CON-002", client: "TechGadget Inc.", type: "Sponsorship Contract", status: "Pending Signature" },
    { id: "CON-003", client: "FitnessPro", type: "Content Creation Agreement", status: "In Negotiation" },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contracts</h1>
      <Card>
        <CardHeader>
          <CardTitle>Active Contracts</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Contract ID</th>
                <th className="text-left">Client</th>
                <th className="text-left">Type</th>
                <th className="text-left">Status</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => (
                <tr key={contract.id}>
                  <td>{contract.id}</td>
                  <td>{contract.client}</td>
                  <td>{contract.type}</td>
                  <td>{contract.status}</td>
                  <td>
                    <Button size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}