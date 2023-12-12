import PropTypes from 'prop-types';
const SectionHeading = ({ title }) => {
	return (
		<h3 className="text-2xl text-[var(--secondary)] px-4">
			<span className="text-[var(--primary)]">#</span>
			{title}
		</h3>
	);
};

SectionHeading.propTypes = {
	title: PropTypes.string,
};

export default SectionHeading;
