import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'superfight',
  title: 'Superfight',
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
      name: 'matches',
      title: 'Matches',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
