import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DonationForm } from "@/components/donation-form"

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="py-16 container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Support Our Cause</h1>
            <p className="text-xl text-muted-foreground">
              Your generosity enables us to continue our vital work with Somali communities. Every contribution helps us
              provide education, healthcare, and emergency relief where it's needed most.
            </p>
          </div>
          <DonationForm />
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Other Ways to Give</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold mb-2">Zakat & Sadaqah</h3>
                <p className="text-muted-foreground">
                  We accept Zakat and Sadaqah donations. Please call us to discuss how your contribution can be
                  directed.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold mb-2">By Post</h3>
                <p className="text-muted-foreground">
                  Send a check to: Somali Relief Foundation, 123 Community Street, Somalia, EC1A 1BB.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold mb-2">Corporate Partnerships</h3>
                <p className="text-muted-foreground">
                  Partner with us to support sustainable development projects in Somali communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

