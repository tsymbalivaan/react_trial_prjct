import React, { FC, ReactNode, useMemo } from 'react';
import { Form, Formik } from 'formik';
import { Box, Typography } from '@mui/material';

// Types
import { IFormikLogin, IFormikRegister } from 'core/types/formik.types';

// Components
import Header from 'shared/components/Header';
import ButtonComponent from 'shared/components/Button';

// Styles
import { AuthFormContainer, AuthFormHeader, AuthFormFields, TypographyAuth, Wrapper, MarkedText } from './styles';

interface AuthFormProps {
	children: ReactNode;
	initFormik: IFormikLogin | IFormikRegister;
	validationSchema: any;
	title: string;
	buttonText: string;
	onSubmitFormik: (values: any) => void;
	isLogInForm: boolean;
	onClickActiveText: any;
}

const AuthForm: FC<AuthFormProps> = ({
	children,
	initFormik,
	validationSchema,
	title,
	buttonText,
	onSubmitFormik,
	isLogInForm,
	onClickActiveText,
}) => {
	const activeTextDescription = useMemo(
		() => (isLogInForm ? 'Don`t have account yet?' : 'I have an account.'),
		[isLogInForm]
	);

	const linkText = useMemo(() => (isLogInForm ? 'Go to Sign Up' : 'Go to Sign In'), [isLogInForm]);
	return (
		<Box sx={Wrapper}>
			<Formik
				validateOnBlur
				validationSchema={validationSchema}
				initialValues={initFormik}
				onSubmit={onSubmitFormik}
			>
				{formik => (
					<Form>
						<Box>
							<Header />
							<Box component="div" sx={AuthFormContainer}>
								<Box sx={AuthFormHeader}>{title}</Box>
								<Box sx={AuthFormFields}>
									{children}
									<ButtonComponent isDisabled={!formik.isValid || !formik.dirty} text={buttonText} />

									<Typography sx={TypographyAuth}>
										{activeTextDescription}
										<Box component="span" onClick={onClickActiveText} sx={MarkedText}>
											{linkText}
										</Box>
									</Typography>
								</Box>
							</Box>
						</Box>
					</Form>
				)}
			</Formik>
		</Box>
	);
};
export default AuthForm;
