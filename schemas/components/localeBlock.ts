import {defineField, defineType} from 'sanity'
import {supportedLanguages} from '../../lang/supportedLanguages'

export default defineType({
  title: 'Localized block',
  name: 'localeBlock',
  type: 'object',
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'array',
      of: [{type: 'block'}, {type: 'instagramPost'}],
    })
  ),
})
