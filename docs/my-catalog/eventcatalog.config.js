/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: 'EventCatalog',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'EventCatalog Ltd',
  homepageLink: 'https://eventcatalog.dev/',
  editUrl: 'https://github.com/boyney123/eventcatalog-demo/edit/master',
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: '/',
  // Customize the logo, add your logo to public/ folder
  logo: {
    alt: 'EventCatalog Logo',
    src: '/logo.png',
    text: 'EventCatalog'
  },
  // required random generated id used by eventcatalog
  cId: 'ae8d9512-33ff-4537-a0b7-a6fe264bd60b'
}