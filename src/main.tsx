import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import AuthPage from './pages/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/dashboard';
import Layout from './containers/layout';
import NotFound from './pages/not.found';
import { Provider } from 'react-redux';
import store from '../redux/store';

const mappedRouter = [
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <AuthPage />,
	},
	{
		path: '/users',
		element: <Dashboard />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
].map((item) => {
	if (item.path === '/login') return item;
	return {
		...item,
		element: <Layout>{item.element}</Layout>,
	};
});

const router = createBrowserRouter(mappedRouter);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
