"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function NewPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("New post:", { title, content, image })
    // For demonstration, we'll just log the data and go back to the blog
    alert("Post created successfully!")
    router.push("/blog")
  }

  return (
    <div className="min-h-screen bg-[#0c090d] text-[#d9d9d9] pb-20">
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold text-[#dcc7be] mb-8">Create New Blog Post</h1>

        <Card className="max-w-2xl mx-auto bg-[#1c1c1c] border-[#dcc7be]">
          <CardHeader>
            <CardTitle className="text-2xl text-[#dcc7be]">New Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="title" className="text-[#d9d9d9]">
                  Title
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-[#0c090d] text-[#d9d9d9] border-[#dcc7be]"
                  required
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="content" className="text-[#d9d9d9]">
                  Content
                </Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="bg-[#0c090d] text-[#d9d9d9] border-[#dcc7be] h-40"
                  required
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="image" className="text-[#d9d9d9]">
                  Attach Image
                </Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="bg-[#0c090d] text-[#d9d9d9] border-[#dcc7be]"
                />
              </div>
              <div className="flex justify-between">
                <Button type="submit" className="bg-[#dcc7be] text-[#0c090d] hover:bg-[#d9d9d9]">
                  Create Post
                </Button>
                <Button
                  type="button"
                  onClick={() => router.push("/blog")}
                  variant="outline"
                  className="bg-[#1c1c1c] text-[#dcc7be] border-[#dcc7be] hover:bg-[#dcc7be] hover:text-[#0c090d]"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

