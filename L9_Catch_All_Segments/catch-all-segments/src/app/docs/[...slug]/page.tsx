import React from 'react'

const Docs = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    return (
        <div className='text-3xl'>Docs home page, current slug -<span className='text-red-500 bg-yellow-100 text-4xl border-white bottom-4 rounded-lg mx-3 px-2 underline decoration-wavy'>{slug}</span></div>
    )
}

export default Docs