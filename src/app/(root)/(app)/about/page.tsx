import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import dedeard from '@/assets/dedeard.jpg'
import pic from '../../../../../public/media/IMG_5013.jpg'
import { RESUME_URL } from '@/constans/common'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'About - Sahal Palayat',
  openGraph: {
    title: 'About - Sahal Palayat',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={pic} alt="sahal" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">I’m Sahal Palayat</h2>
          <div className="mb-6">
            <p className="mb-1">
              As a creative and enthusiastic MERN stack developer, I love building web applications that are both powerful and user-friendly.   <br />

              My coding journey is powered by a deep passion for innovation and problem-solving. From developing solid back-end systems to designing beautiful front-end interfaces, I approach every project with energy and a desire to learn and grow.
<br />
              I'm excited about the possibility of collaborating to create cutting-edge web applications. Let's connect and make something amazing together!
            </p>
          </div>
          {/* <h2 className="mb-2 text-xl font-bold">Saya Dede Ardiansya</h2>
          <div className="mb-6">
            <p className="mb-1">
              Full Stack Web Developer berbasis di Makassar, Indonesia.
              <br />
              Saya mencoba yang terbaik untuk membuat kode yang saya tulis mudah untuk dibaca dan dipahami.
            </p>
          </div> */}
          <h2 className="mb-2 text-xl font-bold">Tech i love</h2>
          <div className="mb-6">
            <p className="mb-1">MERN Stack Developer || JAVASCRIPT | TYPESCRIPT | REACT | NEXTJS | NODE JS | EXPRESS JS | PHP | LARAVEL | MONGO DB | SQL | Git | GitHub | AWS | EC2 | Data Structure.</p>
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
