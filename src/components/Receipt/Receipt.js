import { useEffect } from 'react';
import { scrollToTop, websiteLink, mailtoLink } from 'utils';
import OrderSummary from 'components/OrderSummary';
import { Divider, Typography } from '@mui/material';
import { StyledLink } from 'components/Layout/SharedStyles';
import config from 'config';
const { CHECK_TO, CHECK_ADDRESS, DETAILS_URL, EMAIL_CONTACT } = config;

export default function Receipt({ order }) {
  useEffect(() => { scrollToTop() },[]);
  return(
    <>
      <p>Thanks, {order.people[0].first}!</p>
      {order.electronicPaymentId === 'check' ? <CheckReceipt order={order}/> : <PaypalReceipt order={order }/>}
    </>
  );
}

function CheckReceipt({ order }) {
  return (
    <>
      <Typography component='p' color='error'>
        <strong>You are not yet registered!</strong><br />
        Paying on time can increase your chance of being accepted.<br />
        Please send a check for ${order.total}.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Make your check out to {CHECK_TO}
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        <span dangerouslySetInnerHTML={{ __html: CHECK_ADDRESS }}></span>
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        We will be in touch soon to confirm your acceptance into camp, once we receive your payment!
      </Typography>

      <SharedReceipt />
      
      <Divider component="hr" sx={{borderBottomWidth: 4, my: 4}}/>
      <Typography component='p' variant="h6" gutterBottom={true}>Registration Information:</Typography>
      <OrderSummary order={order} currentPage='confirmation' />
    </>
  );
}

function PaypalReceipt({ order }) {
  return (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        Thank you for registering in advance for the 2024 Portland Megaband dance!<br />
        Your payment to PCDC for ${order.total} has been successfully processed.<br />
      </Typography>

      <SharedReceipt />

      <Divider component="hr" sx={{borderBottomWidth: 4, my: 4}}/>
      <Typography component='p' variant="h6" gutterBottom={true}>Registration Information</Typography>
      <OrderSummary order={order} currentPage='confirmation' />

      <Divider component="hr" sx={{borderBottomWidth: 4, my: 4}}/>

      <EventDetails />
    </>
  );
}

export function AdditionalPersonReceipt({ order }) {
  return (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        Thank you for registering in advance for the 2024 Portland Megaband dance! 
      </Typography>

      <SharedReceipt />
    </>
  )
}

export function SharedReceipt() {
  return (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        Your name will be on a list at the door. (You will not receive a physical ticket.)
      </Typography>
    </>
  );
}

export function EventDetails() {
  return (
    <>
      <Typography component='p' variant="h6" gutterBottom={true}>Event Details</Typography>
      <Typography component='p' sx={{ mt: 2 }}>
        Saturday, March 9, 2024<br />
        Newcomers session at 7pm, dancing 7:30 - 10:30<br />
        Smith Ballroom at Portland State University<br />
        1825 SW Broadway, Portland, OR 97201
      </Typography>
      <Typography component='p' sx={{ mt: 2 }}>
        See <StyledLink to={websiteLink(DETAILS_URL)}>{DETAILS_URL}</StyledLink> for further details.<br />
        Email <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink> if you have any questions.
      </Typography>
    </>
  );
}
