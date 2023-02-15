import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
import Spinner from '../../../components/bootstrap/Spinner';
import useOmnioBrand from '../../../contexts/omnioBrandContext';
import useOmnioConsumer from '../../../contexts/omnioConsumerContext';
import { BrandProfileMenu, ConsumerProfileMenu } from '../../../menu';

interface ILoginHeaderProps {
	consumerUserMode?: boolean;
}
const LoginHeader: FC<ILoginHeaderProps> = ({ consumerUserMode }) => {
	if (consumerUserMode) {
		return (
			<>
				<div className='text-center h1 fw-bold mt-5'>Welcome,</div>
				<div className='text-center h4 text-muted mb-5'>
					Manage your web3 consumer data!
				</div>
			</>
		);
	}
	return (
		<>
			<div className='text-center h1 fw-bold mt-5'>Welcome,</div>
			<div className='text-center h4 text-muted mb-5'>Setup your web3 brand!</div>
		</>
	);
};

interface ILoginProps {
	isLoginConsumer?: boolean;
}
const Login: FC<ILoginProps> = ({ isLoginConsumer }) => {
	const [consumerUserMode, setConsumerUserMode] = useState<boolean>(isLoginConsumer || true);

	const { connectConsumerWithOmnio, omnioConsumerConnected, loading } = useOmnioConsumer();
	const { connectBrandWithOmnio, omnioBrandConnected, brandLoading } = useOmnioBrand();

	const { darkModeStatus } = useDarkMode();

	const navigate = useNavigate();

	const handleLogInWithWallet = async () => {
		try {
			if (consumerUserMode) {
				await connectConsumerWithOmnio();
			} else {
				await connectBrandWithOmnio();
			}
		} catch (error: unknown) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (omnioBrandConnected) {
			navigate(BrandProfileMenu.profile.path);
		} else if (omnioConsumerConnected) {
			navigate(ConsumerProfileMenu.profile.path);
		}
	}, [omnioBrandConnected, omnioConsumerConnected, navigate]);

	return (
		<PageWrapper
			isProtected={false}
			title='Login'
			className={classNames({ bg: false, 'bg-light': true })}>
			<div className='row h-100 align-items-center justify-content-center'>
				<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
					<Card className='shadow-3d-dark' data-tour='login-page'>
						<CardBody>
							<div
								className={classNames('rounded-3', {
									'bg-l10-dark': !darkModeStatus,
									'bg-dark': darkModeStatus,
								})}>
								<div className='row row-cols-2 g-3 pb-3 px-3 mt-0'>
									<div className='col'>
										<Button
											color={darkModeStatus ? 'light' : 'dark'}
											isLight={consumerUserMode}
											className='rounded-1 w-100'
											size='lg'
											onClick={() => {
												setConsumerUserMode(!consumerUserMode);
											}}>
											Brand
										</Button>
									</div>
									<div className='col'>
										<Button
											color={darkModeStatus ? 'light' : 'dark'}
											isLight={!consumerUserMode}
											className='rounded-1 w-100'
											size='lg'
											onClick={() => {
												setConsumerUserMode(!consumerUserMode);
											}}>
											Consumer
										</Button>
									</div>
								</div>
							</div>

							<LoginHeader consumerUserMode={consumerUserMode} />

							<form className='row g-4'>
								{/* BEGIN :: Web3 Login */}
								{
									<>
										<div className='col-12'>
											<Button
												isOutline
												color={darkModeStatus ? 'light' : 'dark'}
												className={classNames('w-100 py-3', {
													'border-light': !darkModeStatus,
													'border-dark': darkModeStatus,
												})}
												icon='CustomEthereum'
												onClick={handleLogInWithWallet}>
												{(loading || brandLoading) && (
													<Spinner isSmall inButton isGrow />
												)}
												Connect with wallet
											</Button>
										</div>
									</>
								}
								{/* END :: Social Login */}
							</form>
						</CardBody>
					</Card>
					<div className='text-center'>
						<a
							href='/'
							className={classNames('text-decoration-none me-3', {
								'link-light': true,
								'link-dark': false,
							})}>
							Privacy Policy
						</a>
						<a
							href='/'
							className={classNames('link-light text-decoration-none', {
								'link-light': true,
								'link-dark': false,
							})}>
							Terms of Use
						</a>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};
Login.propTypes = {
	isLoginConsumer: PropTypes.bool,
};
Login.defaultProps = {
	isLoginConsumer: true,
};

export default Login;
