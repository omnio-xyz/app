import React, { createContext, FC, ReactNode, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import omnioSdk from '../omnio/omnio-consumer-sdk';
import { IConsumerUser } from '../omnio/models/user/consumer/user';
import { IConsumerUserProfile } from '../omnio/models/user/consumer/profile';

export interface IOmnioConsumerContextProps {
	loading: boolean;
	userData: IConsumerUser | null;
	saveProfile(profile: IConsumerUserProfile): Promise<void>;
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
		!!localStorage.getItem('omnio_consumer_connected') || false,
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
			localStorage.removeItem('omnio_consumer_connected');
			localStorage.removeItem('omnio_consumer_user_data');
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
			await loadConsumerData();
		}, DELAY_IN_MS);

		return () => clearInterval(interval);
	}, []);

	const values = {
		loading,
		userData,
		saveProfile,
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
