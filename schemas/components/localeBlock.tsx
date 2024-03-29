import {defineField, defineType} from 'sanity'
import {supportedLanguages} from '../../lang/supportedLanguages'

const AlignCenter = (props) => <div style={{textAlign: 'center'}}>{props.children}</div>
const AlignLeft = (props) => <div style={{textAlign: 'left'}}>{props.children}</div>
const AlignRight = (props) => <div style={{textAlign: 'right'}}>{props.children}</div>
const AlignJustify = (props) => <div style={{textAlign: 'justify'}}>{props.children}</div>

export default defineType({
  title: 'Localized block',
  name: 'localeBlock',
  type: 'object',
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],

          lists: [{title: 'Bullet', value: 'bullet'}],

          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: ' code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {title: 'Left', value: 'left', component: AlignLeft},
              {
                title: 'Center',
                value: 'center',
                component: AlignCenter,
              },
              {title: 'Right', value: 'right', component: AlignRight},
              {title: 'Justify', value: 'justify', component: AlignJustify},
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {type: 'instagramPost'},
        {type: 'image'},
      ],
    })
  ),
})
