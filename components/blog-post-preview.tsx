import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPostPreviewProps {
  id: number
  title: string
  date: string
  content: string
  image: string
}

export function BlogPostPreview({ id, title, date, content, image }: BlogPostPreviewProps) {
  return (
    <Card className="bg-[#1c1c1c] border-[#dcc7be]">
      <CardHeader>
        <CardTitle className="text-2xl text-[#dcc7be]">{title}</CardTitle>
        <p className="text-sm text-[#d9d9d9]">{date}</p>
      </CardHeader>
      <CardContent>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <p className="text-[#d9d9d9]">{content.substring(0, 150)}...</p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${id}`} passHref>
          <Button className="bg-[#dcc7be] text-[#0c090d] hover:bg-[#d9d9d9]">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

