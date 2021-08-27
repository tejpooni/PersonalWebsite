import React from 'react';
import { DiAndroid, DiCode, DiFirebase, DiGit, DiJava, DiJavascript, DiLinux, DiMsqlServer, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      <List>

        <ListItem>
          <DiReact size ="4rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>React.js<br/>
            VUE.js<br/>HTML<br/>CSS<br/>JavaScript
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiJava size ="4rem"/>
          <ListContainer>
            <ListTitle>Languages</ListTitle>
            <ListParagraph>Java<br/>C<br/>C++<br/>Python<br/>JavaScript<br/>R<br/>RISC-V
            
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiGit size ="4rem"/>
          <ListContainer>
            <ListTitle>VCS + Project Management</ListTitle>
            <ListParagraph>Git<br/>BitBucket<br/>JIRA
            
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiAndroid size ="4rem"/>
          <ListContainer>
            <ListTitle> Additional Industry Knowledge</ListTitle>
            <ListParagraph>Android Development<br/>Web Development<br/> Algorithms<br/>REST API's (POSTMAN)
            
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size ="4rem"/>
          <ListContainer>
            <ListTitle>DataBase</ListTitle>
            <ListParagraph>SQL<br/>FireBase
            
            </ListParagraph>
          </ListContainer>
        </ListItem>

      </List>
    </SectionText>
  </Section>
);

export default Technologies;