import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import Examples from '../components/examples'
import Banners from '../components/banners'
import Footer from '../components/footer'
import Head from "next/head";
// import Instagram from '../components/instagram'
const Index = () => {
//   const dispatch = useDispatch()
    const [modal, modalSet] = useState(false)
    let imageArr =[
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
    ]
  return (
    <>
    <Head>
      <title>Duman Shisha Lounge | Datenschutzerkl√§rung</title>
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
            <br />
            <div className="row">
                <h2 className='text-lg font-bold mb-4 mt-6'>Wer wir sind</h2>
                <p>Die Adresse unserer Website ist: https://duman-lounge.de.</p>
                <h2 className='text-lg font-bold mb-4 mt-6'>Welche personenbezogenen Daten wir sammeln und warum wir sie sammeln</h2>
                <h3 className='text-xl font-bold mb-6 mt-10'>Kommentare</h3>
                <p>Wenn Besucher Kommentare auf der Website schreiben, sammeln wir die Daten, die im Kommentar-Formular angezeigt werden, au√üerdem die IP-Adresse des Besuchers und den User-Agent-String (damit wird der Browser identifiziert), um die Erkennung von Spam zu unterst√ľtzen.</p>
                <p>Aus deiner E-Mail-Adresse kann eine anonymisierte Zeichenfolge erstellt (auch Hash genannt) und dem Gravatar-Dienst √ľbergeben werden, um zu pr√ľfen, ob du diesen benutzt. Die Datenschutzerkl√§rung des Gravatar-Dienstes findest du hier: https://automattic.com/privacy/. Nachdem dein Kommentar freigegeben wurde, ist dein Profilbild √∂ffentlich im Kontext deines Kommentars sichtbar.</p>
                <h3 className='text-xl font-bold mb-6 mt-10'>Medien</h3>
                <p>Wenn du ein registrierter Benutzer bist und Fotos auf diese Website l√§dst, solltest du vermeiden, Fotos mit einem EXIF-GPS-Standort hochzuladen. Besucher dieser Website k√∂nnten Fotos, die auf dieser Website gespeichert sind, herunterladen und deren Standort-Informationen extrahieren.</p>
                <h3 className='text-xl font-bold mb-6 mt-10'>Kontaktformulare</h3>
                <h3 className='text-xl font-bold mb-6 mt-10'>Cookies</h3>
                <p>Wenn du einen Kommentar auf unserer Website schreibst, kann das eine Einwilligung sein, deinen Namen, E-Mail-Adresse und Website in Cookies zu speichern. Dies ist eine Komfortfunktion, damit du nicht, wenn du einen weiteren Kommentar schreibst, all diese Daten erneut eingeben musst. Diese Cookies werden ein Jahr lang gespeichert.</p>
                <p>Falls du ein Konto hast und dich auf dieser Website anmeldest, werden wir ein tempor√§res Cookie setzen, um festzustellen, ob dein Browser Cookies akzeptiert. Dieses Cookie enth√§lt keine personenbezogenen Daten und wird verworfen, wenn du deinen Browser schlie√üt.</p>
                <p>Wenn du dich anmeldest, werden wir einige Cookies einrichten, um deine Anmeldeinformationen und Anzeigeoptionen zu speichern. Anmelde-Cookies verfallen nach zwei Tagen und Cookies f√ľr die Anzeigeoptionen nach einem Jahr. Falls du bei der Anmeldung ‚ÄěAngemeldet bleiben‚Äú ausw√§hlst, wird deine Anmeldung zwei Wochen lang aufrechterhalten. Mit der Abmeldung aus deinem Konto werden die Anmelde-Cookies gel√∂scht.</p>
                <p>Wenn du einen Artikel bearbeitest oder ver√∂ffentlichst, wird ein zus√§tzlicher Cookie in deinem Browser gespeichert. Dieser Cookie enth√§lt keine personenbezogenen Daten und verweist nur auf die Beitrags-ID des Artikels, den du gerade bearbeitet hast. Der Cookie verf√§llt nach einem Tag.</p>
                <h3 className='text-xl font-bold mb-6 mt-10'>Eingebettete Inhalte von anderen Websites</h3>
                <p>Beitr√§ge auf dieser Website k√∂nnen eingebettete Inhalte beinhalten (z.&nbsp;B. Videos, Bilder, Beitr√§ge etc.). Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob der Besucher die andere Website besucht h√§tte.</p>
                <p>Diese Websites k√∂nnen Daten √ľber dich sammeln, Cookies benutzen, zus√§tzliche Tracking-Dienste von Dritten einbetten und deine Interaktion mit diesem eingebetteten Inhalt aufzeichnen, inklusive deiner Interaktion mit dem eingebetteten Inhalt, falls du ein Konto hast und auf dieser Website angemeldet bist.</p>
                <h3 className='text-xl font-bold mb-6 mt-10'>Analysedienste</h3>
                <h2 className='text-lg font-bold mb-4 mt-6'>Mit wem wir deine Daten teilen</h2>
                <h2 className='text-lg font-bold mb-4 mt-6'>Wie lange wir deine Daten speichern</h2>
                <p>Wenn du einen Kommentar schreibst, wird dieser inklusive Metadaten zeitlich unbegrenzt gespeichert. Auf diese Art k√∂nnen wir Folgekommentare automatisch erkennen und freigeben, anstelle sie in einer Moderations-Warteschlange festzuhalten.</p>
                <p>F√ľr Benutzer, die sich auf unserer Website registrieren, speichern wir zus√§tzlich die pers√∂nlichen Informationen, die sie in ihren Benutzerprofilen angeben. Alle Benutzer k√∂nnen jederzeit ihre pers√∂nlichen Informationen einsehen, ver√§ndern oder l√∂schen (der Benutzername kann nicht ver√§ndert werden). Administratoren der Website k√∂nnen diese Informationen ebenfalls einsehen und ver√§ndern.</p>
                <h2 className='text-lg font-bold mb-4 mt-6'>Welche Rechte du an deinen Daten hast</h2>
                <p>Wenn du ein Konto auf dieser Website besitzt oder Kommentare geschrieben hast, kannst du einen Export deiner personenbezogenen Daten bei uns anfordern, inklusive aller Daten, die du uns mitgeteilt hast. Dar√ľber hinaus kannst du die L√∂schung aller personenbezogenen Daten, die wir von dir gespeichert haben, anfordern. Dies umfasst nicht die Daten, die wir aufgrund administrativer, rechtlicher oder sicherheitsrelevanter Notwendigkeiten aufbewahren m√ľssen.</p>
                <h2 className='text-lg font-bold mb-4 mt-6'>Wohin wir deine Daten senden</h2>
                <p>Besucher-Kommentare k√∂nnten von einem automatisierten Dienst zur Spam-Erkennung untersucht werden.</p>
                <h2 className='text-lg font-bold mb-4 mt-6'>Deine Kontakt-Informationen</h2>
                <h2 className='text-lg font-bold mb-4 mt-6'>Weitere Informationen</h2>
                <h3 className='text-xl font-bold mb-6 mt-10'>Wie wir deine Daten sch√ľtzen</h3>
                <h3 className='text-xl font-bold mb-6 mt-10'>Welche Ma√ünahmen wir bei Datenschutzverletzungen anbieten</h3>
                <h3 className='text-xl font-bold mb-6 mt-10'>Von welchen Drittanbietern wir Daten erhalten</h3>
                <h3 className='text-xl font-bold mb-6 mt-10'>Welche automatisierte Entscheidungsfindung und/oder Profilerstellung wir mit Benutzerdaten durchf√ľhren</h3>
                <h3 className='text-xl font-bold mb-6 mt-10'>Vorausgesetzte Offenlegungspflichten der Industrie</h3>
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
