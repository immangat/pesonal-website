import styled from "styled-components";


export const SkillsContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  * {
    margin: 0;
  }

  

`


export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2%;
  padding: 4%;
  min-width: 200px;
`

export const CodeContainer = styled.div`
  min-width: 500px;
  min-height: 400px;
  text-align: left;
  code,
  pre {
    background: transparent !important;
  }
`
