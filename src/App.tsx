import React, { useEffect } from 'react';
import { AppSelector } from 'hooks/types';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Selectors
import { selectorGetUser } from 'store/reducers/auth/selectors';

// Components
import Home from 'pages/Home';
import Auth from 'pages/Auth';

// Enum
import { ROUTERS } from 'Routers';

const App = () => {
	const user = AppSelector(selectorGetUser);
	const navigate = useNavigate();
	useEffect(() => {
		if (!user) {
			navigate(ROUTERS.AUTH);
			return;
		}
		navigate(ROUTERS.HOME);
	}, [user]);
	return (
		<div className="App">
			<Routes>
				<Route element={<Auth />} path={ROUTERS.AUTH} />
				<Route element={<Home />} path={ROUTERS.HOME} />
			</Routes>
		</div>
	);
};

export default App;
