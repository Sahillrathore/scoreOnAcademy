import Image from 'next/image'
import banner from "../public/banner.png"
import BoardsCovered from './BoardsCovered'

const Hero = () => {
    return (
        <div>
            <div className="relative w-full h-[550px]">
                <Image
                    src={banner}
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