import Image from 'next/image'
import { SunIcon,BoltIcon,ExclamationTriangleIcon } from '@heroicons/react/24/solid'


export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
    <h1 className="text-5xl font-bold mb-20">
      Chatgpt messenger
    </h1>
    <div className='flex space-x-2 text-center'>
      <div>
        <div className='flex flex-col items-center justify-center mb-5'>
          <SunIcon className="h-8 w-8" />
          {/* sun icon */}
          <h2>Examples</h2>
        </div>
        <div className='space-y-2'>
          <p className='infoText'>"Explain Something to me"</p>
          <p className='infoText'>"What is the difference between a spaceship and a rocket"</p>
          <p className='infoText'>"What is the color of the inner core of earth?"</p>
          </div>
      </div>

      <div>
        <div className='flex flex-col items-center justify-center mb-5'>
          <BoltIcon className="h-8 w-8" />
          {/* sun icon */}
          <h2>Capabilities</h2>
        </div>
        <div className='space-y-2'>
          <p className='infoText'>"Explain Something to me"</p>
          <p className='infoText'>"What is the difference between a spaceship and a rocket"</p>
          <p className='infoText'>"What is the color of the inner core of earth?"</p>
          </div>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center mb-5'>
          <ExclamationTriangleIcon className="h-8 w-8" />
          {/* sun icon */}
          <h2>Limitations</h2>
        </div>
        <div className='space-y-2'>
          <p className='infoText'>"Explain Something to me"</p>
          <p className='infoText'>"What is the difference between a spaceship and a rocket"</p>
          <p className='infoText'>"What is the color of the inner core of earth?"</p>
          </div>
      </div>
    </div>
    </div>
  )
}
