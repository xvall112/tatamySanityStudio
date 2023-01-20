import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'documents',
  title: 'Documents',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'document',
        title: 'Documents',
        type: 'file',
        validation: Rule => Rule.required()
      }),
  ]})