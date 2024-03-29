import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function TechsArticle(): ReactElement {
  return (
    <>
      <div className="chapter">
        <h2>Backend</h2>
        <article>
          <p>
            No backend utilizo Node, normalmente com Express, mas já utilizei o
            framework Nest. Prefiro o express por não ser opinado, me dá mais
            liberdade para codar como gosto.
          </p>
          <p>
            Em relação a banco de dados, gosto muito do Postgres, sempre utilizo
            um container docker para rodar o banco de dados em ambiente de
            testes. Junto do Postgres eu uso algum ORM, usava bastante o
            TypeORM, mas estou mudando aos poucos para o Prisma. Sei mexer com
            Mongo, mas dou preferência para bancos SQL que na minha opinião são
            muito superiores aos NoSQL.
          </p>
          <p>
            Eu tento desacoplar o máximo possível os módulos nos meus projetos,
            utilizando injeção de dependências ou fábricas intermediárias que
            abstraem as bibliotecas. Quanto menos os módulos das minhas
            aplicações souberem sobre a implementação de bibliotecas externas
            melhor.
          </p>
          <p>
            Eu tento cobrir o máximo possível do código com testes utilizando
            Jest.
          </p>
        </article>
      </div>

      <div className="chapter">
        <h2>Frontend</h2>

        <article>
          <p>
            No front end eu uso React. Já usei babel e webpack, mas atualmente
            uso vite para gerar o bundle. Vite utiliza funcionalidades
            atualizadas dos browsers, como javascript modules.
          </p>

          <p>
            Para estilização dou preferência para o styled components. Não tenho
            problema nenhum em usar css puro ou sass. Minha preferência por
            styled components se dá por poder utilizar lógica dentro do css.
          </p>
        </article>
      </div>
    </>
  );
}

// * ---------------------------------------------------------------------- * //

export { TechsArticle };
