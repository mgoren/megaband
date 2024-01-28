import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from 'components/Registration';
import MaterialLayout from 'components/Layout/';
import Error from 'components/Error';
import CheckInfo from 'components/Static/CheckInfo';
import ScrollToAnchor from 'components/ScrollToAnchor';
import config from 'config';
const { EMAIL_CONTACT } = config;

export default function App() {
  return (
    <>
      <Router>
        <ScrollToAnchor />
        <MaterialLayout>
          <Routes>
            <Route exact path="/" element=<Registration /> />
            <Route exact path="/check" element=<CheckInfo /> />
            <Route exact path="/error-contact-support" element=<Error error={`Unexpected payment processing error. Please email ${EMAIL_CONTACT}`} /> />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MaterialLayout>
      </Router>
    </>
  );
}
