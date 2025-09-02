import { useEffect } from 'react';

const LodgifyWidget = () => {
  useEffect(() => {
    // Charger le script Lodgify
    const script = document.createElement('script');
    script.src = 'https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log('Lodgify script chargé avec succès');
      // Initialiser le widget après le chargement du script
      if (window.renderPortableSearchBar) {
        window.renderPortableSearchBar();
      }
    };
    
    script.onerror = () => {
      console.error('Erreur lors du chargement du script Lodgify');
    };
    
    document.head.appendChild(script);

    // Nettoyage lors du démontage du composant
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Styles personnalisés Lodgify - Intégrés au design Palais Florentin */}
      <style>
        {`
          :root {
            /* Couleurs intégrées au design Palais Florentin */
            --ldg-psb-background: hsl(40 25% 96%); /* Pearl white - fond principal */
            --ldg-psb-border-radius: 0.75rem; /* Même radius que le design */
            --ldg-psb-box-shadow: 0 10px 30px -5px hsl(210 35% 17% / 0.08); /* Shadow card */
            --ldg-psb-padding: 16px;
            --ldg-psb-input-background: hsl(0 0% 100%); /* Blanc pur pour les inputs */
            --ldg-psb-button-border-radius: 0.75rem; /* Même radius que le design */
            
            /* Couleurs primaires du design Palais Florentin */
            --ldg-psb-color-primary: hsl(210 35% 17%); /* Deep navy - boutons */
            --ldg-psb-color-primary-lighter: hsl(210 35% 25%); /* Navy plus clair */
            --ldg-psb-color-primary-darker: hsl(210 35% 12%); /* Navy plus foncé */
            --ldg-psb-color-primary-contrast: hsl(40 25% 96%); /* Pearl white - texte */
            
            /* Couleurs sémantiques cohérentes */
            --ldg-semantic-color-primary: hsl(210 35% 17%); /* Deep navy */
            --ldg-semantic-color-primary-lighter: hsl(210 35% 25%);
            --ldg-semantic-color-primary-darker: hsl(210 35% 12%);
            --ldg-semantic-color-primary-contrast: hsl(40 25% 96%);
            
            /* Accents du design */
            --ldg-psb-accent: hsl(40 45% 57%); /* Champagne gold */
            --ldg-psb-accent-lighter: hsl(40 45% 65%);
            --ldg-psb-accent-darker: hsl(40 45% 45%);
            
            /* Z-index élevé pour les modales */
            --ldg-component-modal-z-index: 999;
          }
          
          /* Intégration parfaite avec le design */
          #lodgify-search-bar {
            width: 100%;
            background: transparent; /* Pas de fond - s'intègre au design existant */
            border: none; /* Pas de bordure */
            border-radius: 0;
            padding: 0;
            box-shadow: none; /* Pas d'ombre */
          }
          
          /* Personnalisation des inputs */
          #lodgify-search-bar input,
          #lodgify-search-bar select {
            border: 1px solid hsl(32 25% 88%);
            border-radius: 0.5rem;
            background: hsl(0 0% 100%);
            color: hsl(210 35% 17%);
            font-family: 'Montserrat', sans-serif;
          }
          
          /* Personnalisation des boutons */
          #lodgify-search-bar button {
            background: hsl(210 35% 17%) !important; /* Deep navy */
            color: hsl(40 25% 96%) !important; /* Pearl white */
            border-radius: 0.75rem !important;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          #lodgify-search-bar button:hover {
            background: hsl(210 35% 12%) !important; /* Navy plus foncé */
            transform: translateY(-1px);
            box-shadow: 0 25px 70px -15px hsl(210 35% 17% / 0.25);
          }
          
          /* Labels et textes */
          #lodgify-search-bar label {
            color: hsl(210 35% 17%);
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
          }
        `}
      </style>
      
      {/* Widget Lodgify */}
      <div
        id="lodgify-search-bar"
        data-website-id="607857"
        data-language-code="fr"
        data-checkout-page-url='https://checkout.lodgify.com/palaisflorentin/fr/#/709747'
        
        data-dates-check-in-label='Arrivée'
        data-dates-check-out-label='Départ'
        data-guests-counter-label='Invités'
        data-guests-input-singular-label='{{NumberOfGuests}} invité'
        data-guests-input-plural-label='{{NumberOfGuests}} invités'
        data-location-input-label='Emplacement'
        data-search-button-label='Rechercher'
        data-dates-input-min-stay-tooltip-text='{"one":"Minimum {minStay} nuit","other":"Minimum de {minStay} nuits"}'
        data-guests-breakdown-label='Invités'
        data-adults-label='{"one":"adulte","other":"adultes"}'
        data-adults-description='Âges {minAge} ou plus'
        data-children-label='{"one":"enfant","other":"enfants"}'
        data-children-description='Âges {minAge} - {maxAge}'
        data-children-not-allowed-label='Non adapté aux enfants'
        data-infants-label='{"one":"bébé","other":"bébés"}'
        data-infants-description='Moins de {maxAge}'
        data-infants-not-allowed-label='Non adapté aux bébés'
        data-pets-label='{"one":"animal de compagnie","other":"animaux de compagnie"}'
        data-pets-not-allowed-label='Non autorisé'
        data-done-label='Terminé'
        
        data-new-tab="false"
        data-version="stable"
        data-has-guests-breakdown
        data-return-url="https://palais-florentin.com"
        data-return-label="Retour au site Palais Florentin"
      ></div>
      
      {/* Bouton de retour personnalisé */}
      <div className="text-center mt-6">
        <a 
          href="https://palais-florentin.com" 
          className="inline-flex items-center px-6 py-3 bg-[hsl(210_35%_17%)] text-[hsl(40_25%_96%)] rounded-lg hover:bg-[hsl(210_35%_12%)] transition-all duration-300 font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour au site Palais Florentin
        </a>
      </div>
    </>
  );
};

export default LodgifyWidget;
