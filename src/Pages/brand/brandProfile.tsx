import Alert from '../../components/bootstrap/Alert';
import Avatar from '../../components/Avatar';
import Button from '../../components/bootstrap/Button';
import Card, { CardBody, CardFooter, CardFooterRight, CardHeader, CardLabel, CardTabItem, CardTitle } from '../../components/bootstrap/Card';
import classNames from 'classnames';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Icon from '../../components/icon/Icon';
import Input from '../../components/bootstrap/forms/Input';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../components/bootstrap/Modal';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Pic from '../../assets/wanna/richie/richie.png';
import showNotification from '../../components/extras/showNotification';
import useDarkMode from '../../hooks/useDarkMode';
import UserImage from '../../assets/wanna/wanna1.png';
import UserImageWebp from '../../assets/wanna/wanna1.webp';
import { useFormik } from 'formik';
import { useMeasure } from 'react-use';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const KnowledgeGridPage = () => {
  const { darkModeStatus } = useDarkMode();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      formPrefix: 'Prof.',
      formName: 'Nike',
      formMiddleName: 'John',
      formSurName: 'Doe',
      formEmailAddress: 'tjohndoe@site.com',
      formPhone: '2575637401',
      formAddressLine: '711-2880 Nulla St.',
      formAddressLine2: 'Mankato',
      formCity: 'Mississippi',
      formState: 'USA',
      formZIP: '96522',
      formCurrentPassword: '',
      formNewPassword: '',
      formConfirmNewPassword: '',
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      showNotification(
        <span className='d-flex align-items-center'>
          <Icon icon='Info' size='lg' className='me-1' />
          <span>Updated Information</span>
        </span>,
        JSON.stringify(values, null, 2),
      );
    },
  });
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'];
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [gallerySeeAll, setGallerySeeAll] = useState(false);

  const images: { id: string; img: string }[] = [
    { id: 'Pic', img: Pic },
  ];

  const GALLERY = (
    <div className='row g-4'>
      {images.map((item, index) => (
        <div key={item.id} className='col-xxl-2 col-lg-3 col-md-6'>
          <button
            type='button'
            onClick={() => setSelectedImage(item.img)}
            className={classNames(
              'ratio ratio-1x1',
              'rounded-2',
              'border-0',
              `bg-l${darkModeStatus ? 'o25' : '25'}-${colors[index % 7]}`,
              `bg-l${darkModeStatus ? 'o50' : '10'}-${colors[index % 7]}-hover`,
            )}>
            <img
              src={item.img}
              alt={item.id}
              width='100%'
              height='auto'
              className='object-fit-contain p-4'
            />
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <PageWrapper>
      <Page container='fluid'>
        <div className='row h-100'>
          <div className='col-lg-4'>
            <Card ref={ref} stretch>
              <CardBody>
                <div className='row g-5'>
                  <div className='col-12'>
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0'>
                        <Avatar
                          srcSet={UserImageWebp}
                          src={UserImage}
                          className='rounded-circle'
                        />
                      </div>
                      <div className='flex-grow-1 ms-3'>
                        <div className='h2 fw-bold'>
                          {formik.values.formName || 'Name'}
                          {formik.values.formMiddleName &&
                            ` ${formik.values.formMiddleName.charAt(
                              0,
                            )}.`}{' '}
                          {formik.values.formSurName || 'Surname'}
                        </div>
                        <div className='h5 text-muted'>Brand</div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12'>
                    <div className='row g-3'>
                      <div className='col-12'>
                        <div className='d-flex align-items-center'>
                          <div className='flex-shrink-0'>
                            <Icon icon='Mail' size='3x' color='info' />
                          </div>
                          <div className='flex-grow-1 ms-3'>
                            <div className='fw-bold fs-5 mb-0'>
                              {formik.values.formEmailAddress ||
                                'Nope'}
                            </div>
                            <div className='text-muted'>
                              Email Address
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='d-flex align-items-center'>
                          <div className='flex-shrink-0'>
                            <Icon
                              icon='PhoneIphone'
                              size='3x'
                              color='info'
                            />
                          </div>
                          <div className='flex-grow-1 ms-3'>
                            <div className='fw-bold fs-5 mb-0'>
                              {formik.values.formPhone || 'Nope'}
                            </div>
                            <div className='text-muted'>Phone</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className='col-xxl-8 col-xl-6'>
            <Card hasTab stretch>
              <CardTabItem id='profile' title='Identity' icon='Contacts'>
                <Alert isLight className='border-0' shadow='md' icon='InfoOutline'>
                  This information is public.
                </Alert>
                <Card
                  className='rounded-2'
                  tag='form'
                  onSubmit={formik.handleSubmit}>
                  <CardHeader>
                    <CardLabel icon='Person'>
                      <CardTitle>Personal Information</CardTitle>
                    </CardLabel>
                  </CardHeader>
                  <CardBody>
                    <div className='row g-4'>
                      <FormGroup
                        className='col-md-2'
                        id='formPrefix'
                        label='Prefix'>
                        <Input
                          placeholder='Dr.'
                          autoComplete='honorific-prefix'
                          onChange={formik.handleChange}
                          value={formik.values.formPrefix}
                        />
                      </FormGroup>
                      <FormGroup
                        className='col-md-3'
                        id='formName'
                        label='Name'>
                        <Input
                          placeholder='Timothy'
                          autoComplete='given-name'
                          onChange={formik.handleChange}
                          value={formik.values.formName}
                        />
                      </FormGroup>
                      <FormGroup
                        className='col-md-3'
                        id='formMiddleName'
                        label='Middle Name'>
                        <Input
                          placeholder='John'
                          autoComplete='additional-name'
                          onChange={formik.handleChange}
                          value={formik.values.formMiddleName}
                        />
                      </FormGroup>
                      <FormGroup
                        className='col-md-4'
                        id='formSurName'
                        label='Sur Name'>
                        <Input
                          placeholder='Doe'
                          autoComplete='family-name'
                          onChange={formik.handleChange}
                          value={formik.values.formSurName}
                        />
                      </FormGroup>
                      <FormGroup
                        className='col-lg-6'
                        id='formEmailAddress'
                        label='Email Address'>
                        <Input
                          type='email'
                          placeholder='john@domain.com'
                          autoComplete='email'
                          onChange={formik.handleChange}
                          value={formik.values.formEmailAddress}
                        />
                      </FormGroup>
                      <FormGroup
                        className='col-lg-6'
                        id='formPhone'
                        label='Phone'>
                        <Input
                          type='tel'
                          placeholder='+1 (999) 999-9999'
                          autoComplete='tel'
                          mask='+1 (999) 999-9999'
                          onChange={formik.handleChange}
                          value={formik.values.formPhone}
                        />
                      </FormGroup>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <CardFooterRight>
                      <Button type='submit' color='primary' icon='Save'>
                        Save
                      </Button>
                    </CardFooterRight>
                  </CardFooter>
                </Card>
              </CardTabItem>
              <CardTabItem id='address' title='Context' icon='HolidayVillage'>
                <Alert isLight className='border-0' shadow='md' icon='LocalPolice'>
                  The information is not shared with third parties.
                </Alert>
                <Card
                  className='rounded-2'
                  tag='form'
                  onSubmit={formik.handleSubmit}>
                  <CardHeader>
                    <CardLabel icon='HolidayVillage'>
                      <CardTitle>Address Information</CardTitle>
                    </CardLabel>
                  </CardHeader>
                  <CardBody>
                    <div className='row g-4'>
                      <FormGroup
                        className='col-12'
                        id='formAddressLine'
                        label='Address Line'>
                        <Input
                          placeholder='Address Line'
                          autoComplete='address-line1'
                          onChange={formik.handleChange}
                          value={formik.values.formAddressLine}
                        />
                      </FormGroup>
                      <FormGroup
                        className='col-12'
                        id='formAddressLine2'
                        label='Address Line 2'>
                        <Input
                          placeholder='Address Line 2'
                          autoComplete='address-line2'
                          onChange={formik.handleChange}
                          value={formik.values.formAddressLine2}
                        />
                      </FormGroup>
                      <FormGroup
                        className='col-md-6'
                        id='formCity'
                        label='City'>
                        <Input
                          placeholder='City'
                          autoComplete='address-level2'
                          onChange={formik.handleChange}
                          value={formik.values.formCity}
                        />
                      </FormGroup>
                      <FormGroup
                        className='col-md-4'
                        id='formState'
                        label='State'>
                        <Input
                          placeholder='State'
                          autoComplete='country-name'
                          onChange={formik.handleChange}
                          value={formik.values.formState}
                        />
                      </FormGroup>
                      <FormGroup
                        className='col-md-2'
                        id='formZIP'
                        label='ZIP Code'>
                        <Input
                          placeholder='ZIP'
                          autoComplete='postal-code'
                          onChange={formik.handleChange}
                          value={formik.values.formZIP}
                        />
                      </FormGroup>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <CardFooterRight>
                      <Button type='submit' color='info' icon='Save'>
                        Save
                      </Button>
                    </CardFooterRight>
                  </CardFooter>
                </Card>
              </CardTabItem>
              <CardTabItem id='profile2' title='Purchase Intention' icon='Lock'>
                <Alert isLight className='border-0' shadow='md' icon='LocalPolice'>
                  The information is not shared with third parties.
                </Alert>
                <Card
                  className='rounded-2'
                  tag='form'
                  onSubmit={formik.handleSubmit}>
                  <CardHeader>
                    <CardLabel icon='Lock'>
                      <CardTitle>Change Password</CardTitle>
                    </CardLabel>
                  </CardHeader>
                  <CardBody>
                    <div className='row g-4'>
                      <FormGroup
                        className='col-lg-4'
                        id='formCurrentPassword'
                        label='Current Password'>
                        <Input
                          type='password'
                          placeholder='Current Password'
                          autoComplete='current-password'
                          onChange={formik.handleChange}
                          value={formik.values.formCurrentPassword}
                        />
                      </FormGroup>
                      <div className='w-100 m-0' />
                      <FormGroup
                        className='col-lg-4'
                        id='formNewPassword'
                        label='New Password'>
                        <Input
                          type='password'
                          placeholder='New Password'
                          autoComplete='new-password'
                          onChange={formik.handleChange}
                          value={formik.values.formNewPassword}
                        />
                      </FormGroup>
                      <div className='w-100 m-0' />
                      <FormGroup
                        className='col-lg-4'
                        id='formConfirmNewPassword'
                        label='Confirm New Password'>
                        <Input
                          type='password'
                          placeholder='Confirm New Password'
                          autoComplete='new-password'
                          onChange={formik.handleChange}
                          value={formik.values.formConfirmNewPassword}
                        />
                      </FormGroup>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <CardFooterRight>
                      <Button type='submit' color='info' icon='Save'>
                        Change Password
                      </Button>
                    </CardFooterRight>
                  </CardFooter>
                </Card>
              </CardTabItem>
            </Card>
          </div>
        </div>

        <Modal setIsOpen={setSelectedImage} isOpen={!!selectedImage} isCentered>
          <ModalHeader setIsOpen={setSelectedImage}>
            <ModalTitle id='preview'>Preview</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <img src={selectedImage} alt='eneme' />
          </ModalBody>
        </Modal>
        <Modal
          setIsOpen={setGallerySeeAll}
          isOpen={gallerySeeAll}
          fullScreen
          titleId='gallery-full'>
          <ModalHeader setIsOpen={setGallerySeeAll}>
            <ModalTitle id='gallery-full'>Gallery</ModalTitle>
          </ModalHeader>
          <ModalBody>{GALLERY}</ModalBody>
        </Modal>
      </Page>
    </PageWrapper>
  );
};

export default KnowledgeGridPage;