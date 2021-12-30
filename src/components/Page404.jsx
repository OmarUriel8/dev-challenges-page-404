import React from 'react';
import imageScarecrow from '../images/Scarecrow.png';
import { Footer } from './Footer';
import { Header } from './Header';

export const Page404 = () => {
	return (
		<>
			<Header />
			<main className="container-error-404">
				<img src={imageScarecrow} alt="Image error 404 Not Found" className="image-404" />

				<div>
					<h1 className="title-404">I have had news for you</h1>
					<p className="text-404">
						The page you are looking for might be removed or is temporarily unavailable
					</p>
					<button className="button-404">Back to Homepage</button>
				</div>
			</main>

			<Footer />
		</>
	);
};
