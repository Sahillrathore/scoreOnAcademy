import Image from 'next/image'
import BoardsCovered from './BoardsCovered'

const Hero = () => {
    return (
        <div id='#home'>
            <div className="relative w-full h-[430px]">
                <Image
                    src='/banner1.png'
                    alt="banner"
                    fill
                    className="object-"
                />
            </div>

            <BoardsCovered />
        </div>
    )
}

export default Hero