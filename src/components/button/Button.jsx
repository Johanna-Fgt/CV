import mc from './button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({ path, onclick, text }) => {
	return (
		<Link to={path} className={mc.btn} onClick={onclick}>
			{text}
		</Link>
	);
};

export default Button;
