import { checkoutFallback } from "./checkout-fallback"

export async function checkout(plan: string) {
  try {
    console.log(`Starting checkout process for plan: ${plan}`)

    // Try the API first
    try {
      const res = await fetch("https://getquickrecap.com/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ plan }),
        // Add these options to handle CORS properly
        mode: "cors",
        credentials: "same-origin",
      })

      console.log(`Received response with status: ${res.status}`)

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`)
      }

      const data = await res.json()

      if (!data || !data.url) {
        throw new Error("No checkout URL returned from API")
      }

      // Redirect to the checkout URL
      console.log(`Redirecting to: ${data.url}`)
      window.location.href = data.url
      return true
    } catch (apiError) {
      console.warn("API checkout failed, using fallback:", apiError)
      // If the API fails, use the fallback
      return checkoutFallback(plan)
    }
  } catch (error) {
    console.error("Checkout error:", error)

    // Provide a more user-friendly error message
    if (error instanceof Error) {
      alert(`Checkout error: ${error.message}`)
    } else {
      alert("An unexpected error occurred during checkout. Please try again later.")
    }

    return false
  }
}
