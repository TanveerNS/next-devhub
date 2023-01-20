import Image from 'next/image'

const Slider = () => {
    return (
        <div className="overflow-hidden relative block box-border touch-pan-y z-20">
            <div className="h-[600px] w-full lgcolor">
                <div className="h-full w-full block">
                    <div className="flex justify-start items-center h-full w-full">
                        <div className="w-[80%] m-auto text-white">
                            <h3 className="block text-8xl pb-8">We know Local</h3>
                            <p className="block text-2xl">The only location-focused digital marketing platform that activates a brand's presence through localized experiences</p>
                            <button className='border border-white mt-8 px-8 py-3 font-medium text-lg rounded-md'>See it in action</button>
                        </div>
                        <div className='w-[900px] absolute right-[-190px] top-0 z-10'>
                            <Image src="/img/vector-design.svg" alt=""  width={100} height={100} className='!w-[900px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider