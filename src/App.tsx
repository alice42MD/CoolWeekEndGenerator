import React from 'react';
import './App.css';
import { Layout, } from 'antd';
import {
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledSider,
  StyledTitle,
  StyledSubtitle,
  StyledSubtitleBold
} from './styles';
import imageContent from './assets/img/chiracos1.png';
import imageContent2 from './assets/img/chiracos2.png';
import { FaHeart } from 'react-icons/fa'
import Radio from './Radio';
import Map from './Map';

function App () {

  return (
    <Layout hasSider>
      <StyledSider >
        <Map />
      </StyledSider>
      <Layout >
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
        <StyledContent />
        <StyledFooter>
          <span>
            Made with <FaHeart /> by Alice
          </span>
        </StyledFooter>
      </Layout>
    </Layout >

  );
}

export default App;
