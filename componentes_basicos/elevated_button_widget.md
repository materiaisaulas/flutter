#### Widget ElevatedButton

O `ElevatedButton` é um widget utilizado para representar botões com elevação no Flutter, seguindo o padrão do Material Design. Ele já combina, em um único componente, aparência visual e comportamento interativo, sendo uma forma direta e padronizada de implementar ações na interface.

Diferente da abordagem anterior com `Container` e `InkWell`, onde era necessário construir manualmente a estrutura visual e a interação, o `ElevatedButton` já fornece esses recursos de forma integrada. Isso reduz a complexidade do código e garante consistência visual em toda a aplicação.

A variação `ElevatedButton.icon` permite incluir um ícone junto ao texto, facilitando a comunicação visual e tornando o botão mais intuitivo.

```dart
// /lib/widgets/elevated_button_widget.dart
import 'package:flutter/material.dart';

class ElevatedButtonWidget extends StatelessWidget {
  const ElevatedButtonWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton.icon(
      onPressed: () {
        debugPrint("Botão pressionado");
      },

      icon: const Icon(Icons.touch_app),

      label: const Text(
        "ElevatedButton",
        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
      ),

      style: ElevatedButton.styleFrom(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        elevation: 4,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      ),
    );
  }
}
```

#### Explicação do código

O `ElevatedButton.icon` é uma variação do botão que já organiza automaticamente um ícone e um texto. A propriedade `onPressed` define a ação executada quando o botão é pressionado. No exemplo, foi utilizado `debugPrint`, que exibe mensagens no console durante o desenvolvimento, sendo útil para testes e depuração.

A propriedade `icon` define o ícone exibido à esquerda do texto. Neste caso, foi utilizado `Icons.touch_app`, um ícone da biblioteca Material que representa interação por toque. Já a propriedade `label` define o conteúdo textual do botão, substituindo o uso tradicional da propriedade `child`.

A propriedade `style` permite customizar a aparência do botão por meio do método `ElevatedButton.styleFrom`. O `padding` controla o espaçamento interno do botão, influenciando diretamente sua área clicável. O `backgroundColor` define a cor de fundo, enquanto o `foregroundColor` define a cor dos elementos internos, como texto e ícone.

A propriedade `elevation` controla a altura visual do botão, criando uma sombra que transmite sensação de profundidade. Já a propriedade `shape` permite definir o formato do botão, sendo utilizado `RoundedRectangleBorder` para aplicar cantos arredondados, mantendo coerência com os exemplos anteriores.

