import React, { createContext, FC, ReactNode, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import omnioSdk from '../omnio/omnio-brand-sdk';
import { IBrandUserProfile } from '../omnio/models/user/brand/profile';
import { IProduct } from '../omnio/models/product/product';

export interface IOmnioBrandContextProps {
	brandLoading: boolean;
	profile: IBrandUserProfile | null;
	//products: IProduct[] | null;
	saveProfile(profile: IBrandUserProfile): Promise<void>;
	omnioBrandConnected: Boolean;
	connectBrandWithOmnio(): Promise<void>;
	disconnectBrandWithOmnio(): Promise<void>;
}
const OmnioBrandContext = createContext<IOmnioBrandContextProps>({} as IOmnioBrandContextProps);

interface IOmnioBrandContextProviderProps {
	children: ReactNode;
}
export const OmnioBrandContextProvider: FC<IOmnioBrandContextProviderProps> = ({ children }) => {
	const [omnioConnected, setOmnioConnected] = useState<Boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [profile, setProfile] = useState<IBrandUserProfile | null>(
		JSON.parse(localStorage.getItem('omnio_brand_profile')!) || null,
	);
	const [products, setProducts] = useState<IProduct[] | null>(
		JSON.parse(localStorage.getItem('omnio_brand_products')!) || null,
	);

	useEffect(() => {
		localStorage.setItem('omnio_brand_connected', omnioConnected.toString());
	}, [omnioConnected]);

	useEffect(() => {
		localStorage.setItem('omnio_brand_profile', JSON.stringify(profile));
	}, [profile]);

	useEffect(() => {
		localStorage.setItem('omnio_brand_products', JSON.stringify(products));
	}, [products]);

	const connectWithOmnio = async () => {
		setLoading(true);
		try {
			const brandProfile = await omnioSdk.getProfile();
			setProfile(brandProfile);
			setOmnioConnected(true);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const disconnectWithOmnio = async () => {
		setLoading(true);
		try {
			setOmnioConnected(false);
			setProfile(null);
			localStorage.removeItem('omnio_brand_connected');
			localStorage.removeItem('omnio_brand_profile');
			localStorage.removeItem('omnio_brand_products');
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const saveProfile = async (updatedProfile: IBrandUserProfile) => {
		setLoading(true);
		try {
			const brandProfile = await omnioSdk.saveProfile(updatedProfile);
			setProfile(brandProfile);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const values = {
		brandLoading: loading,
		profile,
		products,
		saveProfile,
		omnioBrandConnected: omnioConnected,
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
