export default function Experience() {
  const experiences = [
    {
      title: "Content Creator",
      company: "AIStreamX (YouTube)",
      period: "Jan 15 2024 - Present",
      description:
        "Create educational content on AI, machine learning, and programming. Developed a community of tech enthusiasts and students interested in AI technologies.",
    },
    {
      title: "Freelance Developer",
      company: "Various Clients",
      period: "Jun 2024 - Present",
      description:
        "Developed custom web applications and AI solutions for clients. Implemented full-stack solutions using modern technologies and frameworks.",
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div
                className={`timeline-content ${index % 2 === 0 ? "timeline-content-left" : "timeline-content-right"}`}
              >
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-sm text-primary mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

