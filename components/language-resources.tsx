import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, FileText, Video } from "lucide-react"

export function LanguageResources() {
  return (
    <div className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Somali Language Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preserving and celebrating the Somali language through educational resources and cultural materials.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Language Learning</CardTitle>
              <CardDescription>Resources for learning and practicing Somali</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Beginner Somali courses</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Intermediate conversation practice</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Advanced literacy programs</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Children's language classes</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full mt-4">
                <Link href="/resources/language-learning">View Resources</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Literature & Poetry</CardTitle>
              <CardDescription>Celebrating Somali literary traditions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Classic Somali poetry collections</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Contemporary Somali authors</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Poetry recitation events</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Writing workshops</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full mt-4">
                <Link href="/resources/literature">Explore Literature</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Digital Resources</CardTitle>
              <CardDescription>Modern tools for language preservation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Somali language apps</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Online dictionaries</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Educational videos</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <span>Podcast series in Somali</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full mt-4">
                <Link href="/resources/digital">Access Digital Tools</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

