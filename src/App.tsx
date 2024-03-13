import { Layout } from "antd"
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

function App () {
  return (
    <Layout hasSider>
      <StyledSider>
        <Map />
        <Weather />
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
        <StyledContent>
          <Testcolor>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Testcolor>
        </StyledContent>
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
