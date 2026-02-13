"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const ContactModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 bg-black/40 flex justify-center items-center z-50'>
            <div className='w-[480px] bg-white p-4 px-6 rounded-md border border-gray-400 flex items-center flex-col gap-3 relative'>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className='absolute top-2 right-3 text-gray-500 text-xl cursor-pointer'
                >
                    ✕
                </button>

                <p className='text-[#002855] font-medium text-center text-2xl'>
                    Want to learn with us?
                </p>

                <video
                    autoPlay
                    muted
                    loop
                    className="w-44 rounded-lg"
                >
                    <source src="/Learning.mp4" type="video/mp4" />
                </video>

                <p className='text-[#002855] text-center'>
                    Tell us your requirements today! +91 7042662602
                </p>

                <div className='text-center flex flex-col mt-2 items-center'>
                    <Link
                        href="https://wa.me/917042662602"
                        target="_blank"
                        className="bg-green-600 rounded-md block w-fit px-4 py-1.5"
                    >
                        <BsWhatsapp size={24} color="white" />
                    </Link>
                    <p className='text-sm mt-1'>Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default ContactModal
