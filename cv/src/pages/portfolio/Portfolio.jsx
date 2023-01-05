import mc from './portfolio.module.scss';
import Git from '../../assets/icons/github-sign.png';
import Card from '../../components/card/Card';
import { portfolio } from '../../utils/constant';

const Portfolio = () => {
	return (
		<main>
			<section className={mc.container}>
				<h1>Portfolio</h1>
				<div className={mc.wrapper}>
					<div>
						<p>
							Voici échantillon de minis projets réalisés au cours de mon
							apprentissage (pour la grande majorité en autodidacte).
						</p>
						<p>
							J'éspère avoir le temps de les améliorer au fil de mes progrés ...
							Mais en bootcamp le temps est compté !
						</p>
						<p>
							Ils ne sont donc pas représentatifs de mon niveau actuel mais
							donnent une idée de ma progression.
						</p>
					</div>
					<a href="https://github.com/Johanna-Fgt" target="blank">
						<div className={`adaptive-img-contain ${mc.img}`}>
							<span>
								<img src={Git} alt="Icone Github" className="logo" />
							</span>
						</div>
					</a>
				</div>
			</section>
			<section className={`container-full ${mc['container-portfolio']}`}>
				<Card list={portfolio} />
			</section>
		</main>
	);
};

export default Portfolio;
