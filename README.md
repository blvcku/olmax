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
* Styled Components
* GraphQL
* Formspree
* Contentful

## Features
* Homepage
  * Basic informations about company and their services
  * Contact form connected to formspree, which sends emails with form data to company owner
  * List of news using data from contentful
* Automatically generated news pages using data from contentful(in progress)
* Privacy policy page(in progress)

## Data models
News article:
```
{
  "name": "aktualności",
  "description": "",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "Tytuł",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [
        {
          "size": {
            "max": 50
          }
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "slug",
      "name": "Slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [
        {
          "unique": true
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "description",
      "name": "Opis",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [
        {
          "size": {
            "max": 150
          }
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "createdAt",
      "name": "Data utworzenia",
      "type": "Date",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "article",
      "name": "Artykuł",
      "type": "RichText",
      "localized": false,
      "required": true,
      "validations": [
        {
          "enabledMarks": [
            "bold",
            "italic",
            "underline",
            "code"
          ],
          "message": "Only bold, italic, underline, and code marks are allowed"
        },
        {
          "enabledNodeTypes": [
            "heading-2",
            "heading-3",
            "heading-4",
            "heading-5",
            "unordered-list",
            "ordered-list",
            "blockquote",
            "hr",
            "table",
            "hyperlink",
            "entry-hyperlink",
            "asset-hyperlink",
            "embedded-entry-block",
            "embedded-entry-inline",
            "embedded-asset-block"
          ],
          "message": "Only heading 2, heading 3, heading 4, heading 5, unordered list, ordered list, quote, horizontal rule, table, link to Url, link to entry, link to asset, block entry, inline entry, and asset nodes are allowed"
        },
        {
          "nodes": {}
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "keywords",
      "name": "Słowa kluczowe",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "thumb",
      "name": "Miniaturka",
      "type": "Link",
      "localized": false,
      "required": true,
      "validations": [
        {
          "linkMimetypeGroup": [
            "image"
          ]
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    },
    {
      "id": "banner",
      "name": "Zdjęcie główne",
      "type": "Link",
      "localized": false,
      "required": true,
      "validations": [
        {
          "linkMimetypeGroup": [
            "image"
          ]
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    }
  ],
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "i3ia1ma9b0s6"
      }
    },
    "id": "aktualnosci",
    "type": "ContentType",
    "createdAt": "2022-07-18T03:40:17.962Z",
    "updatedAt": "2022-08-06T23:11:07.161Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2022-08-06T23:11:07.161Z",
    "firstPublishedAt": "2022-07-18T03:40:18.274Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2StxfstR6SIcSbQHNhZKOb"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2StxfstR6SIcSbQHNhZKOb"
      }
    },
    "publishedCounter": 5,
    "version": 10,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2StxfstR6SIcSbQHNhZKOb"
      }
    }
  }
}
```

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
