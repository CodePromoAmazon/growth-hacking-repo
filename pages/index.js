import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to LETS GROW!" />
        <p className="description">
          Lets GROW est la référence des ressources : bonnes pratiques dans le domaine du Growth Hacking et de l&apos;entrepreneuriat au sens large.
        </p>
        <p className="description">
          Nous aidons gratuitement les entrepreneurs, growth hackers et commerciaux pour obtenir tout le nécessaire pour booster leur croissance.
        </p>
         <p className="description">
          <br style="box-sizing: border-box;">Qu'il s'agisse de novices ou de profils chevronnés, nous alimentons chaque jour une base de :</br>
         </p>
    
      </main>

      <Footer />
    </div>
  )
}
