"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Have questions or want to get involved? Reach out to us!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Get in Touch</h2>
              <div className="w-20 h-1 bg-blue-900 mb-8"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white w-full py-6">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Contact Information</h2>
              <div className="w-20 h-1 bg-blue-900 mb-8"></div>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950 mb-1">Address</h3>
                    <p className="text-gray-700">
                      Biophysical Society Student Chapter
                      <br />
                      Department of Biotechnology
                      <br />
                      National Institute of Technology
                      <br />
                      Warangal, Telangana - 506004
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950 mb-1">Email</h3>
                    <p className="text-gray-700">biophysics@nitw.ac.in</p>
                    <p className="text-gray-700">president.biophysics@nitw.ac.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950 mb-1">Phone</h3>
                    <p className="text-gray-700">+91 XXXXX XXXXX</p>
                    <p className="text-gray-700">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4669.447447405145!2d79.53099057591928!3d17.98559678529532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334fd6708ccb43%3A0x311ea4d450551c27!2sDEPARTMENT%20OF%20CHEMICAL%20ENGINEERING%20AND%20BIOTECHNOLOGY%20NIT%20WARANGAL!5e1!3m2!1sen!2sin!4v1747719928199!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How can I join the Biophysical Society Student Chapter?",
                  answer:
                    "To join our chapter, you need to be a student at NITW. You can fill out the membership form on our website or contact us directly via email. We welcome students from all departments who are interested in biophysics.",
                },
                {
                  question: "Are there any membership fees?",
                  answer:
                    "Yes, there is a nominal annual membership fee of ₹XXX for undergraduate students and ₹XXX for graduate students. This fee helps us organize events and activities throughout the year.",
                },
                {
                  question: "Do I need to have a background in physics or biology to join?",
                  answer:
                    "No, we welcome students from all academic backgrounds. Biophysics is an interdisciplinary field, and we value diverse perspectives and skills.",
                },
                {
                  question: "How often do you organize events?",
                  answer:
                    "We typically organize 1-2 events per month, including workshops, seminars, guest lectures, and social gatherings. Check our Events page for the latest schedule.",
                },
                {
                  question: "Can I volunteer to help with events?",
                  answer:
                    "We always need volunteers to help organize and run our events. Please contact us if you're interested in volunteering.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-blue-950 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
