import React from "react";
import { graphql } from "gatsby";
import CustomHelmet from "../components/CustomHelmet";
import Header from "../components/index-related/header/Header";
import About from "../components/index-related/about/About";
import HeroSection from "../components/index-related/hero-section/HeroSection";
import OurServices from "../components/index-related/our-services/OurServices";
import ArticlesList from '../components/index-related/articles-list/ArticlesList';
import Questions from "../components/index-related/questions/Questions";
import Contact from "../components/index-related/contact/Contact";
import Footer from "../components/footer/Footer";

const Index = ({data}) => {

	const { allContentfulArticles: { articlesList } } = data;

  	return(
		<>
			<CustomHelmet />
			<Header />
			<main>
				<About />
				<HeroSection />
				<OurServices />
				<ArticlesList articlesList={articlesList} />
				<Questions />
				<Contact />
			</main>
			<Footer />
		</>
  	)	
}

export default Index;

export const query = graphql`
	query ArticlesList {
		allContentfulArticles:allContentfulAktualnosci(sort: {fields: createdAt, order: DESC}, limit: 20) {
			articlesList:nodes {
				createdAt
				slug
				title
				description
				thumb {
					gatsbyImageData(
						placeholder: DOMINANT_COLOR
						width:600
					)
					description
				}
			}
		}
	}
`;