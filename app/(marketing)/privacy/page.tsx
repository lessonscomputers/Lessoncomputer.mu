import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | LessonComputer.mu',
  description: 'Privacy Policy for LessonComputer.mu — how Lesson Computer Ltd collects, uses, shares and protects your personal data.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground text-sm mb-8">Last updated: 15/09/2026</p>

      <div className="prose prose-sm max-w-none space-y-6 text-foreground/80 leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">1. Who we are and how to contact us</h2>
          <p>
            LessonComputer.mu is operated by Lesson Computer Ltd, a company incorporated in Mauritius
            under Business Registration Number C24215107, with its registered address at Belvedere Road,
            Brisée Verdière, 1402-03, Mauritius.
          </p>
          <p className="mt-2">
            Lesson Computer Ltd is the data controller for the personal data described in this policy.
            That means we decide what data is collected and what it is used for, and we are responsible
            for looking after it.
          </p>
          <p className="mt-2">For anything to do with privacy or your personal data, contact us at:</p>
          <div className="mt-2 space-y-1">
            <p>Email: <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">lessonscomputers@gmail.com</a></p>
            <p>Post: Lesson Computer Ltd, Belvedere Road, Brisée Verdière, 1402-03, Mauritius</p>
            <p>WhatsApp: +230 5915 1012</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">2. What this policy covers</h2>
          <p>
            This policy explains what personal data we collect when you use LessonComputer.mu, why we
            collect it, who we share it with, how long we keep it, and what rights you have.
          </p>
          <p className="mt-2">
            We handle personal data in line with the Data Protection Act 2017 of Mauritius. Because we
            teach students outside Mauritius as well, where the General Data Protection Regulation (GDPR)
            applies to a student in the European Economic Area or the United Kingdom, we handle their
            data in line with that too.
          </p>
          <p className="mt-2">
            Please read this policy alongside our{' '}
            <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">3. The personal data we collect</h2>
          <p>
            <strong>Account and profile data.</strong> When you register we collect your full name,
            email address, the grade or course level you select, your answer to &quot;How did you hear about
            us?&quot;, and a password (which is stored in encrypted form and is never visible to us).
          </p>
          <p className="mt-2">
            <strong>Sign-in data from Google.</strong> If you choose &quot;Sign up with Google&quot;, Google
            sends us your name, email address and profile picture so we can create your account. We do
            not receive your Google password and we have no access to your Gmail, Drive or any other
            Google service.
          </p>
          <p className="mt-2">
            <strong>Parent or guardian data.</strong> Where the student is under 18, we collect the
            name, email address and, where provided, the telephone number of the parent or guardian
            who gives consent and makes payment.
          </p>
          <p className="mt-2">
            <strong>Payment data.</strong> When you buy a course, payment is handled by our payment
            provider, MIPS (Mauritius Internet Payment Solutions). Your full card number, expiry date
            and security code go directly to them and never reach our servers. We receive only a record
            of the transaction — the amount, the currency, the date, whether it succeeded, and the last
            four digits and card type.
          </p>
          <p className="mt-2">
            <strong>Learning and usage data.</strong> We record which videos you watch and how far
            through them you get, which live classes you attend, which courses you are enrolled in, and
            your progress through a course. This is what lets you pick up where you left off and lets
            us see which lessons students find difficult.
          </p>
          <p className="mt-2">
            <strong>Live class data.</strong> If you join a live class on Zoom we process your display
            name, your microphone audio if you speak, any messages you post in the class chat, and your
            camera image if you choose to turn your camera on. Live classes are recorded — see section 7.
          </p>
          <p className="mt-2">
            <strong>Communications.</strong> If you use the contact form we collect your name, email
            address, subject and message. If you email or message us on WhatsApp, we keep that
            correspondence. If you subscribe to our new-class notifications, we collect your email address.
          </p>
          <p className="mt-2">
            <strong>Technical data.</strong> Our servers and service providers automatically record your
            IP address, browser type and version, device type, operating system, approximate location
            derived from your IP address (country and city level only), and the pages you visit with
            timestamps. This is standard for any website and is used for security, fraud prevention and
            diagnosing faults.
          </p>
          <p className="mt-2">
            We do not ask for and do not want your national identity number, passport number, bank account
            details, health information, religious beliefs, or any other special category of data. Please
            do not send us any of these.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">4. Why we use your data, and our legal basis</h2>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">What we use it for</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Data used</th>
                  <th className="text-left py-2 font-semibold text-foreground">Legal basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  ['Creating and running your account', 'Account, profile, sign-in', 'Performance of our contract with you'],
                  ['Giving you access to the courses you bought', 'Account, learning, payment', 'Performance of our contract'],
                  ['Taking payment and issuing receipts', 'Payment, account', 'Performance of our contract'],
                  ['Running live classes and making recordings available', 'Live class data', 'Performance of our contract'],
                  ['Sending account emails — confirmations, receipts, class reminders, schedule changes', 'Account', 'Performance of our contract'],
                  ['Contacting a parent or guardian about a student\'s account or payment', 'Parent/guardian, account', 'Performance of our contract; our legitimate interest in safeguarding students'],
                  ['Improving our courses and working out which lessons need reworking', 'Learning, technical', 'Our legitimate interest in improving what we teach'],
                  ['Security, preventing account sharing, fraud and content piracy', 'Technical, learning', 'Our legitimate interest in protecting our business and our students'],
                  ['Answering your questions', 'Communications', 'Our legitimate interest in responding to enquiries'],
                  ['Sending marketing emails and new-class notifications', 'Email address', 'Your consent'],
                  ['Publishing a testimonial that identifies you', 'Name, image, words', 'Your consent (or your parent\'s, if you are under 18)'],
                  ['Keeping accounting and tax records', 'Payment, account', 'Our legal obligations under Mauritian law'],
                  ['Analytics and advertising measurement', 'Technical, cookie data', 'Your consent'],
                ].map(([purpose, data, basis], i) => (
                  <tr key={i}>
                    <td className="py-2 pr-4 align-top">{purpose}</td>
                    <td className="py-2 pr-4 align-top">{data}</td>
                    <td className="py-2 align-top">{basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Where we rely on legitimate interests, we have considered whether our interest is fair to
            you and have concluded that it does not override your rights. You may object at any time —
            see section 13.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">5. What we never do</h2>
          <p>We never sell your personal data.</p>
          <p className="mt-2">We never rent, trade or share your personal data with third parties for their own marketing.</p>
          <p className="mt-2">
            We do not use your personal data, your questions, or live class recordings to train
            artificial intelligence models, and we do not allow our suppliers to do so.
          </p>
          <p className="mt-2">
            We do not make decisions about you by purely automated means that produce legal or similarly
            significant effects.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">6. Students under 18 — parental consent and children&apos;s data</h2>
          <p>
            Our students are secondary school students aged 11 to 18, so we take children&apos;s privacy seriously.
          </p>
          <p className="mt-2">
            <strong>Consent.</strong> If you are under 18, you must have the consent of a parent or
            legal guardian before you create an account or buy a course. When registering we ask you
            to confirm that consent has been given and to provide a parent or guardian email address.
          </p>
          <p className="mt-2">
            <strong>What we collect from children.</strong> We deliberately keep this to a minimum:
            name, email address, grade level, learning progress and live class participation. We do
            not ask children for a home address, a date of birth beyond the grade level, a telephone
            number, or payment details.
          </p>
          <p className="mt-2">
            <strong>Marketing.</strong> We do not send marketing emails to students we know to be
            under 18. Marketing about courses and new classes goes to the parent or guardian email
            on the account.
          </p>
          <p className="mt-2">
            <strong>Parental rights.</strong> A parent or guardian may at any time ask to see what
            data we hold about their child, ask us to correct it, ask us to delete the account, or
            withdraw consent. Email{' '}
            <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">lessonscomputers@gmail.com</a>{' '}
            from the parent or guardian address on the account.
          </p>
          <p className="mt-2">
            <strong>Safeguarding.</strong> Live classes are supervised by the teacher. There is no
            private student-to-student messaging on the platform. If we become aware of conduct that
            puts a child at risk we will act on it, including by contacting the parent or guardian
            and, where necessary, the relevant authorities.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">7. Live class recordings</h2>
          <p>
            We record live classes so that students who cannot attend can watch afterwards and so that
            those who attended can revise.
          </p>
          <p className="mt-2">
            A recording captures the teacher&apos;s screen and voice. It may also capture the voice of
            any student who speaks and any message posted in the class chat. Students are never required
            to switch on a camera and may keep it off throughout. If you prefer not to be recorded at
            all, ask your question through the chat or by email instead of speaking.
          </p>
          <p className="mt-2">
            Recordings are stored securely and are made available only to students enrolled in that
            course. They are not published publicly, not posted on social media, and not shared with
            anyone else.
          </p>
          <p className="mt-2">
            We keep a recording for 52 weeks from the date of the class, after which it is deleted.
          </p>
          <p className="mt-2">
            If you or your child appear in a recording and you want that portion removed, contact us
            and we will edit or delete the relevant part where it is technically possible to do so.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">8. Cookies and similar technologies</h2>
          <p>We use cookies and similar technologies in two categories.</p>
          <p className="mt-2">
            <strong>Strictly necessary cookies.</strong> These make the platform work and cannot be
            switched off: an authentication cookie that keeps you signed in, a session cookie that
            remembers your place in a video, and a security cookie that protects forms against
            cross-site request forgery.
          </p>
          <p className="mt-2">
            <strong>Analytics and advertising cookies.</strong> These help us understand how people
            find and use the site, and measure whether our advertising is working. We set them only
            with your consent, given through the cookie banner shown on your first visit. They are:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Google Tag Manager (container GTM-K9WPDXKM) — the container that loads our measurement tags. It does not itself store analytics data, but it controls which of the tags below run.</li>
            <li>Google Analytics 4 — measures how many people visit the site, which pages and courses they look at, and how they move through the site.</li>
            <li>Meta Pixel — measures whether our Facebook and Instagram advertising leads to enrolments, and allows us to show relevant ads to people who have visited the site.</li>
            <li>Stape.io — a server-side tagging service that forwards measurement events to Meta and Google on our behalf, using our own server rather than your browser alone.</li>
          </ul>
          <p className="mt-2">
            Where these tools are provided by Meta Platforms or Google, those companies act as separate
            controllers of the data they collect, and their own privacy policies apply.
          </p>
          <p className="mt-2">
            You can change or withdraw your cookie consent at any time through the &quot;Cookie settings&quot;
            link in the footer of every page, and you can block or delete cookies in your browser
            settings. Blocking strictly necessary cookies will stop you being able to sign in.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">9. Marketing</h2>
          <p>
            If you subscribe to new-class notifications, or ask us to keep you informed, we will email
            you about new courses, new lessons and upcoming live classes.
          </p>
          <p className="mt-2">
            Every marketing email carries an unsubscribe link, and you can also unsubscribe from your
            account settings or by emailing us. Unsubscribing from marketing does not stop essential
            account emails such as receipts, class reminders and schedule changes — those are part of
            the service you have paid for.
          </p>
          <p className="mt-2">
            We do not send marketing to students we know to be under 18; it goes to the parent or
            guardian on the account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">10. Who we share your data with</h2>
          <p>
            We share personal data only with service providers who help us run the platform, and only
            to the extent they need it. They act on our instructions, are bound by contract to protect
            it, and may not use it for their own purposes.
          </p>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Provider</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">What they do</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Data involved</th>
                  <th className="text-left py-2 font-semibold text-foreground">Where</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  ['Supabase', 'Database, authentication, file storage and account emails', 'Account, learning, uploaded files, name, email', 'European Union'],
                  ['Vercel', 'Website hosting and delivery', 'Technical data', 'Global edge network, primary region European Union'],
                  ['MIPS (Mauritius Internet Payment Solutions)', 'Processing card payments', 'Payment, name, email', 'Mauritius'],
                  ['Google', '"Sign in with Google" authentication', 'Name, email, profile picture', 'Global'],
                  ['Zoom Video Communications', 'Hosting live classes', 'Display name, audio, chat, video if enabled', 'Global, processed in the United States and European Union'],
                  ['Streamable', 'Streaming and hosting video lessons', 'Technical, playback data', 'Global CDN'],
                  ['Google (Google Analytics 4, Google Tag Manager)', 'Website analytics and tag management', 'Technical, cookie data', 'Global'],
                  ['Meta Platforms (Meta Pixel)', 'Advertising measurement', 'Technical, cookie data', 'Global'],
                  ['Stape.io', 'Server-side tagging and event forwarding', 'Technical, cookie data', 'European Union'],
                ].map(([provider, role, data, location], i) => (
                  <tr key={i}>
                    <td className="py-2 pr-4 align-top font-medium">{provider}</td>
                    <td className="py-2 pr-4 align-top">{role}</td>
                    <td className="py-2 pr-4 align-top">{data}</td>
                    <td className="py-2 align-top">{location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            We may also disclose personal data where we are legally required to — for example to a
            court, a regulator, the Data Protection Office, or the Mauritius Revenue Authority — or
            where disclosure is necessary to protect the safety of a child or to establish or defend a
            legal claim.
          </p>
          <p className="mt-2">
            If the business is ever sold or reorganised, personal data may transfer to the new owner,
            who would remain bound by this policy until they gave you notice of any change.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">11. Sending data outside Mauritius</h2>
          <p>
            Our main database is hosted in the European Union, and several of our service providers
            operate outside Mauritius. This means your personal data is transferred out of Mauritius.
          </p>
          <p className="mt-2">
            Under the Data Protection Act 2017 we may only do this where there are appropriate
            safeguards. We rely on the fact that our providers are located in, or contractually
            committed to, jurisdictions with comparable data protection standards, and our contracts
            with them include standard data protection clauses obliging them to protect your data to
            the standard required by Mauritian and European law.
          </p>
          <p className="mt-2">
            You can ask us for details of the safeguards that apply to a particular transfer by emailing{' '}
            <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">lessonscomputers@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">12. How long we keep your data</h2>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Data</th>
                  <th className="text-left py-2 font-semibold text-foreground">How long we keep it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  ['Account and profile data', 'While your account is open, then 12 months after closure, then deleted'],
                  ['Learning and progress data', 'While your account is open, then 12 months, then deleted or anonymised'],
                  ['Live class recordings', '52 weeks from the date of the class, then deleted'],
                  ['Payment and transaction records', '7 years from the end of the financial year — required for tax and accounting law'],
                  ['Contact form messages and email correspondence', '24 months from the last message'],
                  ['Marketing subscription records', 'Until you unsubscribe, plus a suppression record so we don\'t email you again'],
                  ['Server and security logs', '90 days, then deleted or anonymised'],
                ].map(([data, retention], i) => (
                  <tr key={i}>
                    <td className="py-2 pr-4 align-top font-medium">{data}</td>
                    <td className="py-2 align-top">{retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Where we no longer need data but cannot delete it immediately — for example because it
            sits in a backup — we isolate it and delete it when the backup cycle next runs.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">13. Your rights</h2>
          <p>You have the following rights over your personal data:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Access</strong> — ask for a copy of the data we hold about you.</li>
            <li><strong>Correction</strong> — ask us to fix anything inaccurate or incomplete. You can update most of this yourself in your account settings.</li>
            <li><strong>Deletion</strong> — ask us to delete your data. We will do so unless we are legally required to keep it, such as payment records for tax purposes.</li>
            <li><strong>Restriction</strong> — ask us to stop using your data while a dispute about it is resolved.</li>
            <li><strong>Objection</strong> — object to processing we carry out on the basis of legitimate interests, and object to direct marketing at any time.</li>
            <li><strong>Portability</strong> — ask for the data you gave us in a structured, commonly used, machine-readable format.</li>
            <li><strong>Withdraw consent</strong> — where we rely on consent, withdraw it at any time. This does not affect anything we did before you withdrew it.</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, email{' '}
            <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">lessonscomputers@gmail.com</a>.
            We will respond within one month. If your request is complex we may need longer, and we
            will tell you if so. There is no charge.
          </p>
          <p className="mt-2">
            We may ask you to confirm your identity before we act, to make sure we are not giving
            your data to someone else. For a student under 18, a request should come from the parent
            or guardian on the account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">14. Security</h2>
          <p>
            We protect your data with measures including encryption of data in transit (HTTPS) and at
            rest, hashed password storage, role-based access controls so that only people who need
            access have it, and regular review of our providers&apos; security.
          </p>
          <p className="mt-2">
            No system is completely secure, and we cannot guarantee absolute security. You help by
            choosing a strong, unique password and never sharing your login details.
          </p>
          <p className="mt-2">
            If a data breach occurs that is likely to affect your rights, we will notify the Data
            Protection Commissioner of Mauritius as required by law, and we will tell you directly
            where the breach is likely to result in a high risk to you.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">15. Links to other sites</h2>
          <p>
            Our site links to our pages on Facebook, Instagram, TikTok and WhatsApp. Those platforms
            have their own privacy policies and we are not responsible for how they handle your data.
            This policy covers only LessonComputer.mu.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">16. Changes to this policy</h2>
          <p>
            We may update this policy as our service changes or as the law changes. The &quot;Last updated&quot;
            date at the top always shows the current version. Where a change materially affects your
            rights, we will tell you by email or by a clear notice on the platform before it takes effect.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">17. Contact us, and how to complain</h2>
          <p>
            If you have a question or a concern about how we handle your data, contact us first — we
            would much rather fix it directly.
          </p>
          <div className="mt-3 space-y-1 text-foreground/80">
            <p><strong>Lesson Computer Ltd</strong></p>
            <p>Business Registration Number: C24215107</p>
            <p>Belvedere Road, Brisée Verdière, 1402-03, Mauritius</p>
            <p>Email: <a href="mailto:lessonscomputers@gmail.com" className="text-primary hover:underline">lessonscomputers@gmail.com</a></p>
            <p>WhatsApp: +230 5915 1012</p>
          </div>
          <p className="mt-3">
            If you are not satisfied with our response, you have the right to complain to the Data
            Protection Office of Mauritius:
          </p>
          <div className="mt-2 space-y-1 text-foreground/80">
            <p><strong>Data Protection Office</strong></p>
            <p>5th Floor, SICOM Tower, Wall Street, Ebène, Mauritius</p>
            <p>Website: dataprotection.govmu.org</p>
          </div>
          <p className="mt-2">
            If you live in the European Economic Area or the United Kingdom, you may instead complain
            to the supervisory authority in your own country.
          </p>
        </section>

      </div>
    </div>
  )
}
