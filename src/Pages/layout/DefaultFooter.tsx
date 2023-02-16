import Footer from '../../layout/Footer/Footer';
import useDarkMode from '../../hooks/useDarkMode';

const DefaultFooter = () => {
  const { darkModeStatus } = useDarkMode();

  return (
    <Footer>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <span className='fw-light'>© 2023 Omnio, Inc. All Rights Reserved.</span>
          </div>
          <div className='col-auto'>
            <span className='fw-light'>Version 1.0.0</span>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default DefaultFooter;