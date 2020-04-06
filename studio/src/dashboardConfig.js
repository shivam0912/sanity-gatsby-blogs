export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8b53133489e4c5af6922c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogs-studio-vag77ygt',
                  apiId: 'be91b200-d785-4a12-a07e-1a12adaf1c83'
                },
                {
                  buildHookId: '5e8b53136e0880efddc6d5b0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogs-web-bqqy4r8y',
                  apiId: '2880eeb5-ab4a-4537-9b35-1ddce270645e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shivam0912/sanity-gatsby-blogs',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blogs-web-bqqy4r8y.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
