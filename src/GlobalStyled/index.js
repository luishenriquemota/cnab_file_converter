import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

.App{
  height: 100%;
  width: 100vw;
  display:flex;
  justify-content: center;
}


`
export default GlobalStyled