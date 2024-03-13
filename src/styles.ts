import styled from 'styled-components'
import { Layout } from 'antd';

const colors ={
  primary: '#7B9E89',
  secondary:' #776274',
  tertiary: '#0F5257',
  dark:'#254441',
  light: '#C5EBC3',
  redError: '#E90606'
}

export const StyledSider = styled(Layout.Sider)`
  height: 100vh;
  position:fixed;
  left: 0;  
  top: 0;
  bottom: 0;
  .ant-layout-sider-children { 
    background-color: ${colors.secondary};
    padding: 24px;
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
  div:first-child {
    display: flex;
    align-items: center;
  }
  img {
    width: 50px;
  }
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
  color: ${colors.dark}

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
    min-height: 45px;
  }
  img {
    width: 35px; 
  }
  svg {
    color: ${colors.tertiary};
  }
`

export const StyledMapContainer = styled.div`
  width: 150px;
  height:  150px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid ${colors.tertiary};
`

export const Testcolor = styled.div`
  display:flex ;
  :nth-child(1) {
    width:20px;
    height:20px;
    background-color: ${colors.primary};
  }
  :nth-child(2) {
    width:20px;
    height:20px;
    background-color: ${colors.secondary};
  }
  :nth-child(3) {
    width:20px;
    height:20px;
    background-color: ${colors.tertiary};
  }
  :nth-child(4) {
    width:20px;
    height:20px;
    background-color: ${colors.dark};
  }
  :nth-child(5) {
    width:20px;
    height:20px;
    background-color: ${colors.light};
  }
`