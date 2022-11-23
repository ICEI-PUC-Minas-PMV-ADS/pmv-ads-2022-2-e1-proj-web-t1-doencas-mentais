# Programação de Funcionalidades

## O site deve apresentar na página principal um texto acolhedor apresentado o site e os tipos de conteúdo abordado.
Ao acessar o site nos deparamos com um header responsivo que possue uma mensagem acolhedora e 3 botões que levam a um breve resumo de cada transtorno.
![image](https://user-images.githubusercontent.com/98277143/203452066-737b7e52-917b-4df8-88ff-2d381dcfcc9c.png)
Nessa mensagem os botões usam um link com o elemento **Id** para chegar até a parte da página com a breve apresentaçao do transtorno:
![image](https://user-images.githubusercontent.com/98277143/203452327-352bc2a6-f1b5-4652-81e0-2510d8a456ad.png)
Link **#Ansiedade** leva até o Id **Ansiedade.**
![image](https://user-images.githubusercontent.com/98277143/203452373-cff2dafd-53c8-4012-9413-6ab13ba9535d.png)

## O site deve permitir o compartilhamento de notícias e artigos visualizadas em plataformas de redes sociais.
Para o compartilhamento de notícias utilizamos uma simples **div** com função de listas, estilizadas por CSS. A função para compartilhar é um link simples com endereço para o site de destino que é fornecido pelo mesmo em formato em uma API de compartilhamento.
![image](https://user-images.githubusercontent.com/98277143/203453073-00cbeabf-4eb5-471a-84b1-0e2acb6fc368.png)
![image](https://user-images.githubusercontent.com/98277143/203452801-03776ab2-6252-4f22-bd6b-bc44ac5f513d.png)
![image](https://user-images.githubusercontent.com/98277143/203453051-6a041753-75b8-4381-911b-023422e3e1c3.png)
  
Nota-se que para o icone das redes sociais utilizamos a library css Font Awesome, que pode ser referênciada por uma classe em um elento **i**
  
![image](https://user-images.githubusercontent.com/98277143/203453142-e31b5253-f9d1-4a79-911e-7da94b907a78.png)

## O site deve oferecer um campo para cadastro de newsletter pelos usuários.
![image](https://user-images.githubusercontent.com/98277143/203455006-e13110ec-5526-4633-80f6-53c0e81e71d0.png)  

Na navbar utilizamos o **id** newsletter para ativar o javascript com função modal, isso nos permite esconder todo conteúdo do **id** newsletter enquanto ele não for clicado.
  
![image](https://user-images.githubusercontent.com/98277143/203453649-b81a389d-dd8f-436c-8a01-014413a899eb.png)
![image](https://user-images.githubusercontent.com/98277143/203453807-73c2c55c-db4f-43a6-883d-bb194d4c312b.png)
  
Por meio de um querySelector atribuimos a id #newsletter a variavél openBtn e a classe .close-btn a variável closeBtn, quando o usuário clicar no link com a id #newsletter a função javascript addEventListener é ativada e muda a propriedade de **display: none;** da classe .modal para **display: block;** e o inverso é feito quando usuário clicar no item com a classe css .close-btn (O X no canto superior do newsletter). É inserido no addEventListener também a opção do usuário clicar fora da área do popup do newsletter para fecha-lo por meio da função window, que identifica se o clique foi feito fora da área da classe .modal.
  
![image](https://user-images.githubusercontent.com/98277143/203454125-f77d7df1-46bf-4797-a2ca-2aea93f8e692.png)
 
