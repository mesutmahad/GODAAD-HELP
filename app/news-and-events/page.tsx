import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function NewsAndEventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-6 text-primary">News & Events</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Latest News</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Emergency Response to Drought in Somaliland</CardTitle>
                    <p className="text-sm text-muted-foreground">Published on July 15, 2023</p>
                  </CardHeader>
                  <CardContent>
                    <p>
                      GODAAD HELP has launched an emergency response to the severe drought affecting communities in
                      Somaliland. Our teams are providing water, food, and medical supplies to the most affected
                      areas...
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link href="/news/drought-response">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>New Education Initiative for Somali Refugee Youth</CardTitle>
                    <p className="text-sm text-muted-foreground">Published on June 28, 2023</p>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We're excited to announce a new education program for Somali refugee youth in Dadaab refugee camp,
                      Kenya. This initiative will provide access to secondary education and vocational training...
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link href="/news/refugee-education">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Upcoming Events</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Somali Cultural Festival - London</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>August 12-14, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>10:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>Southbank Centre, London</span>
                      </div>
                    </div>
                    <p className="mt-4">
                      Join us for a celebration of Somali culture, featuring traditional music, dance, poetry, food, and
                      crafts. This event aims to showcase the rich heritage of Somalia to both Somali and non-Somali
                      communities in London.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="/events/somali-cultural-festival-london">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Somali Youth Leadership Conference - Minneapolis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>September 5, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>University of Minnesota, Minneapolis</span>
                      </div>
                    </div>
                    <p className="mt-4">
                      A conference for young Somali-Americans aged 18-30, focusing on leadership skills, community
                      engagement, and preserving Somali culture while navigating life in the diaspora.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="/events/youth-leadership-conference">Register</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

