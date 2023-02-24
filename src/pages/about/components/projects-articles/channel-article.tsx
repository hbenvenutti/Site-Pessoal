import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function ChannelArticle(): ReactElement {
  return (
    <article>
      <h3>Canal educativo sobre tecnologia</h3>

      <p>
        Eu pretendo por no ar no futuro próximo um canal educativo ensinando sobre conceitos de
        programação e sistemas linux.
      </p>

      <p>
        Exemplo de conteúdo: personalizar terminal, instalar IDE, configurar Linux, formatar
        mensagem de commit. Também pretendo criar video aulas sobre Deno.
      </p>
    </article>
  );
}

// * ---------------------------------------------------------------------- * //

export { ChannelArticle };
