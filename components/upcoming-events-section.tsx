import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

export function UpcomingEventsSection() {
  return (
    <div className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Join us at our upcoming events and help make a difference.</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <img
                  src="/somali cul.jpg?height=200&width=400"
                  alt="Somali Cultural Festival"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Somali Cultural Festival</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>May 15, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>12:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Community Center, London</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/events/cultural-festival">Join Festival</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <img
                  src="/Youth Leadership Workshop.jpg?height=200&width=400"
                  alt="Youth Leadership Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Youth Leadership Workshop</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June 22, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Somali Community Hub, Birmingham</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/events/leadership-workshop">Register Free</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <img
                  src="/Somali Health Awareness Day.jpg?height=200&width=400"
                  alt="Somali Health Awareness Day"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Somali Health Awareness Day</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 8, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>11:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Community Health Center, Mogadishu</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/events/health-day">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

