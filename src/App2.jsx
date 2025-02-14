const App2 = () => {
  return <h1>Olá mundo!</h1>;
};

export default App2;

// rcf

//  Arrow function
// const App2 = () => <h1> Olá mundo </h1>;

// Nomeação pascal case para componentes
//  Primeira letra em maiusculo do componente
// Header.tsx

// Nomeação de variavel, função...
// camelCase

// export default, posso importar com qualquer nome sem chaves.
// export sem o default necessario importar entre chaves e com o nome exportado

//  self closing tag
// <Header></Header>
// desta forma
// <Header />

// Nomeação de classes em css
// metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// Nomes compostos são separados por -
// item-list

// <> </>
// Tag vazia em React se chama de fragment

// Componentes recebem "props"

// const App2 = (props) => {
//   return <h1>Olá mundo!</h1>;
// };

//   <StrictMode>
// Modo para potencializar a segurança e robustes
// da aplicação, sendo assim se faz a renderização
// duas vezes para apresentar algum error.

// Estrutura operador ternario

// {items === 5 ? <>
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
// </> : <>
// <SingleItem />
// <SingleItem />
// <SingleItem />
// <SingleItem />
// <SingleItem />
// <SingleItem />
// <SingleItem />
// <SingleItem />
// <SingleItem />
// <SingleItem />
// </>}

// Array(items)
//           .fill()
//           .map((currentValue, index) => {
//             return <SingleItem key={`${title}-${index}`}/>;
//           })

// Spread Operator
// {...currObj}
// Ele é utilizado para fazer uma copia de uma array ou objeto que temos.