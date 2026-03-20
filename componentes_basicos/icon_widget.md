#### Icon

O `Icon` é um widget utilizado para exibir elementos gráficos simples na interface, geralmente representando ações, estados ou funcionalidades. Ele faz parte do conjunto de ícones do Material Design e é amplamente utilizado em botões, barras de navegação, listas e diversos outros componentes.

Diferente de imagens complexas, o `Icon` é baseado em fontes vetoriais, o que significa que pode ser redimensionado sem perda de qualidade. Além disso, ele é altamente configurável, permitindo ajustes de tamanho, cor e estilo de forma simples.

O `Icon` é um widget independente, podendo ser utilizado isoladamente ou combinado com outros widgets, como no caso do `ElevatedButton.icon`. Isso reforça o conceito de composição no Flutter, onde interfaces são construídas a partir da combinação de pequenos componentes reutilizáveis.

```dart
Icon(Icons.touch_app)
```

#### Explicação do código

O widget `Icon` recebe como parâmetro principal um valor da classe `Icons`, que representa um ícone pré-definido do Material Design. No exemplo, `Icons.touch_app` representa um ícone associado à interação por toque.

A classe `Icons` funciona como um catálogo de ícones prontos para uso, permitindo acesso rápido a diferentes representações visuais sem necessidade de importar imagens externas.

#### Propriedades

```dart
Icon(
  Icons.touch_app,
  size: 30,
  color: Colors.blue,
)
```

A propriedade `size` define o tamanho do ícone em pixels lógicos. Isso permite ajustar a escala do elemento de acordo com o contexto da interface.

A propriedade `color` define a cor do ícone. Caso não seja informada, o ícone herda automaticamente a cor do tema ou do widget pai, como ocorre em botões.

