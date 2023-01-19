import Image from 'next/image'

const Slider = () => {
    return (
        <div className="overflow-hidden relative block box-border touch-pan-y z-20">
            <div className="h-[500px] w-full lgcolor">
                <div className="h-full w-full block">
                    <div className="flex justify-start items-center h-full w-full">
                        <div className="w-[80%] m-auto text-white">
                            <h3 className="block text-8xl pb-8">We know Local</h3>
                            <p className="block text-lg">The only location-focused digital marketing platform that activates a brand's presence through localized experiences</p>
                        </div>
                        <div className='w-[900px] absolute right-[-190px] bottom-[-430px] z-10'>
                            <Image src="/img/vector-design.svg" alt=""  width={100}
                height={24}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider