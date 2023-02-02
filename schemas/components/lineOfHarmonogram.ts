import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lineOfHarmonogram',
  title: 'Line Of Harmonogram',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: `text.cs`,
    },
  },
})
