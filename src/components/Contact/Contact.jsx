import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
    .then((result) => {
      alert('Message sent successfully!')
      form.current.reset()
    }, (error) => {
      alert('Failed to send message. Please try again.')
    })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}