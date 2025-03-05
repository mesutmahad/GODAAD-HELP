import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-6 text-primary">About GODAAD HELP</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4">
                GODAAD HELP is dedicated to supporting and empowering Somali communities both in Somalia and in the
                diaspora. Our mission is to preserve Somali culture, provide essential support services, and create
                opportunities for education and professional development.
              </p>
              <p className="text-lg mb-4">
                Founded in 2010 by a group of Somali diaspora leaders, we have grown to become a vital resource for
                Somalis facing challenges in their homeland and in countries where they have resettled.
              </p>
              <p className="text-lg mb-6">Our work spans across various areas including:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Emergency relief in Somalia</li>
                <li>Education and vocational training programs</li>
                <li>Healthcare initiatives in Somalia and refugee camps</li>
                <li>Cultural preservation and language programs</li>
                <li>Integration support for Somali refugees and immigrants</li>
                <li>Advocacy for Somali rights and interests</li>
              </ul>
              <Button asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
            <div className="relative h-[500px] bg-muted rounded-lg overflow-hidden">
              <img
                src="/GODAAD LOGO-01.jpg?height=400&width=600"
                alt="GODAAD HELP team working in Somalia"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

