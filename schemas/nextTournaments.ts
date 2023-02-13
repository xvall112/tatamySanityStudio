import {defineField, defineType} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

export default defineType({
  name: 'nextTournaments',
  title: 'Next Tournaments',
  fieldsets: [
    {
      name: 'titleImage',
      title: 'Title Image',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        modal: {type: 'popover'}, //Makes the modal type a popover
      },
    },
  ],
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleImage',
      title: 'Title Image',
      fieldset: 'titleImage',
      description:"big screen title image",
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mobileTitleImage',
      title: 'Mobile Title Image',
      type: 'image',
      fieldset: 'titleImage',
      description:"mobile screen title image",
      options: {
        hotspot: true, // <-- Defaults to false
      },

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    //harmonogram
    defineField({
      name: 'harmonogram',
      title: 'Harmonogram',
      type: 'array',
      of: [{type: 'lineOfHarmonogram'}],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeBlock',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      validation: (Rule) => Rule.min(7).max(7).required(),
    }),

    //GALA
    defineField({
      name: 'gala',
      title: 'GALA',
      type: 'reference',
      to: [{type: 'gala'}],
      validation: (Rule) => Rule.required(),
    }),
    //Superfight
    defineField({
      name: 'superfight',
      title: 'Superfight',
      type: 'reference',
      to: [{type: 'superfight'}],
      validation: (Rule) => Rule.required(),
    }),
    //Open
    defineField({
      name: 'open',
      title: 'Open',
      type: 'reference',
      to: [{type: 'open'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        isUnique: isUniqueAcrossAllDocuments,
        source: 'name',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
      media: 'titleImage',
    },
  },
})
