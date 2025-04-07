import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Github } from "lucide-react"

export default function Research() {
  const publications = [
    {
      title: "Advancements in Computer Vision for Traffic Monitoring",
      conference: "IEEE International Conference on Computer Vision",
      year: "2023",
      abstract:
        "This paper presents a novel approach to traffic monitoring using deep learning techniques for real-time violation detection.",
      github: "https://github.com/ramur/traffic-vision-research",
      paper: "https://ieee.org/papers/traffic-vision-2023",
    },
    {
      title: "Natural Language Processing for Mental Health Support",
      conference: "ACM Conference on Human Factors in Computing Systems",
      year: "2022",
      abstract:
        "A study on using NLP techniques to develop conversational agents for mental health support and early intervention.",
      github: "https://github.com/ramur/nlp-mental-health",
      paper: "https://acm.org/papers/nlp-mental-health-2022",
    },
    {
      title: "Distributed Systems for AI Model Training",
      conference: "International Conference on Distributed Computing Systems",
      year: "2023",
      abstract:
        "Exploring efficient distributed computing architectures for training large-scale AI models with reduced computational resources.",
      github: "https://github.com/ramur/distributed-ai-training",
      paper: "https://icdcs.org/papers/distributed-ai-2023",
    },
  ]

  return (
    <section id="research" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Research & Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="card-hover border-primary/20">
              <CardHeader>
                <CardTitle className="font-poppins">{pub.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {pub.conference} | {pub.year}
                </p>
              </CardHeader>
              <CardContent>
                <p>{pub.abstract}</p>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={pub.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={pub.paper} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    Paper
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

