import { Calendar, Users, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GetInvolvedSection() {
  return (
    <div className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There are many ways you can help make a difference. Join our community of supporters and volunteers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 flex flex-col">
            <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Make a Donation</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              Your donation supports vital programs for Somali communities, from emergency relief to education and
              healthcare initiatives both locally and in Somalia.
            </p>
            <Button asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
          <div className="border rounded-lg p-6 flex flex-col">
            <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Volunteer</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              Join our network of volunteers to help with translation, mentoring, event organization, or sharing
              professional skills with the Somali community.
            </p>
            <Button asChild variant="outline">
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
          <div className="border rounded-lg p-6 flex flex-col">
            <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fundraise</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              Organize a fundraising event in your community or participate in cultural celebrations to raise awareness
              and funds for Somali relief projects.
            </p>
            <Button asChild variant="outline">
              <Link href="/fundraise">Start Fundraising</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

