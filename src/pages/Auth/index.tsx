import { useState, useCallback } from 'react';

// Components
import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';

const Auth = () => {
	const [isLogInForm, setIsLogInForm] = useState(false);
	const handleIsLogInForm = useCallback((value: boolean) => setIsLogInForm(value), []);
	return isLogInForm ? <SignIn setIsLogin={handleIsLogInForm} /> : <SignUp setIsLogin={handleIsLogInForm} />;
};
export default Auth;
