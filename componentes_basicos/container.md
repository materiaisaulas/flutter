#### Widget Container

O `Container` é um dos widgets mais utilizados no Flutter, sendo responsável por representar um bloco visual retangular que pode ser estilizado e organizado de diversas formas. Ele funciona como um elemento versátil capaz de controlar dimensões, cores, espaçamentos e posicionamento de outros widgets.

Do ponto de vista conceitual, o `Container` permite atuar em três aspectos principais do layout: o controle de tamanho (largura e altura), o controle de espaçamento (interno e externo) e a definição de aparência visual (como cor de fundo). Além disso, ele pode conter um único filho (`child`), organizando e posicionando esse conteúdo dentro de sua área.

Entre suas propriedades mais importantes, destacam-se: `width` e `height`, que definem o tamanho do container; `color`, que estabelece sua cor de fundo; `padding`, que define o espaçamento interno entre o conteúdo e suas bordas; `margin`, que define o espaçamento externo em relação a outros elementos; e `alignment`, que controla o posicionamento do conteúdo interno.

```dart
Container(
  margin: const EdgeInsets.only(top: 16, left: 40, right: 20),
  color: Colors.yellow,
  width: 200,
  height: 200,
  padding: const EdgeInsets.all(15),
  child: Container(
    color: Colors.blue.shade200,
    alignment: Alignment.center,
    child: const Text(
      "Container",
      style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
    ),
  ),
)
```

#### Explicação do código

O container externo define a estrutura principal do layout. As propriedades `width: 200` e `height: 200` estabelecem um tamanho fixo, o que significa que ele passa a limitar o espaço disponível para seu conteúdo interno. Esse é um conceito importante: ao definir dimensões explícitas, o container impõe restrições ao seu filho, que deve se adaptar ao espaço disponível.

A propriedade `margin` utiliza a classe `EdgeInsets`, responsável por definir espaçamentos. O método `only` permite especificar valores individualmente para cada lado do container, como `top`, `left` e `right`. A margem atua externamente, afastando o container de outros elementos ou dos limites da tela, sem interferir diretamente no conteúdo interno.

:::imgtext ../flutter/componentes_basicos/imgs/container.png

Já o `padding`, definido por `EdgeInsets.all(15)`, cria um espaçamento interno uniforme em todos os lados. Diferente da margem, o padding reduz a área útil disponível para o conteúdo, pois estabelece uma distância entre a borda do container e seu filho. Dessa forma, embora o container tenha dimensões de 200 por 200 pixels, o espaço interno efetivo será menor devido ao padding aplicado.

A propriedade `color: Colors.yellow` define a cor de fundo do container principal, permitindo visualizar claramente sua área total. Dentro dele, há um segundo `Container`, que representa o conteúdo interno. Esse container não possui tamanho definido, portanto ele ocupa o espaço disponível dentro do container pai, respeitando as restrições impostas pelo tamanho e pelo padding.

O container interno utiliza a cor `Colors.blue.shade200`, o que evidencia visualmente a área ocupada pelo conteúdo após a aplicação do padding. A propriedade `alignment: Alignment.center` centraliza o widget filho dentro desse espaço.

:::
Por fim, o widget `Text` exibe o conteúdo textual, com uma estilização simples definida por `TextStyle`, incluindo tamanho da fonte e peso. Esse texto está centralizado devido ao alinhamento aplicado no container pai.

:::note Conceitos abordados

O exemplo demonstra três conceitos fundamentais no uso do `Container`: a definição de tamanho e sua influência sobre o filho, a distinção entre margem (espaço externo) e padding (espaço interno), e o uso do `EdgeInsets` como mecanismo para controlar esses espaçamentos de forma precisa. Esses elementos formam a base para a construção de layouts mais complexos no Flutter.
:::