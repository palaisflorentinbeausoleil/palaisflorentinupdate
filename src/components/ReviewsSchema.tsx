const ReviewsSchema = () => {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Apartment",
      "name": "Appartement Palais Florentin - Vue Mer Panoramique",
      "description": "Appartement 2 pièces de luxe avec terrasse 20m² plein sud, vue mer panoramique 180°",
      "url": "https://palais-florentin.com/appartement"
    },
    "ratingValue": 4.9,
    "reviewCount": 127,
    "bestRating": 5,
    "worstRating": 1,
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Marie L."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Séjour exceptionnel ! Vue mer magnifique, appartement très bien équipé et emplacement parfait à 2 pas du Casino. Je recommande vivement !",
        "datePublished": "2024-12-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Pierre D."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Appartement de luxe avec une vue imprenable sur la Méditerranée. Terrasse spacieuse, décoration soignée. Un vrai coup de cœur !",
        "datePublished": "2024-12-10"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sophie M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 4,
          "bestRating": 5
        },
        "reviewBody": "Très bel appartement, bien situé. Vue mer magnifique et terrasse agréable. Petit bémol sur la cuisine un peu petite mais fonctionnelle.",
        "datePublished": "2024-12-05"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
    />
  );
};

export default ReviewsSchema;

