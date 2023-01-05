import Retail from '../../components/retail/Retail';
import Tourism from '../../components/tourism/Tourism';
import Whv from '../../components/whv/Whv';
import mc from './experiences.module.scss';

const Experiences = () => {
	return (
		<main>
			<section className={mc.container}>
				<h1>Expériences professionnelles</h1>
				<Tourism />
				<Retail />
				<Whv />
			</section>
		</main>
	);
};

export default Experiences;
