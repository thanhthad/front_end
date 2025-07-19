import React from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

const ProtectYourselfPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8 text-gray-800">
      <AnimateOnScroll>
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Protect Yourself from Email Scams</h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">1. Be Skeptical and Verify</h3>
          <p className="text-lg leading-relaxed mb-4">
            Always approach unexpected emails with skepticism. If an email asks you to take action or provides sensitive information, independently verify its legitimacy. Do not use the contact information provided in the suspicious email. Instead, find the official contact details (phone number, website) through a separate search or by visiting the company's official website directly.
          </p>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">2. Use Strong, Unique Passwords and 2FA</h3>
          <p className="text-lg leading-relaxed mb-4">
            Create long, complex, and unique passwords for each of your online accounts. Consider using a password manager. Enable two-factor authentication (2FA) or multi-factor authentication (MFA) wherever possible. This adds an extra layer of security, making it much harder for attackers to access your accounts even if they steal your password.
          </p>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={600}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">3. Keep Software Updated</h3>
          <p className="text-lg leading-relaxed mb-4">
            Regularly update your operating system, web browser, antivirus software, and all other applications. Software updates often include security patches that fix vulnerabilities exploited by scammers.
          </p>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={800}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">4. Use Email Security Features</h3>
          <p className="text-lg leading-relaxed mb-4">
            Familiarize yourself with and enable security features offered by your email provider (e.g., spam filters, phishing warnings). Our AI Email Analyzer can also be a first line of defense.
          </p>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={1000}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">5. Back Up Your Data</h3>
          <p className="text-lg leading-relaxed mb-4">
            Regularly back up your important files to an external hard drive or cloud storage. This way, if your system is compromised by malware from a scam, you can restore your data.
          </p>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={1200}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">6. Educate Yourself and Others</h3>
          <p className="text-lg leading-relaxed mb-4">
            Stay informed about the latest scam tactics. Share what you learn with family, friends, and colleagues. A well-informed community is the best defense against cybercriminals.
          </p>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default ProtectYourselfPage;