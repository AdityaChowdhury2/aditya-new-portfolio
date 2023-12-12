import Typewriter from 'typewriter-effect';
import SectionHeading from '../Shared/SectionHeading';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoIosSend } from 'react-icons/io';
import { ImSpinner9 } from 'react-icons/im';
import { Element } from 'react-scroll';

const Contact = () => {
	const form = useRef();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState({});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async () => {
		setLoading(true);
		emailjs
			.sendForm(
				'aditya_portfolio',
				'portfolio_template',
				form.current,
				'NmmBay3jQM0HjDRe2'
			)
			.then(
				result => {
					console.log(result);
					setLoading(false);
					setSuccess({
						message: 'I received your message \nwill contact you shortly',
						success: true,
					});
					form.current.reset();
				},
				error => {
					console.log(error);
					setLoading(false);
					setSuccess({
						message: 'Please drop a mail here: \nadityac5102@gmail.com',
						success: false,
					});
					form.current.reset();
				}
			);
	};

	// console.log(errors?.name?.type === 'required');
	return (
		<Element name="contact">
			<div className="container px-2 text-[var(--primary)]">
				<SectionHeading title={'contactMe'} />
				<div className="flex flex-col md:flex-row mt-4 md:mt-8 bg-[var(--secondary)] px-4 md:px-10 py-10 md:p-20 rounded-lg">
					<div className="w-full md:w-1/2 space-y-4">
						<h2 className="font-bold text-2xl md:text-2xl lg:text-3xl">
							<Typewriter
								options={{
									strings: ['Get in Touch 📧'],
									cursor: '.',
									autoStart: true,
									loop: true,
									pauseFor: 1500,
									delay: 75,
								}}
							/>
						</h2>
						<div className="space-y-4">
							<h4 className="text-xl">Send your Email Here!</h4>
							<p className="max-w-sm lg:max-w-md">
								I&apos;m interested in freelance opportunities. However, if you
								have other requests or questions, don&apos;t hesitate to contact
								me
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2">
						<p
							className={`mt-2 ${
								success?.success ? 'text-[var(--primary)] ' : 'text-red-600'
							} font-bold `}
						>
							{success.message}
						</p>
						<form
							ref={form}
							onSubmit={handleSubmit(onSubmit)}
							className="mt-10"
						>
							<p className="text-sm text-red-700 mb-2">
								{(errors.name && <>Let me know your name first</>) ||
									(errors.email && (
										<>Email is important for further communication</>
									)) ||
									(errors.textarea && (
										<>Message should be within 30 characters</>
									))}
							</p>
							<div className="mb-6">
								<div className="mx-0 mb-1 sm:mb-4">
									<div className="mx-0 mb-1 sm:mb-4">
										<label
											htmlFor="name"
											className="pb-1 text-xs uppercase tracking-wider"
										></label>
										<input
											type="text"
											id="name"
											name="name"
											autoComplete="given-name"
											placeholder="Your name"
											className="mb-2 w-full rounded-md   focus:ring-[var(--primary)] border-0 
                                        bg-[var(--background)] focus:ring-2  py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
											{...register('name', { required: true })}
										/>
									</div>
									<div className="mx-0 mb-1 sm:mb-4">
										<label
											htmlFor="email"
											className="pb-1 text-xs uppercase tracking-wider"
										></label>
										<input
											type="email"
											id="email"
											autoComplete="email"
											placeholder="Your email address"
											className="mb-2 w-full rounded-md 
                                        focus:ring-[var(--primary)] border-0 
                                  bg-[var(--background)] focus:ring-2  py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
											{...register('email', { required: true })}
										/>
									</div>
								</div>
								<div className="mx-0 mb-1 sm:mb-4">
									<label
										htmlFor="textarea"
										className="pb-1 text-xs uppercase tracking-wider"
									></label>
									<textarea
										id="textarea"
										name="textarea"
										cols="30"
										rows="5"
										placeholder="Write your message..."
										className="mb-2 w-full rounded-md focus:ring-2 focus:ring-[var(--primary)] 
                                    border-0 bg-[var(--background)]
                                    border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
										{...register('textarea', {
											required: true,
											maxLength: 1000,
											minLength: 30,
										})}
									></textarea>
								</div>
							</div>
							<div className="text-center">
								<button
									disabled={loading}
									type="submit"
									className="w-full bg-[var(--primary)] text-white px-6 py-3 font-xl rounded-md sm:mb-0 flex items-center justify-center gap-2"
								>
									Send{' '}
									{loading ? (
										<ImSpinner9 className="animate-spin" />
									) : (
										<IoIosSend size={22} />
									)}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="h-[15vh]"></div>
		</Element>
	);
};

export default Contact;
