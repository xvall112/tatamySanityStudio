import {defineField, defineType} from 'sanity'


export default defineType({
    type: "object",
    name: "instagramPost",
    title: "Instagram Post",
    fields: [
        defineField({
        name: "url",
        type: "url",
        description: "Visit an Instagram post in a browser and copy the URL."
      })
    ],
    preview: {
      select: {
        subtitle: 'url'
      },
      prepare(selection) {
        const { subtitle} = selection
        return {
          title: `Instagram post`,
          subtitle: `${subtitle}`
        }
      }
    }
  });