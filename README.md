# Arqprefix - React Native

> _Arqprefix nada mais é que, utilizar prefixos para empacotar suas jornadas/módulos/pacotes/componentes e etc..._

Objetivos

- Ser simples :) (fundamental)
- Ter a menor curva para a sintonia de novos devs com o time
- Pense no próximo (sabemos que você é fera! Mas, outros devs vão entender o que vc produziu?)
- Clean Code de ponta-a-ponta <3

Com a Arqprefix aplicada você terá este resultado.

```
IMAGEM AQUI
```

_Com um simples <code>ctrl + p</code> | <code>command + p</code> no vs code, você enxerga a sua jornada de ponta a ponta_

#### Estrutura do projeto a partir da pasta src

#### Mão na massa!

<details>
  <summary>Entenda a estrutura</summary>
  
  > Regra - diretórios/pastas sempre em minúsculo, e componentes/arquivos com inicial maiúscula

![](/images/project.png)

</details>

<details>
  <summary>Rotas</summary>
  
```javascript
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Routes
import DrawerHome from '~/router/navigators-drawer/DrawerHome'
import Stack from '~/router/navigators-stack/Stack'
import TabsHome from '~/router/navigators-tab/TabsHome'

const createRootNavigator = (userLogged = false) =>
createAppContainer(
createStackNavigator(
{
DrawerHome,
Stack,
TabsHome
},
{
initialRouteName: userLogged ? 'TabsHome' : 'DrawerHome',
defaultNavigationOptions: {
gesturesEnabled: true
},
headerMode: 'none'
}
)
)

export default createRootNavigator

````
</details>

<details>
<summary>Criando uma view</summary>

> Regra - diretórios/pastas sempre em minúsculo, e componentes/arquivos com inicial maiúscula

Botão direito na pasta pages <code>new file</code> e digite profile/Profile.js

- profile (é o diretório)
- Profile.js (é o componente)


```javascript
import React from 'react'

// Components
import Icon from '~/components/generic-components/icon/Icon'
import Medipreco from '~/components/generic-components/medipreco/Medipreco'
import Colors from '~/styles'

const TabIcon = ({ tintColor }) => (
  <Icon antDesign name="home" size={20} color={tintColor} />
)

Home.navigationOptions = {
  tabBarIcon: TabIcon,
  title: 'Início'
}

export default function Home() {
  return (
    <Medipreco
      title="Olá, João!"
      subtitle="Guará 1, QI 1 Bloco T, apto 103"
      showHeader
      showHeaderDefault
      enableContainer
      ligthContent
      backgroundStatusBar={Colors.WHITE}
      backgroundColor={Colors.WHITE}
      scrollEnabled={false}>

      {/* JSX aqui */}

    </Medipreco>
  )
}

```

</details>

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
import React from 'react'
import { View, Text } from 'react-native'

/**
* Comentário sobre a finalidade do componente aqui
*/
export default function Button({ title, bgColor }) {
return (
  <View>
    <Text style={bgColor}>{title}</Text>
  </View>
)
}

/**
Exemplo de uso:
import Button from '~/components/generic-components/Button'
<Button
title="Cadastrar"
bgColor="Styles.bgSuccess"
/>
*/
````

</details>

<details>
  <summary>Componente avançado</summary>
  <br/>

> _Importante! Inclua um comentário no início do seu componente explicando sua finalidade. E, no final do arquivo deixe um exemplo de uso_

</details>
