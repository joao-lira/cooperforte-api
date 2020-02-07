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
	<summary>
		Quando criar um componente
    </summary>
    _Faça duas perguntas a si mesmo, se a resposta de ambas for SIM. Crie!_
    * 1° Meu código repetiu mais de 2 vezes?
    * 2° Este trecho de código pode ser reutilizado no projeto?
</details>

<details>
	<summary>
		Estrutura de um componente
    </summary>
    _Lembre-se de incluir um comentário no início do seu componente, explicando a finalidade e no final do arquivo deixe um exemplo de uso_

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
 * Exemplo de uso:
import Button from '~/components/generic-components/Button'
<Button
  title="Cadastrar"
  bgColor="Styles.bgSuccess"
/>
 */

```
</details>

#### Quando criar um componente
_Faça duas perguntas a si mesmo, se a resposta de ambas for SIM. Crie!_
* 1° Meu código repetiu mais de 2 vezes?
* 2° Este trecho de código pode ser reutilizado no projeto?


#### Estrutura que o componente deve ter



asdf


adsf



