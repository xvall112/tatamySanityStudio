import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gala',
  title: 'Gala',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'localeBlock',
    }),
    defineField({
      name: 'fighters',
      title: 'Fighters',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
