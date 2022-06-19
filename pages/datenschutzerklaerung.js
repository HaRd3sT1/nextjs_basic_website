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
      <title>Duman Shisha Lounge | Datenschutzerklärung</title>
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
                <p>Wenn Besucher Kommentare auf der Website schreiben, sammeln wir die Daten, die im Kommentar-Formular angezeigt werden, außerdem die IP-Adresse des Besuchers und den User-Agent-String (damit wird der Browser identifiziert), um die Erkennung von Spam zu unterstützen.</p>
                <p>Aus deiner E-Mail-Adresse kann eine anonymisierte Zeichenfolge erstellt (auch Hash genannt) und dem Gravatar-Dienst übergeben werden, um zu prüfen, ob du diesen benutzt. Die Datenschutzerklärung des Gravatar-Dienstes findest du hier: https://automattic.com/privacy/. Nachdem dein Kommentar freigegeben wurde, ist dein Profilbild öffentlich im Kontext deines Kommentars sichtbar.</p>
                <h3 className='text-xl font-bold mb-6 mt-10'>Medien</h3>
                <p>Wenn du ein registrierter Benutzer bist und Fotos auf diese Website lädst, solltest du vermeiden, Fotos mit einem EXIF-GPS-Standort hochzuladen. Besucher dieser Website könnten Fotos, die auf dieser Website gespeichert sind, herunterladen und deren Standort-Informationen extrahieren.</p>
                <h3 className='text-xl font-bold mb-6 mt-10'>Kontaktformulare</h3>
                <h3 className='text-xl font-bold mb-6 mt-10'>Cookies</h3>
                <p>Wenn du einen Kommentar auf unserer Website schreibst, kann das eine Einwilligung sein, deinen Namen, E-Mail-Adresse und Website in Cookies zu speichern. Dies ist eine Komfortfunktion, damit du nicht, wenn du einen weiteren Kommentar schreibst, all diese Daten erneut eingeben musst. Diese Cookies werden ein Jahr lang gespeichert.</p>
                <p>Falls du ein Konto hast und dich auf dieser Website anmeldest, werden wir ein temporäres Cookie setzen, um festzustellen, ob dein Browser Cookies akzeptiert. Dieses Cookie enthält keine personenbezogenen Daten und wird verworfen, wenn du deinen Browser schließt.</p>
                <p>Wenn du dich anmeldest, werden wir einige Cookies einrichten, um deine Anmeldeinformationen und Anzeigeoptionen zu speichern. Anmelde-Cookies verfallen nach zwei Tagen und Cookies für die Anzeigeoptionen nach einem Jahr. Falls du bei der Anmeldung „Angemeldet bleiben“ auswählst, wird deine Anmeldung zwei Wochen lang aufrechterhalten. Mit der Abmeldung aus deinem Konto werden die Anmelde-Cookies gelöscht.</p>
                <p>Wenn du einen Artikel bearbeitest oder veröffentlichst, wird ein zusätzlicher Cookie in deinem Browser gespeichert. Dieser Cookie enthält keine personenbezogenen Daten und verweist nur auf die Beitrags-ID des Artikels, den du gerade bearbeitet hast. Der Cookie verfällt nach einem Tag.</p>
                <h3 className='text-xl font-bold mb-6 mt-10'>Eingebettete Inhalte von anderen Websites</h3>
                <p>Beiträge auf dieser Website können eingebettete Inhalte beinhalten (z.&nbsp;B. Videos, Bilder, Beiträge etc.). Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob der Besucher die andere Website besucht hätte.</p>
                <p>Diese Websites können Daten über dich sammeln, Cookies benutzen, zusätzliche Tracking-Dienste von Dritten einbetten und deine Interaktion mit diesem eingebetteten Inhalt aufzeichnen, inklusive deiner Interaktion mit dem eingebetteten Inhalt, falls du ein Konto hast und auf dieser Website angemeldet bist.</p>
                <h3 className='text-xl font-bold mb-6 mt-10'>Analysedienste</h3>
                <h2 className='text-lg font-bold mb-4 mt-6'>Mit wem wir deine Daten teilen</h2>
                <h2 className='text-lg font-bold mb-4 mt-6'>Wie lange wir deine Daten speichern</h2>
                <p>Wenn du einen Kommentar schreibst, wird dieser inklusive Metadaten zeitlich unbegrenzt gespeichert. Auf diese Art können wir Folgekommentare automatisch erkennen und freigeben, anstelle sie in einer Moderations-Warteschlange festzuhalten.</p>
                <p>Für Benutzer, die sich auf unserer Website registrieren, speichern wir zusätzlich die persönlichen Informationen, die sie in ihren Benutzerprofilen angeben. Alle Benutzer können jederzeit ihre persönlichen Informationen einsehen, verändern oder löschen (der Benutzername kann nicht verändert werden). Administratoren der Website können diese Informationen ebenfalls einsehen und verändern.</p>
                <h2 className='text-lg font-bold mb-4 mt-6'>Welche Rechte du an deinen Daten hast</h2>
                <p>Wenn du ein Konto auf dieser Website besitzt oder Kommentare geschrieben hast, kannst du einen Export deiner personenbezogenen Daten bei uns anfordern, inklusive aller Daten, die du uns mitgeteilt hast. Darüber hinaus kannst du die Löschung aller personenbezogenen Daten, die wir von dir gespeichert haben, anfordern. Dies umfasst nicht die Daten, die wir aufgrund administrativer, rechtlicher oder sicherheitsrelevanter Notwendigkeiten aufbewahren müssen.</p>
                <h2 className='text-lg font-bold mb-4 mt-6'>Wohin wir deine Daten senden</h2>
                <p>Besucher-Kommentare könnten von einem automatisierten Dienst zur Spam-Erkennung untersucht werden.</p>
                <h2 className='text-lg font-bold mb-4 mt-6'>Deine Kontakt-Informationen</h2>
                <h2 className='text-lg font-bold mb-4 mt-6'>Weitere Informationen</h2>
                <h3 className='text-xl font-bold mb-6 mt-10'>Wie wir deine Daten schützen</h3>
                <h3 className='text-xl font-bold mb-6 mt-10'>Welche Maßnahmen wir bei Datenschutzverletzungen anbieten</h3>
                <h3 className='text-xl font-bold mb-6 mt-10'>Von welchen Drittanbietern wir Daten erhalten</h3>
                <h3 className='text-xl font-bold mb-6 mt-10'>Welche automatisierte Entscheidungsfindung und/oder Profilerstellung wir mit Benutzerdaten durchführen</h3>
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
