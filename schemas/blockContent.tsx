import {defineType, defineArrayMember} from 'sanity'
import {AiOutlineAlignCenter} from 'react-icons/Ai'
import {AiOutlineAlignLeft} from 'react-icons/Ai'
import {AiOutlineAlignRight} from 'react-icons/Ai'
import {FaAlignJustify} from 'react-icons/Fa'

const AlignCenter = (props) => <div style={{textAlign: 'center'}}>{props.children}</div>
const AlignLeft = (props) => <div style={{textAlign: 'left'}}>{props.children}</div>
const AlignRight = (props) => <div style={{textAlign: 'right'}}>{props.children}</div>
const AlignJustify = (props) => <div style={{textAlign: 'justify'}}>{props.children}</div>
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType(
  {
    name: 'blockContent',
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

        {title: 'Left', value: 'left', icon: AiOutlineAlignLeft, component: AlignLeft},
        {
          title: 'Center',
          value: 'center',
          icon: AiOutlineAlignCenter,
          component: AlignCenter,
        },
        {title: 'Right', value: 'right', icon: AiOutlineAlignRight, component: AlignRight},
        {title: 'Justify', value: 'justify', icon: FaAlignJustify, component: AlignJustify},
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
  }
  // You can add additional types here. Note that you can't use
  // primitive types such as 'string' and 'number' in the same array
  // as a block type.
)
