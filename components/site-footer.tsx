import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gradient-brand text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GODAAD%20LOGO-01.jpg-Nq8sgAoTBJK839M0ac6CI5MH34CYU5.jpeg"
              alt="GODAAD HELP Logo"
              width={200}
              height={200}
              className="mb-4"
            />
            <p className="text-white/90 mb-4">
              Empowering Somali communities through education, healthcare, cultural preservation, and sustainable
              development initiatives.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/90 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/90 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/90 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/90 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-white/90 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white/90 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/news-and-events" className="text-white/90 hover:text-white">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/90 hover:text-white">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/helpline" className="text-white/90 hover:text-white">
                  Helpline
                </Link>
              </li>
              <li>
                <Link href="/local-support" className="text-white/90 hover:text-white">
                  Local Support
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/90 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/professional-support" className="text-white/90 hover:text-white">
                  Professional Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic text-white/90">
              <p>GODAAD HELP</p>
              <p>123 Community Street</p>
              <p>Somali, Mogadishu</p>
              <p>EC1A 1BB</p>
              <p className="mt-2">0800 123 4567</p>
              <p>info@godaadhelp.org</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-white/90 text-sm">
              &copy; {new Date().getFullYear()} GODAAD HELP. Registered Charity No. 123456.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/90">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

