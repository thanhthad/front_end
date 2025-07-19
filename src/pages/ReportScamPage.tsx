import React from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

const ReportScamPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8 text-gray-800">
      <AnimateOnScroll>
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Report an Email Scam</h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Why Reporting Matters</h3>
          <p className="text-lg leading-relaxed mb-4">
            Reporting email scams is crucial for several reasons:
          </p>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-3">
            <li>It helps law enforcement agencies track down cybercriminals.</li>
            <li>It contributes to databases that help email providers and security companies improve their spam and phishing filters.</li>
            <li>It protects others from falling victim to the same scams.</li>
          </ul>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">How to Report a Scam Email</h3>
          <ol className="list-decimal pl-6 text-lg leading-relaxed space-y-4">
            <li>
              <strong>Do NOT click on any links or download attachments:</strong> This is the most important step to prevent further compromise.
            </li>
            <li>
              <strong>Forward the email to your email provider:</strong> Most email services have a dedicated address for reporting phishing or spam.
              <ul className="list-disc pl-6 mt-2 text-base">
                <li>Gmail: Report Phishing (via button in Gmail interface) or forward to `reportphishing@apwg.org`</li>
                <li>Outlook/Hotmail: Use the "Report Phishing" or "Junk" button.</li>
                <li>Yahoo Mail: Use the "Spam" or "Phishing" button.</li>
              </ul>
            </li>
            <li>
              <strong>Report to the Anti-Phishing Working Group (APWG):</strong> Forward the suspicious email to `reportphishing@apwg.org`. This organization collects data on phishing attacks globally.
            </li>
            <li>
              <strong>Report to Government Agencies (if applicable):</strong>
              <ul className="list-disc pl-6 mt-2 text-base">
                <li><strong>In the U.S.:</strong> Report to the Internet Crime Complaint Center (IC3) at <a href="https://www.ic3.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ic3.gov</a>.</li>
                <li><strong>In the U.K.:</strong> Report to Action Fraud at <a href="https://www.actionfraud.police.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">actionfraud.police.uk</a>.</li>
                <li><strong>For other countries:</strong> Search for your national cybercrime reporting agency.</li>
              </ul>
            </li>
            <li>
              <strong>Delete the email:</strong> Once reported, delete the email from your inbox and trash folder.
            </li>
          </ol>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={600}>
        <section className="my-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">What to do if you clicked a link or provided information:</h3>
          <ul className="list-disc pl-6 text-lg leading-relaxed space-y-3">
            <li><strong>Change your passwords immediately</strong> for any accounts that might be compromised.</li>
            <li>Enable <strong>two-factor authentication (2FA)</strong> on all your accounts.</li>
            <li>Monitor your bank and credit card statements for any unauthorized activity.</li>
            <li>Run a full scan with reputable antivirus software on your computer.</li>
            <li>Notify your bank or credit card company if you suspect financial fraud.</li>
          </ul>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default ReportScamPage;