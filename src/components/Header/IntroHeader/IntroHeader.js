import { mailtoLink } from "utils";
import { StyledLink, Paragraph } from 'components/Layout/SharedStyles';
import config from 'config';
const { EMAIL_CONTACT } = config;

export default function IntroHeader() {
  return (
    <>
      <Paragraph>
        The dance will take place on Saturday, March 9 from 7:30pm - 10:30pm with a 7pm newcomers teaching session. 
        It will take place at the Smith Ballroom at Portland State University, 1825 SW Broadway, Portland, OR 97201. 
        Cost is a sliding scale from $15 - $40, $25 suggested.
      </Paragraph>
      <Paragraph>
        <strong>Note on payment by check:</strong> If you are paying by check, please do not fill out this form. Instead, send a check made out to PCDC, and mail it by the end of February to Sue Songer, 4405 SW Redondo Ave, Portland OR 97239. Please include with your check a note including your name, email, phone, and the name of anyone else you're registering. The cost is a sliding scale from $15-30 per person.
      </Paragraph>
      <Paragraph>
        Questions? Email <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.
      </Paragraph>
    </>
  );
}
