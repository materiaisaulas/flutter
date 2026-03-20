#### Expanded

O `Expanded` é um widget utilizado em conjunto com layouts flexíveis, como `Row` e `Column`, com a finalidade de distribuir o espaço disponível entre seus filhos. Ele atua no eixo principal do layout (horizontal no `Row` e vertical no `Column`), fazendo com que os widgets envolvidos ocupem o espaço restante de forma controlada.

Diferente de um widget comum, que ocupa apenas o espaço necessário para seu conteúdo, o `Expanded` força seu filho a se expandir e preencher a área disponível. Esse comportamento é essencial para evitar problemas de layout, como o overflow, especialmente quando múltiplos elementos precisam compartilhar o mesmo espaço.

Além disso, o `Expanded` permite controlar a proporção de espaço ocupado por cada elemento por meio da propriedade `flex`. Essa propriedade define como o espaço disponível será dividido entre os widgets, possibilitando layouts equilibrados ou proporcionais conforme a necessidade.

```dart
import 'package:flutter/material.dart';

class ExpandedWidget extends StatelessWidget {
  const ExpandedWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [

        Expanded(
          flex: 1,
          child: Container(
            height: 80,
            color: Colors.blue,
            alignment: Alignment.center,
            child: const Text("1"),
          ),
        ),

        Expanded(
          flex: 2,
          child: Container(
            height: 80,
            color: Colors.green,
            alignment: Alignment.center,
            child: const Text("2"),
          ),
        ),

        Expanded(
          flex: 1,
          child: Container(
            height: 80,
            color: Colors.red,
            alignment: Alignment.center,
            child: const Text("1"),
          ),
        ),
      ],
    );
  }
}
```

#### Explicação do código

O `Expanded` é utilizado como filho direto do `Row`, envolvendo os widgets que devem ocupar o espaço disponível. Cada `Expanded` contém um `Container`, que neste exemplo é utilizado para evidenciar visualmente a distribuição do espaço.

A propriedade `flex` define a proporção de espaço que cada elemento ocupará. No exemplo, os valores `1`, `2` e `1` indicam que o espaço total será dividido em quatro partes. O segundo elemento ocupa duas partes, enquanto os demais ocupam uma parte cada, resultando em uma distribuição proporcional.

Ao utilizar o `Expanded`, os widgets deixam de ocupar apenas o espaço necessário e passam a preencher toda a largura disponível do `Row`. Isso evita problemas de layout e garante uma distribuição equilibrada dos elementos.

:::note Conceito geral

O `Expanded` é um widget fundamental para controle de espaço em layouts flexíveis, permitindo que elementos se ajustem automaticamente ao espaço disponível e sejam distribuídos de forma proporcional. Seu uso é essencial para construção de interfaces organizadas, responsivas e livres de overflow.
:::