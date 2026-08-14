import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CONTACT_INFO } from '@/lib/constants';

const MentionsLegales = () => {
  return (
    <>
      <SEOHead 
        title="Mentions Légales - Palais Florentin | Location Beausoleil Monaco"
        description="Mentions légales du Palais Florentin, location saisonnière de luxe à Beausoleil, frontière Monaco. Informations légales et de contact."
        canonical="https://palaisflorentin.com/mentions-legales"
      />
      <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        <div className="luxury-container max-w-4xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">Mentions Légales</h1>
          <div className="space-y-8 text-muted-foreground">
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Éditeur du site</h2>
              <div className="space-y-2">
                <p><strong>BURGER REAL ESTATE MANAGEMENT ("BREM")</strong> — SARL au capital de 929 131,03 €</p>
                <p>Siège social : 29 boulevard de la Ferrage, 06400 Cannes, France</p>
                <p>SIREN : 411 694 151 — RCS Cannes — SIRET (siège) 411 694 151 00043</p>
                <p>TVA intracommunautaire : FR89411694151</p>
                <p>Code NAF/APE : 55.10Z — Hôtels et hébergement similaire.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Directeur de la publication</h2>
              <p>Jean-François Emile Favelier, gérant.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p>Email : {CONTACT_INFO.email}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement du site</h2>
              <div className="space-y-2">
                <p><strong>Lovable Labs Incorporated</strong></p>
                <p>Adresse postale : 1111B South Governors Avenue, Dover, DE 19904, USA</p>
                <p>Point de contact UE : Lovable Labs Sweden AB, Tunnelgatan 5, 11137 Stockholm, Sweden</p>
                <p>Contact : privacy@lovable.dev</p>
                <p className="text-sm">(plateforme d'édition et d'hébergement utilisée par le site)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
              <p>Tous les éléments (textes, visuels, logos, charte, code) sont protégés. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite de BREM est interdite.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Responsabilité</h2>
              <p>Les informations du site sont indicatives et peuvent évoluer. Des liens externes peuvent être présents ; BREM n'est pas responsable de leurs contenus.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Signalement de contenu</h2>
              <p>Écrivez à {CONTACT_INFO.email} (objet : "Signalement de contenu").</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Médiation de la consommation</h2>
              <p>Conformément à l'art. L.612-1 du Code de la consommation, le client peut recourir gratuitement à un médiateur. L'identité et les coordonnées du médiateur choisi seront communiquées au client sur demande et publiées ici dès confirmation. Plateforme européenne de RLL : ec.europa.eu/consumers/odr.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Droit applicable</h2>
              <p>Droit français — tribunaux compétents.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Politique de confidentialité (RGPD)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1) Responsable de traitement</h3>
                  <div className="space-y-1">
                    <p><strong>BURGER REAL ESTATE MANAGEMENT</strong> — 29 boulevard de la Ferrage, 06400 Cannes, France</p>
                    <p>💬 Contact RGPD : {CONTACT_INFO.email}</p>
                    <p>DPO : non désigné (à ce jour).</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2) Données traitées & finalités</h3>
                  <div className="space-y-3">
                    <div>
                      <p><strong>Réservations / relation client</strong> (devis, contrats, facturation, séjours) : identité, coordonnées, dates, préférences, échanges.</p>
                      <p className="text-sm">Base légale : exécution du contrat / mesures précontractuelles.</p>
                    </div>
                    <div>
                      <p><strong>Service client & sécurité</strong> (gestion des demandes, prévention fraude/abus, logs techniques).</p>
                      <p className="text-sm">Base légale : intérêt légitime.</p>
                    </div>
                    <div>
                      <p><strong>Marketing</strong> (newsletter, offres) — seulement si vous y consentez.</p>
                      <p className="text-sm">Base légale : consentement (opt-in).</p>
                    </div>
                    <div>
                      <p><strong>Statistiques d'audience</strong> : mesure de fréquentation (voir § 6 "Cookies"). Exemption CNIL possible sous conditions ; sinon consentement.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3) Destinataires / sous-traitants</h3>
                  <p>Accès limité à BREM et à des prestataires nécessaires (hébergement Lovable, email/SMS, analytics/CMP, paiement, etc.). Des contrats "art. 28 RGPD" sont mis en place avec les sous-traitants. Coordonnées de Lovable : voir Mentions Légales.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4) Transferts hors UE</h3>
                  <p>Certains prestataires peuvent impliquer des transferts (ex. USA). Lovable indique recourir à mécanismes reconnus (DPF/SCCs/UK Addendum) selon les cas.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">5) Durées de conservation (principes)</h3>
                  <div className="space-y-2">
                    <p>• Prospects / demandes : 3 ans après le dernier contact.</p>
                    <p>• Dossiers clients / facturation : jusqu'à 10 ans (obligations comptables).</p>
                    <p>• Logs techniques : 6–12 mois.</p>
                    <p>• Mesure d'audience : durées CNIL — cookie ≤ 13 mois ; données associées ≤ 25 mois (recommandation CNIL).</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">6) Cookies & traceurs</h3>
                  <div className="space-y-2">
                    <p>Un bandeau permet d'accepter / refuser / paramétrer.</p>
                    <p>• <strong>Essentiels</strong> (fonctionnement du site) : sans consentement.</p>
                    <p>• <strong>Mesure d'audience</strong> : exemption de consentement possible uniquement si conditions CNIL strictes (finalité limitée à la mesure interne, absence de recoupement, IP raccourcie, pas de partage, etc.) ; sinon consentement requis.</p>
                    <p>• <strong>Marketing / réseaux sociaux / cartes</strong> : consentement requis.</p>
                    <p className="text-sm">Bonnes pratiques CNIL : conservation de la preuve du choix et non-prorogation automatique ; re-présentation périodique possible (ex. ~6 mois).</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">7) Tes droits</h3>
                  <p>Accès, rectification, effacement, opposition, limitation, portabilité, retrait du consentement.</p>
                  <p>Exercez-les auprès de {CONTACT_INFO.email} (gratuit, identité à vérifier). Vous pouvez aussi saisir la CNIL (3 place de Fontenoy — TSA 80715 — 75334 Paris Cedex 07) si besoin.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">8) Sécurité</h3>
                  <p>Mesures techniques et organisationnelles raisonnables : chiffrement en transit (HTTPS), contrôle d'accès, sauvegardes, journalisation, cloisonnement. Nos prestataires d'hébergement publient leurs engagements de sécurité et adresses de contact (voir Lovable / Trust center & privacy).</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">9) Mineurs</h3>
                  <p>Le site ne vise pas les mineurs. Toute réservation impliquant un mineur doit être réalisée par un représentant légal.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">10) Évolution de la politique</h3>
                  <p>Nous mettrons à jour cette page si nos pratiques évoluent.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Notes de conformité / sources</h2>
              <div className="space-y-2 text-sm">
                <p>• Infos légales BREM (SIREN, SIRET, capital, NAF, TVA, siège, gérant) : Pappers (fiche entreprise & actes) et Annuaire des Entreprises (État).</p>
                <p>• Lovable (hébergeur/éditeur de la plateforme) : Privacy Policy & Terms (entité "Lovable Labs Incorporated", adresses US & UE).</p>
                <p>• Cookies / CNIL (exemption, 13 mois / 25 mois, bonnes pratiques, preuve du consentement) : recommandations et fiches CNIL.</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default MentionsLegales;