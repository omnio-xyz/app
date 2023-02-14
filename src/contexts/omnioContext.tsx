import React, { createContext, FC, ReactNode, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import omnioSdk from '../omnio/omnio-sdk';
import { IConsumerUser } from '../omnio/models/user/consumer/user';
import { IConsumerUserProfile } from '../omnio/models/user/consumer/profile';

export interface IOmnioContextProps {
	loading: boolean;
	userData: IConsumerUser | null;
	saveProfile(profile: IConsumerUserProfile): Promise<void>;
	omnioConnected: Boolean;
	connectWithOmnio(): Promise<void>;
	disconnectWithOmnio(): Promise<void>;
}
const OmnioContext = createContext<IOmnioContextProps>({} as IOmnioContextProps);

interface IOmnioContextProviderProps {
	children: ReactNode;
}
export const OmnioContextProvider: FC<IOmnioContextProviderProps> = ({ children }) => {
	const [omnioConnected, setOmnioConnected] = useState<Boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [userData, setUserData] = useState<IConsumerUser | null>(
		JSON.parse(localStorage.getItem('omnio_user_data')!) || null,
	);

	useEffect(() => {
		localStorage.setItem('omnio_connected', omnioConnected.toString());
	}, [omnioConnected]);

	useEffect(() => {
		localStorage.setItem('omnio_user_data', JSON.stringify(userData));
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
			localStorage.removeItem('omnio_connected');
			localStorage.removeItem('omnio_user_data');
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

	const values = {
		loading,
		userData,
		saveProfile,
		omnioConnected,
		connectWithOmnio,
		disconnectWithOmnio,
	};

	return <OmnioContext.Provider value={values}>{children}</OmnioContext.Provider>;
};
OmnioContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

const useOmnio = () => useContext(OmnioContext);

export default useOmnio;
