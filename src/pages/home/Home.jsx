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
						<strong>{`< strong >" j'adore coder " </ strong >`}</strong>
					</p>
					<p>
						Alors je me lance dans une reconversion professionnelle audacieuse.
					</p>
					<p>
						Je recherche une entreprise bienveillante pour m'accueillir en
						contrat de professionnalisation.
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
						développeuse web et mobile à la 3W Academy en septembre dernier et
						j'ai aujourd'hui l'immense joie d'être diplômée ! Ce n'est bien sûr
						qu'un premier pas vers l'emploi alors je souhaite poursuivre ma
						montée en compétences avec une formation de "Conceptrice
						Développeuse d'Application" en alternance afin de me
						professionnaliser.
					</p>
					<p>
						Je recherche donc une entreprise qui m'accueillera en{' '}
						<Link to="/education">contrat de professionnalisation</Link> afin
						d'élargir mes connaissances et acquérir de nouvelles aptitudes qui
						me permettront de réaliser au mieux mes futures missions.
					</p>
					<p>
						Apprendre avec des développeurs professionnels sera pour moi une
						superbe opportunité de débuter ma nouvelle carrière dans les
						meilleures conditions. Je suis prête à m'investir à fond et à
						réussir.
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
