import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'International Baccalaureate (IB) Diploma'},
  { text: 'Software Development Internship (FORM)', },

];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Accolades</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
        
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;