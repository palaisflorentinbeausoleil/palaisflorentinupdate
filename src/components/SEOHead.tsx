import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  author?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  keywords,
  author = 'Palais Florentin',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false
}: SEOHeadProps) => {
  useEffect(() => {
    const baseUrl = 'https://palais-florentin.com';
    
    // Update title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.setAttribute('name', 'description');
      newMetaDescription.setAttribute('content', description);
      document.head.appendChild(newMetaDescription);
    }
    
    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }
    
    // Update author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
      metaAuthor.setAttribute('content', author);
    } else {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      metaAuthor.setAttribute('content', author);
      document.head.appendChild(metaAuthor);
    }
    
    // Update robots
    const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`;
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', robotsContent);
    } else {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      metaRobots.setAttribute('content', robotsContent);
      document.head.appendChild(metaRobots);
    }
    
    // Update Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: canonical || window.location.href },
      { property: 'og:site_name', content: 'Palais Florentin' },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: title }
    ];
    
    if (ogImage) {
      ogTags.push(
        { property: 'og:image', content: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: title }
      );
    }
    
    if (publishedTime) {
      ogTags.push({ property: 'article:published_time', content: publishedTime });
    }
    
    if (modifiedTime) {
      ogTags.push({ property: 'article:modified_time', content: modifiedTime });
    }
    
    if (section) {
      ogTags.push({ property: 'article:section', content: section });
    }
    
    tags.forEach(tag => {
      const tagElement = document.createElement('meta');
      tagElement.setAttribute('property', 'article:tag');
      tagElement.setAttribute('content', tag);
      document.head.appendChild(tagElement);
    });
    
    ogTags.forEach(({ property, content }) => {
      let ogElement = document.querySelector(`meta[property="${property}"]`);
      if (ogElement) {
        ogElement.setAttribute('content', content);
      } else {
        ogElement = document.createElement('meta');
        ogElement.setAttribute('property', property);
        ogElement.setAttribute('content', content);
        document.head.appendChild(ogElement);
      }
    });
    
    // Update Twitter meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description }
    ];
    
    if (ogImage) {
      twitterTags.push(
        { name: 'twitter:image', content: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}` },
        { name: 'twitter:image:alt', content: title }
      );
    }
    
    twitterTags.forEach(({ name, content }) => {
      let twitterElement = document.querySelector(`meta[name="${name}"]`);
      if (twitterElement) {
        twitterElement.setAttribute('content', content);
      } else {
        twitterElement = document.createElement('meta');
        twitterElement.setAttribute('name', name);
        twitterElement.setAttribute('content', content);
        document.head.appendChild(twitterElement);
      }
    });
    
    // Add canonical link if provided
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`);
    }
    
    // Add structured data if provided
    if (structuredData) {
      // Remove existing structured data for this page
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (script.getAttribute('data-dynamic') === 'true') {
          script.remove();
        }
      });
      
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-dynamic', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    // Add language alternates if needed
    const currentLang = document.documentElement.lang;
    if (currentLang === 'fr') {
      let hreflangEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
      if (!hreflangEn) {
        hreflangEn = document.createElement('link');
        hreflangEn.setAttribute('rel', 'alternate');
        hreflangEn.setAttribute('hreflang', 'en');
        hreflangEn.setAttribute('href', `${baseUrl}/en${window.location.pathname}`);
        document.head.appendChild(hreflangEn);
      }
    }
    
  }, [title, description, canonical, ogImage, keywords, author, type, publishedTime, modifiedTime, section, tags, structuredData, noindex, nofollow]);

  return null;
};

export default SEOHead;