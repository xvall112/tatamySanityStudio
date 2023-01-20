import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'champions',
  title: 'Champions',
  fieldsets: [
    {name: 'social', title: 'Social media',options: {
      collapsible: true, // Makes the whole fieldset collapsible
      collapsed: false, // Defines if the fieldset should be collapsed by default or not
      modal: {type: 'popover'} //Makes the modal type a popover
    }}
  ],
  type: 'document',
  fields: [
    defineField({
      name: 'sex',
      title: 'Sex',
      type: 'string',
      readOnly: true,
      hidden: true,
      validation: Rule => Rule.required()
    }),
    defineField({
        name: 'weight',
        title: 'Weight',
        type: 'number',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'gym',
        title: 'Gym',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'photo',
        title: 'Photo',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
       
        validation: Rule => Rule.required()
      }),
      {
        title: 'YouTube',
        name: 'youtube',
        type: 'url',
        fieldset: 'social'
      },
      {
        title: 'Instagram',
        name: 'instagram',
        type: 'url',
        fieldset: 'social'
      },
      {
        title: 'Facebook',
        name: 'facebook',
        type: 'url',
        fieldset: 'social'
      }

  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'weight',
      media: 'photo'
    }
  }
})