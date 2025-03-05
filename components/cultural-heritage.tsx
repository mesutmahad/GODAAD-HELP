import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CulturalHeritage() {
  return (
    <div className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Preserving Somali Heritage</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating and preserving the rich cultural traditions of Somalia for future generations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src="/GODAAD LOGO-01.jpg?height=600&width=600"
                alt="Traditional Somali cultural items"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Cultural Programs</h3>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Traditional Arts & Crafts</h4>
                  <p className="text-muted-foreground mb-2">
                    Workshops and exhibitions showcasing traditional Somali crafts, including weaving, pottery, and
                    jewelry making.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Music & Dance</h4>
                  <p className="text-muted-foreground mb-2">
                    Performances and classes featuring traditional Somali music, instruments, and dance forms for all
                    ages.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Oral History Project</h4>
                  <p className="text-muted-foreground mb-2">
                    Recording and preserving the stories and experiences of Somali elders to maintain connection with
                    cultural roots.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Culinary Traditions</h4>
                  <p className="text-muted-foreground mb-2">
                    Cooking classes and food festivals celebrating the diverse and flavorful Somali cuisine.
                  </p>
                </CardContent>
              </Card>
              <Button asChild>
                <Link href="/cultural-programs">Explore Our Cultural Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

