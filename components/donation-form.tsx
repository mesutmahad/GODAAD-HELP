"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function DonationForm() {
  const [amount, setAmount] = useState<string>("")
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")

  const presetAmounts = ["10", "25", "50", "100"]

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Support Our Work</CardTitle>
        <CardDescription>
          Your donation helps us support Somali communities both locally and in Somalia through our education,
          healthcare, and development programs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex gap-4 mb-4">
              <Button
                variant={donationType === "one-time" ? "default" : "outline"}
                className="flex-1"
                onClick={() => setDonationType("one-time")}
              >
                One-time
              </Button>
              <Button
                variant={donationType === "monthly" ? "default" : "outline"}
                className="flex-1"
                onClick={() => setDonationType("monthly")}
              >
                Monthly
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Select an amount</label>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {presetAmounts.map((preset) => (
                <Button
                  key={preset}
                  variant={amount === preset ? "default" : "outline"}
                  onClick={() => setAmount(preset)}
                >
                  ${preset}
                </Button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                type="number"
                className="pl-7"
                placeholder="Other amount"
                value={amount === "" || !presetAmounts.includes(amount) ? amount : ""}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <Input placeholder="Enter your first name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <Input placeholder="Enter your last name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Donate {amount && `£${amount}`} {donationType === "monthly" && "Monthly"}
        </Button>
      </CardFooter>
    </Card>
  )
}

