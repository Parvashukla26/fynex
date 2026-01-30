import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Notice | Fynex Studio',
  description: 'Legal information, disclaimers, and compliance notices for Fynex Studio.',
}

export default function LegalNoticePage() {
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
              Legal Notice
            </h1>
            <p className='text-white/40 text-lg'>
              Last Updated: January 30, 2026
            </p>
          </div>

          {/* Content */}
          <div className='max-w-none'>
            <div className='space-y-12'>
              
              {/* Company Information */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>Company Information</h2>
                <div>
                  <p className='text-white/80 mb-3'><strong className='text-white'>Legal Entity:</strong> Fynex Studio</p>
                  <p className='text-white/80 mb-3'><strong className='text-white'>Business Type:</strong> Digital Agency & Technology Consulting Firm</p>
                  <p className='text-white/80 mb-3'><strong className='text-white'>Website:</strong> <Link href='/' className='text-primary hover:underline'>https://fynex-plum.vercel.app/</Link></p>
                  <p className='text-white/80 mb-3'><strong className='text-white'>Email:</strong> fynexxstudio@gmail.com</p>
                  <p className='text-white/80'><strong className='text-white'>General Inquiries:</strong> fynexxstudio@gmail.com</p>
                </div>
              </section>

              {/* Website Operator */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>1. Website Operator and Publisher</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  This website (https://fynex-plum.vercel.app/) is owned, operated, and maintained by Fynex Studio. All content, design, and functionality of this website are the exclusive property of Fynex Studio unless otherwise indicated.
                </p>
                <p className='text-white/60 leading-relaxed'>
                  Fynex Studio is a specialized digital agency providing AI business automation, digital transformation solutions, and technical consulting services to innovative organizations worldwide.
                </p>
              </section>

              {/* Content Disclaimer */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>2. Content Disclaimer</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>2.1 Information Accuracy</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  While we make every effort to ensure that the information published on this website is accurate, up-to-date, and reliable, we make no representations or warranties of any kind, express or implied, about:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>The completeness, accuracy, or reliability of any information</li>
                  <li>The suitability of information for any particular purpose</li>
                  <li>The availability or functionality of the website</li>
                  <li>The absence of errors, viruses, or other harmful components</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>2.2 Professional Advice</h3>
                <p className='text-white/60 leading-relaxed'>
                  Information provided on this website is for general informational purposes only and does not constitute professional advice. Any reliance you place on such information is strictly at your own risk. For specific advice tailored to your circumstances, please schedule a consultation with our team.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>2.3 No Guarantees</h3>
                <p className='text-white/60 leading-relaxed'>
                  While we showcase our capabilities, methodologies, and past work, this does not guarantee specific results for your project. Each engagement is unique and outcomes depend on numerous factors including client cooperation, project scope, and external variables.
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>3. Intellectual Property Rights</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.1 Copyright</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, software, and the compilation thereof, is the property of Fynex Studio or its content suppliers and is protected by international copyright laws.
                </p>
                <p className='text-white/60 leading-relaxed'>
                  © 2026 Fynex Studio. All Rights Reserved.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.2 Trademarks</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  "Fynex" and the Fynex logo are trademarks of Fynex Studio. All other trademarks, service marks, and trade names referenced on this website are the property of their respective owners.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.3 Permitted Use</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  You may view, download, and print content from this website solely for personal, non-commercial use, provided that you:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Do not modify or alter the content</li>
                  <li>Maintain all copyright and proprietary notices</li>
                  <li>Do not use content for commercial purposes without written permission</li>
                  <li>Do not reproduce, duplicate, or copy content for resale or distribution</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.4 Prohibited Uses</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  Without our express written permission, you may not:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Reproduce, modify, or create derivative works from website content</li>
                  <li>Use content for commercial purposes or public display</li>
                  <li>Remove or alter copyright notices or proprietary marks</li>
                  <li>Transfer content to another person or entity</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </section>

              {/* Third-Party Content */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>4. Third-Party Content and Links</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>4.1 External Links</h3>
                <p className='text-white/60 leading-relaxed'>
                  This website may contain links to third-party websites or resources. These links are provided for your convenience only. We have no control over the content, privacy policies, or practices of third-party websites and assume no responsibility for them. We do not endorse or make any representations about third-party websites.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>4.2 Third-Party Materials</h3>
                <p className='text-white/60 leading-relaxed'>
                  Where third-party content, software, or materials are used on this website, they remain the property of their respective owners and may be subject to separate license terms.
                </p>
              </section>

              {/* Liability Limitations */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>5. Limitation of Liability</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Fynex Studio shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use or inability to use this website</li>
                  <li>We are not responsible for any loss of data, profits, business, or other economic loss</li>
                  <li>We do not guarantee uninterrupted, secure, or error-free operation of this website</li>
                  <li>We are not liable for any computer virus, malware, or harmful code that may infect your equipment</li>
                  <li>Total liability for any claim shall not exceed the amount paid to us in the twelve months preceding the claim</li>
                </ul>
                <p className='text-white/60 leading-relaxed mt-4'>
                  Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability is limited to the maximum extent permitted by law.
                </p>
              </section>

              {/* Privacy and Data Protection */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>6. Privacy and Data Protection</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We are committed to protecting your privacy and complying with applicable data protection regulations. Our collection, use, and processing of personal information is governed by our Privacy Policy.
                </p>
                <p className='text-white/60 leading-relaxed'>
                  For detailed information about how we handle your personal data, please review our <Link href='/privacy-policy' className='text-primary hover:underline'>Privacy Policy</Link>.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>7. Cookies and Tracking Technologies</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  This website uses cookies and similar tracking technologies to:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Enhance user experience and website functionality</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Remember your preferences and settings</li>
                  <li>Deliver personalized content and advertisements</li>
                </ul>
                <p className='text-white/60 leading-relaxed mt-4'>
                  By using this website, you consent to our use of cookies in accordance with our Privacy Policy. You can control cookie preferences through your browser settings.
                </p>
              </section>

              {/* Accessibility */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>8. Accessibility Commitment</h2>
                <p className='text-white/60 leading-relaxed'>
                  Fynex Studio is committed to ensuring digital accessibility for all users, including those with disabilities. We continuously work to improve the accessibility of our website and conform to WCAG (Web Content Accessibility Guidelines) standards. If you encounter accessibility barriers, please contact us so we can assist you.
                </p>
              </section>

              {/* User Conduct */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>9. Acceptable Use Policy</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  When using this website, you agree not to:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Transmit harmful code, viruses, or malicious software</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the website's operation or servers</li>
                  <li>Use automated systems (bots, scrapers) without permission</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Collect or harvest information about other users</li>
                  <li>Engage in any activity that could damage our reputation</li>
                </ul>
              </section>

              {/* Security */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>10. Security</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We implement reasonable security measures to protect this website and your information. However, no Internet transmission is completely secure. You acknowledge that:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Internet communications may be intercepted by unauthorized parties</li>
                  <li>Data transmission over the Internet cannot be guaranteed to be 100% secure</li>
                  <li>You transmit information at your own risk</li>
                  <li>We cannot guarantee absolute security of information submitted through this website</li>
                </ul>
              </section>

              {/* Geographic Restrictions */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>11. Geographic Restrictions</h2>
                <p className='text-white/60 leading-relaxed'>
                  While we serve clients globally, this website is operated from our primary location and is subject to the laws of that jurisdiction. We make no representation that content is appropriate or available for use in all locations. If you access this website from other locations, you do so at your own risk and are responsible for compliance with local laws.
                </p>
              </section>

              {/* Changes to Website */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>12. Website Modifications</h2>
                <p className='text-white/60 leading-relaxed'>
                  We reserve the right to modify, suspend, or discontinue any aspect of this website at any time without notice. We may also impose limits on certain features or restrict access to parts or all of the website without liability.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>13. Governing Law and Jurisdiction</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  This Legal Notice and your use of this website are governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
                </p>
                <p className='text-white/60 leading-relaxed'>
                  Any disputes arising from or relating to this website shall be subject to the exclusive jurisdiction of the courts in our principal place of business, and you consent to personal jurisdiction in such courts.
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>14. Severability</h2>
                <p className='text-white/60 leading-relaxed'>
                  If any provision of this Legal Notice is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely reflects the original intent.
                </p>
              </section>

              {/* Updates */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>15. Updates to This Notice</h2>
                <p className='text-white/60 leading-relaxed'>
                  We reserve the right to update or modify this Legal Notice at any time. Changes become effective immediately upon posting to this website. Your continued use of the website after changes constitutes acceptance of the updated notice. We recommend reviewing this page periodically.
                </p>
              </section>

              {/* Reporting Violations */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>16. Reporting Violations</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  If you become aware of any violation of this Legal Notice or misuse of this website, please report it to us immediately:
                </p>
                <div>
                  <p className='text-white/60 mb-2'><strong className='text-white/80'>Email:</strong> fynexxstudio@gmail.com</p>
                  <p className='text-white/60'><strong className='text-white/80'>Subject Line:</strong> "Legal Notice Violation Report"</p>
                </div>
              </section>

              {/* Copyright Infringement */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>17. Copyright Infringement Claims</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  If you believe that content on this website infringes your copyright, please provide us with the following information:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Identification of the copyrighted work claimed to be infringed</li>
                  <li>Identification of the material claimed to be infringing</li>
                  <li>Your contact information (address, phone, email)</li>
                  <li>A statement that you have a good-faith belief the use is unauthorized</li>
                  <li>A statement that the information provided is accurate</li>
                  <li>Your physical or electronic signature</li>
                </ul>
                <p className='text-white/60 leading-relaxed mt-4'>
                  Send copyright infringement notices to: fynexxstudio@gmail.com
                </p>
              </section>

              {/* Professional Standards */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>18. Professional Standards and Ethics</h2>
                <p className='text-white/60 leading-relaxed'>
                  Fynex Studio adheres to the highest standards of professional ethics and business conduct. We are committed to integrity, transparency, and excellence in all our engagements. Our work complies with applicable industry standards, best practices, and regulatory requirements.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>19. Contact Information</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  For questions, concerns, or requests regarding this Legal Notice or any legal matters:
                </p>
                <div>
                  <p className='text-white/80 mb-3'><strong className='text-white'>Fynex Studio</strong></p>
                  <p className='text-white/60 mb-2'><strong className='text-white/80'>Legal Department:</strong> fynexxstudio@gmail.com</p>
                  <p className='text-white/60 mb-2'><strong className='text-white/80'>General Inquiries:</strong> fynexxstudio@gmail.com</p>
                  <p className='text-white/60 mb-2'><strong className='text-white/80'>Website:</strong> <Link href='/' className='text-primary hover:underline'>https://fynex-plum.vercel.app/</Link></p>
                  <p className='text-white/60'><strong className='text-white/80'>Consultation:</strong> <Link href='/schedule' className='text-primary hover:underline'>Schedule a Meeting</Link></p>
                </div>
              </section>

              {/* Related Documents */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>20. Related Legal Documents</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  This Legal Notice should be read in conjunction with:
                </p>
                <div className='space-y-3'>
                  <div>
                    <Link href='/privacy-policy' className='text-primary hover:underline font-semibold'>
                      Privacy Policy
                    </Link>
                    <p className='text-white/50 text-sm mt-1'>Learn how we collect, use, and protect your data</p>
                  </div>
                  <div>
                    <Link href='/terms-of-service' className='text-primary hover:underline font-semibold'>
                      Terms of Service
                    </Link>
                    <p className='text-white/50 text-sm mt-1'>Understand the terms governing our services</p>
                  </div>
                </div>
              </section>

              {/* Acknowledgment */}
              <section>
                <div className='mt-8'>
                  <p className='text-white/80 leading-relaxed'>
                    <strong className='text-white'>Acknowledgment:</strong> By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by this Legal Notice and all applicable laws and regulations.
                  </p>
                </div>
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
