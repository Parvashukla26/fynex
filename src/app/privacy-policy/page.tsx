import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Fynex Studio',
  description: 'Learn how Fynex Studio collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className='min-h-screen'>
      <div className='container px-6 mx-auto py-32'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='mb-16'>
            <Link href='/' className='text-primary hover:text-primary/80 text-sm uppercase tracking-widest mb-8 inline-block transition-colors'>
              ← Back to Home
            </Link>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6'>
              Privacy Policy
            </h1>
            <p className='text-white/40 text-lg'>
              Last Updated: January 30, 2026
            </p>
          </div>

          {/* Content */}
          <div className='max-w-none'>
            <div className='space-y-12'>
              
              {/* Introduction */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>Introduction</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  At Fynex Studio ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage our services, or interact with us in any capacity.
                </p>
                <p className='text-white/60 leading-relaxed'>
                  By accessing or using our services, you agree to the terms outlined in this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>1. Information We Collect</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>1.1 Personal Information</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We may collect personal information that you voluntarily provide to us, including but not limited to:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Company name and business information</li>
                  <li>Professional details and job title</li>
                  <li>Project requirements and consultation notes</li>
                  <li>Payment and billing information</li>
                  <li>Communications and correspondence with us</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>1.2 Automatically Collected Information</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  When you visit our website, we may automatically collect certain information about your device and browsing activity, including:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>IP address and device identifiers</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>1.3 Third-Party Information</h3>
                <p className='text-white/60 leading-relaxed'>
                  We may receive information about you from third-party sources, such as business partners, analytics providers, and social media platforms, which we may combine with other information we collect.
                </p>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>2. How We Use Your Information</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We use the information we collect for various purposes, including:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing and managing your consultations and projects</li>
                  <li>Communicating with you about our services, updates, and promotional offers</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Personalizing your experience and delivering relevant content</li>
                  <li>Processing payments and managing billing</li>
                  <li>Analyzing usage patterns and improving our website functionality</li>
                  <li>Protecting against fraud, unauthorized transactions, and other legal risks</li>
                  <li>Complying with legal obligations and enforcing our terms</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>3. Information Sharing and Disclosure</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.1 Service Providers</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We may share your information with third-party service providers who perform services on our behalf, such as:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Cloud hosting and data storage providers</li>
                  <li>Payment processors and financial institutions</li>
                  <li>Analytics and performance monitoring services</li>
                  <li>Email and communication platforms</li>
                  <li>Customer relationship management (CRM) systems</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.2 Legal Requirements</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We may disclose your information if required by law or in response to:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Legal processes, subpoenas, or court orders</li>
                  <li>Government or regulatory investigations</li>
                  <li>Requests from law enforcement agencies</li>
                  <li>Protection of our rights, property, or safety, or that of others</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.3 Business Transfers</h3>
                <p className='text-white/60 leading-relaxed'>
                  In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>4. Data Security</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure socket layer (SSL) technology</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p className='text-white/60 leading-relaxed mt-4'>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>5. Data Retention</h2>
                <p className='text-white/60 leading-relaxed'>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>6. Your Rights and Choices</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li><strong className='text-white/80'>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong className='text-white/80'>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong className='text-white/80'>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className='text-white/80'>Portability:</strong> Request a copy of your information in a structured, machine-readable format</li>
                  <li><strong className='text-white/80'>Objection:</strong> Object to the processing of your information</li>
                  <li><strong className='text-white/80'>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  <li><strong className='text-white/80'>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className='text-white/60 leading-relaxed mt-4'>
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>7. Cookies and Tracking Technologies</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings. However, disabling cookies may limit certain features of our website.
                </p>
                <p className='text-white/60 leading-relaxed'>
                  Types of cookies we use include essential cookies, performance cookies, functionality cookies, and targeting cookies.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>8. Third-Party Links</h2>
                <p className='text-white/60 leading-relaxed'>
                  Our website may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>9. Children's Privacy</h2>
                <p className='text-white/60 leading-relaxed'>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information.
                </p>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>10. International Data Transfers</h2>
                <p className='text-white/60 leading-relaxed'>
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>11. Changes to This Privacy Policy</h2>
                <p className='text-white/60 leading-relaxed'>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>12. Contact Us</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className='mt-6'>
                  <p className='text-white/80 mb-2'><strong className='text-white'>Fynex Studio</strong></p>
                  <p className='text-white/60 mb-2'>Email: fynexxstudio@gmail.com</p>
                  <p className='text-white/60 mb-2'>Website: <Link href='/' className='text-primary hover:underline'>https://fynex-gray.vercel.app/</Link></p>
                  <p className='text-white/60'>Consultation: <Link href='/schedule' className='text-primary hover:underline'>Schedule a Meeting</Link></p>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>13. Governing Law</h2>
                <p className='text-white/60 leading-relaxed'>
                  This Privacy Policy is governed by and construed in accordance with applicable data protection laws and regulations. Any disputes arising from this policy will be subject to the exclusive jurisdiction of the courts in our primary place of business.
                </p>
              </section>

            </div>
          </div>

          {/* Back to Top */}
          <div className='mt-16 pt-8 border-t border-white/10 text-center'>
            <Link href='/' className='inline-block px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-colors'>
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
