import { Layout, MenuProps } from "antd"
import { FaHeart } from "react-icons/fa"
import "./App.css"
import Map from "./Map"
import Radio from "./Radio"
import Weather from "./Weather"
import imageContent from "./assets/img/chiracos1.png"
import imageContent2 from "./assets/img/chiracos2.png"
import {
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledSider,
  StyledSubtitle,
  StyledSubtitleBold,
  StyledTitle,
  Testcolor
} from "./styles"
import MenuComponent from "./Menu"
import { ReactElement, useState } from "react"
import { MenuRenderProps } from "./utils/types"
import Itinary from "./Itinary"

function App() {
  const [render, updateRender] = useState<number>(1)

  const components: MenuRenderProps = {
    1: <Itinary />,
    2: <div>Option 2</div>,
    3: <div>Option 3</div>,
    4: <div>Option 4</div>
  }

  const handleMenuClick = (e: { key: string }) => {
    updateRender(Number(e.key))
  }

  return (
    <Layout hasSider>
      <StyledSider>
        <Testcolor>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Testcolor>
        <Map />
        <Weather />
        <MenuComponent handleClick={handleMenuClick} />
      </StyledSider>
      <Layout>
        <StyledHeader>
          <div>
            <div>
              <StyledTitle>C</StyledTitle>
              <div>
                <img src={imageContent} alt={"chiracos_1"} />
                <img src={imageContent2} alt={"chiracos_2"} />
              </div>
              <StyledTitle>L</StyledTitle>
            </div>
            <div>
              <StyledSubtitleBold>WEEKEND</StyledSubtitleBold>
              <StyledSubtitle>GENERATOR</StyledSubtitle>
            </div>
          </div>
          <Radio />
        </StyledHeader>
        <StyledContent>{components[render]}</StyledContent>
        <StyledFooter>
          <span>
            Made with <FaHeart /> by Alice
          </span>
        </StyledFooter>
      </Layout>
    </Layout>
  )
}

export default App
