/*5. Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
   retornar a string:

> "Olá, eu sou [NOME COMPLETO], tenho [IDADE] anos, minha é [ALTURA] e só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:

- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
  palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
  deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
  método), que será concatenada com a frase de retorno, mostrando a resposta
  correta, de acordo com os dados inseridos no objeto.*/
  
  const readlineSync = require ('readline-Sync')

  let person ={
      fullName: "Jose da Silva",
      age: "20",
      height: "1.85",
      metersWalkedInTheDay: "13",

  apresentation: function () {

    if (person.age === 1){
    let ageSingular = ano

    }else ageSingular = anos

    if (person.metersWalkedInTheDay === 1){
        let walking = metro
    
    }else walking = metros 

    

    return "Olá, eu sou " + person.fullName + ", tenho " + person.age + " " + ageSingular+ ", minha é " + pessoa.altura + " e só hoje, eu já caminhei " + person.metersWalkedInTheDay  + " " + walking + " !"

  }
  
  };
  pessoa.apresentation();