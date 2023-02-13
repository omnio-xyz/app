import Icon from '../../components/icon/Icon';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import showNotification from '../../components/extras/showNotification';
import useDarkMode from '../../hooks/useDarkMode';
import { useFormik } from 'formik';
import { useMeasure } from 'react-use';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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