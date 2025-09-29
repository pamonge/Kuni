import React from "react";
import NavBar from "../components/NavBar";
import CardList from "../components/CardList";

import img1 from '../assets/img/pictures/img1.jpeg';
import img2 from '../assets/img/pictures/img2.jpeg';
import img3 from '../assets/img/pictures/img3.jpeg';
import img4 from '../assets/img/pictures/img4.jpeg';
import img5 from '../assets/img/pictures/img5.jpeg';
import img6 from '../assets/img/pictures/img6.jpeg';

const items = [
  {picture:`${img1}`, name:'imagen1'},
  {picture:`${img2}`, name:'imagen2'},
  {picture:`${img3}`, name:'imagen3'},
  {picture:`${img4}`, name:'imagen4'},
  {picture:`${img5}`, name:'imagen5'},
  {picture:`${img6}`, name:'imagen6'},
]

const ArtGalery = () => {
	return (
		<div>
			<NavBar />
			<h2>Galeria de Arte</h2>
			<CardList items={items} />
		</div>
	)
}

export default ArtGalery;
