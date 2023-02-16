import React, { useState } from 'react';
import { useFormik } from 'formik';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Button from '../../../components/bootstrap/Button';
import CommonGridProductItem from '../../_common/CommonGridProductItem';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Badge from '../../../components/bootstrap/Badge';
import Input from '../../../components/bootstrap/forms/Input';
import PlaceholderImage from '../../../components/extras/PlaceholderImage';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import { BrandMenu } from '../../../menu';
import useOmnioBrand from '../../../contexts/omnioBrandContext';
import { IProduct } from '../../../omnio/models/product/product';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import Spinner from '../../../components/bootstrap/Spinner';
import imgBbClient from '../../../common/clients/img-bb-client';

const validateValues = (values: IProduct) => {
	const errors: { [key: string]: string } = {};

	if (!values.gtin) {
		errors.gtin = 'Required';
	}

	if (!values.name) {
		errors.name = 'Required';
	}

	if (!values.unit_price) {
		errors.unit_price = 'Required';
	}

	if (!values.image) {
		errors.image = 'Required';
	}

	if (!values.category) {
		errors.category = 'Required';
	}
	return errors;
};

const ProductsCatalog = () => {
	const [editedProduct, setEditedProduct] = useState<IProduct | null>(null);
	const [editPanel, setEditPanel] = useState<boolean>(false);
	const { brandLoading, products, addProduct, editProduct, removeProduct } = useOmnioBrand();

	async function handleRemove(product: IProduct) {
		await removeProduct(product);
		showNotificationToUser('Remove Product', 'Product deleted successfully');
	}

	function handleEdit(product: IProduct) {
		setEditedProduct(product);
		setEditPanel(true);
	}

	function handleAdd() {
		setEditedProduct(null);
		setEditPanel(true);
	}

	function showNotificationToUser(title: string, description: string) {
		showNotification(
			<span className='d-flex align-items-center'>
				<Icon icon='Info' size='lg' className='me-1' />
				<span>{title}</span>
			</span>,
			description,
		);
	}

	const formik = useFormik({
		initialValues: {
			gtin: editedProduct?.gtin || '',
			name: editedProduct?.name || '',
			description: editedProduct?.description || '',
			unit_price: editedProduct?.unit_price || 1,
			category: editedProduct?.category || '',
			image: editedProduct?.image || '',
			brand_id: 'FakeBrand',
		},
		enableReinitialize: true,
		validate: validateValues,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: async (values) => {
			let notificationTitle = '',
				notificationMessage = '';
			try {
				if (editedProduct) {
					await editProduct(values);
					notificationTitle = 'Edited Product';
					notificationMessage = 'Product updated successfully';
				} else {
					await addProduct(values);
					notificationTitle = 'Added Product';
					notificationMessage = 'Product saved successfully';
				}
				setEditPanel(false);
			} catch (error: unknown) {
				console.error(error);
				notificationTitle = 'Error';
				notificationMessage = 'There was an error when saving the product information';
			} finally {
				showNotificationToUser(notificationTitle, notificationMessage);
			}
		},
	});

	return (
		<PageWrapper title={BrandMenu.productCatalog.text}>
			<SubHeader>
				<SubHeaderLeft>
					<SubheaderSeparator />
					<span className='text-muted'>{products?.length} items</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button color='dark' isLight icon='Add' onClick={handleAdd}>
						Add
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='display-4 fw-bold py-3'>All Products</div>
				<div className='row'>
					{products?.map((product) => (
						<div key={product.gtin} className='col-xxl-3 col-xl-4 col-md-6'>
							<CommonGridProductItem
								id={product.gtin}
								name={product.name}
								category={product.category}
								img={product.image}
								unit_price={product.unit_price}
								brand_id={product.brand_id}
								editAction={() => handleEdit(product)}
								deleteAction={() => handleRemove(product)}
							/>
						</div>
					))}
				</div>
			</Page>

			<OffCanvas
				setOpen={setEditPanel}
				isOpen={editPanel}
				isRightPanel
				tag='form'
				noValidate
				onSubmit={formik.handleSubmit}>
				<OffCanvasHeader setOpen={setEditPanel}>
					<OffCanvasTitle id='edit-panel'>
						{editedProduct?.name || 'New Product'}{' '}
						{editedProduct?.name ? (
							<Badge color='primary' isLight>
								Edit
							</Badge>
						) : (
							<Badge color='success' isLight>
								New
							</Badge>
						)}
					</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<Card>
						<CardHeader>
							<CardLabel icon='Photo' iconColor='info'>
								<CardTitle>Product Image</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row'>
								<div className='col-12'>
									{!!formik.values.image ? (
										<img
											src={formik.values.image}
											alt=''
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
								</div>
								<div className='col-12'>
									<div className='row g-4'>
										<div className='col-12'>
											<Input
												type='file'
												autoComplete='photo'
												onChange={async (event: any) => {
													const imageUrl = await imgBbClient.uploadImage(
														event?.target.files[0],
													);
													await formik.setFieldValue('image', imageUrl);
												}}
												isValid={formik.isValid}
												isTouched={formik.touched.image}
												invalidFeedback={formik.errors.image}
												validFeedback='Looks good!'
											/>
										</div>
										<div className='col-12'>
											{editedProduct && (
												<Button
													color='dark'
													isLight
													icon='Delete'
													className='w-100'
													onClick={() => {
														formik.setFieldValue('image', '');
													}}>
													Delete Image
												</Button>
											)}
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardLabel icon='Description' iconColor='success'>
								<CardTitle>Product Details</CardTitle>
							</CardLabel>
						</CardHeader>
						<CardBody>
							<div className='row g-4'>
								<div className='col-12'>
									<FormGroup id='gtin' label='GTIN' isFloating>
										<Input
											placeholder='GTIN'
											onChange={formik.handleChange}
											value={formik.values.gtin}
											isValid={formik.isValid}
											isTouched={formik.touched.gtin}
											invalidFeedback={formik.errors.gtin}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='name' label='Name' isFloating>
										<Input
											placeholder='Name'
											onChange={formik.handleChange}
											value={formik.values.name}
											isValid={formik.isValid}
											isTouched={formik.touched.name}
											invalidFeedback={formik.errors.name}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='price' label='Unit price' isFloating>
										<Input
											placeholder='Unit price'
											type='number'
											onChange={(event: any) => {
												formik.setFieldValue(
													'unit_price',
													event?.target.value,
												);
											}}
											value={formik.values.unit_price}
											isValid={formik.isValid}
											isTouched={formik.touched.unit_price}
											invalidFeedback={formik.errors.unit_price}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='category' label='Category' isFloating>
										<Input
											placeholder='Category'
											onChange={formik.handleChange}
											value={formik.values.category}
											isValid={formik.isValid}
											isTouched={formik.touched.category}
											invalidFeedback={formik.errors.category}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
							</div>
						</CardBody>
					</Card>
				</OffCanvasBody>
				<div className='p-3'>
					<Button
						color='info'
						icon='Save'
						type='submit'
						isDisable={!formik.isValid && brandLoading}>
						{brandLoading && <Spinner isSmall inButton isGrow />}
						Save
					</Button>
				</div>
			</OffCanvas>
		</PageWrapper>
	);
};

export default ProductsCatalog;
