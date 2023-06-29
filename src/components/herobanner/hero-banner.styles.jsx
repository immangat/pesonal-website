import  styled  from "styled-components";


export const HeroBannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80vh;
    
`

export const HeroBannerTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  max-width: 30%;
  margin-right: 2%;
  *{
    margin: 0;
  }

`

export const HeroWelcome = styled.span`
  font-size: 30px;
  font-family: 'Open Sans', sans-serif;;
  font-weight: 800;
`

export const HeroTitle = styled.span`
  font-size: 49px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  margin-top: 20px;
`


export const HeroDev = styled.span`

  font-size: 49px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  margin-top: 20px;
  span{
    color: green;
  }
`

export const HeroIntro = styled.p`
    font-size: 17px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin-top: 20px;
`

export const ImageContainer = styled.div`
  img{
    height: 700px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`