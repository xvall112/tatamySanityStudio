import {defineField, defineType} from 'sanity'
import {TfiArrowCircleRight} from 'react-icons/tfi'

export default defineType({
  name: 'videos',
  title: 'Videos',
  icon: TfiArrowCircleRight,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkYouTube',
      title: 'YouTube link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
