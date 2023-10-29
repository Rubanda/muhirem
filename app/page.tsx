import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="m-auto max-w-2xl flex flex-col px-3">
      <h3 className='font-extrabold tracking-tight mb-6'>Hey, i&apos;m Moise👋🏽</h3>
      <p className='text-base text-muted-foreground'>
        I&apos;m a backend engineer at Gunsel, passionate about web development
        and dedicated to creating robust and efficient solutions for the digital world.
      </p>
      <div className='border-2 border-solid border-black p-23'>
      <Button className='rounded-full bg-pink-600 text-white animate-bounce' >Osborn</Button>

      </div>
    </main>
  )
}
