import { useTranslation } from 'react-i18next';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function AboutMeArticle(): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <div className="chapter">
        <h1>
          <span className="title-tag">{'<'}</span>
          {t('articles.about.title', { ns: 'about' })}
          <span className="title-tag">{'>'}</span>
        </h1>
        <article>
          <p
            dangerouslySetInnerHTML={{
              __html: t('articles.about.p1', { ns: 'about' })
            }}
          />
          {/* <p>
            Me chamo Huam Benvenutti, sou um desenvolvedor full-stack. Curso
            Análise e desenvolvimento de sistemas no
            <strong> Instituto Federal do Rio Grande do Sul (IFRS)</strong>. Sou
            apaixonado por tecnologia e estou sempre atento às notícias
            relacionadas ao campo.
          </p> */}
          <p
            dangerouslySetInnerHTML={{
              __html: t('articles.about.p2', { ns: 'about' })
            }}
          />

          {/* <p>
            Minha especialidade é <strong>Typescript</strong>. Dei prioridade ao
            <strong> Javascript</strong> por ser uma linguagem coringa, que
            pode-se fazer de tudo e mais um pouco. Na minha opinião o Typescript
            agrega muito ao Javascript, gosto de tipar as variáveis e saber
            exatamente o que se envia e recebe entre as funções. Sem falar que o
            <strong> VSCode</strong> ganha super poderes ao utilizar-se tipagem.
          </p> */}

          <p>
            Por gostar muito de Typescript, eu fico de olho no
            <strong> Deno</strong>. Poder criar aplicações sem precisar
            transpilar o código, é algo que me interessa bastante. Espero que a
            ferramenta siga crescendo e a comunidade acabe tão forte quanto a do
            próprio <strong>Node</strong>.
          </p>
          <p>
            Meu primeiro contato com programação foi na faculdade, lidei com
            <strong> Java</strong>, <strong>C</strong>, <strong>Python </strong>
            e<strong> Javascript</strong>. Contudo, os conhecimentos avançados,
            eu adquiri com a<strong> Rocketseat</strong>. Comprei o curso deles
            anos atrás. E por ser um dos primeiros, tenho acesso vitalício a
            todas as atualizações de conteúdo do curso.
          </p>
        </article>
      </div>

      <div className="chapter">
        <h2>Faculdade</h2>
        <article>
          <p>
            Eu comecei meus estudos no
            <strong> Instituto Federal de Santa Catarina</strong> no município
            de Caçador/SC. Fazia bacharelado em sistemas de informação. Por
            motivos pessoais eu transferí a minha matrícula para o
            <strong> Instituto Federal Catarinense de Araquarí/SC </strong>,
            cidade satelite de Joinville.
          </p>
          <p>
            Quando a pandemia começou, acabei trancando a minha matrícula e
            acabei não voltando para a faculdade. Nesse hiato, eu estudei por
            conta própria e também fiz cursos da <strong> Rocketseat</strong>.
            Nunca deixei de aprimorar os meus conhecimentos.
          </p>
          <p>
            Tentei me transferir novamente, dessa vez para Porto Alegre/RS,
            minha cidade natal. Não consegui a transferência e tive que prestar
            vestibular. Resultado, passei em <strong>primeiro lugar</strong> e
            estou cursando desde então análise e desenvolvimento de sistemas no
            <strong> Instituto Federal do Rio Grande do Sul</strong> no câmpus
            restinga.
          </p>
        </article>
      </div>
    </>
  );
}

// * ---------------------------------------------------------------------- * //

export { AboutMeArticle };
