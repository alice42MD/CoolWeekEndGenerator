import React from 'react';
import './App.css';
import { Layout, } from 'antd';
import { StyledContent, StyledFooter, StyledHeader, StyledSider, StyledTitle, StyledSubtitle, StyledSubtitleBis } from './styles';
import imageContent from './assets/img/chiracos1.png';
import imageContent2 from './assets/img/chiracos2.png';
import { FaHeart } from 'react-icons/fa'


function App () {
  return (
    <Layout hasSider>
      <StyledSider />
      <Layout >
        <StyledHeader>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <StyledTitle>
                C
              </StyledTitle>
              <div>
                <img src={imageContent} alt={"chiracos_1"} style={{ width: '50px' }} />
                <img src={imageContent2} alt={"chiracos_2"} style={{ width: '50px' }} />
              </div>
              <StyledTitle>
                L
              </StyledTitle>
            </div>
            <div>
              <StyledSubtitle>
                WEEKEND

              </StyledSubtitle>

              <StyledSubtitleBis>GENERATOR</StyledSubtitleBis>
            </div>
          </div>
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
