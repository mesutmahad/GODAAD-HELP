import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Input } from "@/components/ui/input";
import { DonateButton } from "@/components/donate-button";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="bg-gradient-brand py-2">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-white">
            We're here for you. Call our Somali-speaking helpline:{" "}
            <strong>0800 123 4567</strong>
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="https://facebook.com"
              className="text-white hover:text-white/80"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-white hover:text-white/80"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-white hover:text-white/80"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-white hover:text-white/80"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-white hover:text-white/80"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex h-16 items-center justify-between py-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GODAAD%20LOGO-01.jpg-Nq8sgAoTBJK839M0ac6CI5MH34CYU5.jpeg"
              alt="GODAAD HELP Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden md:flex">
            <MainNav />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <form className="relative w-60">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-full bg-background pl-8 pr-4"
              />
            </form>
            <DonateButton />
          </div>
          <div className="flex md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
