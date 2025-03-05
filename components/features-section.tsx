import { Heart, LifeBuoyIcon as Lifebelt, Handshake } from "lucide-react"

export function FeaturesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">How We Support Somalis</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our foundation focuses on key areas that address the unique challenges and opportunities within the Somali
            community.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Community Support</h3>
            <p className="text-muted-foreground">
              We provide culturally sensitive support services including language assistance, immigration guidance, and
              family counseling for Somali individuals and families.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <Lifebelt className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Education & Skills</h3>
            <p className="text-muted-foreground">
              We offer educational programs, scholarships, language classes, and vocational training to help Somalis
              build skills and access better opportunities.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <Handshake className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Cultural Preservation</h3>
            <p className="text-muted-foreground">
              We celebrate and preserve Somali heritage through cultural events, language programs, and initiatives that
              connect younger generations with their roots.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

