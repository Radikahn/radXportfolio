import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Gamepad2, Users } from "lucide-react"

interface MinecraftServer {
  name: string
  description: string
  version: string
  playerCount: number
  maxPlayers: number
  ip: string
}

const servers: MinecraftServer[] = [
  {
    name: "Vanilla Survival",
    description:
      "Experience pure Minecraft gameplay on our Vanilla Survival server. Build, explore, and survive in a pristine world with a friendly community.",
    version: "1.21.4",
    ip: "vanilla.radikahn.com",
  },
  {
    name: "Modded Adventure",
    description:
      "Dive into an enhanced Minecraft experience with our Modded Adventure server. Discover new items, biomes, and challenges in a carefully curated modpack.",
    version: "1.18.2",
    ip: "modded.radikahn.com",
  },
]

export default function MCServersPage() {
  return (
    <div className="min-h-screen bg-[#0c090d] text-[#d9d9d9] pb-20">
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold text-[#dcc7be] mb-8">Minecraft Servers</h1>
        <p className="text-lg mb-8">
          Join our Minecraft community and explore unique worlds tailored for different playstyles. Whether you prefer
          vanilla survival or modded adventures, we have a server for you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servers.map((server) => (
            <Card key={server.name} className="bg-[#1c1c1c] border-[#dcc7be] text-[#d9d9d9]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#dcc7be]">{server.name}</CardTitle>
                <CardDescription className="text-[#d9d9d9]">{server.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2 text-[#d9d9d9]">
                  <span className="flex items-center">
                    <Gamepad2 className="mr-2" />
                    Version: {server.version}
                  </span>
                  <span className="flex items-center">
                    <Users className="mr-2" />
                    Players: {server.playerCount}/{server.maxPlayers}
                  </span>
                </div>
                <p className="text-sm text-[#d9d9d9]">Server IP: {server.ip}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#dcc7be] text-[#0c090d] hover:bg-[#d9d9d9] hover:text-[#0c090d]">
                  Join Server
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

