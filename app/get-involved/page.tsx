import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Handshake, Heart, Users, Globe } from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-6 text-primary">Get Involved</h1>
          <p className="text-xl mb-12">
            There are many ways you can support the Somali community and make a difference. Choose how you'd like to
            contribute:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Donate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Your financial support helps us provide essential services and run community programs both in Somalia
                  and for diaspora communities.
                </p>
                <Button asChild>
                  <Link href="/donate">Make a Donation</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Share your skills and time to support our initiatives in Somalia or in Somali diaspora communities
                  worldwide.
                </p>
                <Button asChild>
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Handshake className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Partner With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Collaborate with us on projects or become a corporate sponsor to support our mission of empowering
                  Somali communities.
                </p>
                <Button asChild>
                  <Link href="/partner">Partner With Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Current Initiatives</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <h3 className="font-bold">Emergency Relief in Somalia</h3>
                  <p className="text-muted-foreground">
                    Support our efforts to provide food, water, and medical supplies to communities affected by drought
                    and conflict in Somalia.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <h3 className="font-bold">Education for Somali Refugees</h3>
                  <p className="text-muted-foreground">
                    Help us provide educational resources and support for Somali refugees in camps across East Africa.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <h3 className="font-bold">Diaspora Youth Mentorship</h3>
                  <p className="text-muted-foreground">
                    Mentor young Somalis in diaspora communities to help them navigate education, career choices, and
                    cultural identity.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <h3 className="font-bold">Somali Language and Culture Preservation</h3>
                  <p className="text-muted-foreground">
                    Support our programs to preserve and promote Somali language and cultural heritage in diaspora
                    communities.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Where We Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Globe className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Somalia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our primary focus is on providing aid and development support within Somalia, including Mogadishu,
                    Hargeisa, Kismayo, and rural areas affected by drought and conflict.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/our-work/somalia">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Diaspora Communities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We support Somali diaspora communities in countries including the UK, USA, Canada, Sweden, and
                    Kenya, focusing on integration, cultural preservation, and community development.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/our-work/diaspora">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

