import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            // poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/video/DNA_Helix.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-blue-950/80"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/images/biophysical-society-logo.png"
              alt="Biophysical Society Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Biophysical Society Student Chapter
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-blue-100 mb-8">
            National Institute of Technology, Warangal
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Exploring the intersection of physics and biology to understand the fundamental principles of life.
          </p>
          <Link href="/about">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-full">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
             Our mission is to build a supportive and creative environment where students can learn from each other, grow as leaders, and contribute to something bigger than themselves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-3 text-center">Research</h3>
                <p className="text-gray-600 text-center">
                  Promoting cutting-edge research at the intersection of physics and biology.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-3 text-center">Community</h3>
                <p className="text-gray-600 text-center">
                  Building a supportive community of students, researchers, and faculty.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-3 text-center">Education</h3>
                <p className="text-gray-600 text-center">
                  Providing educational resources and opportunities for professional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
       <section className="py-20 bg-gray-50">
          <div className="max-h-[600px] overflow-y-auto pr-2 bg-white p-8 rounded-xl shadow-lg mx-auto container">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Announcements</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </div>
              <ul className="space-y-4 text-left mx-auto list-disc">
                <li className="flex items-start">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 ml-20">
                      <span>July 29, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 ml-20">BPS Bulletin for the month of July/August, 2025 has been released</h3>
                    <p className="text-gray-600 text-md mb-1.5 ml-20 mr-20 mb-5">
                      BPS Bulletin, The Newsletter for the Biophysical Society has been released for the month of July/August, 2025. <a href="/BPS_Bulletin/publication_julyaugust.pdf" target="_blank">Click here to download.</a>
                    </p>
                    
                  </div>
                </li>
                <li className="flex items-start">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 ml-20">
                      <span>June 2, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 ml-20">BPS Bulletin for the month of June, 2025 has been released</h3>
                    <p className="text-gray-600 text-md mb-1.5 ml-20 mr-20 mb-5">
                      BPS Bulletin, The Newsletter for the Biophysical Society has been released for the month of June, 2025. <a href="/BPS_Bulletin/publication_june.pdf" target="_blank">Click here to download.</a>
                    </p>
                    
                  </div>
                </li>
                <li className="flex items-start">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 ml-20">
                      <span>May 3, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 ml-20">BPS Bulletin for the month of May, 2025 has been released</h3>
                    <p className="text-gray-600 text-md mb-1.5 ml-20 mr-20 mb-5">
                      BPS Bulletin, The Newsletter for the Biophysical Society has been released for the month of May, 2025. <a href="/BPS_Bulletin/publication_may.pdf" target="_blank">Click here to download.</a>
                    </p>
                    
                  </div>
                </li>
                <li className="flex items-start">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 ml-20">
                      <span>April 2, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 ml-20">BPS Bulletin for the month of April, 2025 has been released</h3>
                    <p className="text-gray-600 text-md mb-1.5 ml-20 mr-20 mb-5">
                      BPS Bulletin, The Newsletter for the Biophysical Society has been released for the month of April, 2025. <a href="/BPS_Bulletin/publication_april.pdf" target="_blank">Click here to download.</a>
                    </p>
                    
                  </div>
                </li>
                <li className="flex items-start">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 ml-20">
                      <span>March 4, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 ml-20">BPS Bulletin for the month of March, 2025 has been released</h3>
                    <p className="text-gray-600 text-md mb-1.5 ml-20 mr-20 mb-5">
                      BPS Bulletin, The Newsletter for the Biophysical Society has been released for the month of March, 2025. <a href="/BPS_Bulletin/publication_march.pdf" target="_blank">Click here to download.</a>
                    </p>
                    
                  </div>
                </li>
                <li className="flex items-start">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 ml-20">
                      <span>February 1, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 ml-20">BPS Bulletin for the month of February, 2025 has been released</h3>
                    <p className="text-gray-600 text-md mb-1.5 ml-20 mr-20 mb-5">
                      BPS Bulletin, The Newsletter for the Biophysical Society has been released for the month of February, 2025. <a href="/BPS_Bulletin/publication_february.pdf" target="_blank">Click here to download.</a>
                    </p>
                    
                  </div>
                </li>
                <li className="flex items-start">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 ml-20">
                      <span>December 3, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 ml-20">BPS Bulletin for the month of December, 2024 has been released</h3>
                    <p className="text-gray-600 text-md mb-1.5 ml-20 mr-20 mb-5">
                      BPS Bulletin, The Newsletter for the Biophysical Society has been released for the month of December, 2024. <a href="/BPS_Bulletin/publication_december.pdf" target="_blank">Click here to download.</a>
                    </p>
                    
                  </div>
                </li>
                
                
                
              </ul>
            </div>

      
      </section> 
    </div>
  )
}
