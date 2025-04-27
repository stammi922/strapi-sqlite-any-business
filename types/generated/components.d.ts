import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: 'Site footer structure';
    displayName: 'Footer';
  };
  attributes: {
    bottomText: Schema.Attribute.String & Schema.Attribute.Required;
    columns: Schema.Attribute.Component<'layout.footer-column', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_columns';
  info: {
    description: 'Columns for site footer';
    displayName: 'Footer Column';
  };
  attributes: {
    links: Schema.Attribute.Component<'layout.navigation-link', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigations';
  info: {
    description: 'Site navigation structure';
    displayName: 'Navigation';
  };
  attributes: {
    links: Schema.Attribute.Component<'layout.navigation-link', true> &
      Schema.Attribute.Required;
  };
}

export interface LayoutNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigation_links';
  info: {
    description: 'Links for site navigation';
    displayName: 'Navigation Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    sublinks: Schema.Attribute.Component<'layout.navigation-link', true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_sections';
  info: {
    description: 'Call to action section';
    displayName: 'CTA Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.JSON & Schema.Attribute.Required;
    primaryButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    primaryButtonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryButtonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    description: 'Section with frequently asked questions';
    displayName: 'FAQ Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq-item.faq-item'>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_sections';
  info: {
    description: 'Section showcasing product features';
    displayName: 'Features Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Relation<'oneToMany', 'api::feature.feature'>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: 'Main hero section for landing pages';
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    primaryButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    primaryButtonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryButtonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHowItWorksSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_it_works_sections';
  info: {
    description: 'Section explaining how the product works';
    displayName: 'How It Works Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    steps: Schema.Attribute.Relation<
      'oneToMany',
      'api::how-it-works-step.how-it-works-step'
    >;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPricingSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_sections';
  info: {
    description: 'Section showcasing pricing plans';
    displayName: 'Pricing Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    plans: Schema.Attribute.Relation<
      'oneToMany',
      'api::pricing-plan.pricing-plan'
    >;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_sections';
  info: {
    description: 'Section showcasing customer testimonials';
    displayName: 'Testimonials Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Social media links';
    displayName: 'Social Link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.footer': LayoutFooter;
      'layout.footer-column': LayoutFooterColumn;
      'layout.navigation': LayoutNavigation;
      'layout.navigation-link': LayoutNavigationLink;
      'sections.cta-section': SectionsCtaSection;
      'sections.faq-section': SectionsFaqSection;
      'sections.features-section': SectionsFeaturesSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.how-it-works-section': SectionsHowItWorksSection;
      'sections.pricing-section': SectionsPricingSection;
      'sections.testimonials-section': SectionsTestimonialsSection;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
    }
  }
}
