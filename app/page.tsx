import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Zap, Upload, Headphones, ListChecks } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { PricingSection } from "@/components/pricing-section"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GQR%20FINAL%20DRAFT-3eu9SKURQ6erOCtZ13KI0KF6jLYjPJ.png"
              alt="Get Quick Recap Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="text-xl font-semibold">Get Quick Recap</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              How It Works
            </a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Why Get Quick Recap?
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" className="text-sm">
              Log In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
              Turn meetings into clear action. <span className="text-blue-600">Instantly.</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl">No bots, no dashboards. Just upload and go.</p>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Get Quick Recap turns your meeting recordings into short, useful summaries and clear action
              items—delivered to your inbox or Slack.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white flex-1 border-0"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Your First Meeting
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">No login required. Try it free.</div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-background dark:to-gray-900"
        >
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">How Get Quick Recap Works</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Three simple steps to transform your meetings into actionable insights
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6">
                  <Upload className="h-8 w-8 text-amber-600 dark:text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Upload your audio</h3>
                <p className="text-muted-foreground">
                  Drag and drop a Zoom file, Google Meet recording, or voice memo.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-teal-600 dark:text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Let AI do the heavy lifting</h3>
                <p className="text-muted-foreground">We transcribe and extract key takeaways + action items.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Get results instantly</h3>
                <p className="text-muted-foreground">A clean summary and to-do list arrives via email or Slack.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">Less chaos, more clarity.</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Focus on the conversation, not on taking notes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border border-gray-200 hover:border-blue-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No setup needed</h3>
                <p className="text-muted-foreground">No bots, no permissions, no accounts. Just upload a file.</p>
              </Card>
              <Card className="p-6 border border-gray-200 hover:border-amber-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                  <ListChecks className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clear and actionable</h3>
                <p className="text-muted-foreground">Not just a transcript. You get short summaries + to-dos.</p>
              </Card>
              <Card className="p-6 border border-gray-200 hover:border-teal-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-teal-600 dark:text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Works with any audio</h3>
                <p className="text-muted-foreground">From meetings to voice notes. Any format, any length.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background"
        >
          <PricingSection />
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 border border-gray-200 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 text-amber-600 dark:text-amber-500">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-xl italic mb-6">
                    "I stopped taking notes the moment I tried Get Quick Recap. Now every call ends with clarity."
                  </p>
                  <div className="font-semibold">Amira M.</div>
                  <div className="text-sm text-muted-foreground">Startup Founder</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-800 dark:to-teal-800">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Let your next meeting summarise itself.</h2>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Upload className="mr-2 h-4 w-4" />
              Upload Your First Meeting
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-20 bg-gradient-to-b from-white to-amber-50 dark:from-background dark:to-gray-900"
        >
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What file types are supported?</AccordionTrigger>
                  <AccordionContent>MP3, M4A, WAV, and most Zoom/Meet audio formats.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my data private?</AccordionTrigger>
                  <AccordionContent>
                    Yes—your files are deleted after processing unless you choose to save them.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you support video?</AccordionTrigger>
                  <AccordionContent>Audio-only for now. Video support coming soon.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How long does processing take?</AccordionTrigger>
                  <AccordionContent>
                    Most recordings are processed within 5-10 minutes, depending on the length of the audio. Pro and
                    Team plans get priority processing.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GQR%20FINAL%20DRAFT-3eu9SKURQ6erOCtZ13KI0KF6jLYjPJ.png"
                  alt="Get Quick Recap Logo"
                  width={32}
                  height={32}
                  className="dark:invert"
                />
                <span className="text-xl font-semibold">Get Quick Recap</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Instantly summarise meetings and extract action items from audio files.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-muted-foreground hover:text-foreground">
                    Why Get Quick Recap?
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Get Quick Recap. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
