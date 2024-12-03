import { Link } from 'react-router-dom';
import { ReactComponent as SVG } from 'assets/images/logo/dob.svg';

function LogoDob() {
  return (
    <Link to="/">
      <SVG />
    </Link>
  
  );
}

export { LogoDob };
