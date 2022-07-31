const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const { data: { allContentfulArticles: { articlesList } } } = await graphql(`
        query Articles {
            allContentfulArticles:allContentfulAktualnosci{
                articlesList:nodes {
                    slug
                }
            }
        }
    `);
    articlesList.forEach(({slug}) => {
        actions.createPage({
            path: `/aktualnosci/${slug}`,
            component: path.resolve('./src/templates/Article.js'),
            context: { slug: slug }
        });
    });
}