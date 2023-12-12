import Typewriter from 'typewriter-effect';
import './Hero.css';
import { FaDownload } from 'react-icons/fa6';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const Hero = () => {
	return (
		<div className="container">
			<div className="flex flex-col md:flex-row py-20 gap-10">
				<div className="md:w-1/2 flex flex-col justify-center md:items-start items-center md:ml-16">
					<h3 className="text-2xl text-center text-[var(--primary)]">
						<span className="primary">Hello!</span> I&apos;m
					</h3>
					<h1 className="text-3xl my-4 md:text-5xl text-[var(--secondary)] md:leading-[55px]">
						Aditya Chowdhury
					</h1>
					<Typewriter
						options={{
							strings: [
								'MERN Stack Dev',
								'Full Stack Dev',
								'React Developer',
								'Web Developer',
							],
							autoStart: true,
							loop: true,
							wrapperClassName:
								'text-[var(--primary)] text-xl md:text-2xl lg:text-3xl ',
							cursorClassName:
								'text-[var(--primary)] text-xl md:text-2xl lg:text-3xl ',
						}}
					/>
					<a
						href="https://drive.google.com/file/d/1g-di96n6zVeAeWCTCYCtpB3eb5ts2SQD/view"
						rel="noopenner"
					>
						<button
							className=" bounce-top align-middle flex  gap-3 mt-10 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-[--primary] text-[--primary] hover:opacity-75  active:opacity-[0.85]"
							type="button"
						>
							Resume <FaDownload />
						</button>
					</a>
				</div>
				<div className="wrap flex-1 flex justify-center items-center">
					<div className="circle w-56 h-56 rounded-[40% 60% 70% 30% / 40% 50% 60% 50%] overflow-hidden">
						<img src="https://i.ibb.co/TT3HqRt/aditya.png" alt="" />
					</div>
				</div>
			</div>
			<div className="md:absolute relative md:top-0  md:left-8  flex flex-col items-center">
				<div className="hidden md:block h-[190px]"></div>
				<div className="flex md:flex-col gap-8 mt-4 text-[var(--primary)]">
					<div className="">
						<a
							href="https://github.com/AdityaChowdhury2"
							rel="noreferrer noopener"
							target="_blank"
							className=""
						>
							<FaGithub size={28} />
						</a>
					</div>
					<div className="">
						<a
							href="https://www.linkedin.com/in/aditya-chowdhury-durjoy"
							rel="noreferrer noopener"
							target="_blank"
						>
							<FaLinkedinIn size={28} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
