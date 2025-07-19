import React from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

const AboutScamsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8 text-gray-800">
      <AnimateOnScroll>
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">About Email Scams</h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">What is Email Fraud (Phishing)?</h3>
          <p className="text-lg leading-relaxed mb-4">
            Email fraud, commonly known as phishing, is a type of cybercrime where attackers send deceptive emails to trick individuals into revealing sensitive information. This information can include usernames, passwords, credit card details, or other personal data. Phishing emails often appear to come from legitimate sources, such as banks, government agencies, popular websites, or even colleagues.
          </p>
          <p className="text-lg leading-relaxed">
            The goal of phishing is to gain unauthorized access to accounts, commit identity theft, or install malware on the victim's device. It's one of the most prevalent and damaging forms of cybercrime today.
          </p>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Common Types of Email Scams</h3>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-3">
            <li>
              <strong>Phishing:</strong> The most common form, aiming to steal credentials or personal data by impersonating trusted entities.
            </li>
            <li>
              <strong>Spear Phishing:</strong> A more targeted attack, customized for a specific individual or organization, often using personal information to gain trust.
            </li>
            <li>
              <strong>Whaling:</strong> A type of spear phishing that targets high-profile individuals like CEOs or executives.
            </li>
            <li>
              <strong>Business Email Compromise (BEC):</strong> Attackers impersonate a company executive or vendor to trick employees into transferring money or sensitive data.
            </li>
            <li>
              <strong>Nigerian Scams (419 Scams):</strong> Promises of large sums of money in exchange for an upfront payment or personal banking details.
            </li>
            <li>
              <strong>Tech Support Scams:</strong> Impersonating tech support from well-known companies (e.g., Microsoft) to gain remote access to your computer or trick you into paying for fake services.
            </li>
            <li>
              <strong>Lottery/Prize Scams:</strong> Notifying you that you've won a lottery or prize you never entered, asking for a fee to "release" your winnings.
            </li>
          </ul>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={600}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Why are Scams so Effective?</h3>
          <p className="text-lg leading-relaxed mb-4">
            Scammers exploit human psychology, leveraging emotions like fear, urgency, greed, or curiosity. They create convincing fake websites, use legitimate-looking logos, and craft compelling narratives to trick victims. The sheer volume of emails also makes it difficult for individuals to spot every fraudulent attempt.
          </p>
          <p className="text-lg leading-relaxed">
            Understanding these tactics is the first step in protecting yourself. Our website aims to equip you with the knowledge and tools to stay safe online.
          </p>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default AboutScamsPage;