import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {deskStructure} from './deskStructure'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Tatamy',

  projectId: '0lxa8ekm',
  dataset: 'production',

  plugins: [
    media(),
    deskTool({
      structure: deskStructure,
    }),
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
