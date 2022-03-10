import Layout from '../templates/Layout'
import LandingHero from '../components/organisms/Heros/LandingHero'
import LandingAbout from '../components/organisms/Abouts/LandingAbout'
import { EnvelopeClosedIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Home">
      <LandingHero />
      <LandingAbout />
      {/* <div className="z-90 fixed inset-0 my-auto flex h-screen w-fit justify-center">
        <div className="max-h-1/4 flex flex-col items-center justify-evenly">
          <Link href="www.twitter.com">
            <a>
              <TwitterLogoIcon className="h-8 w-8" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/snedothedevo">
            <a target="_blank" rel="noopener noreferrer">
              <InstagramLogoIcon className="h-8 w-8 py-5" />
            </a>
          </Link>
          <Link href="mailto:hello@isaacsneddonjenkins.co.uk">
            <a>
              <EnvelopeClosedIcon className="h-8 w-8" />
            </a>
          </Link>
        </div>
      </div> */}
    </Layout>
  )
}
