import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Fynex Studio',
  description: 'Read the terms and conditions governing the use of Fynex Studio services.',
}

export default function TermsOfServicePage() {
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
              Terms of Service
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
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>Agreement to Terms</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and Fynex Studio ("Fynex," "we," "us," or "our") governing your access to and use of our website, services, and products.
                </p>
                <p className='text-white/60 leading-relaxed mb-4'>
                  By accessing our website at https://fynex-plum.vercel.app/, engaging our services, or entering into any agreement with us, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must immediately discontinue use of our services.
                </p>
                <p className='text-white/60 leading-relaxed'>
                  These Terms apply to all users, clients, contractors, and others who access or use our services.
                </p>
              </section>

              {/* Services */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>1. Services Offered</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  Fynex Studio provides comprehensive digital transformation and AI business automation services, including but not limited to:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>AI-powered business automation and optimization</li>
                  <li>Custom software development and technical solutions</li>
                  <li>Experience design and user interface development</li>
                  <li>Identity systems and brand architecture</li>
                  <li>Product strategy and technical consulting</li>
                  <li>Digital ecosystem development</li>
                  <li>Technical scale and infrastructure solutions</li>
                  <li>Innovation laboratories and AI experimentation</li>
                </ul>
                <p className='text-white/60 leading-relaxed mt-4'>
                  The specific scope, deliverables, timeline, and compensation for services will be defined in separate project agreements, statements of work (SOW), or service contracts.
                </p>
              </section>

              {/* Eligibility */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>2. Eligibility and Account Registration</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>2.1 Eligibility</h3>
                <p className='text-white/60 leading-relaxed'>
                  You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>2.2 Account Information</h3>
                <p className='text-white/60 leading-relaxed'>
                  You agree to provide accurate, current, and complete information when scheduling consultations or engaging our services. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
                </p>
              </section>

              {/* Engagement Process */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>3. Engagement Process and Project Execution</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.1 Consultation and Discovery</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  Our engagement process typically begins with a consultation to understand your requirements, objectives, and technical needs. This consultation does not create a binding obligation for either party.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.2 Project Proposal and Agreement</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  Following the consultation, we will provide a detailed proposal outlining:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Scope of work and deliverables</li>
                  <li>Project timeline and milestones</li>
                  <li>Pricing structure and payment terms</li>
                  <li>Technical specifications and requirements</li>
                  <li>Client responsibilities and dependencies</li>
                </ul>
                <p className='text-white/60 leading-relaxed mt-4'>
                  A formal project engagement begins only upon mutual execution of a signed agreement or statement of work.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>3.3 Client Cooperation</h3>
                <p className='text-white/60 leading-relaxed'>
                  Timely project delivery depends on your cooperation, including providing necessary information, feedback, approvals, and access to systems or resources as specified in the project agreement. Delays caused by lack of client cooperation may result in timeline adjustments and additional fees.
                </p>
              </section>

              {/* Payment Terms */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>4. Fees and Payment Terms</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>4.1 Pricing</h3>
                <p className='text-white/60 leading-relaxed'>
                  All fees for services are specified in the project agreement or proposal. Pricing may be structured as fixed-price, time and materials, or retainer-based, as agreed upon.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>4.2 Payment Schedule</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  Unless otherwise specified, payment terms typically follow this structure:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Initial deposit (typically 30-50%) upon project commencement</li>
                  <li>Milestone payments based on deliverable completion</li>
                  <li>Final payment upon project delivery and acceptance</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>4.3 Late Payments</h3>
                <p className='text-white/60 leading-relaxed'>
                  Invoices are due within the timeframe specified (typically 15-30 days). Late payments may incur interest charges of 1.5% per month or the maximum rate permitted by law, whichever is less. We reserve the right to suspend services for accounts with overdue payments.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>4.4 Expenses</h3>
                <p className='text-white/60 leading-relaxed'>
                  Unless included in the agreed fee, you will reimburse reasonable expenses incurred in connection with your project, including third-party software licenses, hosting fees, stock assets, or other external costs.
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>5. Intellectual Property Rights</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>5.1 Client-Provided Materials</h3>
                <p className='text-white/60 leading-relaxed'>
                  You retain all rights to materials, content, data, and intellectual property you provide to us. You grant us a limited license to use such materials solely for the purpose of delivering the agreed services.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>5.2 Deliverables and Work Product</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  Upon full payment of all fees:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Custom-developed deliverables created specifically for your project will be transferred to you</li>
                  <li>You will receive a license to use any proprietary tools, frameworks, or pre-existing intellectual property incorporated into the deliverables</li>
                  <li>We retain rights to general knowledge, techniques, methodologies, and tools developed or used in providing services</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>5.3 Portfolio Rights</h3>
                <p className='text-white/60 leading-relaxed'>
                  We reserve the right to display completed work in our portfolio, case studies, and marketing materials unless otherwise agreed in writing. We will respect any confidentiality requirements specified in the project agreement.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>5.4 Third-Party Components</h3>
                <p className='text-white/60 leading-relaxed'>
                  Deliverables may include third-party software, libraries, or components subject to their respective licenses. You are responsible for complying with such licenses.
                </p>
              </section>

              {/* Confidentiality */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>6. Confidentiality and Non-Disclosure</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  Both parties agree to maintain confidentiality of proprietary and sensitive information disclosed during the engagement. This includes:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Business strategies, processes, and trade secrets</li>
                  <li>Technical specifications and proprietary technologies</li>
                  <li>Financial information and pricing structures</li>
                  <li>Customer data and user information</li>
                  <li>Any information marked as confidential</li>
                </ul>
                <p className='text-white/60 leading-relaxed mt-4'>
                  Confidential information excludes information that: (a) is publicly available, (b) was known prior to disclosure, (c) is independently developed, or (d) is required to be disclosed by law.
                </p>
              </section>

              {/* Warranties */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>7. Warranties and Representations</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>7.1 Our Warranties</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  We warrant that:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Services will be performed in a professional and workmanlike manner</li>
                  <li>Deliverables will conform to specifications in the project agreement</li>
                  <li>We have the necessary rights to deliver the services</li>
                  <li>Our work will not infringe upon third-party intellectual property rights</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>7.2 Client Warranties</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  You warrant that:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>You have the authority to enter into this agreement</li>
                  <li>Materials you provide do not infringe third-party rights</li>
                  <li>Information provided is accurate and complete</li>
                  <li>You will use deliverables in compliance with applicable laws</li>
                </ul>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>7.3 Disclaimer</h3>
                <p className='text-white/60 leading-relaxed'>
                  EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>8. Limitation of Liability</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Our total liability for any claims arising from services shall not exceed the total fees paid by you in the twelve (12) months preceding the claim</li>
                  <li>We shall not be liable for indirect, incidental, consequential, special, or punitive damages, including lost profits, revenue, or data</li>
                  <li>We are not liable for delays or failures due to circumstances beyond our reasonable control</li>
                </ul>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>9. Indemnification</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  You agree to indemnify, defend, and hold harmless Fynex Studio and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                </p>
                <ul className='list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4'>
                  <li>Your breach of these Terms</li>
                  <li>Your violation of applicable laws or regulations</li>
                  <li>Materials, content, or information you provide</li>
                  <li>Your use of deliverables or services</li>
                  <li>Infringement of third-party rights by your materials</li>
                </ul>
              </section>

              {/* Termination */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>10. Term and Termination</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>10.1 Term</h3>
                <p className='text-white/60 leading-relaxed'>
                  These Terms remain in effect for the duration of our engagement and continue until terminated by either party.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>10.2 Termination for Convenience</h3>
                <p className='text-white/60 leading-relaxed'>
                  Either party may terminate the engagement with written notice as specified in the project agreement. You remain responsible for payment of all work completed and expenses incurred up to the termination date.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>10.3 Termination for Cause</h3>
                <p className='text-white/60 leading-relaxed mb-4'>
                  Either party may terminate immediately for material breach if the breach is not cured within thirty (30) days of written notice.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>10.4 Effect of Termination</h3>
                <p className='text-white/60 leading-relaxed'>
                  Upon termination, you must pay all outstanding fees, and we will deliver work completed to date. Provisions regarding confidentiality, intellectual property, warranties, and limitations of liability survive termination.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>11. Dispute Resolution</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>11.1 Negotiation</h3>
                <p className='text-white/60 leading-relaxed'>
                  In the event of any dispute, the parties agree to first attempt to resolve the matter through good-faith negotiation.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>11.2 Mediation</h3>
                <p className='text-white/60 leading-relaxed'>
                  If negotiation fails, disputes shall be submitted to mediation before a mutually agreed mediator before pursuing litigation.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>11.3 Governing Law</h3>
                <p className='text-white/60 leading-relaxed'>
                  These Terms are governed by applicable laws without regard to conflict of law provisions. Any legal action must be brought in the courts having jurisdiction over Fynex Studio's principal place of business.
                </p>
              </section>

              {/* General Provisions */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>12. General Provisions</h2>
                
                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>12.1 Entire Agreement</h3>
                <p className='text-white/60 leading-relaxed'>
                  These Terms, together with any project agreements, constitute the entire agreement between the parties and supersede all prior agreements and understandings.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>12.2 Amendments</h3>
                <p className='text-white/60 leading-relaxed'>
                  We reserve the right to modify these Terms at any time. Material changes will be communicated via email or website notice. Continued use of services after changes constitutes acceptance.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>12.3 Assignment</h3>
                <p className='text-white/60 leading-relaxed'>
                  You may not assign or transfer these Terms without our prior written consent. We may assign these Terms to affiliates or successors in connection with a merger or sale.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>12.4 Severability</h3>
                <p className='text-white/60 leading-relaxed'>
                  If any provision is found invalid or unenforceable, the remaining provisions continue in full force and effect.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>12.5 Waiver</h3>
                <p className='text-white/60 leading-relaxed'>
                  Failure to enforce any provision does not constitute a waiver of that or any other provision.
                </p>

                <h3 className='text-xl text-white font-semibold mb-3 mt-6'>12.6 Force Majeure</h3>
                <p className='text-white/60 leading-relaxed'>
                  Neither party is liable for delays or failures due to circumstances beyond reasonable control, including natural disasters, acts of government, labor disputes, or technical failures.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className='text-2xl md:text-3xl text-white font-bold mb-4'>13. Contact Information</h2>
                <p className='text-white/60 leading-relaxed mb-4'>
                  For questions regarding these Terms of Service, please contact us:
                </p>
                <div className='mt-6'>
                  <p className='text-white/80 mb-2'><strong className='text-white'>Fynex Studio</strong></p>
                  <p className='text-white/60 mb-2'>Email: fynexxstudio@gmail.com</p>
                  <p className='text-white/60 mb-2'>Website: <Link href='/' className='text-primary hover:underline'>https://fynex-plum.vercel.app/</Link></p>
                  <p className='text-white/60'>Consultation: <Link href='/schedule' className='text-primary hover:underline'>Schedule a Meeting</Link></p>
                </div>
              </section>

              {/* Acknowledgment */}
              <section>
                <div className='mt-8'>
                  <p className='text-white/80 leading-relaxed'>
                    <strong className='text-white'>Acknowledgment:</strong> By using our services, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by their provisions.
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
