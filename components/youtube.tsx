"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Youtube, BookOpen } from "lucide-react"

export default function YouTube() {
  const [activeTab, setActiveTab] = useState("videos")

  const videos = [
    {
      id: "video1",
      title: "Introduction to AI and Machine Learning",
      thumbnail: "/placeholder.svg?height=180&width=320",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "video2",
      title: "Building Full-Stack Applications with Next.js",
      thumbnail: "/placeholder.svg?height=180&width=320",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "video3",
      title: "Computer Vision Projects for Beginners",
      thumbnail: "/placeholder.svg?height=180&width=320",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  const blogs = [
    {
      id: "blog1",
      title: "Getting Started with TensorFlow 2.0",
      date: "March 15, 2023",
      excerpt: "Learn how to set up TensorFlow 2.0 and build your first neural network model for image classification.",
      link: "https://aistreamx.com/blog/tensorflow-2-guide",
    },
    {
      id: "blog2",
      title: "The Future of AI in Healthcare",
      date: "January 22, 2023",
      excerpt:
        "Exploring how artificial intelligence is transforming healthcare diagnostics, treatment, and patient care.",
      link: "https://aistreamx.com/blog/ai-healthcare-future",
    },
    {
      id: "blog3",
      title: "Building Responsive UIs with TailwindCSS",
      date: "December 5, 2022",
      excerpt: "A comprehensive guide to creating beautiful, responsive user interfaces using TailwindCSS framework.",
      link: "https://aistreamx.com/blog/tailwindcss-guide",
    },
  ]

  return (
    <section id="youtube" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">YouTube & Blog</h2>

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="videos" onClick={() => setActiveTab("videos")}>
              <Youtube className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="blogs" onClick={() => setActiveTab("blogs")}>
              <BookOpen className="h-4 w-4 mr-2" />
              Blogs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="card-hover border-primary/20 overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base font-poppins">{video.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blogs" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Card key={blog.id} className="card-hover border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-base font-poppins">{blog.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{blog.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{blog.excerpt}</p>
                  </CardContent>
                  <CardContent className="pt-0">
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Read More →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

