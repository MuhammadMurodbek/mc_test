import { Container, Row } from 'react-bootstrap';
import Sidebar from '../sidebar';
import Navbar from '../navbar';

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
		</div>
	);
};

export default Layout;
