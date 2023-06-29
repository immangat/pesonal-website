import {
    ButtonContainer,
    HeroBannerContainer,
    HeroBannerTextContainer, HeroDev, HeroIntro,
    HeroTitle,
    HeroWelcome,
    ImageContainer
} from "./hero-banner.styles"
import Button from "../button/button.component"
import {BUTTON_TYPE_CLASSES} from "../button/button.styles"
import image from '../../assets/download.png'

const HeroBanner = () => {

    return (

        <HeroBannerContainer>
            <HeroBannerTextContainer>
                <HeroWelcome>Hello! Everyone</HeroWelcome>
                <HeroTitle>My name is Mangat</HeroTitle>
                <HeroDev> {"<"}<span>{"Developer"}</span>{">"}</HeroDev>
                <HeroIntro>I'm a student passionate about solving real-world problems and currently focused on learning
                    React, TypeScript, Java Spring Boot, and Python to develop practical solutions.</HeroIntro>
                <ButtonContainer>
                    <Button
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.base}

                    >
                        Download Resume
                    </Button>

                </ButtonContainer>
            </HeroBannerTextContainer>
            <ImageContainer>
                <img src={image} alt='computer'/>
            </ImageContainer>

        </HeroBannerContainer>

    )
}

export default HeroBanner