import Image from "next/image";
import Link from "next/link";
import hero from '../../public/assets/hero.png'

export default function HomePage() {
    return(
        <div className="grid-halves h-screen-navbar">
            <div className="bg-teal border-right">
                <div className="column-padding">
                    <div className="content-grid home-hero">
                        <h1>
                            Buy <br/> what you <br/> need
                        </h1>
                        <Link href="/products" className="large-butotn">
                            <div className="large-button-text">
                                Explore
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-salmon">
                <div className="column-padding centered max-screen">
                    <div className="callout-wrap">
                        <Image src={hero} placeholder="blur" className="callout-image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
