#### SizedBox

O `SizedBox` é um widget utilizado para definir dimensões fixas ou criar espaçamentos entre elementos na interface. Ele não possui conteúdo visual próprio, sendo utilizado principalmente como um elemento estrutural de layout.

Diferente de propriedades como `padding` e `margin`, que estão associadas a um widget específico, o `SizedBox` atua como um componente independente, podendo ser inserido diretamente entre outros widgets para controlar o espaço entre eles. Isso o torna uma solução simples e clara para organizar elementos na tela.

```dart id="2q5p0a"
SizedBox(height: 16)
```

#### Explicação do código

No exemplo apresentado, o `SizedBox` define um espaço vertical fixo de 16 pixels. Quando utilizado dentro de um `Column`, esse valor representa a distância entre dois elementos empilhados verticalmente.

O `SizedBox` pode definir tanto altura quanto largura, dependendo do contexto. Em um `Column`, o mais comum é utilizar a propriedade `height` para criar espaçamento vertical. Já em um `Row`, utiliza-se `width` para criar espaçamento horizontal.

Por não possuir conteúdo visual, o `SizedBox` funciona como um “espaçador”, permitindo controlar a organização do layout de forma explícita e previsível.


| Recurso  | Função                      |
| -------- | --------------------------- |
| Padding  | Espaço interno de um widget |
| Margin   | Espaço externo de um widget |
| SizedBox | Espaço entre widgets        |


:::note Conteito

O `SizedBox` é um widget simples e essencial para controle de espaçamento no Flutter. Ele permite organizar elementos de forma clara, criando separações visuais consistentes sem a necessidade de alterar propriedades de outros widgets. Seu uso é uma prática comum e recomendada na construção de layouts bem estruturados.
:::
