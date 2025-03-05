import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <div className="py-16 bg-muted">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive updates on our work with Somali communities, upcoming cultural
            events, and ways you can support our initiatives.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
              aria-label="Your email address"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
}

