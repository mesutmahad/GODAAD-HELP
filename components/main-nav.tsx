import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex items-center gap-6 text-sm">
      <Link href="/about-us" className="font-medium transition hover:text-primary">
        About Us
      </Link>
      <Link href="/get-support" className="font-medium transition hover:text-primary">
        Get Support
      </Link>
      <Link href="/get-involved" className="font-medium transition hover:text-primary">
        Get Involved
      </Link>
      <Link href="/news-and-events" className="font-medium transition hover:text-primary">
        News & Events
      </Link>
    </nav>
  )
}

