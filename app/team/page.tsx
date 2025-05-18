import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Thyageshwar Chandran",
    role: "Faculty Advisor",
    image: "/placeholder.svg?height=300&width=300&text=JS",
    text: "Faculty Advisor Text",
  },
  {
    id: 2,
    name: "Smridhi Bhadra",
    role: "President",
    image: "/placeholder.svg?height=300&width=300&text=JD",
    text: "President Text",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Vice President",
    image: "/placeholder.svg?height=300&width=300&text=EJ",
    text: "",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Secretary",
    image: "/placeholder.svg?height=300&width=300&text=MB",
    text: "",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    role: "Treasurer",
    image: "/placeholder.svg?height=300&width=300&text=SW",
    text: "",
  },
  {
    id: 6,
    name: "David Lee",
    role: "Event Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=DL",
    text: "",
  },
]

export default function Team() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Meet the dedicated individuals who lead the Biophysical Society Student Chapter at NITW.
          </p>
        </div>
      </div>

      {/* Team Members */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8 flex flex-col items-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-100">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>

                  <h3 className="text-xl font-bold text-blue-950 mb-1">{member.name}</h3>
                  <p className="text-blue-700 mb-4">{member.role}</p>

                  <p className="text-gray-600 text-center mb-6">
                    {member.text}
                  </p>

                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                      <Facebook size={20} />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                      <Twitter size={20} />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                      <Linkedin size={20} />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-900 transition-colors">
                      <Mail size={20} />
                      <span className="sr-only">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-700 mb-8">
              We are always looking for passionate students to join our team. If you are interested in biophysics and
              want to be part of our community, we would love to hear from you.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-950 mb-4">Current Openings</h3>
              <ul className="space-y-4 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-900 font-medium text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Research Coordinator</h4>
                    <p className="text-gray-600 text-sm">
                      Coordinate research activities and projects within the chapter.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-900 font-medium text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Outreach Coordinator</h4>
                    <p className="text-gray-600 text-sm">
                      Manage outreach activities and community engagement programs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-900 font-medium text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Media & Communications</h4>
                    <p className="text-gray-600 text-sm">
                      Handle social media, website, and other communication channels.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
