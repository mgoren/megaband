import { StyledPaper, PageTitle, Paragraph } from 'components/Layout/SharedStyles';
import config from 'config';
const { ADMISSION_COST_RANGE } = config;

export default function CheckInfo() {
  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <PageTitle>
        Paying by check
      </PageTitle>

      <Paragraph>
        If you are paying by check, please do not fill out this form.
      </Paragraph>
      <Paragraph>
        Instead, send a check made out to PCDC, and mail it by the end of February to:<br />
        Sue Songer, 4405 SW Redondo Ave, Portland OR 97239
      </Paragraph>
      <Paragraph>
        Please include with your check a note containing:<br />
        your name, email, phone, and the name of anyone else you're registering
      </Paragraph>
      <Paragraph>
        The cost is a sliding scale from ${ADMISSION_COST_RANGE[0]}-{ADMISSION_COST_RANGE[1]} per person.
      </Paragraph>
    </StyledPaper>
  );
}
