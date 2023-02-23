import { AboutPageWrapper } from './styles';
import { ProjectsArticles } from './components/projects-articles';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function AboutPage(): ReactElement {
  return (
    <AboutPageWrapper>
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

      <div className="chapter">
        <h2>Idiomas</h2>
        <article>
          <p>
            Adoro aprender novos idiomas, desde pequeno aprendi inglês sozinho e hoje tenho
            compreensão total. Atualmente estudo italiano, alemão, francês e espanhol. No entanto,
            não posso nem ao menos dizer que estou no nível básico de qualquer um desses idiomas. Eu
            estudo sozinho e o tempo é escasso. Dentre as quatro, a que mais me dedico é o italiano,
            seguido do alemão.
          </p>
        </article>
      </div>

      <div className="chapter">
        <h2>Planos e Projetos Pessoais</h2>
        <article>
          <p>
            Eu me sinto muito atraído pela área de educação, acho que quanto mais conteúdo gratuito
            e de qualidade disponível, melhor. Não sou contra conteúdo pago, mas acho que devem
            existir alternativas de qualidade criadas pela comunidade para pessoas autodidatas que
            não tem condição de pagar por uma educação de qualidade. Tenho como inspiração a
            comunidade de software livre, que cria aplicações de qualidade e disponíveis para todos.
          </p>
        </article>
        <ProjectsArticles />
      </div>

      <div className="chapter">
        <h2>Backend</h2>
        <article>
          <p>
            No backend utilizo Node, normalmente com Express, mas já utilizei o framework Nest.
            Prefiro o express por não ser opinado, me dá mais liberdade para codar como gosto.
          </p>
          <p>
            Em relação a banco de dados, gosto muito do Postgres, sempre utilizo um container docker
            para rodar o banco de dados em ambiente de testes. Junto do Postgres eu uso algum ORM,
            usava bastante o TypeORM, mas estou mudando aos poucos para o Prisma. Sei mexer com
            Mongo, mas dou preferência para bancos SQL que na minha opinião são muito superiores aos
            NoSQL.
          </p>
          <p>
            Eu tento desacoplar o máximo possível os módulos nos meus projetos, utilizando injeção
            de dependências ou fábricas intermediárias que abstraem as bibliotecas. Quanto menos os
            módulos das minhas aplicações souberem sobre a implementação de bibliotecas externas
            melhor.
          </p>
          <p>Eu tento cobrir o máximo possível do código com testes utilizando Jest.</p>
        </article>
      </div>
    </AboutPageWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { AboutPage };
