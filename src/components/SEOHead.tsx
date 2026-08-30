import React, { useEffect } from 'react';
import { PageSEO, FAQ } from '../types';
import { COMPANY_INFO } from '../data/siteData';

interface SEOHeadProps {
  seo: PageSEO;
  breadcrumbs?: { name: string; url: string }[];
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
  };
  faqs?: FAQ[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({ seo, breadcrumbs, serviceSchema, faqs }) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = seo.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seo.description);

    // 3. Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonicalUrl);

    // 4. Update OpenGraph Tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const updateOrCreateTwitter = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', seo.title);
    updateOrCreateMeta('og:description', seo.description);
    updateOrCreateMeta('og:url', seo.canonicalUrl);
    updateOrCreateMeta('og:site_name', COMPANY_INFO.name);
    updateOrCreateMeta('og:type', 'website');

    updateOrCreateTwitter('twitter:title', seo.title);
    updateOrCreateTwitter('twitter:description', seo.description);
    updateOrCreateTwitter('twitter:card', 'summary_large_image');

    // 5. Inject Structured Data (JSON-LD)
    const existingScript = document.getElementById('json-ld-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const orgId = `${COMPANY_INFO.websiteUrl}/#organization`;
    const serviceBusinessId = `${COMPANY_INFO.websiteUrl}/#professionalservice`;
    const websiteId = `${COMPANY_INFO.websiteUrl}/#website`;

    // 1. Organization Schema
    const organizationSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': orgId,
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.websiteUrl,
      logo: `${COMPANY_INFO.websiteUrl}/brand-logo.svg`,
      email: COMPANY_INFO.email,
      description: COMPANY_INFO.shortDescription,
      sameAs: [
        'https://twitter.com/mzatechzone',
        'https://linkedin.com/company/mzatechzone',
        'https://github.com/mzatechzone',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: COMPANY_INFO.email,
          availableLanguage: ['English'],
        },
      ],
    };

    // 2. ProfessionalService Schema
    const professionalServiceSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': serviceBusinessId,
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.websiteUrl,
      logo: `${COMPANY_INFO.websiteUrl}/brand-logo.svg`,
      image: `${COMPANY_INFO.websiteUrl}/brand-logo.svg`,
      email: COMPANY_INFO.email,
      description: COMPANY_INFO.shortDescription,
      priceRange: '$$',
      parentOrganization: {
        '@id': orgId,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital & Growth Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development Services',
              description: 'Professional, responsive, fast-loading custom business websites engineered for maximum conversions and SEO.',
              url: `${COMPANY_INFO.websiteUrl}/services/web-development`,
              provider: {
                '@id': serviceBusinessId,
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Search Engine Optimization (SEO) Services',
              description: 'Data-driven on-page, technical, and strategic SEO campaigns to build organic authority and drive qualified traffic.',
              url: `${COMPANY_INFO.websiteUrl}/services/seo`,
              provider: {
                '@id': serviceBusinessId,
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google Business Profile Management Services',
              description: 'Complete Google Business Profile optimization, local 3-pack ranking strategy, and Google Maps local listing management.',
              url: `${COMPANY_INFO.websiteUrl}/services/google-business-profile`,
              provider: {
                '@id': serviceBusinessId,
              },
            },
          },
        ],
      },
    };

    // 3. WebSite Schema
    const websiteSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': websiteId,
      url: COMPANY_INFO.websiteUrl,
      name: COMPANY_INFO.name,
      description: COMPANY_INFO.shortDescription,
      publisher: {
        '@id': orgId,
      },
    };

    const jsonLdData: Record<string, unknown>[] = [
      organizationSchema,
      professionalServiceSchema,
      websiteSchema,
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      jsonLdData.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url.startsWith('http') ? crumb.url : `${COMPANY_INFO.websiteUrl}${crumb.url}`,
        })),
      });
    }

    if (serviceSchema) {
      jsonLdData.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceSchema.name,
        description: serviceSchema.description,
        provider: {
          '@type': 'ProfessionalService',
          name: COMPANY_INFO.name,
          url: COMPANY_INFO.websiteUrl,
        },
        serviceType: serviceSchema.serviceType,
      });
    }

    if (faqs && faqs.length > 0) {
      jsonLdData.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    const script = document.createElement('script');
    script.id = 'json-ld-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLdData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('json-ld-structured-data');
      if (el) el.remove();
    };
  }, [seo, breadcrumbs, serviceSchema, faqs]);

  return null;
};
