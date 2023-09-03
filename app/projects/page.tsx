import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <main className="m-auto max-w-2xl flex flex-col  justify-between  px-3">
      <h3 className='text-2xl font-semibold tracking-tight py-10'>Projects I&apos;ve Contributed To: Join the Journey</h3>
      <p className='text-base text-muted-foreground'>
        I&apos;ve worked on various small projects, but these are the ones I&apos;m most proud of. Several are open-source, so feel free to check out the code and contribute your ideas for improvement.
      </p>
      <div>

        <Link target='_blank' href="https://masatafit.com" className='flex flex-col py-3'>
          <span className='underline'>
            Masatafit
          </span>
          <span className='text-muted-foreground'>
            Health and Fitness Web App
          </span>
        </Link>
        <Link target='_blank' href="https://safaricharger.com" className='flex flex-col py-3'>
          <span className='underline'>
            SafariCharger
          </span>
          <span className='text-muted-foreground'>
          We&apos;re an East African startup based in Rwanda, specializing in EV charger operating systems.          </span>
        </Link>
        <Link target='_blank' href="https://www.jfountainmission.org/" className='flex flex-col py-3'>
          <span className='underline'>
          jfountainmission
          </span>
          <span className='text-muted-foreground'>
          Jacob&apos;s Fountain Mission: A Nonprofit Sharing God&apos;s Love Through Deeds.
          </span>
        </Link>
        <Link target='_blank' href="https://health-app-front.vercel.app/" className='flex flex-col py-3'>
          <span className='underline'>
          healt-app school project
          </span>
          <span className='text-muted-foreground'>
          Track your heart rate and location to generate detailed health reports.
          </span>
        </Link>
        </div>
    </main>
  )
}
