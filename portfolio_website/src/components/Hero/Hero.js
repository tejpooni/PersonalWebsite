import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm Tej <br />
        </SectionTitle>
        <SectionText>
        I'm a Computer Science student at SFU currently doing an internship as a Software Developer at FORM Athletica. If you'd like to know more about me or have any business related inquires, get in touch with me here!
        </SectionText>
        <Button onClick={()=> window.location = 'https://www.linkedin.com/in/tej-pooni-7873471b2/'}>Learn More</Button>      
      </LeftSection>
    </Section>
  </>
);

export default Hero;