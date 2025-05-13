import { Calendar, Clock, MapPin } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Biophysics Workshop 2025",
    date: "May 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Physics Department, NITW",
    description: "Join us for a comprehensive workshop on the latest techniques in biophysical research.",
    image: "/placeholder.svg?height=300&width=500&text=Workshop",
  },
  {
    id: 2,
    title: "Guest Lecture: Molecular Dynamics",
    date: "June 5, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Seminar Hall, NITW",
    description: "A guest lecture by Dr. Robert Johnson on molecular dynamics simulations in biological systems.",
    image: "/placeholder.svg?height=300&width=500&text=Lecture",
  },
  {
    id: 3,
    title: "Annual Biophysics Conference",
    date: "July 10-12, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Conference Center, NITW",
    description: "Our annual conference bringing together researchers, students, and faculty from across the country.",
    image: "/placeholder.svg?height=300&width=500&text=Conference",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Research Symposium",
    date: "March 20, 2025",
    description: "A symposium showcasing student research projects in biophysics.",
    image: "/placeholder.svg?height=300&width=500&text=Symposium",
  },
  {
    id: 5,
    title: "Career Panel: Biophysics in Industry",
    date: "February 10, 2025",
    description: "A panel discussion on career opportunities in biophysics outside academia.",
    image: "/placeholder.svg?height=300&width=500&text=Career+Panel",
  },
  {
    id: 6,
    title: "Lab Tour: Advanced Imaging Facility",
    date: "January 15, 2025",
    description: "A guided tour of the advanced imaging facility at NITW.",
    image: "/placeholder.svg?height=300&width=500&text=Lab+Tour",
  },
  {
    id: 7,
    title: "Workshop: Computational Biophysics",
    date: "December 5, 2024",
    description: "A hands-on workshop on computational methods in biophysics.",
    image: "/placeholder.svg?height=300&width=500&text=Computational",
  },
]

export default function Events() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Stay updated with our upcoming events and revisit our past activities.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Upcoming Events</h2>
          <div className="w-20 h-1 bg-blue-900 mb-12"></div>

          <div className="space-y-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-64 md:h-auto relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-blue-950 mb-3">{event.title}</h3>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-blue-900" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-blue-900" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-blue-900" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{event.description}</p>

                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      Register
                    </a>
                    <a
                      href="#"
                      className="border border-blue-900 text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Past Events</h2>
          <div className="w-20 h-1 bg-blue-900 mb-12"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-blue-900 z-10"></div>

                  {/* Content */}
                  <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-blue-950 mb-2">{event.title}</h3>
                      <p className="text-blue-700 mb-3">{event.date}</p>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Image (hidden on mobile) */}
                  <div className="hidden md:block md:w-1/2 md:pl-12">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-xl shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Event Calendar</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Stay updated with all our events by subscribing to our calendar. Never miss an opportunity to learn and
              connect with fellow biophysics enthusiasts.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Calendar Placeholder - Will be integrated with Google Calendar</p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Subscribe to Calendar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
