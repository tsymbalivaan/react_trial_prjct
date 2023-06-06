import { FC } from 'react';
import { AppDispatch } from 'hooks/types';
import * as yup from 'yup';

// Actions
import { logIn } from 'store/reducers/auth/actions';

// Types
import { IFormikLogin } from 'core/types/formik.types';

// Components
import InputField from 'shared/components/InputField';
import AuthForm from '../../shared/components/Form';

interface SignInProps {
	setIsLogin: (item: boolean) => void;
}

const initFormik = { username: '', password: '' };
const validationForm = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().min(8).required('Password is required'),
});

const SignIn: FC<SignInProps> = ({ setIsLogin }) => {
	const dispatch = AppDispatch();
	const handleSubmitFormik = (values: IFormikLogin) => {
		dispatch(logIn(values));
	};
	const onClickActiveText = () => {
		setIsLogin(false);
	};
	return (
		<AuthForm
			onSubmitFormik={handleSubmitFormik}
			initFormik={initFormik}
			validationSchema={validationForm}
			title="Sign In"
			buttonText="Sign In"
			isLogInForm
			onClickActiveText={onClickActiveText}
		>
			<>
				<InputField placeholder="Example123" name="username" label="Username" />
				<InputField placeholder="***************" name="password" label="Password" isPasswordField />
			</>
		</AuthForm>
	);
};

export default SignIn;
