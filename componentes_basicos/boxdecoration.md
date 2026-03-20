#### BoxDecoration

O `BoxDecoration` é um recurso utilizado para definir a aparência visual de um `Container` de forma mais avançada. Enquanto a propriedade `color` permite apenas a definição de uma cor de fundo simples, o `BoxDecoration` amplia significativamente as possibilidades visuais, permitindo adicionar bordas, cantos arredondados e sombras. Ele é aplicado por meio da propriedade `decoration` do `Container`, sendo a abordagem correta sempre que se deseja maior controle estético.

Neste exemplo, o uso do `BoxDecoration` substitui completamente a necessidade de múltiplos containers para estilização. Diferente do exemplo anterior, onde havia um container adicional para representar o conteúdo interno, aqui optou-se por **remover o container filho**, concentrando toda a responsabilidade visual em um único componente. Essa decisão simplifica a estrutura e torna mais evidente o papel do `BoxDecoration`.

```dart
Container(
  width: 200,
  height: 200,
  margin: const EdgeInsets.only(top: 16, left: 40, right: 20),
  padding: const EdgeInsets.all(15),
  decoration: BoxDecoration(
    color: Colors.yellow,
    borderRadius: BorderRadius.circular(12),
    border: Border.all(color: Colors.blue, width: 2),
    boxShadow: [
      BoxShadow(
        color: Colors.black.withValues(alpha: 0.2),
        blurRadius: 8,
        spreadRadius: 2,
        offset: const Offset(4, 4),
      ),
    ],
  ),
  alignment: Alignment.center,
  child: const Text(
    "BoxDecoration",
    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
  ),
)
```

#### Explicação do código

A propriedade `decoration` recebe um objeto do tipo `BoxDecoration`, que é responsável por definir o estilo visual do container. A propriedade `color` dentro do `BoxDecoration` estabelece a cor de fundo do componente, substituindo o uso direto da propriedade `color` do `Container`.

A propriedade `borderRadius` define o arredondamento dos cantos. No exemplo, `BorderRadius.circular(12)` cria bordas suavemente arredondadas, o que é amplamente utilizado em interfaces modernas para tornar os elementos mais agradáveis visualmente.

A propriedade `border` adiciona uma borda ao redor do container. O método `Border.all` permite definir uma borda uniforme em todos os lados, especificando sua cor e espessura. Nesse caso, foi utilizada uma borda azul com largura de 2 pixels, o que ajuda a destacar visualmente o componente.

A propriedade `boxShadow` adiciona sombra ao container, criando uma sensação de profundidade. Ela recebe uma lista de objetos `BoxShadow`, mesmo que apenas um seja utilizado. Cada sombra é configurada com diferentes parâmetros: `color` define a cor da sombra com transparência, `blurRadius` controla o nível de desfoque (quanto maior, mais suave), `spreadRadius` define a expansão da sombra, e `offset` determina o deslocamento nos eixos horizontal e vertical, simulando a direção da luz.

A utilização de `withValues(alpha: 0.2)` define a transparência da sombra de forma mais precisa, substituindo métodos antigos como `withOpacity`.

:::note Conceitos abordados

Neste exemplo, o `BoxDecoration` centraliza toda a definição visual do componente, eliminando a necessidade de múltiplos containers. Isso torna o código mais simples e evidencia o papel do `Container` como estrutura e do `BoxDecoration` como responsável pela aparência. O uso combinado de cor, borda, arredondamento e sombra demonstra como é possível construir elementos visuais mais ricos e próximos de interfaces reais utilizando apenas um único widget.
:::

:::info

O `alignment` é uma propriedade utilizada para definir o posicionamento do conteúdo interno de um widget, como o `Container`. Ele determina onde o widget filho (`child`) será colocado dentro da área disponível. Por padrão, quando o `alignment` não é definido, o comportamento pode variar dependendo do contexto e das restrições de layout, o que pode gerar dúvidas. Por isso, ao utilizar `alignment`, o posicionamento passa a ser explícito e controlado.

No contexto do `Container`, o `alignment` atua sobre o espaço interno disponível após a aplicação do `padding`. Isso significa que o conteúdo não é posicionado em relação à borda externa do container, mas sim dentro da área útil interna. Dessa forma, o `alignment` trabalha em conjunto com o `padding`: enquanto o padding cria o espaço interno, o alignment define onde o conteúdo ficará dentro desse espaço.

A propriedade `alignment` recebe um valor do tipo `Alignment`, que representa posições relativas dentro do container. O ponto `(0, 0)` corresponde ao centro do container, enquanto os extremos variam entre `-1` e `1` nos eixos horizontal e vertical. Por exemplo, `Alignment.center` posiciona o conteúdo exatamente no centro; `Alignment.topLeft` posiciona no canto superior esquerdo; e `Alignment.bottomRight` posiciona no canto inferior direito. Esses valores representam um sistema de coordenadas normalizado, onde o centro é a referência principal.

Além dos valores pré-definidos, como `center`, `topLeft`, `topRight`, `bottomLeft` e `bottomRight`, também é possível criar alinhamentos personalizados utilizando `Alignment(x, y)`, onde `x` representa o eixo horizontal e `y` o eixo vertical. Valores negativos deslocam o conteúdo para a esquerda ou para cima, enquanto valores positivos deslocam para a direita ou para baixo.

:::