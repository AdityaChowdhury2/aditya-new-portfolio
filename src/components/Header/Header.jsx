import { Link } from 'react-scroll';
// import { RiMenuFill } from 'react-icons/ri';
// import { useState } from 'react';
import { Navbar } from 'flowbite-react';

const Header = () => {
	const navItems = ['projects', 'about-me', 'contacts'];

	return (
		<div className="container">
			<Navbar
				fluid
				rounded
				className="bg-transparent text-white pt-8"
				theme={{
					collapse: {
						list: 'mt-4 flex flex-col gap-y-8 md:mt-0 md:flex-row md:space-x-12 md:text-sm md:font-medium',
						hidden: {
							on: 'hidden',
							off: '',
						},
					},
				}}
			>
				<Navbar.Brand>
					<span className="self-center whitespace-nowrap text-4xl font-semibold">
						~Aditya
					</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					{navItems.map((navItem, idx) => (
						<Navbar.Link key={idx}>
							<Link to={navItem}>
								<p className="text-gray">
									<span className="text-primary">#</span>
									{navItem}
								</p>
							</Link>
						</Navbar.Link>
					))}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
