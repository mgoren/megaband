import { useState, useEffect } from 'react';
import { Form, useFormikContext } from 'formik';
import { clamp, cache, getFirstInvalidFieldName } from 'utils';
import ContactInfo from '../ContactInfo';
import PaymentInfo from '../PaymentInfo';
import ButtonRow from 'components/ButtonRow';
import { Hidden } from '@mui/material';
import { MyMobileStepper } from 'components/MyStepper';

export default function FormContents({ admissionQuantity, setAdmissionQuantity, currentPage, setCurrentPage }) {
  const formik = useFormikContext();
  const { values } = formik;
  const [donate, setDonate] = useState(values.donation > 0);

  useEffect(() => {
    setAdmissionQuantity(values.admissionQuantity);
  }, [values.admissionQuantity, setAdmissionQuantity]);

  // scroll to first invalid field
  // refactor to use ref instead of directly accessing DOM
  // https://stackoverflow.com/questions/65899623/scroll-to-first-invalid-field-with-formik-and-userefs-react
  useEffect(() => {
    if (formik.isSubmitting && Object.keys(formik.errors).length > 0) {
      const firstInvalidFieldName = getFirstInvalidFieldName(formik.errors);
      // console.log('validation failed on', firstInvalidFieldName);
      if (firstInvalidFieldName) {
        const invalidFieldElement = document.getElementsByName(firstInvalidFieldName)[0];
        if (invalidFieldElement) {
          invalidFieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [formik.isSubmitting, formik.errors]);
  
  function clampValue({ event, range }) {
    const [field, value] = [event.target.name, parseInt(event.target.value) || range[0]];
    const clampedValue = clamp(value, range);
    formik.setFieldValue(field, clampedValue);
    formik.handleBlur(event); // bubble up to formik
  };

  function handleClickBackButton() {
    const orderInProgress = Object.assign({}, values);
    cache('order', orderInProgress);
    formik.setSubmitting(false);
    setCurrentPage(currentPage - 1);
  }

  return(
    <Form spellCheck='false'>
      {currentPage === 1 &&
        <>
          <ContactInfo admissionQuantity={admissionQuantity} clampValue={clampValue} />
          <PaymentInfo donate={donate} setDonate={setDonate} clampValue={clampValue} admissionQuantity={admissionQuantity} />
        </>
      }

      <Hidden smDown>
        <ButtonRow
          backButtonProps = {currentPage > 1 ? { onClick: handleClickBackButton } : undefined}
          nextButtonProps = {{ type: 'submit', text: 'Checkout...' }}
        />
      </Hidden>

      <Hidden smUp>
        <MyMobileStepper currentPage={currentPage} onClickBack={handleClickBackButton} />
      </Hidden>
    </Form>
  );
}
