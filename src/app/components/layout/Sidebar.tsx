"use client";

import Link from "next/link"
import { Home, Package2, BookOpen, Users, Settings, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"
  }

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Publisher DB</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/')}`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/domains"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/domains')}`}
            >
              <Globe className="h-4 w-4" />
              Domains
            </Link>
            <Link
              href="/publishers"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/publishers')}`}
            >
              <BookOpen className="h-4 w-4" />
              Publishers
            </Link>
            <Link
              href="/users"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/users')}`}
            >
              <Users className="h-4 w-4" />
              Users
            </Link>
            <Link
              href="/settings"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/settings')}`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}