import styled from 'styled-components'
import { Layout } from 'antd';

const colors ={
  primary: '#7B9E89',
  secondary:' #776274',
  redError: '#E90606'
}

export const StyledSider = styled(Layout.Sider)`
  height: 100vh;
  position:fixed;
  left: 0;  
  top: 0;
  bottom: 0;
  * { 
    background-color: ${colors.secondary};
    }
`

export const StyledHeader = styled(Layout.Header)`
  background: ${colors.primary};
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  line-height: unset;
  display: flex;
  justify-content: space-between;
  height: unset;
  padding: 16px;
`

export const StyledContent= styled(Layout.Content)`
  background: ${colors.primary};
  margin: 24px 16px 0;
  overflow: initial;
  border-radius: 10px;
`

export const StyledFooter = styled(Layout.Footer)`
  background: ${colors.primary};
  margin-top: 24px;
  text-align: center;
  svg {
    color: ${colors.redError};
    margin: 0 3px;
    font-size: 10px;
    animation: pound .35s infinite alternate;
    -webkit-animation: pound .35s infinite alternate;
  }
  @keyframes pound{
  to {  
    transform: scale(1.1)
    }
  }
`

export const StyledTitle = styled.div`
  font-family: "BluuNext";
  font-size: 50px;

`

export const StyledSubtitleBold = styled(StyledTitle)`
  font-size: 32px;
  line-height: 0.9;
`

export const StyledSubtitle = styled(StyledTitle)`
  text-align: center;
  font-size: 9px;
  letter-spacing: 9px;
`

export const StyledRadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: 3px;
    display: flex;
    flex-direction: row;
     width: 25%;
    justify-content: space-around;
  }
  img {
    width: 35px; 
  }
`