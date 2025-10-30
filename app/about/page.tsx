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
           Our chapter is a space where students explore the exciting overlap of physics and biology. We’re a group of passionate learners and thinkers, supported by the global Biophysical Society, who are driven by questions, ideas, and the desire to understand how life works at its deepest levels.
          </p>
          <br></br>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
           Whether you're already into research or just curious about what biophysics is, you’ll find like-minded people and meaningful opportunities here.
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
                  established in 2025 with the goal of promoting interdisciplinary research and education in
                  biophysics.
                </p>
                <p>
                  Since its inception, the chapter has grown to include students from various departments, including
                  Physics, Chemistry, and Engineering, all united by their interest in understanding biological
                  systems through the lens of physics.
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
                src="/images/About/Image1.jpeg"
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Mission</h3>
              <p className="text-gray-700 mb-4">
               We believe that big ideas happen when people from different backgrounds come together. That’s why our mission is to build a supportive and creative environment where students can learn from each other, grow as leaders, and contribute to something bigger than themselves.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">What We Do</h3>
              <p className="text-gray-700 mb-4">
               From hosting inspiring talks and hands-on workshops to organizing fun outreach activities and networking events—we do it all! Our aim is to make biophysics accessible, exciting, and inclusive. No matter where you are on your journey—beginner or expert—you’re welcome here.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Achievements */}
      {/* <section className="py-16 md:py-24">
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
      </section> */}
    </div>
  )
}

