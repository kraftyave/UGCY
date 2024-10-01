"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Moon, Sun, User, Home, FileText, Calendar, PieChart, Search, Bell, Folder, DollarSign, FileCheck, Settings, Library, UserPlus } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Folder, label: "Projects", href: "/dashboard/projects" },
    { icon: FileText, label: "Proposals", href: "/dashboard/proposals" },
    { icon: Calendar, label: "Schedule", href: "/dashboard/schedule" },
    { icon: DollarSign, label: "Invoices", href: "/dashboard/invoices" },
    { icon: FileCheck, label: "Contracts", href: "/dashboard/contracts" },
    { icon: Library, label: "Content Library", href: "/dashboard/content" },
    { icon: PieChart, label: "Analytics", href: "/dashboard/analytics" },
    { icon: UserPlus, label: "Client Onboarding", href: "/dashboard/onboarding" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">UGCY</h1>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-2 space-y-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} passHref>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${
                        pathname === item.href ? "bg-gray-100 dark:bg-gray-700" : ""
                      }`}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <span className="text-sm">{isDarkMode ? 'Dark' : 'Light'} Mode</span>
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {/* Header */}
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
            <div className="flex items-center w-1/3">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <Input type="search" placeholder="Search..." className="w-full" />
            </div>
            <div className="flex items-center space-x-4">
              <Button size="icon" variant="ghost">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button size="icon" variant="ghost">
                <User className="h-5 w-5" />
                <span className="sr-only">User profile</span>
              </Button>
            </div>
          </header>

          {/* Page content */}
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}