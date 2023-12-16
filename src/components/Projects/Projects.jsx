import { Element } from 'react-scroll';
import SectionHeading from '../Shared/SectionHeading';
// import Tilt from 'react-parallax-tilt';

const Projects = () => {
	return (
		<Element name="projects">
			<section className="my-10 md:my-20 text-[var(--primary)]">
				<div className="container ">
					<SectionHeading title={'projects'} />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8 px-8 gap-8 md:gap4 md:gap-8">
						<div
							className="w-full rounded min-h-[350px] bg-[var(--secondary)] border- p-4 group relative"
							style={{ boxShadow: 'rgba(56, 35, 86, 0.4) 8px 8px 0px 0px' }}
						>
							<div className="w-full h-[220px] md:h-[300px] overflow-hidden rounded">
								<img
									className="w-full hover:-translate-y-[46%] duration-[5000ms]"
									src="https://i.ibb.co/9T6RSdY/Tech-Trove-Home.png"
									alt=""
								/>
							</div>
							<div>
								<div className="mt-3">
									<h3 className="text-lg lg:text-xl font-bold ">Tech Trove</h3>
									<p>Technologies: React, Node.js, Firebase, MongoDb</p>
								</div>
								<div className="flex mt-8 justify-around">
									<a href="https://tech-trove-aditya.web.app">
										<button className="bg-[var(--primary)] text-[var(--secondary)] text-sm md:text-base px-3 py-1 rounded-md">
											Live
										</button>
									</a>
									<a href="https://github.com/AdityaChowdhury2/tech-trove-client">
										<button className="bg-[var(--primary)] text-[var(--secondary)] text-sm md:text-base px-3 py-1 rounded-md">
											client
										</button>
									</a>
									<a href="https://github.com/AdityaChowdhury2/tech-trove-server">
										<button className="bg-[var(--primary)] text-[var(--secondary)] text-sm md:text-base px-3 py-1 rounded-md">
											server
										</button>
									</a>
								</div>
							</div>
						</div>

						<div
							className="w-full rounded min-h-[350px] bg-[var(--secondary)] border- p-4 group relative"
							style={{ boxShadow: 'rgba(56, 35, 86, 0.4) 8px 8px 0px 0px' }}
						>
							<div className="w-full h-[220px] md:h-[300px] overflow-hidden rounded">
								<img
									className="w-full hover:-translate-y-[46%] duration-[5000ms] "
									src="https://i.ibb.co/x8B9zWp/Majesty-Royal-Home.png"
									alt=""
								/>
							</div>
							<div className="mt-3">
								<h3 className="text-lg lg:text-xl font-bold ">Majesty royal</h3>
								<p>Technologies: React, Node.js, Firebase, MongoDb</p>
							</div>
							<div className="flex mt-8 justify-around">
								<a href="https://majesty-royal-aditya.web.app/">
									<button className="bg-[var(--primary)] text-[var(--secondary)] text-sm md:text-base px-3 py-1 rounded-md">
										Live
									</button>
								</a>
								<a href="https://github.com/AdityaChowdhury2/majesty-royal-hotel-client">
									<button className="bg-[var(--primary)] text-[var(--secondary)] text-sm md:text-base px-3 py-1 rounded-md">
										client
									</button>
								</a>
								<a href="https://github.com/AdityaChowdhury2/majesty-royal-server">
									<button className="bg-[var(--primary)] text-[var(--secondary)] text-sm md:text-base px-3 py-1 rounded-md">
										server
									</button>
								</a>
							</div>
						</div>
						<div
							className="w-full rounded min-h-[350px] bg-[var(--secondary)] border- p-4 group relative "
							style={{ boxShadow: 'rgba(56, 35, 86, 0.4) 8px 8px 0px 0px' }}
						>
							<div className="w-full h-[220px] md:h-[300px] overflow-hidden rounded">
								<img
									className="w-full hover:-translate-y-[46%] duration-[5000ms] "
									src="https://i.ibb.co/0ZQgghM/Digital-Dynamo-Home.png"
									alt=""
								/>
							</div>
							<div className="mt-3">
								<h3 className="text-lg lg:text-xl font-bold ">
									Digital Dynamo
								</h3>
								<p>Technologies: React, Node.js, Firebase, MongoDb</p>
							</div>
							<div className="flex mt-8 justify-around">
								<a href="https://digital-dynamo.web.app/">
									<button className="bg-[var(--primary)] text-[var(--secondary)] text-sm md:text-base px-3 py-1 rounded-md">
										Live
									</button>
								</a>
								<a href="https://github.com/AdityaChowdhury2/digital-daynamo-client">
									<button className="bg-[var(--primary)] text-[var(--secondary)] text-sm md:text-base px-3 py-1 rounded-md">
										client
									</button>
								</a>
								<a href="https://github.com/AdityaChowdhury2/digital-dynamo-server">
									<button className="bg-[var(--primary)] text-[var(--secondary)] text-sm md:text-base px-3 py-1 rounded-md">
										server
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
};

export default Projects;
