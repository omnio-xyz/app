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

interface IValues {
	name: string;
	price: number;
	stock: number;
	category: string;
	image?: string | null;
}
const validate = (values: IValues) => {
	const errors = {
		name: '',
		price: '',
		stock: '',
		category: '',
	};

	if (!values.name) {
		errors.name = 'Required';
	} else if (values.name.length < 3) {
		errors.name = 'Must be 3 characters or more';
	} else if (values.name.length > 20) {
		errors.name = 'Must be 20 characters or less';
	}

	if (!values.price) {
		errors.price = 'Required';
	} else if (values.price < 0) {
		errors.price = 'Price should not be 0';
	}

	if (!values.stock) {
		errors.stock = 'Required';
	}

	if (!values.category) {
		errors.category = 'Required';
	} else if (values.category.length < 3) {
		errors.category = 'Must be 3 characters or more';
	} else if (values.category.length > 20) {
		errors.category = 'Must be 20 characters or less';
	}

	return errors;
};

const ProductsCatalog = () => {
	const [editItem, setEditItem] = useState<IValues | null>(null);
	const [editPanel, setEditPanel] = useState<boolean>(false);
	const { products, removeProduct } = useOmnioBrand();


	function handleRemove(product: IProduct) {
		return removeProduct(product);
	}

	function handleEdit(id: number) {
		return; //TODO

	}

	const formik = useFormik({
		initialValues: {
			name: '',
			price: 0,
			stock: 0,
			category: '',
		},
		validate,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: (values) => {
			setEditPanel(false);
		},
	});

	useEffect(() => {
		if (editItem) {
			formik.setValues({
				name: editItem.name,
				price: editItem.price,
				stock: editItem.stock,
				category: editItem.category,
			});
		}
		return () => {
			formik.setValues({
				name: '',
				price: 0,
				stock: 0,
				category: '',
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
								editAction={() => {
									setEditPanel(true);
								}}
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
														setEditItem({ ...editItem, image: null });
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
											onBlur={formik.handleBlur}
											value={formik.values.name}
											isValid={formik.isValid}
											isTouched={formik.touched.name}
											invalidFeedback={formik.errors.name}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='price' label='Price' isFloating>
										<Input
											placeholder='Price'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.price}
											isValid={formik.isValid}
											isTouched={formik.touched.price}
											invalidFeedback={formik.errors.price}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='stock' label='Stock' isFloating>
										<Input
											placeholder='Stock'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.stock}
											isValid={formik.isValid}
											isTouched={formik.touched.stock}
											invalidFeedback={formik.errors.stock}
											validFeedback='Looks good!'
										/>
									</FormGroup>
								</div>
								<div className='col-12'>
									<FormGroup id='category' label='Category' isFloating>
										<Input
											placeholder='Category'
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
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
