"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Upload, Loader2 } from "lucide-react"
import { useState } from "react"
import { checkout } from "@/lib/checkout"

export function PricingSection() {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleCheckout = async (plan: string) => {
    try {
      setIsLoading(plan)
      await checkout(plan)
    } catch (error) {
      console.error("Error in handleCheckout:", error)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-center mb-6">Simple, honest pricing.</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
        Choose the plan that works best for you and your team. No hidden fees.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-end">
          <div className="flex flex-col items-center">
            <button
              data-plan="solo"
              onClick={() => handleCheckout("solo")}
              disabled={isLoading !== null}
              className="relative overflow-hidden group bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-600 rounded-xl px-8 py-6 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-70 w-full"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">Solo</h3>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {isLoading === "solo" ? <Loader2 className="h-8 w-8 animate-spin mx-auto" /> : "£9.99"}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">Most Popular</div>
            <button
              data-plan="team"
              onClick={() => handleCheckout("team")}
              disabled={isLoading !== null}
              className="relative overflow-hidden group bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-600 rounded-xl px-8 py-6 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 w-full"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">Team</h3>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {isLoading === "team" ? <Loader2 className="h-8 w-8 animate-spin mx-auto" /> : "£19.99"}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              data-plan="unlimited"
              onClick={() => handleCheckout("unlimited")}
              disabled={isLoading !== null}
              className="relative overflow-hidden group bg-white dark:bg-gray-800 border-2 border-amber-200 dark:border-amber-800 hover:border-amber-500 dark:hover:border-amber-600 rounded-xl px-8 py-6 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-70 w-full"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">Unlimited</h3>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-4">
                  {isLoading === "unlimited" ? <Loader2 className="h-8 w-8 animate-spin mx-auto" /> : "£39.99"}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">All plans include:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-500" />
              <span>Unlimited uploads</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-500" />
              <span>Email & Slack delivery</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
              <span>Priority support</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white"
            onClick={() => handleCheckout("free_trial")}
            disabled={isLoading !== null}
          >
            {isLoading === "free_trial" ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Upload className="mr-2 h-4 w-4" />
            )}
            {isLoading === "free_trial" ? "Processing..." : "Start Free"}
          </Button>
        </div>
      </div>
    </div>
  )
}
