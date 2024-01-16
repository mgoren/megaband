import { StyledPaper } from 'components/Layout/SharedStyles';
import config from 'config';
const { TITLE } = config;

export default function Header({ titleText = TITLE, currentPage, children }) {
  return (
    <StyledPaper>
      {children}
    </StyledPaper>
  );
}
