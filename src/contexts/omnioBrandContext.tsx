import React, { createContext, FC, ReactNode, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import omnioSdk from '../omnio/omnio-brand-sdk';
import { IBrandUserProfile } from '../omnio/models/user/brand/profile';
import { IProduct } from '../omnio/models/product/product';
import defaultBrandProducts from '../omnio/models/brand/ceramic/product-catalog.json';

export interface IOmnioBrandContextProps {
	brandLoading: boolean;
	brandProfile: IBrandUserProfile | null;
	products: IProduct[] | null;
	saveProfile(profile: IBrandUserProfile): Promise<void>;
	addProduct(product: IProduct): Promise<void>;
	removeProduct(product: IProduct): Promise<void>;
	editProduct(product: IProduct): Promise<void>;
	omnioBrandConnected: Boolean;
	connectBrandWithOmnio(): Promise<void>;
	disconnectBrandWithOmnio(): Promise<void>;
}
const OmnioBrandContext = createContext<IOmnioBrandContextProps>({} as IOmnioBrandContextProps);

interface IOmnioBrandContextProviderProps {
	children: ReactNode;
}
export const OmnioBrandContextProvider: FC<IOmnioBrandContextProviderProps> = ({ children }) => {
	const [omnioBrandConnected, setOmnioBrandConnected] = useState<Boolean>(
		'true' === localStorage.getItem('omnio_brand_connected')?.toLocaleLowerCase(),
	);
	const [loading, setLoading] = useState<boolean>(false);
	const [brandProfile, setBrandProfile] = useState<IBrandUserProfile | null>(
		JSON.parse(localStorage.getItem('omnio_brand_profile')!) || null,
	);
	const [products, setProducts] = useState<IProduct[] | null>(
		JSON.parse(localStorage.getItem('omnio_brand_products')!) || null,
	);

	useEffect(() => {
		localStorage.setItem('omnio_brand_connected', omnioBrandConnected.toString());
	}, [omnioBrandConnected]);

	useEffect(() => {
		localStorage.setItem('omnio_brand_profile', JSON.stringify(brandProfile));
	}, [brandProfile]);

	useEffect(() => {
		localStorage.setItem('omnio_brand_products', JSON.stringify(products));
	}, [products]);

	const connectWithOmnio = async () => {
		setLoading(true);
		try {
			const brandProfileUpdated = await omnioSdk.getProfile();
			setBrandProfile(brandProfileUpdated);
			let brandProducts = await omnioSdk.getProducts();
			if (!brandProducts || (!brandProducts?.length && brandProducts.length <= 0)) {
				brandProducts = defaultBrandProducts;
				await omnioSdk.saveProducts(brandProducts);
			}
			setProducts(brandProducts);
			setOmnioBrandConnected(true);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const disconnectWithOmnio = async () => {
		setLoading(true);
		try {
			setOmnioBrandConnected(false);
			setBrandProfile(null);
			setProducts(null);
			await localStorage.removeItem('omnio_brand_connected');
			await localStorage.removeItem('omnio_brand_profile');
			await localStorage.removeItem('omnio_brand_products');
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const saveProfile = async (updatedProfile: IBrandUserProfile) => {
		setLoading(true);
		try {
			const brandProfileUpdated = await omnioSdk.saveProfile(updatedProfile);
			setBrandProfile(brandProfileUpdated);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const addProduct = async (newProduct: IProduct) => {
		setLoading(true);
		try {
			const brandProducts = await omnioSdk.saveProducts([...(products ?? []), newProduct]);
			setProducts(brandProducts);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const removeProduct = async (productToDelete: IProduct) => {
		setLoading(true);
		try {
			const brandProducts = await omnioSdk.saveProducts(
				(products || []).filter((p) => p !== productToDelete),
			);
			setProducts(brandProducts);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const editProduct = async (productEdited: IProduct) => {
		setLoading(true);
		try {
			const newProducts = (products || []).filter((p) => p.gtin !== productEdited.gtin);
			newProducts.push(productEdited);
			const brandProducts = await omnioSdk.saveProducts(newProducts);
			setProducts(brandProducts);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const values = {
		brandLoading: loading,
		brandProfile,
		products,
		saveProfile,
		addProduct,
		removeProduct,
		editProduct,
		omnioBrandConnected,
		connectBrandWithOmnio: connectWithOmnio,
		disconnectBrandWithOmnio: disconnectWithOmnio,
	};

	return <OmnioBrandContext.Provider value={values}>{children}</OmnioBrandContext.Provider>;
};
OmnioBrandContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

const useOmnioBrand = () => useContext(OmnioBrandContext);

export default useOmnioBrand;
