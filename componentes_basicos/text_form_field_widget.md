#### TextFormField

O `TextFormField` é um widget utilizado para entrada de dados pelo usuário, sendo uma versão mais completa do `TextField`. Ele permite configurar diferentes tipos de entrada, como texto, número, email e senha, além de oferecer suporte a validação e integração com formulários. Seu principal papel é capturar informações digitadas pelo usuário de forma estruturada e controlada.

Para organizar múltiplos campos de entrada em uma única interface, é necessário utilizar um widget de layout que permita dispor esses elementos de forma ordenada. Nesse contexto, o `Column` é utilizado para organizar os campos verticalmente, criando uma sequência lógica de preenchimento, como em formulários reais.


```dart
import 'package:flutter/material.dart';

class TextFormFieldWidget extends StatelessWidget {
  const TextFormFieldWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          TextFormField(
            decoration: const InputDecoration(
              labelText: "Email",
              prefixIcon: Icon(Icons.email),
              border: OutlineInputBorder(),
            ),
            keyboardType: TextInputType.emailAddress,
          ),
          const SizedBox(height: 16),
          TextFormField(
            decoration: const InputDecoration(
              labelText: "Senha",
              prefixIcon: Icon(Icons.lock),
              border: OutlineInputBorder(),
            ),
            obscureText: true,
          ),
          const SizedBox(height: 16),
          TextFormField(
            decoration: const InputDecoration(
              labelText: "Data",
              prefixIcon: Icon(Icons.calendar_today),
              border: OutlineInputBorder(),
            ),
            keyboardType: TextInputType.datetime,
          ),
          const SizedBox(height: 16),
          TextFormField(
            decoration: const InputDecoration(
              labelText: "Telefone",
              prefixIcon: Icon(Icons.phone),
              border: OutlineInputBorder(),
            ),
            keyboardType: TextInputType.phone,
          ),
          const SizedBox(height: 16),
          TextFormField(
            decoration: const InputDecoration(
              labelText: "Número",
              prefixIcon: Icon(Icons.numbers),
              border: OutlineInputBorder(),
            ),
            keyboardType: TextInputType.number,
          ),
        ],
      ),
    );
  }
}
```

#### Explicação do código

O widget `Padding` é utilizado para criar um espaçamento externo em torno do conjunto de campos, evitando que os elementos fiquem colados nas bordas da tela. Isso melhora a legibilidade e a organização visual da interface.

O `Column` é responsável por organizar os widgets filhos em uma disposição vertical. Ele é essencial nesse caso, pois permite empilhar múltiplos `TextFormField`, criando uma estrutura semelhante a um formulário. Sem o `Column`, não seria possível exibir vários campos de forma ordenada dentro de um único widget.

Entre os campos, foi utilizado o `SizedBox` com altura definida (`height: 16`) para criar espaçamento vertical. Esse recurso é uma prática comum para separar elementos e evitar que fiquem visualmente agrupados de forma inadequada.

Cada `TextFormField` representa um tipo diferente de entrada. A propriedade `decoration`, por meio do `InputDecoration`, define a aparência do campo. O `labelText` indica o rótulo do campo, auxiliando o usuário a entender qual informação deve ser inserida. O `prefixIcon` adiciona um ícone à esquerda do campo, melhorando a identificação visual. Já o `border`, definido como `OutlineInputBorder`, cria uma borda ao redor do campo, tornando-o mais evidente na interface.

A propriedade `keyboardType` define o tipo de teclado exibido no dispositivo, adaptando a entrada ao tipo de dado esperado. Por exemplo, `TextInputType.emailAddress` apresenta um teclado otimizado para emails, enquanto `TextInputType.phone` facilita a digitação de números telefônicos.

No campo de senha, a propriedade `obscureText: true` é utilizada para ocultar os caracteres digitados, garantindo maior segurança. Já no campo de data, foi utilizado `TextInputType.datetime`, que apenas ajusta o teclado, não sendo responsável por abrir um seletor de data — esse comportamento deve ser implementado separadamente, conforme discutido anteriormente.

:::note Conceitos abordados

O `TextFormField` é o principal componente para entrada de dados no Flutter, permitindo configurar diferentes tipos de informação por meio de suas propriedades. O uso do `Column` é essencial para organizar múltiplos campos em uma estrutura vertical, enquanto elementos como `Padding` e `SizedBox` contribuem para a organização e espaçamento da interface. Em conjunto, esses widgets permitem construir formulários claros, estruturados e alinhados com boas práticas de usabilidade.
:::