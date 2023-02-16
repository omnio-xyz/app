import React from 'react';
import { useFormik } from 'formik';
import { useMeasure } from 'react-use';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, {
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardTabItem,
	CardTitle,
} from '../../../components/bootstrap/Card';
import UserImageWebp from '../../../assets/img/wanna/wanna1.webp';
import UserImage from '../../../assets/img/wanna/wanna1.png';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import Alert from '../../../components/bootstrap/Alert';
import Avatar from '../../../components/Avatar';
import useOmnio from '../../../contexts/omnioConsumerContext';
import Spinner from '../../../components/bootstrap/Spinner';

const DashboardPage = () => {
	const { userData, saveProfile, loading } = useOmnio();

	const formik = useFormik({
		initialValues: {
			formPrefix: userData?.profile?.prefix,
			formName: userData?.profile?.firstName,
			formMiddleName: userData?.profile?.middleName,
			formSurName: userData?.profile?.surname,
			formEmailAddress: userData?.profile?.email,
			formPhone: userData?.profile?.phone,
			formAddressLine: userData?.profile?.address?.line,
			formAddressLine2: userData?.profile?.address?.line2,
			formCity: userData?.profile?.address?.city,
			formState: userData?.profile?.address?.country,
			formZIP: userData?.profile?.address?.zip,
			formCurrentPassword: '',
			formNewPassword: '',
			formConfirmNewPassword: '',
		},
		enableReinitialize: true,
		onSubmit: async (values) => {
			const profile = {
				prefix: values.formPrefix,
				firstName: values.formName,
				middleName: values.formMiddleName,
				surname: values.formSurName,
				email: values.formEmailAddress,
				phone: values.formPhone,
				address: {
					line: values.formAddressLine,
					line2: values.formAddressLine2,
					city: values.formCity,
					country: values.formState,
					zip: values.formZIP,
				},
			};
			try {
				await saveProfile(profile);
				showNotification(
					<span className='d-flex align-items-center'>
						<Icon icon='Info' size='lg' className='me-1' />
						<span>Updated Information</span>
					</span>,
					'User profile updated successfully',
				);
			} catch (error: unknown) {
				console.error(error);
			}
			// eslint-disable-next-line no-console
		},
	});
	const [ref] = useMeasure<HTMLDivElement>();

	return (
		<PageWrapper>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xxl-4 col-xl-6'>
						<Card ref={ref} className='shadow-3d-primary'>
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
												<div className='h5 text-muted'>Omnio User</div>
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
						<Card hasTab>
							<CardTabItem id='profile' title='Identity' icon='Contacts'>
								<Alert isLight className='border-0' shadow='md' icon='LocalPolice'>
									The information is not shared with third parties.
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
											<Button
												type='submit'
												color='primary'
												icon='Save'
												isDisable={!formik.isValid && loading}>
												{loading && <Spinner isSmall inButton isGrow />}
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
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
