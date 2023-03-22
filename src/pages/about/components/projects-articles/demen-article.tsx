import { DemenLogo } from '../../../../assets/demen';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function DemenArticle(): ReactElement {
  return (
    <article>
      <div className="title">
        <DemenLogo width="5rem" />
        <h3>Democratizando o ensino (Demen)</h3>
      </div>
      <p>
        Eu estou desenvolvendo uma aplicação para aglomerar conteúdo de
        qualidade. A ideia é criar um banco de dados com material e vídeo aulas
        gratuitas já disponíveis na Internet.
      </p>

      <p>
        Hoje em dia, é possível encontrar aulas sobre qualquer conteúdo, mas
        dificilmente com a mesma instituição ou mesmo professor. Uma pessoa
        esforçada consegue ter um aprendizado contínuo, mas é preciso encontrar
        diversas fontes para ter um material realmente completo. Por exemplo, um
        determinado site ensina sobre programação orientada a objetos, já outro
        professor ensina sobre bancos de dados SQL.
      </p>

      <p>
        No Demen, o conteúdo estaria estruturado, permitindo que o aluno
        continue a aprender, sem ir buscar conteúdo fora da plataforma. Nós
        criamos um plano de ensino, encontramos os materiais nas diferentes
        fontes e por fim entregamos o conteúdo para o aluno.
      </p>

      <p>
        O segundo problema que eu observo é o de que o Google vem tornando o
        Youtube uma plataforma <strong>ineficiente</strong> para o aprendizado.
        A empresa decidiu monetizar o Youtube com clickbaits e bolhas de
        conteúdo. Ao pesquisar sobre um assunto no Youtube, ele apresenta alguns
        vídeos relacionados à palavra chave, e então começa a mostrar vídeos
        totalmente desalinhados com a busca, mas relacionados com conteúdos
        diversos assistidos anteriormente como futebol ou política.
      </p>

      <p>
        Esse comportamento faz com que o aluno se desperse e engaje mais com a
        plataforma. Isso dá mais dinheiro para o Google, mas torna o Youtube
        ineficiente para estudo. O Google tem o direito de monetizar as suas
        plataformas como bem entender, a minha crítica é de que precisamos de
        uma alternativa focada em educação, já que atualmente o Youtube é o
        principal mecanismo de busca para vídeo aulas. A tendência é de que
        fique cada vez mais dificil encontrar o que se busca, encontrando
        somente o que o Google quer que vejamos.
      </p>

      <p>
        O terceiro problema é que pequenos geradores de conteúdo educacional
        ficam soterrados por vídeos de banheira de nutella e política. A verdade
        é que educação não da muita view. E para o profissional que está
        gastando tempo criando conteúdo gratuito não alcançar ninguém é
        desestimulante. Existem canais grandes de educação no Youtube, mas para
        cada canal grande, existem centenas de canais pequenos que não aparecem
        nas buscas para que o usuário se distraia e volte a discutir política.
      </p>
      <p>
        A idéia inicial do projeto é criar um banco de dados, e usar a API do
        próprio Youtube para incorporar o vídeo na plataforma.
        <strong> A monetização e a view vão para o autor do vídeo</strong>. A
        nossa plataforma daria todos os créditos para o responsável. O demen só
        faz a ponte entre aluno e professor.
      </p>
      <p>
        Em um segundo momento, seria disponibilizada uma API para que os
        professores adicionassem seu vídeos e materiais ao Demen.
      </p>
      <p>
        Existe também a possibilidade de que após o Demen estar no ar, seja
        implementado um meio para que sistemas tutores inteligentes usem o banco
        de dados para apresentar conteúdo aos seus alunos.
      </p>

      <h3>Parte Técnica</h3>
      <p>
        A aplicação consiste em:
        <ul>
          <li>
            Uma <strong>API Rest</strong> feita com node, express, postgres e
            prisma.
          </li>
          <li>
            Um front Web feito com <strong>Next.js</strong>.
          </li>
          <li>
            Um front Mobile feito com <strong>React Native</strong>.
          </li>
          <li>
            Um dashboard administrativo feito com <strong>React</strong>.
          </li>
        </ul>
      </p>
    </article>
  );
}

// * ---------------------------------------------------------------------- * //

export { DemenArticle };
