import { Link } from 'react-router-dom';
import LogoAssesFirst from '../../assets/icons/assess-first.png';
import mc from './skills.module.scss';

const Skills = () => {
	return (
		<main>
			<section className={mc['container-hard-skills']}>
				<h1>Stack Technique</h1>
				<p className={mc.exposant}>* notions en autodidacte</p>

				<div className={mc['list-wrapper']}>
					<div className={mc.list}>
						<h2>Intégration front-end</h2>
						<ul>
							<li>HTML / CSS / SASS</li>
							<li>Javascript</li>
							<li>React.JS</li>
							<li>Bootstrap*</li>
							<li>SEO*</li>
							<li>accessibilité A11Y*</li>
							<li>UX et UI design*, responsive design*</li>
						</ul>
					</div>
					<div className={mc.list}>
						<h2>Développement back-end</h2>
						<ul>
							<li>NODE.JS</li>
							<li>MongoDB</li>
							<li>POO ET ALGORITHME</li>
						</ul>
					</div>
				</div>
				<div className={mc['list-footer']}>
					<p>+ GIT, GITHUB, BITBUCKET *</p>
					<div className={mc['link-wrapper']}>
						<a href="https://3wa.fr/" target="blanck" className={mc.btn}>
							3WACADEMY
						</a>
						<Link to="/work" className={mc.btn}>
							Portfolio
						</Link>
						<a
							href="https://github.com/Johanna-Fgt"
							target="blanck"
							className={mc.btn}>
							GitHub
						</a>
					</div>
				</div>
			</section>

			<section className={`container-full ${mc['container-soft-skills']}`}>
				<h1>SOFT SKILLS</h1>
				<div className={mc['list-wrapper']}>
					<ul>
						<li>Anglais : B2</li>
						<li>Curiosité</li>
						<li>Empathie</li>
						<li>Créativité</li>
						<li>Patience</li>
						<li>Rigueur</li>
						<li>Flexibilité</li>
						<li>Esprit d'équipe</li>
					</ul>
					<a
						href="https://app.assessfirst.com/_/profile/wblqo18z-johanna-faget"
						target="blanck">
						<div className={`adaptive-img-contain ${mc.img}`}>
							<span>
								<img src={LogoAssesFirst} alt="Logo test AssessFirst" />
							</span>
						</div>
						<p>
							<span>onClick</span>=<span>{`{openProfile}`}</span>
						</p>
					</a>
				</div>
			</section>
		</main>
	);
};

export default Skills;
