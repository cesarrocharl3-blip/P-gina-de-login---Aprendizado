import { Title, Backgraund, DivProject, DivImage, ProjectTitle, Button, FormInput, InputLabel, DivInput2, Input} from './styles'
import { Paragraph, Image, List } from '../../styles/SharedStyles'
import img1 from '../../assets/css-2.png'
import img2 from '../../assets/css-3.png'
import img3 from '../../assets/css-4.png'
import img4 from '../../assets/css-5.png'
import img5 from '../../assets/css-6.png'
import img6 from '../../assets/css-7.png'
import img7 from '../../assets/global-07.png'
import img8 from '../../assets/global-08.png'
import imgUser from '../../assets/users.png'
import hooks1 from '../../assets/hooks-1.png'
import hooks2 from '../../assets/hooks-2.png'
import hooks3 from '../../assets/hooks-3.png'
import api1 from '../../assets/api-axios-1.png'
import api2 from '../../assets/api-axios-2.png'
import cors1 from '../../assets/cors-1.png'
import rota1 from '../../assets/new-rote-1.png'
import rota2 from '../../assets/rote-2.png'
import rota3 from '../../assets/rote-3.png'
import rota4 from '../../assets/rote-4.png'

import { useRef } from 'react'
import api from '../../service/api'


function Home() {

  // Usando React Hooks 
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const exemplo1 = "Este texto é uma constante criada na function"

  async function registerNewUser() {
    await api.post('/prisma', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value) // o parseInt é necessário pois o input do tipo number retorna uma string, então precisamos converter para number
    })
  }

  return (
    <>
      <div>
        <h1>Welcome to React</h1>
      </div>

      <div>
        <h3>Introduction to React</h3>

        <Paragraph>
          Um diferencial que vimos no <b>React</b> é que usamos o <b>JS</b> e o <b>HTML</b> na mesma página, porém o JS fica dentro da <b>function</b> e o HTML dentro do <b>return</b>, isso é chamado de <b>JSX</b>.
        </Paragraph>

        <Paragraph>
          No <b>React</b> se usa tanto JS, como HTML juntos, então dentro do <b>return</b> faz parte do HTML e o que estiver na <b>function</b> faz parte do JS. Ou seja, eu posso criar uma <b>const</b> dentro da <b>function</b> e usá-la no <b>return</b>, isso é o que torna o React tão poderoso.
        </Paragraph>

        <Paragraph>
          <b>Exemplo:</b> {exemplo1} - Para utilizar uma <b>const</b> basta colocar o nome dela dentro de chaves.
        </Paragraph>

        <Paragraph>
          Todo componente do React deve começar com letra maiúscula, caso contrário o React não vai reconhecer o componente e vai dar erro.
        </Paragraph>

        <Paragraph>
          Todo item HTML dentro do <b>return</b> deve estar dentro de uma tag <b>pai</b> (div, container, header, etc.), ou seja, não pode ter mais de uma tag pai. Sempre deve haver uma "box" principal com outras dentro, caso contrário o React vai dar erro.
        </Paragraph>

        <Paragraph>
          Dito isso, no React se usa a tag <b>fragment</b> que é representada por "<b>&lt; &gt; , &lt; / &gt;</b>", que nada mais é do que um tipo simplificado de uma <b>div</b>, servindo para agrupar elementos sem adicionar nós extras ao DOM.
        </Paragraph>

      </div>

      <div>
        <h3>Utilizando o CSS</h3>

        <div>
          <Paragraph>
            Quando utilizamos o CSS no React, podemos usar a forma que já aprendemos fazendo um arquivo <b>styles.css</b>. Porém, se fizermos isso, não vamos utilizar o diferencial do React, que são as bibliotecas que nos auxiliarão no projeto. Dito isso, primeiro vamos fazer o seguinte:
          </Paragraph>

          <List>
            <li>No <b>TERMINAL</b>, instale a biblioteca que você vai utilizar, exemplo: <b>yarn add install styled-components</b>. No caso, a biblioteca é o <b>styled-components</b>.</li>
            <li>Crie um arquivo <b>styles.js</b>.</li>
            <li>Dentro do arquivo <b>styles.js</b>, importe a biblioteca que você instalou, exemplo: <b>import styled from 'styled-components'</b>.</li>
          </List>

          <Paragraph>
            <b>Obs:</b> Para este projeto, eu estou usando <b>yarn</b>, porém eu poderia usar o <b>npm</b>, e isso pode alterar a forma que você faz as instalações.
          </Paragraph>

          <Paragraph>
            A partir daí, você pode começar a designar os estilos para os elementos HTML.
          </Paragraph>

          <List>
            <li>Para fazer isso, vamos na pasta <b>styles.js</b> e criamos uma <b>export const</b> com as especificações do CSS, exemplo:</li>
          </List>

          <Image src={img1} alt="Exemplo de CSS no styled-components" />

          <Paragraph>
            Após criar esse componente, vamos importar ele no arquivo <b>App.js</b>. Sendo que todas as importações ficam no início do arquivo, fora da <b>function</b> e do <b>return</b>, ficando desta forma:
          </Paragraph>

          <Image src={img2} alt="Importação do componente de estilos" />

          <Title>Este é o título estilizado criado com os passos acima com styled-components</Title>

          <Paragraph>
            E agora, se eu quisesse adicionar outro componente CSS, bastaria adicioná-lo nesse arquivo importado, exemplo:
          </Paragraph>

          <Image src={img3} alt="Outro exemplo de estilo" />
          <Image src={img4} alt="Componente de estilo avançado" />

          <Backgraund>
            <Title>Agora ficaria assim, a edição do "Title" dentro do "Backgraund"</Title>
          </Backgraund>

          <List>
            <li>Perceba que com isso é possível utilizar a mesma estilização em diversos componentes apenas colocando seu nome, como se fosse uma <b>TAG</b>.</li>
            <li>Também é possível mudar a estilização direto nesse arquivo sem precisar importar um novo componente, basta usar a tag <b>style</b>, exemplo:</li>
          </List>

          <Image src={img5} alt="Exemplo de style inline" />

          <h1 style={{ color: 'green', fontSize: '20px' }}>Exemplo de edição sem importar um novo componente</h1>

          <Paragraph>
            <b>Obs:</b> Repare que dentro da tag <b>style</b>, apesar de usarmos os mesmos comandos do CSS, não colocamos mais o <b>-</b> na separação de palavras e sim a letra <b>MAIÚSCULA</b> no padrão <b>JSX</b> do React.
          </Paragraph>

          <List>
            <li>Ou, se você quiser mudar alguma coisa específica dentro de um componente já importado, para não precisar fazer um novo componente, basta criar uma TAG dentro do componente no arquivo <b>styles.js</b> com a TAG do elemento que você quer fazer a estilização, exemplo:</li>
          </List>

          <Image src={img6} alt="Edição específica de um componente" />

          <Backgraund>
            <Title>Edição do "Title" dentro do "Backgraund"</Title>
            <h2>Exemplo de edição sem importar um novo componente</h2>
          </Backgraund>

        </div>

      </div>

      <div>
        <h4>Global Styles</h4>

        <div>
          <Paragraph>
            O <b>Global Styles</b> é um arquivo que criamos para utilizar a fundação da estilização do seu projeto. Usando uma analogia, se o projeto fosse uma casa, seria como se na pasta do Global Styles falássemos que:
          </Paragraph>

          <List>
            <li>Todas as paredes serão brancas.</li>
            <li>Todos os pisos serão porcelanato.</li>
            <li>Todas as portas serão verdes.</li>
          </List>

          <Paragraph>
            Já na pasta que criamos o arquivo <b>style.js</b>, seriam os móveis da casa:
          </Paragraph>

          <List>
            <li>Sofá amarelo.</li>
            <li>Mesa de madeira.</li>
            <li>Armários brancos.</li>
          </List>

          <Paragraph>
            Então, após criar o <b>GlobalStyles.js</b>, vamos colocar as configs padrão que usamos no CSS, como padding, margin, etc. E também já colocamos a fonte que usaremos no projeto. Para pegar a fonte, basta colocar no <b>index.html</b> dentro do <b>head</b>, como fazíamos antes, e adicionar no Global Styles para colocar em todas as páginas, exemplo:
          </Paragraph>

          <Image src={img7} alt="Exemplo de Global Styles" />

          <Paragraph>
            <b>Obs:</b> Quando você cria um GlobalStyles, é necessário importá-lo para sua aplicação. Como você pode ver na imagem acima, após os códigos de import e export, precisa ir lá no <b>main.jsx</b> e fazer essa aplicação dessa forma:
          </Paragraph>

          <Image src={img8} alt="Importação do Global Styles no main" />

        </div>

      </div>

      <h1>Projeto de Cadastro de Usuários</h1>

      <DivProject>

        <DivImage>
          <img src={imgUser} alt="Ícone de usuário" />
        </DivImage>

        <FormInput>
          <ProjectTitle>Cadastro de Usuários</ProjectTitle>

          <DivInput2>

            <div>
              <InputLabel>
                Nome: <span> *</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
            </div>

            <div>
              <InputLabel>
                Idade: <span> *</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
            </div>

          </DivInput2>

          <div style={{ width: '100%' }}>

            <InputLabel>
              E-mail: <span> *</span>
            </InputLabel>
            <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />

          </div>

          <Button type="button" onClick={registerNewUser}>Cadastrar Usuários</Button>

        </FormInput>

      </DivProject>

      <div>

        <h4>Utilizando React Hooks</h4>

        <Paragraph>
          O <b>React Hooks</b> é uma ferramenta que permite você fazer a manipulação dos seus componentes usando o React. Exemplo: vamos utilizar o <b>useRef</b> agora para unir os inputs do cadastro de usuários (Name, Age, Email) com o nosso BackEnd.
        </Paragraph>

        <Paragraph>
          Para fazermos isso, primeiro devemos importar os Hooks que vamos utilizar e então criar uma variável com o <b>useRef</b> de cada um dos inputs que vamos utilizar, exemplo:
        </Paragraph>

        <Image src={hooks1} alt="Exemplo de importação de hooks" />

        <Paragraph>
          O próximo passo é linkar essas variáveis com os inputs respectivos. Para isso, usamos o <b>ref</b>, então nos inputs colocamos <b>ref = (nome da variável dentro de chaves)</b>, exemplo:
        </Paragraph>

        <Image src={hooks2} alt="Exemplo de uso do ref" />

        <Paragraph>
          Agora que já linkamos os inputs, vamos fazer uma function para que o botão de "Cadastrar Usuários" faça a leitura dos inputs e retorne os valores digitados. Então criamos uma function <b>registerNewUser</b> e colocamos no nosso button junto com a função de <b>onClick</b>, e <b>type="button"</b> (apesar de ser o mais correto, não vamos usar <b>type="submit"</b> agora), exemplo:
        </Paragraph>

        <Image src={hooks3} alt="Exemplo de registerNewUser" />

        <Paragraph>
          <b>Obs:</b> Demos um <b>console.log</b> para visualizar o resultado e o input traz diversas informações. Porém, o que nos interessa é o <b>value</b> que está dentro de <b>current</b>, por isso especificamos dessa forma: <b>inputName.current.value</b>.
        </Paragraph>

      </div>

      <div>

        <h4>Utilizando API (Conectando o FrontEnd com o BackEnd)</h4>

        <Paragraph>
          Agora instalamos a biblioteca <b>axios</b> para fazer a comunicação com o BackEnd. Para isso, vamos no <b>TERMINAL</b> e digitamos: <b>npm install axios</b> ou <b>yarn add axios</b>.
        </Paragraph>

        <List>
          <li>Para organizar melhor, vamos criar uma pasta chamada <b>services</b> e dentro dela um arquivo chamado <b>api.js</b>.</li>
          <li>E então vamos importar o <b>axios</b> no arquivo <b>api.js</b> : <b>import axios from 'axios'</b>.</li>
          <li>Ainda na pasta api fazemos uma <b>const</b> com as configurações da nossa API axios, exemplo: </li>

          <Image src={api1} alt="Exemplo de configuração da API" />

          <li>bade URL - Para rodar localmente e o endereço da onde ta rodando no nosso caso localhost:3000.</li>
          <li>Após isso exportamos a const usando <b>export default api</b> e importamos no index.js com <b>import api from '../../services/api'</b>. </li>
        </List>

        <Paragraph>
          Agora que fizemos todos os passos iniciais para usar nossa API vamos aplica-la. Para isso vamos no botão de Registrar o usuário para que os dados digitados nos inputs sejam
          enviados para o BackEnd.
        </Paragraph>

        <List>
          <li> Sempre que rola essa comunicação com outro servidor precisamos usar o <b>await</b>, e <b>async</b>.</li>
          <li> Depois identificamos a API e qual o método que vamos utilizar, no caso o <b>POST</b> que é a criação de usuários, e depois identificamos a <b>URL</b> que fizemos no
            Back-end que foi o <b>/prisma</b>.</li>
          <li> Então colocamos o a estrutura de dados que vamos enviar, que no nosso caso é o <b>email, name e age</b> e colocamos de onde serão buscados esses dados usando
            <b>inputName.current.value</b>, <b>inputAge.current.value</b> e <b>inputEmail.current.value</b> (o <b>current.value</b> serve para pegar apenas o value do input que é o que foi digitado
            pelo usuário).</li>
          <li> E por último colocamos dentro de uma const <b>data</b> pois queremos retornar essa informação para o usuário (lembra que pra cada ação de criação de usuário, edição, etc temos um status
            que é retornado para o usuário), então fazemos essa váriavel e damos um <b>console.log</b> para ver o que chegou. (Isso é só pra gente ver se deu certo, depois nós apagamos)</li>
        </List>

        <Image src={api2} alt="Exemplo de uso da API" />

        <Paragraph>
          Então resumindo, o usuário digita os dados nos inputs, clica no botão de cadastrar e então a função <b>registerNewUser</b> é chamada, que vai pegar os dados digitados nos inputs
          e enviar para o BackEnd usando a API que criamos.
        </Paragraph>

      </div>

      <div>

        <h4> CORS </h4>

        <Paragraph>
          O <b>CORS</b> é um mecanismo de segurança que impede que um site faça requisições para outro site que não seja o mesmo. Ou seja, se você estiver rodando o seu FrontEnd no
          <b>localhost:5173</b> e tentar fazer uma requisição para o seu BackEnd que está rodando no <b>localhost:3000</b>, o navegador vai bloquear essa requisição por questões de segurança.
        </Paragraph>

        <Paragraph>

        </Paragraph>

        <List>
          <li> Então no terminal do nosso <b>Back-end</b> vamos digitar: <b>npm install cors</b> para instalar o <b>CORS</b>.</li>
          <li> Ainda no Back-end no <b>server.js</b> nós importamos (<b>import cors from 'cors'</b>) o CORS e habilitamos ele (<b>app.use(cors()) </b>), nessa hora que se nosso site já
            tivesse um endereço específico para rodar ele vai ser assim: <b>app.use(cors('http://exemplo.com'))</b>.</li>
        </List>

        <Image src={cors1} alt="Exemplo de uso do CORS" />

      </div>

      <div>
        <h4> Criando uma Nova Página </h4>

        <Paragraph>
          Para criar uma nova rota primeiramente vamos criar uma nova pasta dentro da pasta <b>pages</b> chamada <b>List Users</b> e dentro dessa pasta criamos um novo <b>index.jsx</b> e <b>styles.js</b>, após isso fazemos 
          o link desses novos arquivos no <b>index</b> dessa forma: 
        </Paragraph>

        <Image src={rota1} alt="Exemplo de criação de nova rota" />
      </div>

      <div>
        <h4> Criação da Navegação de Rotas (React Router) no Front-End</h4>

        <Paragraph>
          Para navegar entre as rotas vamos baixar uma nova biblioteca chamada <b>React Router DOM</b> pelo terminal com o comando: <b>npm install react-router-dom</b> ou 
          <b>yarn add react-router-dom</b>. 
        </Paragraph>

        <Paragraph>
          Depois de instalada a biblioteca vamos criar uma pasta dentro da pasta raiz <b>src</b> chamada <b>routes.jsx</b>. Dentro desta pasta vamos importar o <b>createBrowserRouter</b> do 
          <b>react-router-dom</b> e importar as páginas que criamos, no caso <b>Home</b> e <b>ListUsers</b>, e vai ficar dessa forma:
        </Paragraph>

        <Image src={rota2} alt="react router" />

        <Paragraph>
          Agora que nós criamos essa navegação de rotas e já criamos as rotas das páginas, vamos em <b>main.jsx</b> e trocamos o <b>import Home e a menção abaixo do Home</b> por <b>Router Provider 
          e adicionamos a menção abaixo</b> e fazemos um novo import <b>router da pasta routes que criamos</b>:
        </Paragraph>

        <Image src={rota3} alt="react router" />
        <Image src={rota4} alt="react router" />

        <Paragraph>
          Pronto, agora quando formos criando mais pages, basta adicionar na pasta <b>routes</b> seguindo o padrão que criamos as anteriores.
        </Paragraph>

      </div>
    </>
  )
}

export default Home
