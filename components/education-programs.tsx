import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, BookOpen, Briefcase, Users } from "lucide-react"

export function EducationPrograms() {
  return (
    <div className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education & Skills Development</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering the Somali community through education, training, and professional development opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <GraduationCap className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl">Academic Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Homework clubs</li>
                <li>University application support</li>
                <li>Scholarship programs</li>
                <li>Tutoring services</li>
              </ul>
              <Button variant="link" asChild className="p-0 h-auto mt-4">
                <Link href="/education/academic">Learn more →</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl">Language & Literacy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>English language classes</li>
                <li>Somali language preservation</li>
                <li>Adult literacy programs</li>
                <li>Bilingual education support</li>
              </ul>
              <Button variant="link" asChild className="p-0 h-auto mt-4">
                <Link href="/education/language">Learn more →</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Briefcase className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl">Vocational Training</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Digital skills workshops</li>
                <li>Career counseling</li>
                <li>Professional certifications</li>
                <li>Entrepreneurship training</li>
              </ul>
              <Button variant="link" asChild className="p-0 h-auto mt-4">
                <Link href="/education/vocational">Learn more →</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl">Youth Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Leadership development</li>
                <li>Mentorship programs</li>
                <li>Cultural identity workshops</li>
                <li>Sports and recreation</li>
              </ul>
              <Button variant="link" asChild className="p-0 h-auto mt-4">
                <Link href="/education/youth">Learn more →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/education">View All Educational Programs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

