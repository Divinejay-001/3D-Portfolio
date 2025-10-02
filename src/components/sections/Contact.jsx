import React, { useRef, useState } from 'react'
import TitleHeader from '../TitleHeader'
import ContactExperience from '../Hero Models/ContactExperience'
import emailjs from '@emailjs/browser'

const Contact = () => {
     const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

      const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        'service_7bimslh',
        'template_14bylum',
        form.current,
        '-6O_x7lhtYIqwaClF'
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                 ref={form}
            onSubmit={sendEmail}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    // value={formData.name}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    // value={formData.email}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    // value={formData.message}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={isLoading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {isLoading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
                 {/* Inline Feedback */}
            {status === "success" && (
              <p className="text-green-400 mt-2">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-2">❌ Failed to send message. Please try again later.</p>
            )}
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#C7C6C1] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact