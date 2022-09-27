import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> Bienvenu sur le site code promo Amazon!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenu sur le site code promo Amazon!" />
        <p className="description">
          Les-Codes-Promos.com est la référence des ressources : tous les codes promos Amazon valides pour avoir une réduction sur tout le panier d'achat.
        </p>
        <p className="description">
          Nous fournissons des codes promos Amazon pour des réductions de prix pour les clients Amazon.
        </p>
         <p className="description">
          La solution pour faire de grandes économies quand on achète sur Amazon
         </p>
       
        <p className="description">Codes promo Amazon 2022 <a href="https://www.les-codes-promos.com/code-promo-amazon" target="_blank">Code promo Amazon</a> Bon de reduction Amazon</p>
        <p className="description">codes promo amazon <a href="https://www.les-codes-promos.com/code-promo-amazon">codes promotionnels amazon</a> livraison gratuite</p>
        <p className="description">
          code promo amazon prime <a href="https://www.les-codes-promos.com/code-promo-amazon">coupons codes Amazon</a>, de <a href="https://www.les-codes-promos.com/code-promo-amazon">code promo amazon prime</a>, Soldes Amazon 2022 <a href="https://www.les-codes-promos.com/code-promo-amazon">code réduction amazon</a>, réduction Amazon sur tout le panier,
        </p>
        <p className="description">
          code reduction amazon sur tout le panier <a href="https://www.les-codes-promos.com/code-promo-amazon">code reduction amazon livre</a>
        </p>
        <p className="description">
          Des codes de promos Amazon
        </p>
    
           
      </main>

      <Footer />
    </div>
  )
}
