import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Phone, MessageCircle, MapPin, Calendar } from "lucide-react"

export default function GetSupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-gradient-brand text-white py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Support Services for Somalis</h1>
              <p className="text-xl text-white/90 mb-6">
                We provide a range of culturally sensitive support services designed specifically for the Somali
                community, both in Somalia and abroad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary">
                  <a href="#helpline">Helpline</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <a href="#community-centers">Community Centers</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <a href="#somalia-programs">Somalia Programs</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <a href="#diaspora-support">Diaspora Support</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div id="helpline" className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Somali Helpline</h2>
                <p className="text-lg mb-6">
                  Our helpline provides confidential support and advice in Somali, Arabic, and English. Our trained
                  advisors can help with a wide range of issues faced by Somalis worldwide.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Call Us</h3>
                      <p className="text-muted-foreground mb-1">International: +44 800 123 4567</p>
                      <p className="text-muted-foreground mb-1">Somalia: 252 xxx xxx xxx</p>
                      <p className="text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 mt-1">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">WhatsApp Support</h3>
                      <p className="text-muted-foreground mb-1">+44 7xxx xxx xxx</p>
                      <p className="text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-8" size="lg" asChild>
                  <Link href="/helpline">Contact Our Helpline</Link>
                </Button>
              </div>
              <div className="h-full">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=480&width=640"
                    alt="Helpline support staff"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="community-centers" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Community Centers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our community centers provide safe spaces for Somali individuals and families to access support, connect
                with others, and participate in cultural activities.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Mogadishu Center</CardTitle>
                  <CardDescription>Main Hub in Somalia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">Wadajir District, Mogadishu, Somalia</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">Open daily, 8am - 6pm</p>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <h4 className="font-bold mb-2">Services Available:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Emergency relief coordination</li>
                        <li>• Healthcare clinic</li>
                        <li>• Education programs</li>
                        <li>• Vocational training</li>
                        <li>• Cultural events</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>London Center</CardTitle>
                  <CardDescription>Diaspora Support Hub</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">Tower Hamlets, London, UK</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">Monday - Saturday, 10am - 8pm</p>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <h4 className="font-bold mb-2">Services Available:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Immigration advice</li>
                        <li>• Language classes</li>
                        <li>• Youth activities</li>
                        <li>• Employment support</li>
                        <li>• Cultural preservation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nairobi Center</CardTitle>
                  <CardDescription>Refugee Support Hub</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">Eastleigh, Nairobi, Kenya</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">Monday - Friday, 9am - 5pm</p>
                    </div>
                    <div className="border-t pt-4 mt-4">
                      <h4 className="font-bold mb-2">Services Available:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Refugee assistance</li>
                        <li>• Education programs</li>
                        <li>• Healthcare referrals</li>
                        <li>• Legal aid</li>
                        <li>• Resettlement support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/community-centers">Find Your Nearest Center</Link>
              </Button>
            </div>
          </div>
        </div>

        <div id="somalia-programs" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-primary">Programs in Somalia</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Relief</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We provide emergency food, water, and medical supplies to communities affected by drought, conflict,
                    or other crises in Somalia.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/programs/emergency-relief">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Education Initiatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our programs support schools, provide scholarships, and offer vocational training to empower Somali
                    youth with knowledge and skills.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/programs/education">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Healthcare Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We run mobile clinics, support local hospitals, and provide essential medical supplies to improve
                    healthcare access in Somalia.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/programs/healthcare">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sustainable Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our projects focus on agriculture, clean water, and renewable energy to build sustainable
                    livelihoods in Somali communities.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/programs/development">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div id="diaspora-support" className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4 text-primary">Diaspora Support</h2>
                <p className="text-lg mb-6">
                  We provide comprehensive support to Somali diaspora communities, helping them integrate while
                  maintaining their cultural identity.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-xl mb-1">Integration Assistance</h3>
                    <p className="text-muted-foreground">
                      Support with housing, employment, and navigating local systems in new countries.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-xl mb-1">Language & Education</h3>
                    <p className="text-muted-foreground">
                      Language classes, homework clubs, and adult education programs.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-xl mb-1">Cultural Preservation</h3>
                    <p className="text-muted-foreground">
                      Somali language classes, cultural events, and community gatherings.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-xl mb-1">Mental Health Support</h3>
                    <p className="text-muted-foreground">
                      Culturally sensitive counseling and support groups for Somali immigrants and refugees.
                    </p>
                  </div>
                </div>
                <Button className="mt-8" asChild>
                  <Link href="/diaspora-support">Access Diaspora Services</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Somali diaspora community event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

