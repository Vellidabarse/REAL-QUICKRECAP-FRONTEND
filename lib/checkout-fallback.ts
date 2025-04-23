// This is a fallback in case the API checkout doesn't work
export function checkoutFallback(plan: string) {
  // Map of plans to their respective URLs
  const planUrls: Record<string, string> = {
    solo: "https://getquickrecap.com/checkout/solo",
    team: "https://getquickrecap.com/checkout/team",
    unlimited: "https://getquickrecap.com/checkout/unlimited",
    free_trial: "https://getquickrecap.com/free-trial",
  }

  const url = planUrls[plan] || "https://getquickrecap.com/pricing"

  // Navigate to the appropriate URL
  window.location.href = url

  return true
}
