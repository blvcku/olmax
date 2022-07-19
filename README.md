# OLMAX
Business site created for company named OLMAX.

On the site we can find: 
* Basic informations about company and their services
* Latest company news
* Contact form

## Table of contents
* [Technologies](#technologies)
* [Features](#features)
* [Data models](#data-models)
* [Setup](#setup)

## Technologies
Project is created with:
* Gatsby
* GraphQL
* GSAP
* Formspree
* Contentful

## Features
* Homepage
  * Basic informations about company and their services
  * Contact form connected to formspree, which sends emails with form data to company owner
  * List of news using data from contentful with pagination(in progress)
  * Scroll animations using gsap(in progress)
* Automatically generated news pages using data from contentful(in progress)
* Privacy policy page(in progress)

## Data models
News article:
* Title - short text
* Slug - short text
* Description - short text
* Created at - date
* Article - rich text

## Setup
To run this project, install it locally using npm:
```
$ git clone https://github.com/blvcku/olmax.git
$ cd ./olmax
$ npm install
$ npm start
```
##### .env.development
```
GATSBY_CONTACT_ENDPOINT=fill this field with formspree api link
GATSBY_CONTENTFUL_API_KEY=fill this field with contentful api key
GATSBY_CONTENTFUL_SPACE_ID=fill this field with contentful space id
```
##### .env.production
```
GATSBY_CONTACT_ENDPOINT=fill this field with formspree api link
GATSBY_CONTENTFUL_API_KEY=fill this field with contentful api key
GATSBY_CONTENTFUL_SPACE_ID=fill this field with contentful space id
```
