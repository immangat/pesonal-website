import styled from "styled-components";
import {ReactComponent as Logo} from "../../assets/testlogo-.svg";

export const NavContainer = styled.div`
  padding: 0 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20vh;
  font-family: 'Inter', sans-serif;;
`

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  h3{
    font-size: 35px;
    font-weight: 800;
  }
`

export const NavLogo = styled(Logo)`
  height: 100%;
  max-width: 100px;

`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 4em;
`

export const NavLink = styled.div`
  padding: 0 2%;
  font-size: 18px;
  margin-right: 2em;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  &:hover{
    color: pink;
    cursor: pointer;
  }

`
