import { HeroBannerContainer } from "./hero-banner.styles"
import Button from "../button/button.component"
import { BUTTON_TYPE_CLASSES } from "../button/button.styles"

const HeroBanner = () => {

    return (

        <HeroBannerContainer>
            <h1>Hello Everyone</h1>
            <h2>My name is mangat, a new developer</h2>
            <p>A current programming student with a intrest in solving real world problem</p>
            <div>
                <Button
                    type="button"
                    buttonType={BUTTON_TYPE_CLASSES.base}

                >
                    Download Resume
                </Button>

            </div>
        </HeroBannerContainer>

    )
}

export default HeroBanner