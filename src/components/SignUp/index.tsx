import { FC } from 'react';
import * as yup from 'yup';
import { AppDispatch } from 'hooks/types';

// Actions
import { sigUp } from 'store/reducers/auth/actions';

// Types
import { IFormikRegister } from 'core/types/formik.types';

// Components
import InputField from 'shared/components/InputField';
import AuthForm from '../../shared/components/Form';

interface SignUpProps {
	setIsLogin: (item: boolean) => void;
}

const initFormik = { fullname: '', username: '', password: '', confirmPassword: '' };
const validationForm = yup.object().shape({
	username: yup.string().required('Username is required'),
	fullname: yup.string().required('Username is required'),
	password: yup.string().min(8).required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'passwords should be alike')
		.required('Put in password'),
});

const SignUp: FC<SignUpProps> = ({ setIsLogin }) => {
	const dispatch = AppDispatch();

	const onClickAuth = (values: IFormikRegister) => {
		dispatch(sigUp({ password: values.password, username: values.username, displayName: values?.fullname }));
	};

	const onClickActiveText = () => {
		setIsLogin(true);
	};

	return (
		<AuthForm
			initFormik={initFormik}
			validationSchema={validationForm}
			title="Sign Up"
			buttonText="Sign Up"
			onSubmitFormik={onClickAuth}
			isLogInForm={false}
			onClickActiveText={onClickActiveText}
		>
			<>
				<InputField placeholder="Example123" name="username" label="Username" />
				<InputField placeholder="Example name" name="fullname" label="Full Name:" />
				<InputField placeholder="***************" name="password" label="Password" isPasswordField />
				<InputField
					placeholder="***************"
					name="confirmPassword"
					label="Confirm Password"
					isPasswordField
				/>
			</>
		</AuthForm>
	);
};

export default SignUp;
