import { useState } from 'react';
import DropDownHeader from '../dropdown-header/DropDownHeader';
import mc from './whv.module.scss';

const Whv = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className={mc.container}>
			<DropDownHeader
				title="Working Holiday Visa - Australie"
				titleBig={true}
				onclick={() => setExpanded(!expanded)}
				expanded={expanded}
			/>

			{expanded && (
				<p>
					<strong>Ouvriére agricole polyvalente</strong> - 2 ans (+ saisons en
					France)
				</p>
			)}
		</div>
	);
};

export default Whv;
