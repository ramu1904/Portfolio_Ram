"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, X, Send, Minimize2, Maximize2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! I'm Ramu's AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! I'll make sure Ramu gets it.",
        "That's an interesting question about AI. Ramu specializes in this area!",
        "I'd be happy to tell you more about Ramu's projects and experience.",
        "You can contact Ramu directly through the contact form above.",
        "Ramu is currently working on several exciting AI and web development projects.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <>
      {/* Chatbot Button */}
      <Button onClick={toggleChatbot} className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg" size="icon">
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card
          className={`fixed bottom-20 right-4 w-80 md:w-96 shadow-xl transition-all duration-300 ${
            isMinimized ? "h-16" : "h-96"
          }`}
        >
          <CardHeader className="p-3 flex flex-row items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meeeeee.jpg-3u899idhu6zZoVM9OqqWOMq6SV5CFJ.jpeg"
                  alt="Ramu R"
                />
                <AvatarFallback>RR</AvatarFallback>
              </Avatar>
              <CardTitle className="text-sm font-poppins">Ramu's Assistant</CardTitle>
            </div>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleMinimize}>
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-3 overflow-y-auto h-[calc(100%-7rem)]">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 ${
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="p-3">
                <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={!input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </>
  )
}

