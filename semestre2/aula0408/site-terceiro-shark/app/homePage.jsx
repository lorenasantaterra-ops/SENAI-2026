import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./img/banner.jpg";

export default function HomePage(){
    return(
        <>
            <Header />
                <main>
                    <section>
                        <Image src={Banner}/>
                    </section>
                    <p>O rest</p>
                </main>
            <Footer />
        </>
    )
}