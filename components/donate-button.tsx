import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DonateButtonProps {
  className?: string
}

export function DonateButton({ className }: DonateButtonProps) {
  return (
    <Button
      size="lg"
      asChild
      className={cn("rounded-full gap-2 bg-secondary hover:bg-secondary/90 text-white", className)}
    >
      <Link href="/donate">
        <Heart className="h-4 w-4" />
        <span>Support Our Community</span>
      </Link>
    </Button>
  )
}

