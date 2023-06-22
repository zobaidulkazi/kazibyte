import Image from 'next/image'
import logo from '@/public/kazibyte15.png'

export default function Home() {
  return (
    <main >
      



<div className="flex justify-center">
      <div className="max-w-md">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            <h3 className="text-lg font-semibold">KaziByte</h3>
            <h5 className="text-sm text-gray-600">Welcome KaziByte</h5>
          </div>
         
<Image 
src={logo}
alt='logo'


/>
          <div className="px-4 py-2">
            <p className="text-sm text-gray-700">
            Welcome to KaziByte Systems, your trusted partner for innovative IT solutions. We specialize in leveraging the power of JavaScript, React, Next.js, and Node.js to create dynamic and high-performing websites for businesses of all sizes.
            </p>
          </div>
         
        </div>
      </div>
    </div>



    </main>
  )
}
