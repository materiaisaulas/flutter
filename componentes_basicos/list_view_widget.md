#### ListView (com children)

O `ListView` é um widget utilizado para exibir uma lista de elementos com suporte a rolagem. Na sua forma mais simples, ele recebe uma lista de widgets por meio da propriedade `children`, sendo indicado para situações onde a quantidade de itens é pequena e conhecida previamente.

Diferente do `Column`, o `ListView` permite que o conteúdo ultrapasse a área visível da tela, oferecendo rolagem automática. Isso evita erros de overflow e torna a interface mais adaptável a diferentes quantidades de conteúdo.

```dart id="9n1x6k"
import 'package:flutter/material.dart';

class ListViewWidget extends StatelessWidget {
  const ListViewWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(16),

      children: const [
        ListTile(leading: Icon(Icons.person), title: Text("Usuário 1")),

        ListTile(leading: Icon(Icons.person), title: Text("Usuário 2")),

        ListTile(leading: Icon(Icons.person), title: Text("Usuário 3")),

        ListTile(leading: Icon(Icons.person), title: Text("Usuário 4")),

        ListTile(leading: Icon(Icons.person), title: Text("Usuário 5")),
      ],
    );
  }
}
```

#### Explicação do código

O `ListView` organiza seus elementos em uma lista vertical com rolagem automática. A propriedade `children` recebe uma lista de widgets que serão exibidos sequencialmente. Neste exemplo, foram utilizados `ListTile`, que são componentes prontos para representar itens de lista com ícone e texto.

A propriedade `padding` adiciona espaçamento interno ao redor da lista, melhorando a organização visual e evitando que os elementos fiquem colados nas bordas da tela.

Todos os itens definidos em `children` são construídos imediatamente quando o widget é renderizado. Isso torna essa abordagem simples e adequada para listas pequenas, porém menos eficiente para grandes quantidades de dados.

:::note Ponto conceitual importante

O `ListView`:

* não aumenta o tamanho da tela
* não “estende” o layout

Ele **permite que o conteúdo ultrapasse a área visível e fornece rolagem**

O `ListView` com `children` é a forma mais simples de criar listas no Flutter, sendo ideal para cenários com poucos elementos. Ele resolve limitações do `Column` ao permitir rolagem automática, garantindo que o conteúdo possa ser acessado mesmo quando excede o espaço disponível na tela.
:::


#### ListView.builder

O `ListView.builder` é uma forma eficiente de construir listas no Flutter quando há uma grande quantidade de elementos ou quando os dados são gerados dinamicamente. Diferente do `ListView` com `children`, onde todos os itens são criados de uma vez, o `builder` cria os elementos sob demanda, ou seja, apenas quando eles precisam aparecer na tela.

Esse comportamento melhora significativamente o desempenho da aplicação, pois evita a criação desnecessária de widgets que ainda não são visíveis.

```dart id="8f2k3d"
import 'package:flutter/material.dart';

class ListViewBuilderWidget extends StatelessWidget {
  const ListViewBuilderWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      padding: const EdgeInsets.all(16),

      itemCount: 20,

      itemBuilder: (context, index) {
        return ListTile(
          leading: const Icon(Icons.person),
          title: Text("Usuário ${index + 1}"),
        );
      },
    );
  }
}
```

#### Explicação do código

O `ListView.builder` utiliza a propriedade `itemBuilder`, que é uma função responsável por construir cada item da lista conforme necessário. Essa função recebe dois parâmetros: o `context` e o `index`. O `index` representa a posição do item na lista, permitindo gerar conteúdo dinâmico.

A propriedade `itemCount` define a quantidade total de itens que a lista deve possuir. Isso é importante para que o `ListView` saiba até onde deve gerar elementos.

Diferente da versão com `children`, os itens não são criados todos de uma vez. Apenas os elementos visíveis na tela são renderizados inicialmente. À medida que o usuário rola a lista, novos itens são criados e os antigos podem ser descartados da memória. Esse comportamento torna o `ListView.builder` mais eficiente e adequado para listas grandes.

O uso do `ListTile` continua sendo uma forma prática de representar itens de lista, combinando ícone e texto de maneira padronizada.

#### Comparação direta

| Tipo             | Comportamento       |
| ---------------- | ------------------- |
| ListView         | cria todos os itens |
| ListView.builder | cria sob demanda    |

:::note Lembre-se da regra

O `ListView.builder` é a abordagem recomendada para listas dinâmicas e grandes volumes de dados, pois constrói os elementos conforme necessário, garantindo melhor desempenho e uso eficiente de memória. Ele mantém o comportamento de rolagem do `ListView`, mas com uma estratégia de construção mais otimizada.
:::