import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DemoBanner = () => {
    return (
        <div className='bg-white py-12'>

            <div className="max-w-6xl flex justify-between mx-auto items-center">

                <div>
                    <h3 className='text-4xl text-gray-700 font-semibold mb-3 capitalize'>Book a <span className='text-orange-500'>free demo</span> session now</h3>
                    <Link href="https://wa.me/917042662602" className='underline text-gray-600'>
                        Connect For a Demo Session
                    </Link>
                </div>

                <Image
                    src="/schoolgirl.png"
                    alt="school.."
                    width={400}
                    height={400}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default DemoBanner