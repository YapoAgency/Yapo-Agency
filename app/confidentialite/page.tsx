export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-[#0C1C2A] text-[#FDFCF9] px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-[#D84838] text-sm font-semibold mb-8 block hover:underline">
          ← Retour
        </a>
        <h1 className="text-4xl font-black mb-10">Politique de confidentialité</h1>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D84838] mb-3">1. Collecte des données</h2>
          <p className="text-[#FDFCF9]/70 leading-relaxed">Nous collectons uniquement les données nécessaires au fonctionnement de nos services : nom, email, et informations de contact fournies volontairement via notre formulaire.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D84838] mb-3">2. Utilisation des données</h2>
          <p className="text-[#FDFCF9]/70 leading-relaxed">Les données collectées sont utilisées exclusivement pour vous recontacter dans le cadre de votre demande. Elles ne sont jamais revendues à des tiers.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D84838] mb-3">3. Cookies</h2>
          <p className="text-[#FDFCF9]/70 leading-relaxed">Notre site utilise des cookies techniques indispensables à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D84838] mb-3">4. Vos droits</h2>
          <p className="text-[#FDFCF9]/70 leading-relaxed">Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande, contactez-nous à <a href="mailto:contact@yapoagency.com" className="text-[#D84838] hover:underline">contact@yapoagency.com</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D84838] mb-3">5. Contact</h2>
          <p className="text-[#FDFCF9]/70 leading-relaxed">YaPo Agency — Paris, France<br />Email : contact@yapoagency.com</p>
        </section>

        <p className="text-[#FDFCF9]/40 text-sm mt-16">Dernière mise à jour : avril 2026</p>
      </div>
    </main>
  )
}