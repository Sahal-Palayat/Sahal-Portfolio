import type { Metadata } from 'next'
import { FORMSPREE_KEY, SOCIALS } from '@/constans/common'
import ContactForm from './components/ContactForm'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'Contact - Sahal Palayat',
  openGraph: {
    title: 'Contact - Sahal Palayat',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">TEMPORARY ADDRESS</h2>
            <p className="text-sm leading-5">
              Ernakulam, Kerala. <br />
              682304
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href="sahalpalayat5894@gmail.com" rel="noopener" className="hover:text-yellow-600">
                sahalpalayat5894@gmail.com
              </a>
              <br />
              <a href="mailto:sahalpalayat5894@gmail.com" rel="noopener" className="hover:text-yellow-600">
                sahalpalayat@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">MOBILE PHONE</h2>
            <p className="text-sm leading-5">
              <span>Call: </span>
              <a href="tel:+91 7510115894" target="_blank" rel="noopener" className="hover:text-yellow-600">
                +91 7510115894
              </a>
              <br />
              <span>WhatsApp: </span>
              <a href={SOCIALS.WA} target="_blank" rel="noopener" className="hover:text-yellow-600">
                +91 7510115894
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
