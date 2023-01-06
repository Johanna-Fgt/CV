import mc from './education.module.scss';

const Education = () => {
	return (
		<main>
			<section className={mc.container}>
				<h1>Formations</h1>
				<ul>
					<li>
						<span>Développeur.se web et mobile</span>
						<span> - 3WAcademy - Septembre 2022</span>
					</li>
					<li>
						<span>Création de site web avec HTML5 et CSS3</span>
						<span> - OPENCLASSROOMS - 2022</span>
					</li>
					<li>
						<span>Accueil Par Excellence</span>
						<span>
							{' '}
							- Mission des offices de tourisme Nouvelle-Aquitaine - 2016
						</span>
					</li>
					<li>
						<span>Stage technique : La Dégustation des Bordeaux de A à Z </span>
						<span> - Ecole du vin de Bordeaux CIVB - 2014</span>
					</li>
					<li>
						<span>
							Technicien d'accueil touristique | Animation et CQP activités de
							loisirs sportifs spécialité activité de randonnée de proximité et
							d'orientation
						</span>
						<span> - INFA Aquitaine - 2013</span>
					</li>
					<li>
						<span>
							Licence L.E.A. anglais / espagnol | Tourisme international
						</span>
						<span> - Université Bordeaux Montaigne - 2011</span>
					</li>
					<li>
						<span>Baccalauréat Scientifique</span>
						<span> - Lycée Sud Médoc La Boétie</span>
					</li>
				</ul>
			</section>
			<section className={mc.container}>
				<h1>Stage </h1>
				<ul>
					<li>
						<span>20 février - 21 mars 2023</span>
						<br />
						<span>
							Ce stage<strong> non-rémunéré</strong> est organisé dans le cadre
							d'une formation conventionnée par Pôle Emploi. C'est
							<strong> simple</strong> et
							<strong> rapide</strong> à mettre en place !
						</span>
					</li>
				</ul>
			</section>
			<section className={mc.container}>
				<h1>Contrat de professionnalisation</h1>
				<ul>
					<li>
						<span>
							Conceptrice Développeuse d'Application - Wild Code School / RNCP
							(équivalent bac + 4)
						</span>
						<br />
						<span>
							<strong>12 mois | 2023 :</strong> 1 semaine en centre et 3
							semaines en entreprise / 3 derniers mois consécutifs 100% en
							entreprise
						</span>
					</li>
				</ul>
				<a
					href="https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web-alternance"
					className={mc.btn}
					target="_blank"
					rel="noreferrer">
					Découvrir l'école
				</a>
			</section>
		</main>
	);
};

export default Education;
