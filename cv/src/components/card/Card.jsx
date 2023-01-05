import mc from './card.module.scss';

const Card = ({ list }) => {
	return (
		<ul className={mc.container}>
			{list.map((obj, i) => (
				<li key={`portfolio-${i}`}>
					<a href={obj.path} target="_blank" rel="noreferrer">
						<div className={`adaptive-img-cover ${mc.img}`}>
							<span>
								<img src={obj.img} alt={obj.alt} />
							</span>
						</div>
					</a>
					<div className={mc.wrapper}>
						<a
							href={obj.path}
							className={mc.title}
							target="_blank"
							rel="noreferrer">
							<h2>{obj.title}</h2>
						</a>
						<div className={mc.content}>
							<p>{obj.code}</p>
							<a
								href={obj.repo}
								className={mc.btn}
								target="_blank"
								title="Code source"
								rel="noreferrer">
								{`</>`}
							</a>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Card;
