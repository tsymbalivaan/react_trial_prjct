import { FC, useMemo, useState } from 'react';
import { Field } from 'formik';
import { Box } from '@mui/material';
// Styles
import { ImageEye, WrapperBox } from 'shared/components/InputField/styles';

// Images
import EyeOff from 'assets/eye-off.svg';
import styles from './styles.module.sass';

interface InputFieldProps {
	name: string;
	placeholder: string;
	label: string;
	isPasswordField?: boolean;
}
const InputField: FC<InputFieldProps> = ({ name, placeholder, label, isPasswordField = false }) => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const fieldType = useMemo(
		() => (isPasswordField && isShowPassword ? 'password' : 'text'),
		[isPasswordField, isShowPassword]
	);
	const handleChangeVisibility = () => {
		setIsShowPassword(!isShowPassword);
	};
	return (
		<>
			<label htmlFor={name}>{label}:</label>
			<Box sx={WrapperBox}>
				<Field type={fieldType} id={name} placeholder={placeholder} name={name} className={styles.input} />
				{isPasswordField && (
					<Box component="span" onClick={handleChangeVisibility}>
						<Box component="img" sx={ImageEye} src={EyeOff} alt="EyeOff" />
					</Box>
				)}
			</Box>
		</>
	);
};
export default InputField;
