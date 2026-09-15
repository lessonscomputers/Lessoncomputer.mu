import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | LessonComputer.mu',
  description: 'Terms of Service for LessonComputer.mu — the rules and conditions for using our Cambridge Computer Science and ICT tuition platform.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-muted-foreground text-sm mb-8">Last updated: 15/09/2026</p>

      <div className="prose prose-sm max-w-none space-y-6 text-foreground/80 leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">1. Who we are</h2>
          <p>
            LessonComputer.mu is operated by Lesson Computer Ltd, a company incorporated in Mauritius
            under Business Registration Number C24215107, with its registered address at Belvedere Road,
            Brisée Verdière, 1402-03, Mauritius.
          </p>
          <p className="mt-2">
            In these Terms, &quot;we&quot;, &quot;us&quot;, &quot;our&quot; and &quot;the Company&quot; mean Lesson Computer Ltd.
            &quot;You&quot; and &quot;your&quot; mean the person using the platform. &quot;The platform&quot; means the
            LessonComputer.mu website, its courses, video lessons, live classes and all associated materials.
          </p>
          <p className="mt-2">
            You can reach us at{' '}
            <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">lessonscomputers@gmail.com</a>
            {' '}or on WhatsApp at +230 5915 1012.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">2. Agreement to these Terms</h2>
          <p>
            By creating an account, purchasing a course, joining a live class or otherwise using the
            platform, you agree to these Terms. If you do not agree, please do not use the platform.
          </p>
          <p className="mt-2">
            These Terms include, and should be read together with, our{' '}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and our{' '}
            <Link href="/refunds" className="text-primary hover:underline">Refund Policy</Link>. Both form part of your agreement with us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">3. Who may use the platform</h2>
          <p>
            The platform is designed for secondary school students aged 11 to 18. It covers Grade 7 to
            Grade 9 of the Mauritius national curriculum, and IGCSE, O Level and A Level courses for
            students in Mauritius and internationally. This means many of our users are under 18.
          </p>
          <p className="mt-2">
            If you are under 18, you may only create an account and only purchase a course with the
            knowledge and consent of a parent or legal guardian. Where the student is under 18, the
            contract for the course is between us and the parent or guardian, not the student, and the
            parent or guardian is responsible for payment and for the student&apos;s compliance with these Terms.
          </p>
          <p className="mt-2">
            If you are a parent or guardian creating an account for your child, or permitting your child
            to use an account, you confirm that you accept these Terms on their behalf.
          </p>
          <p className="mt-2">
            We may ask for confirmation of parental consent at any time and may suspend an account until it is provided.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">4. Your account</h2>
          <p>
            You must give accurate information when you register and keep it up to date. You are
            responsible for keeping your password confidential and for all activity that takes place
            under your account.
          </p>
          <p className="mt-2">
            Accounts are personal to one student. You must not share your login details with anyone else,
            and you must not create more than one account in order to get around a restriction, a price,
            or a free trial.
          </p>
          <p className="mt-2">
            If you believe someone else has accessed your account, tell us immediately at{' '}
            <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">lessonscomputers@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">5. What we provide</h2>
          <p>Depending on the course you buy, the platform may give you access to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>recorded video lessons you can watch at your own pace;</li>
            <li>scheduled live online classes;</li>
            <li>notes, worksheets, past paper materials and other downloadable resources;</li>
            <li>free sample content available without payment.</li>
          </ul>
          <p className="mt-2">
            Course content, the number of lessons, and the schedule are described on each course page.
            We add to and improve our courses over time, so the exact contents of a course may change.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">6. Live classes: scheduling, changes and cancellation by us</h2>
          <p>Live class dates and times are published on the relevant course page.</p>
          <p className="mt-2">
            Occasionally we may need to change the time of a class, or cancel and reschedule it — for
            example because of illness, a power or internet failure, or a public holiday. Where this
            happens we will tell you as early as we reasonably can, using the email address on your account.
          </p>
          <p className="mt-2">
            If we cancel a live class and cannot offer a replacement session or a recording of an
            equivalent session, you may request a refund for that class under our Refund Policy.
          </p>
          <p className="mt-2">
            We are not able to give refunds or make-up sessions where a student simply does not attend
            a class that went ahead as scheduled. Recordings are made available precisely so that students
            who miss a class are not left behind.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">7. Prices, currency and how you are charged</h2>
          <p>
            Prices are displayed in Mauritian Rupees (MUR) for students in Mauritius, and in US Dollars
            (USD) for international students.
          </p>
          <p className="mt-2">
            All payments are processed by our payment provider, MIPS (Mauritius Internet Payment
            Solutions), and are settled to Lesson Computer Ltd in Mauritian Rupees. Where a price is
            displayed in USD, the amount is converted and the transaction is presented to your card
            issuer in Mauritian Rupees. The MUR amount shown to you at checkout is the amount charged.
          </p>
          <p className="mt-2">
            Your bank or card issuer may apply its own exchange rate, foreign transaction fee or
            cross-border fee when converting that amount into your own currency. Those charges are
            between you and your bank, we have no control over them, and we cannot refund them.
          </p>
          <p className="mt-2">
            Where the platform displays a price in any currency other than the one you are charged in,
            that figure is an approximate conversion shown for convenience only. It is clearly labelled
            as an estimate and it is never the amount actually charged.
          </p>
          <p className="mt-2">
            Prices are inclusive of any taxes we are required to charge, unless stated otherwise at checkout.
          </p>
          <p className="mt-2">
            We may change our prices at any time. A price change never affects a purchase you have
            already completed. For subscriptions, we will give you at least 30 days&apos; notice by email
            before a price change takes effect, and you may cancel before the new price applies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">8. Payment</h2>
          <p>
            Payments are processed by MIPS (Mauritius Internet Payment Solutions), which accepts debit
            and credit cards from both Mauritian and international students. We do not receive or store
            your full card number, expiry date or security code. Please see our{' '}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for
            details of how payment information is handled.
          </p>
          <p className="mt-2">
            Access to paid content is granted once payment has been confirmed. If a payment fails, is
            reversed or is charged back, we may suspend access until the position is resolved.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">9. Subscriptions, renewal and cancellation</h2>
          <p>
            Monthly subscriptions renew automatically on the same date each month until you cancel them.
          </p>
          <p className="mt-2">
            You may cancel at any time from your account. Cancellation takes effect at the end of the
            month you have already paid for, and you keep full access until that date. We do not
            pro-rate part months, and cancelling part way through a paid month does not entitle you
            to a partial refund.
          </p>
          <p className="mt-2">
            If you want to stop being charged, cancel before your renewal date. We will send a reminder
            to your account email before each renewal.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">10. Refunds</h2>
          <p>
            Refunds are governed by our{' '}
            <Link href="/refunds" className="text-primary hover:underline">Refund Policy</Link>, which
            forms part of these Terms. In summary: monthly subscriptions may be refunded within 7 days
            of purchase if less than 20% of the included videos have been watched; individual video
            purchases are not refundable once the video has been accessed; and live classes may be
            cancelled for a full refund up to 24 hours before the class begins.
          </p>
          <p className="mt-2">
            Nothing in these Terms or in the Refund Policy removes any rights you have under the
            consumer protection laws of Mauritius or of your own country that cannot be excluded by agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">11. Acceptable use</h2>
          <p>You agree to use the platform only for lawful purposes and for your own study. You must not:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>share, sell, rent, publish or redistribute any content from the platform, whether paid or free;</li>
            <li>record, screen-capture, download or rip video lessons or live classes, except where we expressly provide a download button;</li>
            <li>circumvent, disable or attempt to reverse-engineer any access control, watermark or digital rights protection;</li>
            <li>share your account credentials, or allow anyone other than the enrolled student to use your account;</li>
            <li>create multiple accounts to get around a restriction, price or limit;</li>
            <li>harass, bully, abuse, threaten or discriminate against any other student, teacher or member of staff, whether in a live class, in chat, or anywhere else;</li>
            <li>post or transmit anything obscene, hateful, defamatory, or unlawful;</li>
            <li>disrupt a live class, impersonate another person, or misuse the chat, microphone or screen-share functions;</li>
            <li>scrape, crawl, or use automated tools to extract content from the platform;</li>
            <li>introduce malware, attempt to gain unauthorised access to the platform, or interfere with its operation or security.</li>
          </ul>
          <p className="mt-2">
            Because our students are children, we take conduct in live classes seriously. Serious or
            repeated breaches will lead to removal from a class and termination of the account without refund.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">12. Intellectual property</h2>
          <p>
            All content on LessonComputer.mu is the sole property of Lesson Computer Ltd or of its
            licensors. This includes, without limitation, all video lessons, live classes and their
            recordings, course materials, documents, revision notes, worked solutions, question banks,
            text, graphics, illustrations, logos, trademarks, designs, page layouts and software.
          </p>
          <p className="mt-2">
            No content may be copied, reproduced, redistributed, resold, uploaded to any other site or
            platform, publicly displayed, or used to train any machine learning or artificial intelligence
            system, without our prior written consent.
          </p>
          <p className="mt-2">
            Unauthorised use is a serious breach of these Terms. It may result in immediate termination
            of your account without refund, and we reserve the right to pursue legal action and to
            recover our losses and costs.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">13. Your licence to use our content</h2>
          <p>
            When you buy a course or subscribe, we grant you a personal, limited, non-exclusive,
            non-transferable licence to access and view the relevant content for your own study, for
            as long as your purchase or subscription remains active.
          </p>
          <p className="mt-2">
            This licence does not transfer ownership of anything to you, and it ends when your
            subscription ends or your account is terminated.
          </p>
          <p className="mt-2">
            Where we provide printable notes or worksheets, you may print and keep copies for your
            own study, including after your subscription ends. You may not distribute them.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">14. Content you provide</h2>
          <p>
            You may submit content to the platform — questions in a live class or chat, messages
            through the contact form, feedback, reviews or testimonials.
          </p>
          <p className="mt-2">
            You keep ownership of what you submit. By submitting it, you grant us a worldwide,
            royalty-free licence to use, reproduce and display that content for the purpose of
            operating, promoting and improving the platform. If we wish to publish a testimonial
            that identifies a student by name or image, we will ask for consent first, and for a
            student under 18 we will ask the parent or guardian.
          </p>
          <p className="mt-2">
            You must not submit anything you do not have the right to submit, and you must not
            submit personal information about other people without their permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">15. Live classes: recording and privacy</h2>
          <p>
            Live classes are held on Zoom and are recorded so that students who cannot attend are
            able to watch afterwards, and so that students who did attend can revise.
          </p>
          <p className="mt-2">
            Recordings capture the teacher&apos;s screen and voice. They may also capture the voices
            of students who speak and messages posted in the class chat. Students are never required
            to turn on a camera and may keep it off at all times.
          </p>
          <p className="mt-2">
            Recordings are made available only to students enrolled in that course. They must not be
            shared, downloaded or redistributed.
          </p>
          <p className="mt-2">
            How we handle recordings as personal data is explained in our{' '}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">16. Technical requirements and availability</h2>
          <p>
            To use the platform you need a suitable device and a stable internet connection capable
            of streaming video. We are not responsible for your own equipment, software, internet
            service or data costs, and problems on your side are not grounds for a refund.
          </p>
          <p className="mt-2">
            We aim to keep the platform available at all times, but we do not guarantee uninterrupted
            or error-free access. We may suspend access temporarily for maintenance, upgrades, or for
            reasons outside our control, and we will try to give notice where we reasonably can.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">17. No guarantee of results</h2>
          <p>
            Our courses are designed to help students prepare for their examinations, and we put real
            effort into the quality of our teaching. However, examination results depend on the
            individual student&apos;s work, attendance, revision and performance on the day.
          </p>
          <p className="mt-2">
            We do not guarantee any particular grade, mark, pass, or examination outcome, and nothing
            on the platform should be read as such a guarantee.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">18. Independence from Cambridge</h2>
          <p>
            Lesson Computer Ltd is an independent tuition provider. We are not affiliated with,
            endorsed by, accredited by, or connected to Cambridge Assessment International Education,
            the University of Cambridge, the Mauritius Examinations Syndicate, or any examination board.
          </p>
          <p className="mt-2">
            References to syllabus codes such as 0478, 2210 and 9618, and to Cambridge qualifications,
            are made solely to identify the syllabuses our courses prepare students for. All trademarks
            belong to their respective owners.
          </p>
          <p className="mt-2">
            Students must enter for examinations through their own school or an authorised examination
            centre. We do not enter students for examinations and we do not issue qualifications.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">19. Third-party services and links</h2>
          <p>
            The platform relies on third-party services, and may contain links to third-party websites
            including our Facebook, Instagram, TikTok and WhatsApp pages. We are not responsible for
            the content, policies or practices of those third parties, and your use of them is governed
            by their own terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">20. Suspension and termination</h2>
          <p>
            We may suspend or terminate your account if you breach these Terms, if we reasonably suspect
            fraudulent or unlawful activity, if payment is not made, or if your conduct puts other
            students or our staff at risk. Where the breach is serious — for example sharing or reselling
            our content, or abusive behaviour towards a student or teacher — we may do so immediately
            and without notice, and without refund.
          </p>
          <p className="mt-2">
            Where the issue is minor or capable of being put right, we will normally contact you first
            and give you an opportunity to resolve it.
          </p>
          <p className="mt-2">
            You may close your account at any time by contacting us at{' '}
            <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">lessonscomputers@gmail.com</a>.
            Closing your account does not automatically entitle you to a refund; the Refund Policy applies.
          </p>
          <p className="mt-2">
            Sections 12, 14, 20, 21, 22, 26 and 27 continue to apply after your account ends.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">21. Our liability to you</h2>
          <p>
            Nothing in these Terms limits or excludes our liability for death or personal injury caused
            by our negligence, for fraud or fraudulent misrepresentation, or for anything else that
            cannot lawfully be limited or excluded.
          </p>
          <p className="mt-2">Subject to that paragraph:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>the platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis;</li>
            <li>we are not liable for indirect, incidental, special or consequential loss, or for loss of profit, loss of opportunity, loss of data, or for examination results;</li>
            <li>our total liability to you arising out of or in connection with your use of the platform, whether in contract, tort or otherwise, is limited to the total amount you paid us in the twelve months before the event giving rise to the claim.</li>
          </ul>
          <p className="mt-2">
            If you are a consumer, this section does not affect your statutory rights under the
            consumer protection laws of Mauritius or of the country you live in.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">22. Your liability to us</h2>
          <p>
            If you breach these Terms — in particular by copying, sharing, reselling or republishing
            our content — you agree to compensate us for the losses, costs and reasonable legal expenses
            we incur as a result.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">23. Events outside our control</h2>
          <p>
            We are not liable for failure to perform our obligations where that failure is caused by
            something outside our reasonable control, including cyclones and severe weather, power
            failures, national internet or telecommunications outages, fire, flood, civil unrest,
            epidemic, or the act of any government or authority. Where such an event prevents live
            classes from going ahead, we will reschedule them where we reasonably can.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">24. Copyright complaints</h2>
          <p>
            If you believe that content on the platform infringes your copyright, email{' '}
            <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">lessonscomputers@gmail.com</a>{' '}
            with a description of the work, the URL of the content in question, your contact details,
            and a statement that you are the rights holder or authorised to act for them. We will
            investigate and remove infringing content where the complaint is well-founded.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">25. Changes to these Terms and to the platform</h2>
          <p>
            We may update these Terms from time to time — for example to reflect a change in our
            courses, our payment arrangements, or the law.
          </p>
          <p className="mt-2">
            Where a change is material and affects your rights, we will give you reasonable notice
            by email or by a notice on the platform before it takes effect. Continuing to use the
            platform after a change takes effect means you accept the updated Terms. If you do not
            accept them, you may cancel your subscription.
          </p>
          <p className="mt-2">
            We may also change, add to, or withdraw courses and features, provided we do not materially
            reduce what you have already paid for.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">26. General</h2>
          <p>
            <strong>Entire agreement.</strong> These Terms, together with the Privacy Policy and the
            Refund Policy, are the whole agreement between you and us about your use of the platform.
          </p>
          <p className="mt-2">
            <strong>Severability.</strong> If a court finds any part of these Terms unenforceable,
            the rest continues to apply.
          </p>
          <p className="mt-2">
            <strong>No waiver.</strong> If we do not enforce a right straight away, that does not mean
            we have given it up.
          </p>
          <p className="mt-2">
            <strong>Assignment.</strong> You may not transfer your account or your rights under these
            Terms to anyone else. We may transfer our rights and obligations to another company, for
            example as part of a reorganisation or sale of the business, provided your rights are not reduced.
          </p>
          <p className="mt-2">
            <strong>No partnership.</strong> Nothing in these Terms creates a partnership, agency or
            employment relationship between us.
          </p>
          <p className="mt-2">
            <strong>Language.</strong> These Terms are written in English, and English is the governing
            language of our agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">27. Governing law and jurisdiction</h2>
          <p>
            These Terms and any dispute arising out of them are governed by the laws of Mauritius. The
            courts of Mauritius have exclusive jurisdiction, except that if you are a consumer resident
            elsewhere, you may also have the right to bring proceedings in the courts of your own country
            where the law of that country gives you that right.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">28. Complaints and contact</h2>
          <p>
            If you are unhappy with anything, please contact us first — most issues are resolved quickly
            and informally. We aim to acknowledge complaints within 2 business days.
          </p>
          <div className="mt-3 space-y-1 text-foreground/80">
            <p><strong>Lesson Computer Ltd</strong></p>
            <p>Business Registration Number: C24215107</p>
            <p>Belvedere Road, Brisée Verdière, 1402-03, Mauritius</p>
            <p>
              Email:{' '}
              <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">
                lessonscomputers@gmail.com
              </a>
            </p>
            <p>WhatsApp: +230 5915 1012</p>
          </div>
        </section>

      </div>
    </div>
  )
}
