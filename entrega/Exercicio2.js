/*2. Função disco da Xuxa, o retorno.

Use a [documentação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) para determinar quais destes métodos seria o melhor para reverter elementos nesta array:

```javascript
reverseMe = ["h", "e", "l", "l", "o"];
```*/


const readlineSync = require("readline-sync");

const reverseMe = ["h", "e", "l", "l", "o"];
const reversed = reverseMe.reverse()

console.log('reverseMe:', reversed);
