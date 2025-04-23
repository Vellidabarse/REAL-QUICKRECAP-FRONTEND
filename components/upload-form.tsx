"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, FileAudio, Loader2 } from "lucide-react"

export function UploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [email, setEmail] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFile(null)
        setEmail("")
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <Card className="p-6 max-w-md mx-auto">
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Upload Successful!</h3>
          <p className="text-muted-foreground mb-4">We'll email your meeting summary to {email} shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file">Upload Meeting Recording</Label>
            <div
              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => document.getElementById("file")?.click()}
            >
              {file ? (
                <div className="flex items-center justify-center gap-2">
                  <FileAudio className="h-6 w-6 text-purple-600" />
                  <span className="font-medium">{file.name}</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
                    <Upload className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                    <br />
                    MP3, WAV, M4A, or Zoom recordings
                  </div>
                </div>
              )}
              <Input id="file" type="file" accept="audio/*,video/*" className="hidden" onChange={handleFileChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email for Delivery</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            disabled={!file || !email || isUploading}
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload and Process
              </>
            )}
          </Button>
        </form>
      )}
    </Card>
  )
}
