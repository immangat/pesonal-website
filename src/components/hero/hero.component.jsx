import NavBar from "../navbar/navbar.component";
import HeroBanner from "../herobanner/hero-banner.component";
import {HeroContainer} from "./hero.styles";
const Hero = () =>{


    return (
        <HeroContainer>
            <NavBar />
            <HeroBanner />
        </HeroContainer>
    )
}

export default Hero