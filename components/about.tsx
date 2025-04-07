import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 font-poppins">About Me</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              I'm a passionate AI & Full-Stack Developer currently pursuing Computer Science Engineering at PES
              University, Bangalore. I specialize in AI applications, full-stack web development, and machine learning
              research.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              My work includes AI-powered LMS platforms, traffic violation monitoring systems, generative AI models, and
              more. I'm constantly exploring new technologies and pushing the boundaries of what's possible with AI.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["AI", "ML", "Web Development", "Computer Vision", "NLP"].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <Button size="lg" variant="outline">
              <a href="Resume/Ram_Resume_6.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meeeeee.jpg-3u899idhu6zZoVM9OqqWOMq6SV5CFJ.jpeg"
                alt="Ramu R"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

