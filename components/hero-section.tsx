import { DonateButton } from "@/components/donate-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative bg-gradient-brand py-16 md:py-24 text-white">
      <div className="container relative">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Supporting the Somali Community</h1>
            <p className="text-xl mb-8 text-white/90">
              Dedicated to empowering Somalis through education, healthcare, community development, and cultural
              preservation. Join us in building a stronger future for Somali communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <DonateButton />
              <Button variant="outline" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
          <div className="h-full">
            <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/IMG_6188.JPG?height=480&width=640"
                alt="GODAAD HELP community support"
                width={640}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

