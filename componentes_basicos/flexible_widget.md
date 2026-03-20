#### Flexible

O `Flexible` é um widget utilizado em conjunto com layouts flexíveis, como `Row` e `Column`, permitindo que seus filhos ocupem o espaço disponível de forma adaptativa, mas sem a obrigatoriedade de preenchê-lo completamente, como ocorre com o `Expanded`.

Enquanto o `Expanded` força o widget filho a ocupar todo o espaço disponível, o `Flexible` permite que o widget utilize apenas o espaço necessário, respeitando limites e evitando expansão excessiva. Isso proporciona maior controle sobre o comportamento do layout, especialmente quando nem todos os elementos devem crescer igualmente.

Assim como o `Expanded`, o `Flexible` também utiliza a propriedade `flex` para definir a proporção de espaço disponível que pode ser utilizada, mas com maior flexibilidade no ajuste final do tamanho.

```dart 
import 'package:flutter/material.dart';

class FlexibleWidget extends StatelessWidget {
  const FlexibleWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [

        Flexible(
          flex: 1,
          child: Container(
            height: 80,
            color: Colors.blue,
            alignment: Alignment.center,
            child: const Text("Curto"),
          ),
        ),

        Flexible(
          flex: 2,
          child: Container(
            height: 80,
            color: Colors.green,
            alignment: Alignment.center,
            child: const Text("Texto maior aqui"),
          ),
        ),

        Flexible(
          flex: 1,
          child: Container(
            height: 80,
            color: Colors.red,
            alignment: Alignment.center,
            child: const Text("Curto"),
          ),
        ),
      ],
    );
  }
}
```

#### Explicação do código 

O `Flexible` é utilizado como filho direto do `Row`, assim como o `Expanded`. No entanto, sua principal diferença está no comportamento de ocupação de espaço. Enquanto o `Expanded` força o preenchimento total da área disponível, o `Flexible` permite que o widget se ajuste ao conteúdo, ocupando espaço de forma mais natural.

A propriedade `flex` continua definindo a proporção de espaço disponível, mas o widget não é obrigado a ocupar todo esse espaço, podendo adaptar seu tamanho conforme o conteúdo interno.

No exemplo, os `Container` possuem textos de tamanhos diferentes, e o `Flexible` permite que cada elemento se ajuste melhor ao seu conteúdo, evitando expansões desnecessárias.

Diferença central:

* `Expanded` → ocupa todo o espaço disponível
* `Flexible` → pode ocupar apenas o necessário

:::note Conceito central

O `Flexible` é um widget que oferece maior controle sobre o comportamento de expansão em layouts flexíveis, permitindo que os elementos se ajustem ao conteúdo sem a obrigatoriedade de ocupar todo o espaço disponível. Ele complementa o uso do `Expanded`, sendo útil em cenários onde a expansão total não é desejada.
:::

