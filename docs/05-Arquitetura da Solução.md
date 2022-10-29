# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da mesma.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura abaixo.

<img width="2388" alt="Untitled (1)" src="https://user-images.githubusercontent.com/102487978/198835770-ae0a9d7f-2f35-46f0-8b5e-38c4dac5ccdf.png">

### Figura 01 - Arquitetura da Solução
Contamos com os seguintes módulos:

- `Navegador/Browser` Interface para facilitar a relação cliente-servidor, possibilitando as requisições de usuário em formato HTTP com mecanismos de buscas intuitivos.

- `Página web` Conteúdo da página, desde o documento HTML com as estilizações em CSS3, ou ainda recursos de interatividade com a página em código JavaScript, além das imgens utilizadas para ilustração, salvos numa base de dados.

- `Github Pages` É utilizado para hospedagem do nosso site diretamente do repositório.

- `API de sites de notícias` API para integração de notícias relacionadas a saúde mental, como novidades acadêmicas em torno do assunto, à página inicial do site.
- `Internet` Conexão com o ambiente servidor, utilizando-se dos protocolos TCP/IP e dos métodos HTTP para o acesso aos conteúdos do site.
