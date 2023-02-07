import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carousels',
  title: 'Carousels',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event date',
      type: 'datetime',
      description: 'volitelná položka, pokud zadáš -> odpocitavání v carouselu'
      
    }),
  ],
})
