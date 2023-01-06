import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mc from './not-found.module.scss';
import img from '../../assets/img/error404.jpg';
import Button from '../../components/button/Button';

const NotFound = () => {
	const navigate = useNavigate();

	const [seconds, setSeconds] = useState(9);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevState) => prevState - 1);
		}, 1000);

		setTimeout(() => {
			navigate('/home', { replace: false });
		}, 10000);

		return () => {
			clearInterval(interval);
		};
	}, [navigate]);

	return (
		<section className={mc.container}>
			<div className={`adaptive-img-cover ${mc.img}`}>
				<span>
					<img src={img} alt="Illustration 404" />
				</span>
			</div>
			<div className={mc.wrapper}>
				<header>
					<h1>404</h1>
					<p>
						La page que vous recherchez est <span>introuvable</span>
					</p>
				</header>
				<div className={mc.countdown}>
					<p>Retour à l'accueil dans :</p>
					<p>00 : 0{seconds}</p>
				</div>

				<Button text="Retourner à l'accueil" path="/" />
			</div>
		</section>
	);
};

export default NotFound;
