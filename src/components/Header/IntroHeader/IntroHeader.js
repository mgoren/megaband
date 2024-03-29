import { mailtoLink } from "utils";
import { StyledLink, Paragraph } from 'components/Layout/SharedStyles';
import config from 'config';
const { EMAIL_CONTACT, ADMISSION_COST_RANGE } = config;

export default function IntroHeader() {
  return (
    <>
      <Paragraph>
        The dance will take place on Saturday, March 9 from 7:15pm - 10:30pm with a 6:45pm newcomers teaching session. 
        It will take place at the Smith Ballroom at Portland State University, 1825 SW Broadway, Portland, OR 97201. 
        Cost is a sliding scale from ${ADMISSION_COST_RANGE[0]} - ${ADMISSION_COST_RANGE[1]} per person, $25 suggested.
      </Paragraph>
      <Paragraph>
        <strong>Advanced registration is closed. Tickets will be available at the door.</strong>
      </Paragraph>
      <Paragraph>
        Questions? Email <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.
      </Paragraph>
    </>
  );
}
