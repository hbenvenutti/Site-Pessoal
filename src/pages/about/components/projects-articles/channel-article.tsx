import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function ChannelArticle(): ReactElement {
  return (
    <article>
      <h3>Canal educativo sobre tecnologia</h3>

      <p>
        Eu pretendo por no ar no futuro próximo um canal educativo ensinando
        sobre conceitos de programação e sistemas linux.
      </p>

      <p>
        Já estou preparando um vídeo sobre como formatar as mensagens de commit
        usando husky e commitlint. Quando o vídeo estiver no ar eu vou
        adicioná-lo aqui ao site.
      </p>
      <p>
        Pretendo fazer vídeo aulas sobre Deno, sobre bibliotecas, instalação e
        talvez até criando uma aplicação CRUD.
      </p>
    </article>
  );
}

// * ---------------------------------------------------------------------- * //

export { ChannelArticle };
