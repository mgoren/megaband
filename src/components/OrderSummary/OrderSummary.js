import { Box, Typography } from '@mui/material';

export default function OrderSummary({ order, currentPage }) {
  const total = order.admissionCost * order.admissionQuantity + order.donation;

  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body" gutterBottom sx={{ fontWeight: 'bold' }}>
          {order.admissionQuantity > 1 ? 'Admissions' : 'Contact info'}
        </Typography>
        {order.people.slice(0, order.admissionQuantity).map((person, index) => (
          <p key={index}>
            {person.first} {person.last}<br />
            {person.email}<br />
            {person.phone}<br />
          </p>
        ))}
      </Box>

      {isNaN(currentPage) &&
        <Box sx={{ mt: 5 }}>
          <Typography variant="body" gutterBottom sx={{ fontWeight: 'bold' }}>
            {currentPage === 'confirmation' && order.paymentId !== 'check' ? 'Amount paid' : 'Amount due'}
          </Typography>
          <p>
            Megaband Admissions: {order.admissionQuantity} x ${order.admissionCost} = ${order.admissionQuantity * order.admissionCost}<br />
            {order.donation > 0 &&
              <>
                Donation to Portland Country Dance Community: ${order.donation}<br />
                Total: ${total}
              </>
            }
          </p>
        </Box>
      }
    </>
  );
}
