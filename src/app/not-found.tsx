import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
        <main className="flex flex-col min-h-screen items-center justify-center p-24 m-10">
        <h2 className='flex'>Not Found</h2>
        
        <p>Could not find requested resource</p>
        
        <Link className=' text-cyan-400' href="/">Return Home</Link>

        </main>
      
    </div>
  )
}