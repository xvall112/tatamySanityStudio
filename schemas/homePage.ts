import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    
    defineField({
        name: 'carousel',
        title: 'Carousel',
        type: 'array',
        of: [{type: 'reference', to: [{type:'carousels'}]}]
        ,
        validation: Rule => Rule.required()
      }),
    defineField({
      name: 'nextTournament',
      title: 'Next Tournament',
      type: 'reference',
      to:[{type: 'nextTournaments'}],
     options:{
       disableNew: true
     }
    }),
   
  ],
  preview: {
    select: {
      title: `Home Page`,
    }
  }
})