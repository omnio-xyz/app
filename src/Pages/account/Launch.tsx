import AuthContext from '../../contexts/authContext';
import Button from '../../components/bootstrap/Button';
import Card, { CardBody } from '../../components/bootstrap/Card';
import classNames from 'classnames';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import PropTypes from 'prop-types';
import useDarkMode from '../../hooks/useDarkMode';
import USERS, { getUserDataWithUsername } from '../../common/data/userDummyData';
import { FC, useCallback, useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


interface ILoginProps {
  isSignUp?: boolean;
}
const Launch: FC<ILoginProps> = ({ isSignUp }) => {
  const { setUser } = useContext(AuthContext);

  const { darkModeStatus } = useDarkMode();

  const [signInPassword, setSignInPassword] = useState<boolean>(false);
  const [singUpStatus, setSingUpStatus] = useState<boolean>(!!isSignUp);

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/'), [navigate]);

  const usernameCheck = (username: string) => {
    return !!getUserDataWithUsername(username);
  };

  const passwordCheck = (username: string, password: string) => {
    return getUserDataWithUsername(username).password === password;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      loginUsername: USERS.JOHN.username,
      loginPassword: USERS.JOHN.password,
    },
    validate: (values) => {
      const errors: { loginUsername?: string; loginPassword?: string } = {};

      if (!values.loginUsername) {
        errors.loginUsername = 'Required';
      }

      if (!values.loginPassword) {
        errors.loginPassword = 'Required';
      }

      return errors;
    },
    validateOnChange: false,
    onSubmit: (values) => {
      if (usernameCheck(values.loginUsername)) {
        if (passwordCheck(values.loginUsername, values.loginPassword)) {
          if (setUser) {
            setUser(values.loginUsername);
          }

          handleOnClick();
        } else {
          formik.setFieldError('loginPassword', 'Username and password do not match.');
        }
      }
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (
        !Object.keys(USERS).find(
          (f) => USERS[f].username.toString() === formik.values.loginUsername,
        )
      ) {
        formik.setFieldError('loginUsername', 'No such user found in the system.');
      } else {
        setSignInPassword(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <PageWrapper
      isProtected={false}
      title={singUpStatus ? 'Sign Up' : 'Login'}
      className={classNames({ bg: !singUpStatus, 'bg-light': singUpStatus })}>
      <Page container='fluid'>
        <div className='row h-100 pb-3 align-items-center justify-content-center'>
          <div className="container">
            <div className='row'>



              <div className='col-xl- col-lg-6 col-md-8 shadow-3d-container'>
                <Card className='shadow-3d-dark' data-tour='login-page'>
                  <CardBody>
                  </CardBody>
                </Card>
              </div>

              <div className="col-sm-3">
                <div className='row'>

                  <div className='col-lg-6 col-md-6'>
                    <Card stretch>
                      <CardBody isScrollable>
                        <Button
                          isOutline
                          color={darkModeStatus ? 'light' : 'dark'}
                          className={classNames('w-100 py-3', {
                            'border-light': !darkModeStatus,
                            'border-dark': darkModeStatus,
                          })}
                          icon='CustomGoogle'
                          onClick={formik.handleSubmit}>
                          Sign-In with Etshereum
                        </Button>
                      </CardBody>
                      <div className='text-center'>
                        <a
                          href='/'
                          className={classNames('text-decoration-none me-3', {
                            'link-light': singUpStatus,
                            'link-dark': !singUpStatus,
                          })}>
                          Privacy Policy
                        </a>
                        <a
                          href='/'
                          className={classNames('link-light text-decoration-none', {
                            'link-light': singUpStatus,
                            'link-dark': !singUpStatus,
                          })}>
                          Terms of Use
                        </a>
                      </div>
                    </Card>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <Card stretch>
                      <CardBody isScrollable>
                      </CardBody>
                    </Card>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};
Launch.propTypes = {
  isSignUp: PropTypes.bool,
};
Launch.defaultProps = {
  isSignUp: false,
};

export default Launch;
