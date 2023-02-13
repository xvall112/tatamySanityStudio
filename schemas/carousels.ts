import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carousels',
  title: 'Carousels',
  type: 'document',
  fieldsets: [
    {
      name: 'image',
      title: 'Image',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      description:"big screen image",
      fieldset: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageMobile',
      title: 'Mobile Image',
      type: 'image',
      fieldset: 'image',
      description:"mobile screen image => rectangle",
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
