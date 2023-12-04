import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocReasonBlocRaison extends Schema.Component {
  collectionName: 'components_bloc_reason_bloc_raisons';
  info: {
    displayName: 'Bloc raison';
    description: '';
  };
  attributes: {
    texte: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface BlocServiceServices extends Schema.Component {
  collectionName: 'components_bloc_service_services';
  info: {
    displayName: 'Services';
    icon: 'chartBubble';
  };
  attributes: {
    Title: Attribute.String;
    Price: Attribute.String;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ButtonBoutons extends Schema.Component {
  collectionName: 'components_button_boutons';
  info: {
    displayName: 'Boutons';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    Link: Attribute.String;
    text: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'bloc-reason.bloc-raison': BlocReasonBlocRaison;
      'bloc-service.services': BlocServiceServices;
      'button.boutons': ButtonBoutons;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
