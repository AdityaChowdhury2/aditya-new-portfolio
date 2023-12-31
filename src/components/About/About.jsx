import { useState } from 'react';
import SectionHeading from '../Shared/SectionHeading';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { VscLayoutActivitybarLeft } from 'react-icons/vsc';
import { FaUserGraduate } from 'react-icons/fa';
import './About.css';
import { Element } from 'react-scroll';
import { Parallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';

const About = () => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Element name="about-me">
			<section className="mt-10 md:mt-20">
				<div className="container">
					<SectionHeading title={'bio'} />
					<div className="mt-5 px-2">
						<Tabs
							selectedTabClassName=""
							selectedIndex={tabIndex}
							onSelect={index => {
								setTabIndex(index);
							}}
						>
							<TabList>
								<Tab>
									<p>
										Education
										<FaUserGraduate />
									</p>
								</Tab>
								<Tab>
									<p>
										Activities
										<VscLayoutActivitybarLeft />
									</p>
								</Tab>
							</TabList>

							<TabPanel>
								<div className="py-6 flex flex-col justify-center sm:py-12">
									<div className="py-3 md:max-w-2xl lg:max-w-3xl sm:mx-auto w-full px-2 sm:px-0">
										<div className="relative text-gray-700 antialiased text-sm font-semibold">
											<div className="hidden sm:block w-1 bg-[var(--primary)] absolute h-full left-1/2 transform -translate-x-1/2"></div>

											<div className="mt-6 sm:mt-0 sm:mb-12">
												<div className="flex flex-col sm:flex-row items-center">
													<div className="flex justify-start w-full mx-auto items-center">
														<div className="w-full sm:w-1/2 sm:pr-8 xl:pr-16">
															<Tilt
																className="parallax-effect"
																perspective={500}
																scale={0.9}
															>
																<div
																	data-aos="fade-up"
																	data-aos-anchor-placement="top-bottom"
																	className="p-4 bg-[var(--background)] text-[var(--primary)] rounded shadow inner-element"
																>
																	<h3 className="font-serif">
																		Brainware University, West Bengal
																	</h3>

																	<p className="text-sm ">
																		Masters in Technology (CSE)
																	</p>
																</div>
															</Tilt>
														</div>
													</div>
													<div className=" text-[var(--primary)] absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-2xl bg-[--secondary] md:w-14 md:h-20 rounded-full">
														2023
													</div>
												</div>
											</div>

											<div className="mt-6 sm:mt-0 sm:mb-12">
												<div className="flex flex-col sm:flex-row items-center">
													<div className="flex justify-end w-full mx-auto items-center">
														<div className="w-full sm:w-1/2 sm:pl-8 xl:pl-16">
															<Tilt
																className="parallax-effect"
																perspective={500}
																scale={0.9}
															>
																<div
																	data-aos="fade-up"
																	data-aos-anchor-placement="top-bottom"
																	className="p-4 bg-[var(--background)] text-[var(--primary)] rounded shadow inner-element"
																>
																	<h3 className="font-serif">
																		Brainware University, West Bengal
																	</h3>

																	<p className="text-sm ">
																		Bachelor of Technology (CSE)
																	</p>
																</div>
															</Tilt>
														</div>
													</div>
													<div className=" text-[var(--primary)] absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-2xl bg-[--secondary] md:w-14 md:h-20 rounded-full">
														2021
													</div>
												</div>
											</div>

											<div className="mt-6 sm:mt-0 sm:mb-12">
												<div className="flex flex-col sm:flex-row items-center">
													<div className="flex justify-start w-full mx-auto items-center">
														<div className="w-full sm:w-1/2 sm:pr-8 xl:pr-16">
															<Tilt
																className="parallax-effect"
																perspective={500}
																scale={0.9}
															>
																<div
																	data-aos="fade-up"
																	data-aos-anchor-placement="top-bottom"
																	className="p-4 bg-[var(--background)] text-[var(--primary)] inner-element rounded shadow"
																>
																	<h3 className="font-serif">
																		Islamia University College
																	</h3>

																	<p className="text-sm ">HSC</p>
																</div>
															</Tilt>
														</div>
													</div>
													<div className=" text-[var(--primary)] absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-2xl bg-[--secondary] md:w-14 md:h-20 rounded-full">
														2017
													</div>
												</div>
											</div>

											<div className="mt-6 sm:mt-0">
												<div className="flex flex-col sm:flex-row items-center">
													<div className="flex justify-end w-full mx-auto items-center">
														<div className="w-full sm:w-1/2 sm:pl-8 xl:pl-16">
															<Tilt
																className="parallax-effect"
																perspective={500}
																scale={0.9}
															>
																<div
																	data-aos="fade-up"
																	data-aos-anchor-placement="top-bottom"
																	className="p-4 bg-[var(--background)] text-[var(--primary)] inner-element rounded shadow"
																>
																	<h3 className="font-serif">
																		Chattogram Govt. High School
																	</h3>

																	<p className="text-sm ">
																		Secondary School Certificate
																	</p>
																</div>
															</Tilt>
														</div>
													</div>
													<div className=" text-[var(--primary)] absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-2xl bg-[--secondary] md:w-14 md:h-20 rounded-full">
														2015
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="md:px-5 flex flex-col justify-center py-4 md:py-20 lg:py-24">
									<Parallax rotateX={['70deg', '0deg']}>
										<ul
											data-aos="fade-up"
											data-aos-anchor-placement="top-bottom"
											className="flex flex-col md:max-w-2xl lg:max-w-3xl mx-auto w-full space-y-3"
										>
											<li className="relative flex flex-col gap-2">
												<span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
													<span className="h-full w-0.5 bg-blue-gray-100"></span>
												</span>
												<div className="flex items-center h-3 gap-4">
													<span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-[var(--primary)] p-1.5 text-white"></span>
													<h6 className="block  text-base antialiased font-semibold leading-none tracking-normal md:text-xl text-blue-[var(--primary)]">
														Problem Solving With C
													</h6>
												</div>
												<div className="flex gap-4 pb-8">
													<span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
													<div>
														<p className="block  text-sm antialiased font-normal leading-normal md:text-base text-[var(--primary)]">
															That&apos;s how I started my Programming Journey
														</p>
													</div>
												</div>
											</li>
											<li className="relative flex flex-col gap-2">
												<span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
													<span className="h-full w-0.5 bg-blue-gray-100"></span>
												</span>
												<div className="flex items-center h-3 gap-4">
													<span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-[var(--primary)] p-1.5 text-white"></span>
													<h6 className="block  text-base antialiased font-semibold leading-none tracking-normal md:text-xl text-blue-[var(--primary)]">
														Workshop in Cyber Security
													</h6>
												</div>
												<div className="flex gap-4 pb-8">
													<span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
													<div>
														<p className="block  text-sm antialiased font-normal leading-normal md:text-base text-[var(--primary)]">
															In this workshop I learned how a web application
															can be vulnerable and basic security features.
														</p>
													</div>
												</div>
											</li>
											<li className="relative flex flex-col gap-2">
												<span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
													<span className="h-full w-0.5 bg-blue-gray-100"></span>
												</span>
												<div className="flex items-center h-3 gap-4">
													<span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-[var(--primary)] p-1.5 text-white"></span>
													<h6 className="block  text-base  md:text-xl antialiased font-semibold leading-none tracking-normal text-blue-[var(--primary)]">
														Workshop in Machine Learning
													</h6>
												</div>
												<div className="flex gap-4 pb-8">
													<span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
													<div>
														<p className="block  text-sm antialiased font-normal leading-normal md:text-base text-[var(--primary)]">
															In this workshop I learned about different machine
															learning algorithms in python
														</p>
													</div>
												</div>
											</li>
											<li className="relative flex flex-col gap-3">
												<div className="flex items-center h-3 gap-4">
													<span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-[var(--primary)] p-1.5 text-white"></span>
													<h6 className="block  text-base antialiased font-semibold tracking-normal text-blue-[var(--primary)] md:text-xl leading-5">
														Smart India Hackathon 2020
													</h6>
												</div>
												<div className="flex gap-4">
													<span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
													<div>
														<p className="block  text-sm antialiased font-normal leading-normal md:text-base text-[var(--primary)]">
															In this Hackathon we developed a security solution
															for Crime Bureau
														</p>
													</div>
												</div>
											</li>
										</ul>
									</Parallax>
								</div>
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</section>
		</Element>
	);
};

export default About;
