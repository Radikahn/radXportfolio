import type { NextApiRequest, NextApiResponse } from "next"
import { exec } from "child_process"
import { promisify } from "util"

const execPromise = promisify(exec)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { stdout, stderr } = await execPromise("python scripts/formula_db.py")

    if (stderr) {
      console.error("stderr:", stderr)
      return res.status(500).json({ error: "An error occurred while running the Python script" })
    }

    const data = JSON.parse(stdout)
    res.status(200).json(data)
  } catch (error) {
    console.error("Error:", error)
    res.status(500).json({ error: "An error occurred while processing the request" })
  }
}

