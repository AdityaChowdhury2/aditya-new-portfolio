import ScrollToTop from 'react-scroll-to-top';
import { FaArrowUp } from 'react-icons/fa6';
import Projects from '../components/Projects/Projects';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';

const topComponent = (
	<>
		<FaArrowUp size={20} className="text-primary w-full" />
	</>
);

const Home = () => {
	return (
		<div className="relative">
			<Header />
			<Hero />
			<Skills />
			<About />
			<Projects />
			<ScrollToTop
				top={200}
				style={{
					boxShadow: `5px 5px 5px #bebebe,
                3px 3px 3px #ffffff`,
				}}
				component={topComponent}
				smooth={true}
			/>
		</div>
	);
};

export default Home;
