import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // In a real implementation, you would send an email here
    // For example, using nodemailer, SendGrid, or another email service
    console.log("Sending email to: ramu8317395904@gmail.com")
    console.log("From:", email)
    console.log("Name:", name)
    console.log("Message:", message)

    // For now, we'll just simulate a successful email send
    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

