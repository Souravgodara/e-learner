import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Facebook, Github, Radio } from 'lucide-react'

export default function TeamSection() {
  const team = [
    {
      name: "Sunil Kumar",
      role: "Design Director",
      image: "/pic1.jpg",
    },
    {
      name: "Pallavi Sihag",
      role: "Lead Developer",
      image:"/pic2.jpg",
    },
    {
      name: "Sundar Garg",
      role: "Lead Designer",
      image: "/pic3.jpg",
    },
    {
      name: "Ankit Kumar",
      role: "Full Stack Developer",
      image: "/pic4.jpg",
    },
  ]

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-semibold text-slate-800">
          Our Executive Team
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
        Meet our dedicated executive team, a group of visionary leaders committed to driving innovation and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center space-y-4">
            <Avatar className="w-48 h-48">
              <AvatarImage src={member.image} alt={member.name}/>
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
            <div className="text-center space-y-1">
              <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
              <p className="text-slate-600">{member.role}</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-slate-600 hover:text-slate-900 transition-colors"
                aria-label={`Visit ${member.name}'s Reddit profile`}
              >
                <Radio className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-600 hover:text-slate-900 transition-colors"
                aria-label={`Visit ${member.name}'s Facebook profile`}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-600 hover:text-slate-900 transition-colors"
                aria-label={`Visit ${member.name}'s GitHub profile`}
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

