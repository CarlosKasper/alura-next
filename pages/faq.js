import Head from "next/head";
import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTitle";

export async function getStaticProps() { // yarn build && yarn export, funciona
  // roda a função somente no build time
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq = await fetch(FAQ_API_URL)
      .then((response) => { return response.json();})
      .then((data) => {
        return data;
      });

  return {
    props: {
      faq: faq,
    },
  };
}

// export async function getServerSideProps() { // yarn export nao funciona, entao deve ser rodado yarn build && yarn start
//   // roda a função a cada acesso que recebe
//   const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
//   const faq = await fetch(FAQ_API_URL)
//       .then((response) => { return response.json();})
//       .then((data) => {
//         return data;
//       });

//   return {
//     props: {
//       faq: faq,
//     },
//   };
// }

export default function FAQPage({ faq }) {

  return (
    <div>
      <PageTitle>
        FAQ - Alura Cases Campanha
      </PageTitle>
      <h1>Alura Cases - Página de perguntas FAQ</h1>
      <Link href='/'>
        Acessar a HOME
      </Link>
      <ul>
        {faq.map(({ question, answer }) => (
          <li key={question}>
            <article>
              <h5>{question}</h5>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
