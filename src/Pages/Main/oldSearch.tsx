import React, { useState } from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import classNames from 'classnames';
import { useMeasure } from 'react-use';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/bootstrap/Button';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardTabItem,
	CardTitle,
} from '../../components/bootstrap/Card';
import UserImageWebp from '../../../../assets/img/wanna/wanna1.webp';
import UserImage from '../../../../assets/img/wanna/wanna1.png';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import showNotification from '../../components/extras/showNotification';
import Icon from '../../components/icon/Icon';
import Alert from '../../components/bootstrap/Alert';
import Avatar from '../../components/Avatar';
import Progress from '../../components/bootstrap/Progress';

import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../components/bootstrap/Modal';
import { demoPagesMenu } from '../../menu';
import WannaImg1 from '../../../../assets/img/wanna/slide/scene-1.png';
import WannaImg2 from '../../../../assets/img/wanna/slide/scene-2.png';
import WannaImg5 from '../../../../assets/img/wanna/slide/scene-5.png';
import WannaImg6 from '../../../../assets/img/wanna/slide/scene-6.png';
import Carousel from '../../components/bootstrap/Carousel';
import CarouselSlide from '../../components/bootstrap/CarouselSlide';
import useDarkMode from '../../hooks/useDarkMode';

const SingleFluidPage = () => {
	const { darkModeStatus } = useDarkMode();

	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			formPrefix: 'Prof.',
			formName: 'Timothy',
			formMiddleName: 'John',
			formSurName: 'Doe',
			formEmailAddress: 'tjohndoe@site.com',
			formPhone: '2575637401',
			formAddressLine: '711-2880 Nulla St.',
			formAddressLine2: 'Mankato',
			formCity: 'Mississippi',
			formState: 'USA',
			formZIP: '96522',
			formCurrentPassword: '',
			formNewPassword: '',
			formConfirmNewPassword: '',
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-console
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Information</span>
				</span>,
				JSON.stringify(values, null, 2),
			);
		},
	});
	const [ref, { height }] = useMeasure<HTMLDivElement>();

	const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark'];
	const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
	const [gallerySeeAll, setGallerySeeAll] = useState(false);



	return (
		<PageWrapper>
		</PageWrapper>
	);
};

export default SingleFluidPage;