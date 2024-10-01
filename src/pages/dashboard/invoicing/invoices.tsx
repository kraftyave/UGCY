import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function InvoicesPage() {
  const invoices = [
    { id: "INV-001", client: "BeachWear Co.", amount: 5000, status: "Paid" },
    { id: "INV-002", client: "TechGadget Inc.", amount: 7500, status: "Pending" },
    { id: "INV-003", client: "FitnessPro", amount: 3200, status: "Overdue" },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Invoices</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Invoice ID</th>
                <th className="text-left">Client</th>
                <th className="text-left">Amount</th>
                <th className="text-left">Status</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.client}</td>
                  <td>${invoice.amount}</td>
                  <td>{invoice.status}</td>
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