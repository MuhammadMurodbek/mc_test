import { NavLink } from 'react-router-dom';
import './index.css';

const navList = [
	{
		to: '/profile',
		name: 'Profile',
	},
	{
		to: '/users',
		name: 'Users',
	},
	{
		to: '/login',
		name: 'Logout',
	},
];

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="d-flex flex-column ">
				{navList.map((item) => {
					return (
						<NavLink
							key={item.to}
							className={({ isActive }) =>
								isActive ? 'active_link nav_link' : 'inactive nav_link'
							}
							to={item.to}
						>
							{item.name}
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
