import Sidebar from '../sidebar';
import Navbar from '../navbar';
import { Toaster } from 'react-hot-toast';

type TProps = {
	children: JSX.Element;
};

const Layout = ({ children }: TProps) => {
	return (
		<div>
			{window.location.pathname === '/login' ? (
				children
			) : (
				<div>
					<Navbar />
					<div className="d-flex">
						<Sidebar />
						{children}
					</div>
				</div>
			)}
			<Toaster position="bottom-center"/>
		</div>
	);
};

export default Layout;
