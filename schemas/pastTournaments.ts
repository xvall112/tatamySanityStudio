import {defineField, defineType} from 'sanity'
import { isUniqueAcrossAllDocuments } from '../lib/isUniqueAcrossAllDocuments'

export default defineType({
  name: 'pastTournaments',
  title: 'Past Tournaments',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeBlock', 
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'galaResults',
      title: 'Gala results',
      type: 'url',
}),
defineField({
  name: 'openResults',
  title: 'Open Results',
  type: 'url',
}),
defineField({
  name: 'video',
  title: 'Video',
  type: 'url',
}),
defineField({
  name: 'gallery',
  title: 'Gallery',
  type: 'array',
  of: [{type: 'image'}],
}),
defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug', 
  validation: Rule => Rule.required(),
  options:{
    isUnique: isUniqueAcrossAllDocuments,
    source: 'name',
    
  }
}),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
      media: 'titleImage'
    }
  }
})
