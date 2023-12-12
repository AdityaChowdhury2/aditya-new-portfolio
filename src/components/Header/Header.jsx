import { Link } from 'react-scroll';
import { Navbar } from 'flowbite-react';

const Header = () => {
	const navItems = ['projects', 'about-me', 'contacts'];

	return (
		<div className="">
			<div className="container">
				<Navbar
					fluid
					rounded
					className="bg-transparent  primary pt-8 "
					theme={{
						collapse: {
							list: 'mt-4 flex flex-col gap-y-4 rounded md:mt-0 md:flex-row md:space-x-12 md:text-sm md:font-medium items-center mt-10',
							hidden: {
								on: 'hidden',
								off: '',
							},
						},
						toggle: {
							base: 'inline-flex items-center rounded-lg p-2 hover:bg-[var(--secondary)] text-sm text-[var(--primary)]  md:hidden transition',
							icon: 'h-5 w-5 shrink-0',
						},
					}}
				>
					<Navbar.Brand>
						<span className="self-center whitespace-nowrap text-4xl font-semibold text-[var(--secondary)]">
							~Aditya
						</span>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						{navItems.map((navItem, idx) => (
							<Link key={idx} to={navItem}>
								<p className="hover:font-bold transition cursor-pointer">
									<span className="text-[var(--secondary)]">#</span>
									{navItem}
								</p>
							</Link>
						))}
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
