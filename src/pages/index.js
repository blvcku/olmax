import React, { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import CustomHelmet from "../components/CustomHelmet";
import Header from "../components/index-related/header/Header";
import About from "../components/index-related/about/About";
import OurServices from "../components/index-related/our-services/OurServices";
import NewsList from "../components/index-related/news-list/NewsList";
import Questions from "../components/index-related/questions/Questions";
import Contact from "../components/index-related/contact/Contact";
import Footer from "../components/footer/Footer";

const Index = () => {

	const headerRef = useRef();
	const aboutRef = useRef();

	// useLayoutEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	ScrollTrigger.create({
	// 		trigger: headerRef.current,
	// 		start: 'top top',
	// 		pin: true,
	// 		pinSpacing: false,
	// 	})
	// }, []);

  	return(
		<>
		<CustomHelmet />
			<Header innerRef={headerRef} />
			<main>
				<About innerRef={aboutRef}/>
				<OurServices />
				<NewsList />
				<Questions />
				<Contact />
			</main>
			<Footer />
		</>
  	)	
}

export default Index;