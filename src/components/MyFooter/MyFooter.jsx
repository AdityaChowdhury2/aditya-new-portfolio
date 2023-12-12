import { Footer } from 'flowbite-react';

const MyFooter = () => {
	return (
		<section className="bg-[var(--secondary)]">
			<div className="container">
				<Footer
					className="bg-transparent shadow-none text-[var(--primary)]"
					container
				>
					<div className="w-full">
						<div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
							<div
								className="flex flex-col
                            "
							>
								<h3 className=" whitespace-nowrap text-4xl font-semibold ">
									~Aditya
								</h3>
								<p className="mt-2">Front end web Developer </p>
							</div>
							<div>
								<h5 className="text-xl ">Media</h5>
							</div>
						</div>
						<Footer.Divider className="border-[var(--primary)]" />
						<p className="text-sm text-center">
							&copy; Copyright 2023-2024. Made By Aditya
						</p>
					</div>
				</Footer>
			</div>
		</section>
	);
};

export default MyFooter;
