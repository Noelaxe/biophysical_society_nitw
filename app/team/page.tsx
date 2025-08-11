import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Thyageshwar Chandran",
    role: "Chapter Sponsor",
    image: "/images/members_photos/Thyageshwar_Chandran.jpeg",
    text: "Assistant Professor at the Department of Biotechnology, NITW",
    email: "mailto:thyagesh@nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/thyageshwar/?originalSubdomain=in"
  },
  {
    id: 2,
    name: "Smridhi Bhadra",
    role: "President",
    image: "/images/members_photos/Smridhi_Bhadra.jpeg",
    text: "4th Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:sb22btb0a04@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/smridhi-bhadra-2020/"
  },
  {
    id: 3,
    name: "Parnasri Ghosh",
    role: "Vice President",
    image: "/images/members_photos/Parnasri_Ghosh.jpeg",
    text: "4th Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:pg22btb0a39@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/parnasri-ghosh-930810269/"
  },
  {
    id: 4,
    name: "Aman Inamdar",
    role: "Secretary",
    image: "/images/members_photos/Anam_Imandar.jpeg",
    text: "4th Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:aa22btb0a07@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/aman-inamdar-6a94aa256/"
  },
  {
    id: 5,
    name: "Sanskriti Kadam",
    role: "Treasurer",
    image: "/images/members_photos/Sanskriti_Kadam.jpeg",
    text: "4th Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:sa22btb0a05@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/sanskriti-kadam-31620026a/"
  },
  {
    id: 6,
    name: "Akhil Mathew Biju",
    role: "Executive Member",
    image: "/images/members_photos/Akhil.jpeg",
    text: "3rd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:am23btb0a01@student.nitw.ac.in",
    linkedin: ""
  },
  {
    id: 7,
    name: "Aadvik Bhardwaj",
    role: "Executive Member",
    image: "/images/members_photos/Aadwik-Bhardwaj.jpeg",
    text: "3rd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:ab23btb0a11@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/aadvik-bhardwaj-718359226"
  },
  {
    id: 8,
    name: "Vahini Yanduri",
    role: "Executive Member",
    image: "/images/members_photos/Vahini.jpeg",
    text: "3rd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:vy23btb0f02@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/vahini-yanduri-a21487298"
  },
  {
    id: 9,
    name: "Anoushka Chatterjee",
    role: "Executive Member",
    image: "/images/members_photos/Anoushka.jpeg",
    text: "3rd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:ac23btb0f01@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/anoushka-chatterjee-biotech"
  },
  {
    id: 10,
    name: "Akshaya Vasudevan",
    role: "Executive Member",
    image: "/images/members_photos/Akshaya.jpeg",
    text: "3rd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:av23btb0f03@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/akshaya-vasudevan-2a9a23330"
  },
  {
    id: 11,
    name: "K Gokul",
    role: "Executive Member",
    image: "/images/members_photos/Gokul.jpeg",
    text: "3rd Year, Btech. Electrical and Electronics Engineering, Department of Electrical and Electronics Engineering, NITW",
    email: "mailto:kg23ecb1a33@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/k-gokul-4b3b81297",
  },
 {
    id: 12,
    name: "Noel S George",
    role: "Executive Member",
    image: "/images/members_photos/Noel.jpg",
    text: "3rd Year, Integrated MSc. Chemistry, Department of Chemistry, NITW",
    email: "mailto:ns23cye0009@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/noel-s-george",
  },
  {
    id: 13,
    name: "Yash Thakre",
    role: "Executive Member",
    image: "/images/members_photos/Yash_Thakre.jpeg",
    text: "3rd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:yt23btb0a33@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/yash-thakre-1aa189312",
  },
  {
    id: 14,
    name: "Rishi Chaubey",
    role: "Executive Member",
    image: "/images/members_photos/Rishi_Chaubey.jpeg",
    text: "3rd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:rc23btb0a14@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/rishi-chaubey-nitw",
  },
  {
    id: 15,
    name: "Muhammad Nurul",
    role: "Executive Member",
    image: "/images/members_photos/Mohammed_Nurul.jpeg",
    text: "2nd Year, BSc Bed Mathematics, Department of Mathematics, NITW",
    email: "mailto:mn24edi0009@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/muhammad-nurul-hayi-b13184330",
  },
  {
    id: 16,
    name: "Srinithya Rao Bogelly",
    role: "Executive Member",
    image: "/images/members_photos/Srinithya.jpeg",
    text: "2nd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:bs24btb0a14@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/srinithya-rao",
  },
  {
    id: 17,
    name: "Pranav Akula",
    role: "Executive Member",
    image: "/images/members_photos/Pranav.jpeg",
    text: "2nd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:ap24btb0a04@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/pranavakula",
  },
  {
    id: 18,
    name: "Md Altamash Alam",
    role: "Executive Member",
    image: "/images/members_photos/Altamash.jpeg",
    text: "2nd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:ma24btb0a43@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/md-altamash-alam-588899343",
  },
  {
    id: 19,
    name: "Malavika Sunitha Renjith",
    role: "Executive Member",
    image: "/images/members_photos/Malavika.jpeg",
    text: "2nd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:ms24btb0a38@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/malavika-sunita-renjith-9a88b530a",
  },  
  {
    id: 20,
    name: "Arbaaz Khan",
    role: "Executive Member",
    image: "/images/members_photos/Arbaaz_Khan.jpeg",
    text: "2nd Year, Integrated MSc. Chemistry, Department of Chemistry, NITW",
    email: "mailto:ak24cye009@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/arbaaz-khan-0a5235342",
  },  
  {
    id: 21,
    name: "Shivam Verma",
    role: "Executive Member",
    image: "/images/members_photos/Shivam_Verma.jpeg",
    text: "2nd Year, Integrated MSc. Chemistry, Department of Chemistry, NITW",
    email: "mailto:sv24cye0005@student.nitw.ac.in",
    linkedin: "",
  },  
  {
    id: 22,
    name: "Suryanksh Iyer",
    role: "Executive Member",
    image: "/images/members_photos/Suryanksh_Iyer.jpeg",
    text: "2nd Year, Btech. Biotechnology, Department of Biotechnology, NITW",
    email: "mailto:si24btb0a67@student.nitw.ac.in",
    linkedin: "",
  },  
  {
    id: 23,
    name: "Atharv Kaushik",
    role: "Executive Member",
    image: "/images/members_photos/Atharv_Kaushik.jpeg",
    text: "2nd Year, Btech. Chemical Engineering, Department of Chemical Engineering, NITW",
    email: "mailto:ak24chb0a09@student.nitw.ac.in",
    linkedin: "https://www.linkedin.com/in/atharvkaushik",
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
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>

                  <h3 className="text-xl font-bold text-blue-950 mb-1">{member.name}</h3>
                  <p className="text-blue-700 mb-4">{member.role}</p>

                  <p className="text-gray-600 text-center mb-6">
                    {member.text}
                  </p>

                  <div className="flex space-x-2">
                    <a href={member.email} target="_blank" className="text-gray-500 hover:text-blue-900 transition-colors">
                      <Mail size={20} />
                      <span className="sr-only">Email</span>
                    </a>
                    <a href={member.linkedin || "#"} target="_blank" className="text-gray-500 hover:text-blue-900 transition-colors">
                      <Linkedin size={20} />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      {/* <section className="py-16 md:py-24 bg-gray-50">
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
      </section> */}
    </div>
  )
}
