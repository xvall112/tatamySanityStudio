import {defineField, defineType} from 'sanity'
import {TfiLayoutCtaCenter} from 'react-icons/tfi'

export default defineType({
    name: 'news',
  title: 'News',
  type: 'document',
  icon: TfiLayoutCtaCenter,
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'titleImage',
        title: 'Title Image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'link',
        title: 'Link',
        type: 'url',
        validation: Rule => Rule.required()
  })
  ]})