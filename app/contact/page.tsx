import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

const contactInfo = [
  {
    platform: "LinkedIn",
    username: "Radman Shahbazkhan",
    url: "https://www.linkedin.com/in/radman-shahbazkhan-3799302b2/",
    icon: Linkedin,
  },
  {
    platform: "GitHub",
    username: "Radikahn",
    url: "https://github.com/Radikahn",
    icon: Github,
  },
  {
    platform: "Instagram",
    username: "@radikahn",
    url: "https://www.instagram.com/radikahn/",
    icon: Instagram,
  },
  {
    platform: "Email",
    username: "radi@radikahn.com",
    url: "mailto:radi@radikahn.com",
    icon: Mail,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0c090d] text-[#d9d9d9] pb-20">
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold text-[#dcc7be] mb-8">Contact Me</h1>
        <p className="text-lg mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the
          following channels:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((contact) => (
            <Card key={contact.platform} className="bg-[#1c1c1c] border-[#dcc7be]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#dcc7be] flex items-center">
                  <contact.icon className="mr-2" />
                  {contact.platform}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d9d9d9] hover:text-[#dcc7be] transition-colors"
                >
                  {contact.username}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#dcc7be] mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            Whether you have a question about my projects, want to discuss a potential collaboration, or just want to
            say hello, I'd love to hear from you. Don't hesitate to reach out through any of the platforms above.
          </p>
          <p className="text-lg">
            I'm particularly interested in opportunities related to software development, Minecraft server
            administration, and data visualization projects. Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </div>
  )
}

