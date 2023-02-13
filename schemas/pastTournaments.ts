import {defineField, defineType} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

export default defineType({
  name: 'pastTournaments',
  title: 'Past Tournaments',
  type: 'document',
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
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeBlock',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: 'galleryLink',
      title: 'Link to Gallery',
      type: 'url',
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
