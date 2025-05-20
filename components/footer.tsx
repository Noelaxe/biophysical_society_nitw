import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-16 h-16 mr-3">
                <Image
                  src="/images/biophysical-society-logo.png"
                  alt="Biophysical Society Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Biophysical Society</h3>
                <p className="text-gray-300">Student Chapter, NITW</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-300 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-300 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">National Institute of Technology, Warangal, Telangana, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-gray-300">biophysics@nitw.ac.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Biophysical Society Student Chapter, NITW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
