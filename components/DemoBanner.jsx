import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DemoBanner = () => {
    return (
        <div className='bg-white py-12'>

            <div className="sm:max-w-6xl flex sm:justify-between justify-center mx-auto items-center sm:px-6 px-2">

                <div>
                    <h3 className='md:text-4xl sm:text-2xl text-xl md:w-full sm:w-xs w-52 text-gray-700 font-semibold mb-3 capitalize'>Book a <span className='secondary-text'>free demo</span> session now</h3>
                    <Link href="https://wa.me/917042662602" className='underline text-gray-600 md:text-base text-xs'>
                        Connect For a Demo Session
                    </Link>
                </div>

                <Image
                    src="/schoolgirl.png"
                    alt="school.."
                    width={400}
                    height={400}
                    className="object-contain md:w-[400px] md:h-[400px] w-28"
                />
            </div>
        </div>
    )
}

export default DemoBanner