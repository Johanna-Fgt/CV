import { Link } from 'react-router-dom';
import PhotoDeProfil from '../../assets/img/profile.jpg';
import CV from '../../assets/doc/CV_Johanna_Faget_Dev_Web.pdf';
import mc from './home.module.scss';

const Home = () => {
	return (
		<main>
			<section className={mc['container-hero']}>
				<div className={`adaptive-img-cover ${mc.img}`}>
					<span>
						<img src={PhotoDeProfil} alt="Profil de Johanna" />
					</span>
				</div>

				<div className={mc.content}>
					<h1>Hi, I'm Johanna !</h1>
					<p className={mc.lead}>Développeuse web et mobile en devenir</p>
					<p>
						J'adore apprendre et relever des défis, autant dire <br />
						<strong>{`< strong >" j'adore coder " !</ strong >`}</strong>
					</p>
					<p>
						Alors je me lance dans une reconversion professionnelle audacieuse.
					</p>
					<p>
						Je recherche une entreprise bienveillante pour m'accueillir en stage
						à la fin de ma formation.
					</p>
					<a href={CV} target="blanck" className={mc.btn}>
						CV
					</a>
				</div>
			</section>
			<section className={`container-full ${mc['container-project']}`}>
				<div className={mc.parallax}>
					<h1>Projet</h1>

					<p>
						En reconversion professionnelle, j'ai intégré la formation de
						développeuse web et mobile à la 3W Academy en septembre dernier. Je
						souhaite poursuivre ma montée en compétences avec une formation de
						"Conceptrice Développeuse d'Application" en alternance après
						l'obtention du titre.
					</p>
					<p>
						Je recherche une entreprise bienveillante qui m'accueillera pour un{' '}
						<Link to="/education">stage d'un mois</Link> ( gratuit et
						conventionné par pôle emploi) en février prochain.
					</p>
					<p>
						Apprendre avec des développeurs professionnels serait pour moi une
						super occasion de progresser, et de débuter ma nouvelle carrière
						dans les meilleures conditions. J'adore relever de nouveaux défis et
						je suis prête à me donner à fond pour réussir.
					</p>
					<p>
						Je vous invite à consulter le détail des{' '}
						<Link to="/skills">compétences</Link> que je suis en train
						d'acquérir et quelques unes de mes premières{' '}
						<Link to="/work">réalisations</Link> (en autodidacte).
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
