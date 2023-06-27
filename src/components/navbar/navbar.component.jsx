
import {LinkContainer, LogoContainer, NavContainer, NavLogo} from "./navbar.styles";
const NavBar = () => {

    return (

        <NavContainer>
            <LogoContainer>
                <NavLogo/>
                <h3>
                    Cool Website
                </h3>
            </LogoContainer>
            <LinkContainer>
                <div>Home</div>
                <div>About</div>
                <div>Work</div>
                <div>Contact</div>
            </LinkContainer>
        </NavContainer>
    )

}

export default NavBar