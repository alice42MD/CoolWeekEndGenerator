import { Layout, Menu } from "antd"
import styled from "styled-components"
import { StyledMapContainerProps } from "./utils/types"

const colors = {
  primary: "#7B9E89",
  secondary: " #776274",
  tertiary: "#0F5257",
  dark: "#254441",
  light: "#C5EBC3",
  redError: "#E90606"
}

export const StyledSider = styled(Layout.Sider)`
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  .ant-layout-sider-children {
    background-color:  ${colors.secondary};;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const StyledContent = styled(Layout.Content)`
  display: flex;
  justify-content: center;
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
    animation: pound 0.35s infinite alternate;
    -webkit-animation: pound 0.35s infinite alternate;
  }
  @keyframes pound {
    to {
      transform: scale(1.1);
    }
  }
`

export const StyledTitle = styled.div`
  font-family: "BluuNext";
  font-size: 50px;
  color: ${colors.dark};
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

export const StyledMapContainer = styled.div<StyledMapContainerProps>`
  ${({containerstyle}) => containerstyle}
  ${({itinarydisplay}) =>  itinarydisplay === 'false' && `border: 10px solid ${colors.tertiary}; border-radius: 50%;`};
  overflow: hidden;
  input {
    width: 200
  }
`

export const StyledWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :nth-child(2) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  :nth-child(3) {
    text-align: center;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`

export const StyledAddressItinaryContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`

export const StyledAddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-content: space-around;
  padding: 24px;
  h1 {
    font-family: "BluuNext";
    font-size: 20px;
    color: ${colors.dark};
    text-align: center;
  }
  p {
    width: 70px;
  }
  .forecast-container {
    display: flex;
    width: -webkit-fill-available;
    justify-content: space-between;
    flex-flow: row wrap;
    flex-direction: row;
    padding: 24px;
  }
  .forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    margin: 10px;
    text-align: center;
  }
  .switch-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
   & > div {
      width: -webkit-fill-available;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    p {
      width: auto;
    }
  }
  .directions-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    :first-child {
      font-size: 30px;
    }
  }
`



////////////////////////////////////////////////////////////////////////////////
export const Testcolor = styled.div`
  display: flex;
  margin: 5px;
  :nth-child(1) {
    width: 20px;
    height: 20px;
    background-color: ${colors.primary};
  }
  :nth-child(2) {
    width: 20px;
    height: 20px;
    background-color: ${colors.secondary};
  }
  :nth-child(3) {
    width: 20px;
    height: 20px;
    background-color: ${colors.tertiary};
  }
  :nth-child(4) {
    width: 20px;
    height: 20px;
    background-color: ${colors.dark};
  }
  :nth-child(5) {
    width: 20px;
    height: 20px;
    background-color: ${colors.light};
  }
`

export const StyledMenu = styled(Menu)`
  text-align: center;

  box-shadow: none;
  background-color: unset ;
 * { border-inline-end: 0px solid transparent;}

&& .ant-menu-item:hover::after {
        border-bottom: 0px solid transparent;
         border-inline-end: 0px solid transparent;
    }
    
    && .ant-menu-item-selected {
        background-color: transparent;
        border-top: 4px solid transparent;
        border-radius: 0px;
        color: black;
         border-inline-end: 0px solid transparent;
    }    

    && .ant-menu-item-selected:after {
        border-bottom-width: 0px;        
        border-bottom-color: transparent;
         border-inline-end: 0px solid transparent;
    }
`
