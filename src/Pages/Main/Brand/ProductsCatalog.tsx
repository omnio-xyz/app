import React, { useEffect, useState } from 'react';
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

const validateValues = (values: IProduct) => {
	const errors = {
		gtin: '',
		name: '',
		description: '',
		unit_price: '',
		category: '',
		image: '',
		brand_id: '',
	};

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
	const [editItem, setEditItem] = useState<IProduct | null>(null);
	const [editPanel, setEditPanel] = useState<boolean>(false);
	const { products, removeProduct, editProduct } = useOmnioBrand();

	function handleRemove(product: IProduct) {
		return removeProduct(product);
	}

	function handleEdit(product: IProduct) {
		setEditPanel(true);
		return setEditItem(product);
	}

	const formik = useFormik({
		initialValues: {
			gtin: '',
			name: '',
			description: '',
			unit_price: 1,
			category: '',
			image: '',
			brand_id: 'FakeBrand',
		},
		//validate: validateValues,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: async (values) => {
			if (editItem) {
				await editProduct(values);
			}
			setEditPanel(false);
		},
	});

	useEffect(() => {
		if (editItem) {
			formik.setValues({
				gtin: editItem.gtin,
				name: editItem.name,
				description: editItem.description,
				unit_price: editItem.unit_price,
				category: editItem.category,
				image: editItem.image,
				brand_id: editItem.brand_id,
			});
		}
		return () => {
			formik.setValues({
				gtin: '',
				name: '',
				description: '',
				unit_price: 0,
				category: '',
				image: '',
				brand_id: 'FakeBrand',
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editItem]);

	return (
		<PageWrapper title={BrandMenu.productCatalog.text}>
			<SubHeader>
				<SubHeaderLeft>
					<SubheaderSeparator />
					<span className='text-muted'>{products?.length} items</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button
						color='dark'
						isLight
						icon='Add'
						onClick={() => {
							setEditItem(null);
							setEditPanel(true);
						}}>
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
				onSubmit={formik.handleSubmit}>
				<OffCanvasHeader setOpen={setEditPanel}>
					<OffCanvasTitle id='edit-panel'>
						{editItem?.name || 'New Product'}{' '}
						{editItem?.name ? (
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
									{editItem?.image ? (
										<img
											src={editItem.image}
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
											<Input type='file' autoComplete='photo' />
										</div>
										<div className='col-12'>
											{editItem && (
												<Button
													color='dark'
													isLight
													icon='Delete'
													className='w-100'
													onClick={() => {
														setEditItem({ ...editItem, image: '' });
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
											onChange={formik.handleChange}
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
						isDisable={!formik.isValid && !!formik.submitCount}>
						Save
					</Button>
				</div>
			</OffCanvas>
		</PageWrapper>
	);
};

export default ProductsCatalog;
