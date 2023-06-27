import styled from "styled-components";
import {ReactComponent as Logo} from "../../assets/testlogo-.svg";

export const NavContainer = styled.div`
  padding: 0 23%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: red;
`

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
 

  div {
    padding: 0 2%;
    
    &:hover{
      color: pink;
      cursor: pointer;
    }
  }
`
