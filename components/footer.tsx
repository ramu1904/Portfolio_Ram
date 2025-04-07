import { Github, Linkedin, Mail, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/ramu1904" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ramu-r-nayak1904" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/ramur" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@aistreamx?si=JII3jfj9UJshAgzM" },
    { name: "Email", icon: Mail, url: "mailto:ramu8317395904@gmail.com" },
  ]

  return (
    <footer className="py-12 border-t border-secondary bg-black">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-xl font-bold mb-6 font-poppins">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/30 hover:bg-primary/30 transition-colors flex items-center gap-2"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary/30 pt-6 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Ramu R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

