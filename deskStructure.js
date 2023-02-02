import {TfiCup} from 'react-icons/tfi'
import {TfiCrown} from 'react-icons/tfi'
import {TfiIdBadge} from 'react-icons/tfi'
import {TfiLayoutMediaCenterAlt} from 'react-icons/tfi'
import {TfiSettings} from 'react-icons/tfi'
import {BsGenderMale} from 'react-icons/bs'
import {BsGenderFemale} from 'react-icons/bs'

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      //Organization
      S.listItem()
        .title('Organization')
        .icon(TfiSettings)
        .child(S.editor().schemaType('organization').documentId('organization')),
      S.divider(),
      //Home Page
      S.listItem()
        .title('Home page')
        .icon(TfiLayoutMediaCenterAlt)
        .child(S.editor().schemaType('homePage').title('Home page').documentId('homePage')),

      //Tournaments
      S.listItem()
        .title('Tournaments')
        .icon(TfiCup)
        .child(
          S.list()
            .title('Tournaments')
            .items([
              S.listItem()
                .id('nextTournaments')
                .title('Next Tournaments')
                .child(S.documentTypeList('nextTournaments')),
              S.listItem()
                .id('pastTournaments')
                .title('Past Tournaments')
                .child(S.documentTypeList('pastTournaments')),
            ])
        ),
      //Champions
      S.listItem()
        .title('Champions')
        .icon(TfiCrown)
        .child(
          S.list()
            .title('Champions')
            .id('championsBySex')
            .items([
              S.listItem()
                .id('mens')
                .title('Mens')
                .schemaType('champions')
                .icon(BsGenderMale)
                .child(
                  S.documentTypeList('champions')
                    .title('Mens')
                    .filter('_type == "champions" && sex == "male"')
                    .initialValueTemplates([
                      S.initialValueTemplateItem('champion-by-sex', {sex: 'male'}),
                    ])
                ),
              S.listItem()
                .id('women')
                .title('Women')
                .schemaType('champions')
                .icon(BsGenderFemale)
                .child(
                  S.documentTypeList('champions')
                    .title('Women')
                    .filter('_type == "champions" && sex == "female"')
                    .initialValueTemplates([
                      S.initialValueTemplateItem('champion-by-sex', {sex: 'female'}),
                    ])
                ),
            ])
        ),
      //Partners
      S.listItem()
        .title('Partners')
        .icon(TfiIdBadge)
        .child(
          S.list()
            .title('Partners')
            .items([
              S.listItem()
                .id('generalPartners')
                .title('General Partners')
                .schemaType('partners')
                .child(
                  S.documentTypeList('partners')
                    .title('General Partners')

                    .filter('_type == "partners" && id == "generalPartners"')
                    .initialValueTemplates([
                      S.initialValueTemplateItem('partners-by-id', {id: 'generalPartners'}),
                    ])
                ),
              S.listItem()
                .id('mainPartners')
                .title('Main Partners')
                .schemaType('partners')
                .child(
                  S.documentTypeList('partners')
                    .title('Main Partners')

                    .filter('_type == "partners" && id == "mainPartners"')
                    .initialValueTemplates([
                      S.initialValueTemplateItem('partners-by-id', {id: 'mainPartners'}),
                    ])
                ),
              S.listItem()
                .id('partners')
                .title('Partners')
                .schemaType('partners')
                .child(
                  S.documentTypeList('partners')
                    .title('Partners')

                    .filter('_type == "partners" && id == "partners"')
                    .initialValueTemplates([
                      S.initialValueTemplateItem('partners-by-id', {id: 'partners'}),
                    ])
                ),
              S.listItem()
                .id('mediaPartners')
                .title('Media Partners')
                .schemaType('partners')
                .child(
                  S.documentTypeList('partners')
                    .title('Media Partners')

                    .filter('_type == "partners" && id == "mediaPartners"')
                    .initialValueTemplates([
                      S.initialValueTemplateItem('partners-by-id', {id: 'mediaPartners'}),
                    ])
                ),
            ])
        ),

      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'homePage',
            'nextTournaments',
            'pastTournaments',
            'champions',
            'partners',
            'documents',
            'organization',
            'carousels',
            'gala',
            'superfight',
            'open',
            'menuItem',
            'media.tag',
          ].includes(listItem.getId())
      ),
    ])
