import {defineField, defineType} from 'sanity'
import { supportedLanguages } from '../../lang/supportedLanguages'

export default defineType({
    title: 'Localized text',
    name: 'localeText',
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
   /*  fieldsets: [
      {
        title: 'Translations',
        name: 'translations',
        options: { collapsible: true }
      }
    ], */
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => defineField({
      title: lang.title,
      name: lang.id,
      type: 'text',
   /*  fieldset: lang.isDefault ? null : 'translations'  */
    }))})