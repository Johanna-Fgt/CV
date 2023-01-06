import { useState } from 'react';
import DropDownHeader from '../dropdown-header/DropDownHeader';
import mc from './tourism.module.scss';

const Tourism = () => {
	const [expanded, setExpanded] = useState(false);
	const [expandedDetailsA, setExpandedDetailsA] = useState(false);
	const [expandedDetailsB, setExpandedDetailsB] = useState(false);
	const [expandedDetailsC, setExpandedDetailsC] = useState(false);
	const [expandedDetailsD, setExpandedDetailsD] = useState(false);
	const [expandedDetailsE, setExpandedDetailsE] = useState(false);

	return (
		<div className={mc.container}>
			<DropDownHeader
				title="Tourisme"
				titleBig={true}
				onclick={() => setExpanded(!expanded)}
				expanded={expanded}
			/>

			{expanded && (
				<ul>
					<li>
						<DropDownHeader
							title="Réceptionniste polyvalente"
							titleBig={false}
							onclick={() => setExpandedDetailsE(!expandedDetailsE)}
							expanded={expandedDetailsE}
						/>
						{expandedDetailsE && (
							<>
								<p>
									<em>VACANCEOLE Les Rives du Lac | avril - sept. 2021</em>
								</p>
								<p>
									Check-in/out, réservations (Resalys), encaissements,
									renseignements et orientation, gestion blanchisserie,
									entretien de la réception / parties communes / espaces verts,
									ménage des appartements ...
								</p>
								<p>
									<em>
										Stage Journey's London Bridge Hostel | fév. - mars 2013
									</em>
								</p>
								<p>
									Check-in/out, réservations et planning d'occupation des
									dortoirs (Dormbook), encaissements, renseignements et
									orientation, service du petit déjeuner, entretien de la
									réception / parties communes.
								</p>
							</>
						)}
					</li>

					<li>
						<DropDownHeader
							title="Agent d'accueil touristique"
							titleBig={false}
							onclick={() => setExpandedDetailsD(!expandedDetailsD)}
							expanded={expandedDetailsD}
						/>

						{expandedDetailsD && (
							<>
								<p>
									<em>
										Maison du Tourisme et du Vin de Pauillac - Responsable
										oenotourisme et service croisière | 2013 - 2016
									</em>
								</p>
								<p>
									Accueil physique et télèphonique, conseil en séjour,
									réservation / vente boutique et vinothèque, conception
									d'activités touristiques avec les prestataires locaux,
									recrutement et gestion planning des guides / transports /
									visites /budget, création de supports d'informations,
									participation à l'organisation d'évènements, mise à jour des
									informations touristiques locales, etc.
								</p>
								<p>
									<em>
										Stage Office de tourisme de La Pierre Saint Martin | déc.
										2012. - janv. 2013
									</em>
								</p>
								<p>
									Accueil physique et télèphonique, conseil client, gestion
									documentation, réservations (Résinsoft et Tourinsoft).
								</p>
							</>
						)}
					</li>

					<li>
						<DropDownHeader
							title="Animatrice"
							titleBig={false}
							onclick={() => setExpandedDetailsC(!expandedDetailsC)}
							expanded={expandedDetailsC}
						/>

						{expandedDetailsC && (
							<>
								<p>
									<em>
										Animatrice club enfant VTF Clair Canigou | juillet 2013
									</em>
								</p>
								<p>
									Accueil des enfants et parents, animations, spectacles,
									conception de programmes, entretien du matériel et des locaux.
								</p>
								<p>
									<em>UCPA SPORT VACANCES Bombannes | mars - avril 2013</em>
								</p>
								<p>
									Organiser et encadrer des activités de loisirs, sports et
									nature pour des adolescents.
								</p>
							</>
						)}
					</li>

					<li>
						<DropDownHeader
							title="Guide / accompagnatrice d'excursions"
							titleBig={false}
							onclick={() => setExpandedDetailsB(!expandedDetailsB)}
							expanded={expandedDetailsB}
						/>

						{expandedDetailsB && (
							<>
								<p>
									<em>
										Accompagnatrice d'excursions - AZUREVA Lacanau | sept. 2013
									</em>
								</p>
								<p>
									Accueillir, informer et guider les clients, mise en place des
									itinéraires, présentation de la région.
								</p>
								<p>
									<em>
										Guide chargée d'accueil stagiaire - Association La Tour du
										Viala du Pas de Jaux Aveyron | juil. - août 2011
									</em>
								</p>
								<p>
									Accueil physique et télèphonique, visites guidées du monument,
									participation aux animation, évènements et expositions,
									ventes, encaissements et réapprovisionnement de la boutique,
									réservations du gîte d'étape, entretien des locaux.
								</p>
							</>
						)}
					</li>

					<li>
						<DropDownHeader
							title="Femme de ménage en hôtellerie"
							titleBig={false}
							onclick={() => setExpandedDetailsA(!expandedDetailsA)}
							expanded={expandedDetailsA}
						/>

						{expandedDetailsA && (
							<>
								<p>
									<em>
										Vitalparc APLUS Lacanau, Azureva, Vacancéole | entre 2009 et
										2021
									</em>
								</p>
								<p>
									Remise en état des chambres / villas / appartements à blanc et
									en recouche, réapprovisionnement des chambres / villas /
									appartements en produits d'accueil et en linge, contrôle de
									l'état des équipements, du linge, du mobilier, trespect ses
									règles d'hygiène et de sécurité, optimisation de l'utilisation
									des produits et matériels mis à disposition.
								</p>
							</>
						)}
					</li>
				</ul>
			)}
		</div>
	);
};

export default Tourism;
