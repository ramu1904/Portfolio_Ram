import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, GraduationCap, School } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      title: "B.Tech in Computer Science",
      institution: "PES University, Bangalore",
      period: "2022 - 2026",
      details: ["Specialization: AI & Machine Learning", "CGPA: 7.0/10"],
      icon: GraduationCap,
    },
    {
      title: "Pre University - Science PCMB",
      institution: "Alva's PU College Moodabidiri, Karnataka PU Board",
      period: "2020 - 2022",
      details: ["Percentage: 96%"],
      icon: School,
    },
    {
      title: "High School",
      institution: "National High School Yeldur, Karnataka State Board",
      period: "2017 - 2020",
      details: ["Percentage: 95.36%"],
      icon: BookOpen,
    },
  ]

  return (
    <section id="education" className="py-24 bg-black">
      <div className="container-custom">
        <h2 className="section-title">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="bg-card border-secondary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <edu.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{edu.title}</h3>
                </div>
                <p className="text-sm text-primary mb-4">
                  {edu.institution} | {edu.period}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

