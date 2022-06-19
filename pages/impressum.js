
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import Examples from '../components/examples'
import Banners from '../components/banners'
import Footer from '../components/footer'
import Head from "next/head";
// import Instagram from '../components/instagram'
const Index = () => {
  return (
    <>
    <Head>
      <title>Duman Shisha Lounge | Impressum</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="description" content="Duman Lounge - Hookah - Cocktails - Bar. Shisha-Bar in Flensburg." />
      <meta itemprop="name" content="Duman Shisha Lounge" />
      <meta itemprop="description" content="Duman Lounge - Hookah - Cocktails - Bar. Shisha-Bar in Flensburg." />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Banners />
      <Examples />
    <div style={{height:300}} className='relative overflow-hidden flex justify-center  items-center'>
        <img src="banner_1.jpg" alt="" />
    </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <br />
            <br /><div className="row">
<h3 className='text-xl font-bold mb-6 mt-10'>IMPRESSUM</h3>
<p className="text">Anbieter dieser Internetseiten ist:</p>
<p>Duman Lounge - Hookah - Cocktails - Bar<br />
{/* Inhaber: Nizam Takak<br /> */}
Shisha-Bar in Flensburg<br />
{/* 25524 Itzehoe */}
</p>
{/* <p>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Nizam Takak</p> */}
<p>Telefon: +49 (0) +49 (0) 000 00 00 00<br />
E-Mail: mail@duman-lounge.de<br />
{/* Umsatzsteuer-Identifikationsnummer: DE 287 504 741 */}
</p>
<h3 className='text-xl font-bold mb-6 mt-10'>RECHTLICHE HINWEISE:</h3>
<p className="text"><strong>Inhalte</strong><br />

<br />
Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen, wobei unsere Verantwortlichkeit für den Inhalt rechtsverbindlicher Erklärungen oder Vereinbarungen unberührt bleibt. Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
<p>Sofern Sie aufgrund eines Inhalte unserer Internetseiten Anlass zu rechtlicher Beanstandung haben sollten, bitten wir Sie um eine entsprechende Mitteilung. Zur Vermeidung unnötiger Kosten und Streitigkeiten bitten wir Sie höflich, vor anwaltlichen Schritten direkt mit uns Kontakt aufzunehmen. Wir werden etwaige Beanstandungen umgehend prüfen und uns um eine interessengerechte Lösung bemühen.</p>
<p>
    
<br />
<br /><strong>Haftung für Links</strong><br />
<br />
Unser Angebot kann Links zu externen Webseiten Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Verlinkte Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
<p>
    
<br />
<br /><strong>Urheberrecht</strong><br />
<br />
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
</div>
            <br />
            <br />
            <br />
        </div>
      <Footer />
    </>
  )
}

export default Index
