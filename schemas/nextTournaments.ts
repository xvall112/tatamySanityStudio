import {defineField, defineType} from 'sanity'
import { isUniqueAcrossAllDocuments } from '../lib/isUniqueAcrossAllDocuments'

export default defineType({
  name: 'nextTournaments',
  title: 'Next Tournaments',
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'localeText',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeBlock',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      validation: Rule => Rule.min(7).max(7).required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug', 
      validation: Rule => Rule.required(),
      options:{
        isUnique: isUniqueAcrossAllDocuments,
        source: 'name'
      }
    }),
    //GALA
    defineField({
      name: 'gala',
      title: 'GALA',
      type: 'reference',
      to:[{type: 'gala'}],
      validation: Rule => Rule.required()
    }),
       //Superfight
       defineField({
        name: 'superfight',
        title: 'Superfight',
        type: 'reference',
        to:[{type: 'superfight'}],
        validation: Rule => Rule.required()
      }),
          //Open
          defineField({
            name: 'open',
            title: 'Open',
            type: 'reference',
            to:[{type: 'open'}],
            validation: Rule => Rule.required()
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
