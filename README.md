# Bem-vinda(o) a Arqprefix

Objetivo: Ter a menor curva possível para a sintonia de novos devs com o time, seja você júnior, pleno, sênior, brabo ou brabíssimo.

Veja o que a Arqprefix te traz como resultado.

-- _Este é o resultado que a Arqprefix traz, você conseguir abstrair que, todos os módulos do seu app são, na verdade, uma única jornada._

#### Estrutura do projeto a partir da pasta src

```
project
│   README.md
│   file001.txt
│
└───folder1
│   │   file011.txt
│   │   file012.txt
│   │
│   └───subfolder1
│       │   file111.txt
│       │   file112.txt
│       │   ...
│
└───folder2
    │   file021.txt
    │   file022.txt
```

## Componentes

<details>
  <summary>Componente avançado</summary>
  
  ##### Faça duas perguntas a si mesmo, se a resposta de ambas for sim. Crie!
  1. Meu código repetiu mais de 2 vezes?
  2. Este trecho de código pode ser reutilizado no projeto?
</details>

<details>
  <summary>Estrutura de um componente</summary>
  <br />

> _Importante! Inclua um comentário no início do seu componente explicando sua finalidade. E, no final do arquivo deixe um exemplo de uso_

```javascript
import React from "react";
import { View, Text } from "react-native";

/**
 * Comentário sobre a finalidade do componente aqui
 */
export default function Button({ title, bgColor }) {
  return (
    <View>
      <Text style={bgColor}>{title}</Text>
    </View>
  );
}

/**
Exemplo de uso:
import Button from '~/components/generic-components/Button'
<Button
 title="Cadastrar"
 bgColor="Styles.bgSuccess"
/>
*/
```

</details>

<details>
  <summary>Componente avançado</summary>
  <br/>

> _Importante! Inclua um comentário no início do seu componente explicando sua finalidade. E, no final do arquivo deixe um exemplo de uso_

</details>
