const path = require('path')
// create page dynamiclly

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    var result = await graphql(`
    query GetProducts {
      allContentfulProduct {
        nodes {
          slug
        }
      }
    }
    
    `)
    result.data.products.nodes.forEach((product)=> { // a page for each product
      createPage({
        path: `/products/${product.slug}`,
        component: path.resolve(`src/templates/product-template.js`),
        context: {
          slug:product.slug,
        },
      })
    });
}
