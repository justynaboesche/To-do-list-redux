import { Wrapper, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header grid>
      <Title className="section__header--title">
        {title}
      </Title>
        {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </Wrapper>
);

export default Section;