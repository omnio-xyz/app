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
import UserImage from '../../../assets/img/wanna/slide/scene-2.png';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import Avatar from '../../../components/Avatar';
import useOmnioBrand from '../../../contexts/omnioBrandContext';
import Spinner from '../../../components/bootstrap/Spinner';
import PlaceholderImage from '../../../components/extras/PlaceholderImage';
import imgBbClient from '../../../common/clients/img-bb-client';

const DashboardPage = () => {
	const { brandProfile, saveProfile, brandLoading } = useOmnioBrand();

	const formik = useFormik({
		initialValues: {
			formName: brandProfile?.name,
			formDescription: brandProfile?.description,
			formContactEmail: brandProfile?.contactEmail,
			formUrl: brandProfile?.url,
			formLogoImageUrl: brandProfile?.logoImageUrl,
		},
		enableReinitialize: true,
		onSubmit: async (values) => {
			const updatedProfile = {
				name: values.formName,
				description: values.formDescription,
				contactEmail: values.formContactEmail,
				url: values.formUrl,
				logoImageUrl: values.formLogoImageUrl,
			};
			try {
				await saveProfile(updatedProfile);
				showNotification(
					<span className='d-flex align-items-center'>
						<Icon icon='Info' size='lg' className='me-1' />
						<span>Updated Information</span>
					</span>,
					'Brand profile updated successfully',
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
													src={brandProfile?.logoImageUrl || UserImage}
													className='rounded-circle'
												/>
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='h2 fw-bold'>
													{formik.values.formName || 'Brand Name'}
												</div>
												<div className='h5 text-muted'>Omnio Brand</div>
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
															{formik.values.formContactEmail || ''}
														</div>
														<div className='text-muted'>
															Contact Email Address
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Web' size='3x' color='info' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{formik.values.formUrl || ''}
														</div>
														<div className='text-muted'>Web</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-grow-1 ms-3'>
														<div className='fs-5 mb-0'>Description</div>
														<div className='text-muted'>
															{formik.values.formDescription || ''}
														</div>
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
								<Card
									className='rounded-2'
									tag='form'
									onSubmit={formik.handleSubmit}>
									<CardHeader>
										<CardLabel icon='Person'>
											<CardTitle>Brand Information</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody>
										<div className='row g-4'>
											<div className='col-md-6'>
												<FormGroup
													id='formName'
													label='Name'
													style={{ paddingBottom: '5%' }}>
													<Input
														placeholder='Brand Name'
														autoComplete='given-name'
														onChange={formik.handleChange}
														value={formik.values.formName}
													/>
												</FormGroup>
												<FormGroup
													id='formDescription'
													label='Description'
													style={{ paddingBottom: '5%' }}>
													<Input
														placeholder='Brand Description'
														autoComplete='additional-name'
														onChange={formik.handleChange}
														value={formik.values.formDescription}
													/>
												</FormGroup>
												<FormGroup
													id='formEmailAddress'
													label='Contact Email Address'
													style={{ paddingBottom: '5%' }}>
													<Input
														type='email'
														placeholder='Email'
														autoComplete='email'
														onChange={(event: any) => {
															formik.setFieldValue(
																'formContactEmail',
																event?.target.value,
															);
														}}
														value={formik.values.formContactEmail}
													/>
												</FormGroup>
												<FormGroup
													id='formUrl'
													label='Home Page Url'
													style={{ paddingBottom: '5%' }}>
													<Input
														type='url'
														placeholder='Home Page Url'
														autoComplete='url'
														onChange={(event: any) => {
															formik.setFieldValue(
																'formUrl',
																event?.target.value,
															);
														}}
														value={formik.values.formUrl}
													/>
												</FormGroup>
											</div>
											<FormGroup
												className='col-md-6'
												id='formLogoImageUrl'
												label='Logo'>
												{!!formik.values.formLogoImageUrl ? (
													<img
														src={formik.values.formLogoImageUrl}
														alt='brand logo'
														width={128}
														height={128}
														className='mx-auto d-block img-fluid mb-3'
													/>
												) : (
													<PlaceholderImage
														width={128}
														height={128}
														className='mx-auto d-block img-fluid mb-3 rounded'
													/>
												)}
												<Input
													type='file'
													autoComplete='photo'
													style={{ marginTop: '8%' }}
													onChange={async (event: any) => {
														const imageUrl =
															await imgBbClient.uploadImage(
																event?.target.files[0],
															);
														await formik.setFieldValue(
															'formLogoImageUrl',
															imageUrl,
														);
													}}
													isTouched={formik.touched.formLogoImageUrl}
												/>
												<Button
													color='dark'
													isLight
													icon='Delete'
													style={{ marginTop: '12%' }}
													className='w-100'
													onClick={() => {
														formik.setFieldValue(
															'formLogoImageUrl',
															'',
														);
													}}>
													Delete Image
												</Button>
											</FormGroup>
										</div>
									</CardBody>
									<CardFooter>
										<CardFooterRight>
											<Button
												type='submit'
												color='primary'
												icon='Save'
												isDisable={!formik.isValid && brandLoading}>
												{brandLoading && (
													<Spinner isSmall inButton isGrow />
												)}
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
