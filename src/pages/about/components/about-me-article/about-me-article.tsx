import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function AboutMeArticle(): ReactElement {
  return (
    <>
      <div className="chapter">
        <h1>Sobre mim</h1>
        <article>
          <p>
            Me chamo Huam Benvenutti, sou um desenvolvedor full stack. Curso Análise e
            desenvolvimento de sistemas no Instituto Federal do Rio Grande do Sul (IFRS). Sou
            apaixonado por tecnologia e estou sempre atento às notícias relacionadas ao campo.
          </p>

          <p>
            Minha especialidade é Typescript. Dei prioridade ao Javascript por ser uma linguagem
            coringa, que pode-se fazer de tudo e mais um pouco. Na minha opinião o Typescript agrega
            muito ao Javascript, gosto de tipar as variáveis e saber exatamente o que se envia e
            recebe entre as funções. Sem falar que a IDE (VSCode) ganha super poderes ao utilizar-se
            tipagem.
          </p>
          <p>
            Por gostar muito de Typescript, eu fico de olho no Deno. Poder criar aplicações sem
            precisar transpilar o código é algo que me interessa bastante. Espero que a ferramenta
            siga crescendo e a comunidade acabe tão forte quando o próprio Node.
          </p>
          <p>
            Meu primeiro contato com programação foi na faculdade, lidei com Java, C, Python e
            Javascript. Contudo, os conhecimentos avançados eu adquiri com a Rocketseat. Comprei o
            curso deles anos atrás. E por ser um dos primeiros, me deram acesso vitalício a todas as
            atualizações de conteúdo.
          </p>
        </article>
      </div>

      <div className="chapter">
        <h2>Faculdade</h2>
        <article>
          <p>
            Eu comecei meus estudos no Instituto Federal de Santa Catarina no município de
            Caçador/SC. Fazia bacharelado em sistemas de informação. Meus familiares precisaram se
            mudar para Joinville e eu transferí a minha matrícula para o Instituto Federal
            Catarinense de Araquarí/SC, cidade satelite de Joinville.
          </p>
          <p>
            Quando a pandemia começou, acabei trancando a minha matrícula e acabei não voltando para
            a faculdade. Após um ano sem estudar, tentei me transferir novamente, dessa vez para
            Porto Alegre/RS, minha cidade natal. Não consegui a transferência e tive que prestar
            vestibular. Resultado, passei em primeiro lugar e estou cursando desde então análise e
            desenvolvimento de sistemas no Instituto Federal do Rio Grande do Sul no câmpus
            restinga.
          </p>
        </article>
      </div>
    </>
  );
}

// * ---------------------------------------------------------------------- * //

export { AboutMeArticle };
