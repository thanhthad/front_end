import React from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8 text-gray-800">
      <AnimateOnScroll>
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Contact Us</h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">We're Here to Help</h3>
          <p className="text-lg leading-relaxed mb-4">
            If you have questions, feedback, or need assistance, please don't hesitate to reach out.
          </p>
          <div className="space-y-4">
            <p className="text-xl">
              <strong>Email:</strong> <a href="mailto:support@emailshield.com" className="text-blue-600 hover:underline">support@emailshield.com</a>
            </p>
            <p className="text-xl">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-xl">
              <strong>Address:</strong> 123 Cyber Security Lane, InfoCity, IS 12345
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Send Us a Message</h3>
          <form className="max-w-md mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
              <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email:</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </form>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default ContactPage;