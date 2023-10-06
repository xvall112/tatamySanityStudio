import {defineConfig} from 'sanity'
import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {deskStructure} from './deskStructure'
import {media} from 'sanity-plugin-media'
import {defaultDocumentNode} from './defaultDocumentNode'
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  name: 'default',
  title: 'Tatamy',

  projectId: '0lxa8ekm',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode,
      structure: deskStructure,
    }),
    media(),
    dashboardTool({widgets: [netlifyWidget({
      title: 'Update TATAMY web',
      sites: [
        // {
        //   title: 'Sanity Studio',
        //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
        //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
        //   name: 'sanity-gatsby-blog-20-studio',
        // },
        {
          title: 'Website',
          apiId: '46c2b0a5-f18b-46b7-924a-4d58c1b6267b',
          buildHookId: '651fd8d1fa6cf20be7dac03e',
          name: 'tatamy.cz',
         
        }
      ]
  }), projectInfoWidget(), projectUsersWidget()]}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: [
      {
        id: 'champion-by-sex',
        title: 'Champion by sex',
        description: 'Champion by sex',
        schemaType: 'champions',
        parameters: [{name: 'sex', type: 'string'}],
        value: (params) => ({
          sex: params.sex,
        }),
      },
      {
        id: 'partners-by-id',
        title: 'Partners by id',
        description: 'Partners by id',
        schemaType: 'partners',
        parameters: [{name: 'id', type: 'string'}],
        value: (params) => ({
          id: params.id,
        }),
      },
    ],
    /*types: schemaTypes,
     templates: (prev) => [
      ...prev,
      {
      id: 'menChampions',
      title: 'Men',
      schemaType: 'champions',
      value: {
        sex: 'male'
      },
    },
    {
      id: 'womenChampions',
      title: 'Women',
      schemaType: 'champions',
      value: {
        sex: 'female'
      },
    },
	], */
  },
})
