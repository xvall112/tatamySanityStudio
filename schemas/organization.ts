import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'organization',
  title: 'Organization',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutTatamy',
      title: 'About TATAMY',
      type: 'localeText',
    }),
    defineField({
      name: 'information',
      title: 'Information',
      type: 'string',
    }),
    defineField({
      name: 'tel',
      title: 'Tel',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [{type: 'documents'}],
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{type: 'menuItem'}],
    }),
  ],
})
