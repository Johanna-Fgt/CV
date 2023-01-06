import mc from './dropdown-header.module.scss';

const DropDownHeader = ({ title, titleBig, onclick, expanded }) => {
	const classBig = !expanded ? mc.open : mc.close;
	const classSmall = !expanded ? mc['open-small'] : mc['close-small'];

	return (
		<div className={mc.header} onClick={onclick}>
			{titleBig ? <h2>{title}</h2> : <h3>{title}</h3>}
			<button
				className={titleBig ? classBig : classSmall}
				onClick={onclick}></button>
		</div>
	);
};

export default DropDownHeader;
