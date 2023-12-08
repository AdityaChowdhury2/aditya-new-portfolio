import { Link } from 'react-scroll';
// import { RiMenuFill } from 'react-icons/ri';
// import { useState } from 'react';

const Header = () => {
	const navItems = ['projects', 'about-me', 'contacts'];

	return (
		<Navbar fluid rounded>
			<Navbar.Brand as={Link} href="https://flowbite-react.com">
				<span className="self-center whitespace-nowrap text-xl font-semibold">
					~Aditya
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				{navItems.map((navItem, idx) => (
					<Link key={idx} href={navItem}>
						{navItem}
					</Link>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
