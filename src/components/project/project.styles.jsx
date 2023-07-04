import styled from "styled-components";


export const ProjectContainer = styled.div`
  display: grid;
  grid-template: 1fr 1fr/ 1fr 1fr;
  max-height: 60vh;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  background: linear-gradient(136deg, rgba(253, 203, 164, 1) 17%, rgba(253, 201, 129, 1) 24%, rgba(81, 218, 76, 1) 47%, rgba(81, 218, 76, 1) 49%, rgba(66, 165, 255, 1) 66%);
  border-radius: 20px;
  margin-bottom: 2%;
  img {

    max-width: 95%;
    max-height: 95%;
    border-radius: 20px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }


`

export const ProjectInfo = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  
  h1 {
    font-family: 'Open Sans', sans-serif;
  }
 
  p {
    font-size: 17px;
    font-family: 'Inter', sans-serif;
    
  }
  
  
`

export const ButtonContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;

`
