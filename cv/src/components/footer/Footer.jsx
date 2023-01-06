import mc from './footer.module.scss';
import { useState } from 'react';

const Footer = () => {
	const [modal, setModal] = useState(false);
	return (
		<footer className={mc.container}>
			<button
				aria-label="Open contacts"
				type="button"
				className={!modal ? mc.contact : mc.close}
				onClick={() => setModal(!modal)}></button>

			{modal && (
				<div className={mc.modal}>
					<h1>CONTACTS</h1>

					<a href="mailto:johannafaget@gmail.com">johannafaget@gmail.com</a>

					<a href="https://www.linkedin.com/in/johanna-faget">Johanna Faget</a>
				</div>
			)}
		</footer>
	);
};

export default Footer;
