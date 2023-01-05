import { useState } from 'react';
import DropDownHeader from '../dropdown-header/DropDownHeader';
import mc from './retail.module.scss';

const Retail = () => {
	const [expanded, setExpanded] = useState(false);
	const [expandedDetailsA, setExpandedDetailsA] = useState(false);
	const [expandedDetailsB, setExpandedDetailsB] = useState(false);

	return (
		<div className={mc.container}>
			<DropDownHeader
				title="Vente et grande distribution"
				titleBig={true}
				onclick={() => setExpanded(!expanded)}
				expanded={expanded}
			/>

			{expanded && (
				<ul>
					<li>
						<DropDownHeader
							title="Hôtesse de caisse"
							titleBig={false}
							onclick={() => setExpandedDetailsB(!expandedDetailsB)}
							expanded={expandedDetailsB}
						/>

						{expandedDetailsB && (
							<>
								<p>
									<em>Intermarché | juin - mi-sept. 2020</em>
								</p>
								<p>
									Accueillir les personnes, enregistrer la vente d'un article,
									désactiver les antivols, encaisser le montant d'une vente,
									proposer un service complémentaire à la vente, recueillir
									l'avis et les remarques d'un client, réaliser le comptage des
									fonds de caisses, disposer des produits sur le lieu de vente.
								</p>
							</>
						)}
					</li>
					<li>
						<DropDownHeader
							title="Buraliste"
							titleBig={false}
							onclick={() => setExpandedDetailsA(!expandedDetailsA)}
							expanded={expandedDetailsA}
						/>

						{expandedDetailsA && (
							<>
								<p>
									<em>Le Voltigeur | entre 2016 et 2021</em>
								</p>
								<p>
									Accueil client, ventes, encaissements, loterie, jeux, pmu,
									mise en rayon, entretien des locaux, ouverture et fermeture.
								</p>
							</>
						)}
					</li>
				</ul>
			)}
		</div>
	);
};

export default Retail;
