import { Progress } from 'flowbite-react';
import SectionHeading from '../Shared/SectionHeading';

const Skills = () => {
	const skills = [
		{
			name: 'HTML',
			percentage: 95,
		},
		{
			name: 'CSS',
			percentage: 90,
		},
		{
			name: 'JavaScript',
			percentage: 80,
		},
		{
			name: 'ReactJS',
			percentage: 85,
		},
		{
			name: 'NodeJS',
			percentage: 70,
		},
		{
			name: 'MongoDB',
			percentage: 90,
		},
		{
			name: 'Tailwind CSS',
			percentage: 94,
		},
		{
			name: 'Bootstrap',
			percentage: 90,
		},
		{
			name: 'Material UI',
			percentage: 70,
		},
		{
			name: 'Mongoose',
			percentage: 75,
		},
	];
	return (
		<section className="relative  mt-10 md:mt-20">
			<div className="container ">
				<SectionHeading title={'sills'} />
				<div className="grid mt-4 md:mt-8 px-8 gap-4 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2">
					{skills.map((skill, idx) => (
						<Progress
							theme={{
								base: 'w-full overflow-hidden rounded-full bg-[var(--secondary)] ',
								label: 'mb-1 flex justify-between font-medium ',
								bar: 'rounded-full text-center font-medium leading-none text-[var(--secondary)] space-x-2',
								color: {
									indigo: 'bg-[var(--primary)]',
								},
							}}
							className=" "
							key={idx}
							progress={skill.percentage}
							progressLabelPosition="inside"
							textLabel={skill.name}
							textLabelPosition="outside"
							size="lg"
							color="indigo"
							labelProgress
							labelText
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
