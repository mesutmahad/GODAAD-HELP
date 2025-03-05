import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <div className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Voices</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from Somali individuals and families whose lives have been impacted by our work and your
            generous support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img src="/hassan.jpg?height=60&width=60" alt="Amina" className="object-cover w-full h-full" />
                </div>
                <h3 className="font-bold">Hassan, 35</h3>
              </div>
              <p className="text-muted-foreground italic">
                "After arriving in the UK, I felt lost and isolated. The foundation's language classes and community
                gatherings helped me connect with other Somalis and build a support network. Their immigration advice
                service was invaluable in helping my family settle here."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img src="/aamina.jpg?height=60&width=60" alt="Hassan" className="object-cover w-full h-full" />
                </div>
                <h3 className="font-bold">Aamina,28</h3>
              </div>
              <p className="text-muted-foreground italic">
                "The educational support program helped my children maintain their connection to Somali culture while
                excelling in their studies. The homework club and mentorship program have been transformative for their
                confidence and academic success."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img src="/Abdi.jpg?height=60&width=60" alt="Fawzia" className="object-cover w-full h-full" />
                </div>
                <h3 className="font-bold">Abdi, 30</h3>
              </div>
              <p className="text-muted-foreground italic">
                "The foundation's business skills workshop helped me start my own catering business. Their microloan
                program and ongoing mentorship turned my passion for Somali cuisine into a thriving enterprise that now
                employs three other women from our community."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

