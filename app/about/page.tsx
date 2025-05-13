import Image from "next/image"

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/biophysical-society-logo.png"
              alt="Biophysical Society Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Learn about the Biophysical Society Student Chapter at NITW and our mission to advance biophysical research.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Our History</h2>
              <div className="w-20 h-1 bg-blue-900 mb-8"></div>

              <div className="space-y-4 text-gray-700">
                <p>
                  The Biophysical Society Student Chapter at the National Institute of Technology, Warangal was
                  established in [year] with the goal of promoting interdisciplinary research and education in
                  biophysics.
                </p>
                <p>
                  Since its inception, the chapter has grown to include students from various departments, including
                  Physics, Biology, Chemistry, and Engineering, all united by their interest in understanding biological
                  systems through the lens of physics.
                </p>
                <p>
                  Over the years, we have organized numerous workshops, seminars, and conferences, bringing together
                  students, researchers, and faculty from across the country to discuss the latest advancements in
                  biophysical research.
                </p>
                <p>
                  Our chapter is affiliated with the Biophysical Society, the premier international organization for
                  biophysics research, which provides our members with access to a global network of researchers and
                  resources.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Chapter+History"
                alt="Biophysical Society Student Chapter History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Mission</h3>
              <p className="text-gray-700 mb-4">
                Our mission is to foster a vibrant community of students interested in biophysics, promote
                interdisciplinary research, and provide opportunities for academic and professional growth.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Promote biophysical research and education</li>
                <li>Foster collaboration between students and faculty</li>
                <li>Organize workshops, seminars, and conferences</li>
                <li>Provide networking opportunities with researchers and industry professionals</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Vision</h3>
              <p className="text-gray-700 mb-4">
                Our vision is to become a leading student chapter in biophysics, recognized for our contributions to
                research, education, and outreach in the field.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Establish NITW as a center of excellence in biophysics</li>
                <li>Develop innovative research projects that address real-world challenges</li>
                <li>Create a supportive environment for students to explore their interests in biophysics</li>
                <li>Build strong partnerships with other institutions and organizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Achievements</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">10+</div>
              <p className="text-gray-700">Workshops Organized</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">5+</div>
              <p className="text-gray-700">Research Publications</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100+</div>
              <p className="text-gray-700">Active Members</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">3+</div>
              <p className="text-gray-700">National Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
