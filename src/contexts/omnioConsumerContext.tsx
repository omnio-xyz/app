import React, { createContext, FC, ReactNode, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import omnioSdk from '../omnio/omnio-consumer-sdk';
import { IConsumerUser } from '../omnio/models/user/consumer/user';
import { IConsumerUserProfile } from '../omnio/models/user/consumer/profile';
import { IWishlistItem } from '../omnio/models/consumerData/wishlistItem/wishlistItem';
import { IAddToCartItem } from '../omnio/models/consumerData/addToCartItem/addToCartItem';
import { IContentViewItem } from '../omnio/models/consumerData/contentViewItem/contentViewItem';
import { IInitiatedCheckoutItem } from '../omnio/models/consumerData/initiatedCheckoutItem/initiatedCheckoutItem';

export interface IOmnioConsumerContextProps {
	loading: boolean;
	userData: IConsumerUser | null;
	saveProfile(profile: IConsumerUserProfile): Promise<void>;
	removeWishlistItem(item: IWishlistItem): Promise<void>;
	removeAddToCartItem(item: IAddToCartItem): Promise<void>;
	removeContentViewItem(item: IContentViewItem): Promise<void>;
	removeInitiatedCheckoutItem(item: IInitiatedCheckoutItem): Promise<void>;
	omnioConsumerConnected: Boolean;
	connectConsumerWithOmnio(): Promise<void>;
	disconnectConsumerWithOmnio(): Promise<void>;
}
const OmnioConsumerContext = createContext<IOmnioConsumerContextProps>(
	{} as IOmnioConsumerContextProps,
);

interface IOmnioConsumerContextProviderProps {
	children: ReactNode;
}
export const OmnioConsumerContextProvider: FC<IOmnioConsumerContextProviderProps> = ({
	children,
}) => {
	const [omnioConnected, setOmnioConnected] = useState<Boolean>(
		'true' === localStorage.getItem('omnio_consumer_connected')?.toLocaleLowerCase(),
	);
	const [loading, setLoading] = useState<boolean>(false);
	const [userData, setUserData] = useState<IConsumerUser | null>(
		JSON.parse(localStorage.getItem('omnio_consumer_user_data')!) || null,
	);

	useEffect(() => {
		localStorage.setItem('omnio_consumer_connected', omnioConnected.toString());
	}, [omnioConnected]);

	useEffect(() => {
		localStorage.setItem('omnio_consumer_user_data', JSON.stringify(userData));
	}, [userData]);

	const connectWithOmnio = async () => {
		setLoading(true);
		try {
			const omnioUserData = await omnioSdk.getUserData();
			setUserData(omnioUserData);
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
			setUserData(null);
			await localStorage.removeItem('omnio_consumer_connected');
			await localStorage.removeItem('omnio_consumer_user_data');
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const saveProfile = async (profile: IConsumerUserProfile) => {
		setLoading(true);
		try {
			const omnioUserData = await omnioSdk.saveUserConsumerProfile(profile);
			setUserData(omnioUserData);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const removeAddToCartItem = async (item: IAddToCartItem) => {
		setLoading(true);
		try {
			const omnioUserData = await omnioSdk.removeConsumerDataPoint(item);
			setUserData(omnioUserData);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const removeWishlistItem = async (item: IWishlistItem) => {
		setLoading(true);
		try {
			const omnioUserData = await omnioSdk.removeConsumerDataPoint(item);
			setUserData(omnioUserData);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const removeContentViewItem = async (item: IContentViewItem) => {
		setLoading(true);
		try {
			const omnioUserData = await omnioSdk.removeConsumerDataPoint(item);
			setUserData(omnioUserData);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const removeInitiatedCheckoutItem = async (item: IInitiatedCheckoutItem) => {
		setLoading(true);
		try {
			const omnioUserData = await omnioSdk.removeConsumerDataPoint(item);
			setUserData(omnioUserData);
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const DELAY_IN_MS = 20000;
		const loadConsumerData = async () => {
			try {
				const omnioUserData = await omnioSdk.getUserData();
				setUserData(omnioUserData);
			} catch (error) {
				console.error(error);
			}
		};

		const interval = setInterval(async () => {
			if (omnioConnected) {
				await loadConsumerData();
			}
		}, DELAY_IN_MS);

		return () => clearInterval(interval);
	}, [omnioConnected]);

	const values = {
		loading,
		userData,
		saveProfile,
		removeWishlistItem,
		removeAddToCartItem,
		removeContentViewItem,
		removeInitiatedCheckoutItem,
		omnioConsumerConnected: omnioConnected,
		connectConsumerWithOmnio: connectWithOmnio,
		disconnectConsumerWithOmnio: disconnectWithOmnio,
	};

	return <OmnioConsumerContext.Provider value={values}>{children}</OmnioConsumerContext.Provider>;
};
OmnioConsumerContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

const useOmnio = () => useContext(OmnioConsumerContext);

export default useOmnio;
