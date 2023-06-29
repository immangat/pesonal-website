
import {NavLink, LinkContainer, LogoContainer, NavContainer, NavLogo} from "./navbar.styles";
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
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Work</NavLink>
                <NavLink>Contact</NavLink>
            </LinkContainer>
        </NavContainer>
    )

}

export default NavBar