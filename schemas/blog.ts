import {defineField, defineType} from 'sanity'
import {SiBlogger} from 'react-icons/si'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: SiBlogger,
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
        name: 'author',
        title: 'Author',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'localeString',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'subtitle',
        title: 'Subtitle',
        type: 'localeString',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'date',
        title: 'Date',
        type: 'date',
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
      name: 'text',
      title: 'Text',
      type: 'localeBlock',
      validation: (Rule) => Rule.required(),
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
      title: 'title.cs',
      subtitle: 'date',
      media: 'mobileTitleImage',
    },
  },
})
