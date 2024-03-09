import { useState } from "react";
import 'firebase.js'; // initializes firebase
import Error from "components/Error";
import Header from 'components/Header';
import IntroHeader from 'components/Header/IntroHeader';
import { Button, Typography } from "@mui/material";
import { StyledPaper, Paragraph } from 'components/Layout/SharedStyles';
import config from 'config';
const { TITLE, SHOW_PRE_REGISTRATION } = config;

export default function Registration() {
  const [registering, setRegistering] = useState(false);
  return (
    SHOW_PRE_REGISTRATION ? (
      registering ? <RealRegistration /> : <PreRegistration setRegistering={setRegistering} />
    ) : <RealRegistration />
  );
}

const PreRegistration = ({ setRegistering }) => {
  return(
    <StyledPaper>
      <Typography variant="h4" color="red" sx={{ fontWeight: "bold"}}>TEST MODE ONLY</Typography>
      <Typography variant="h6">DO NOT USE FOR ACTUAL REGISTRATION</Typography>
      <Paragraph sx={{ lineHeight: 2, mt: 4 }}>
      <Button variant='contained' color='secondary' onClick={() => setRegistering(true)}>Continue</Button>
        {/* <Checkbox onChange={() => setRegistering(true)} /> */}
      </Paragraph>
    </StyledPaper>
  );
}

const RealRegistration = () => {
  const [error] = useState(null);

  const content = (
    <>
      {/* {SANDBOX_MODE &&
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3rem', backgroundColor: 'var(--color-error)' }}>
          TEST MODE ONLY - DO NOT USE FOR REAL REGISTRATION
        </Box>
      } */}

      {error && <Error error={error} />}

      <Header
        titleText={TITLE}
        currentPage={1}
      >
        {<IntroHeader />}
      </Header>
    </>
  );
  return content;
}
