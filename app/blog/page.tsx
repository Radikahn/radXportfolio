import Link from "next/link"
import { BlogPostPreview } from "@/components/blog-post-preview"
import blogPosts from "@/data/blog-posts.json"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0c090d] text-[#d9d9d9] pb-20">
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold text-[#dcc7be] mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostPreview
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              content={post.content}
              image={post.image}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-[#1c1c1c] text-[#dcc7be] border-[#dcc7be] hover:bg-[#dcc7be] hover:text-[#0c090d]"
          >
            <Link href="/blog/admin">Admin</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

