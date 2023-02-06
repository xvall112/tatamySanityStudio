import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'open',
  title: 'OPEN',
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
      name: 'rules',
      title: 'Rules',
      type: 'image',
    }),
    defineField({
      name: 'registration',
      title: 'Registration',
      type: 'url',
    }),
  ],
})
