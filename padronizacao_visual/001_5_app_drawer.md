#### app_drawer.dart 

O código apresentado define um componente chamado `AppDrawer`, cujo objetivo é implementar um **menu lateral reutilizável** para a aplicação. Esse menu é utilizado para navegação entre telas e segue o padrão conhecido como “hamburger menu”. A classe herda de `StatelessWidget`, o que indica que seu conteúdo é estático e não depende de mudanças de estado. Dentro do método `build`, é definida uma lista chamada `menuItems`, que armazena os itens do menu em formato de dados (mapas contendo `title` e `route`). Essa abordagem separa os dados da interface, permitindo que o menu seja gerado dinamicamente, facilitando manutenção e escalabilidade.

O widget principal utilizado é o `Drawer`, que representa um painel lateral que pode ser aberto a partir da borda da tela. Ele é geralmente associado ao `Scaffold` por meio da propriedade `drawer`. Sua principal propriedade é o `child`, que define o conteúdo exibido dentro do menu. O `Drawer` não define como os itens serão organizados, apenas fornece a estrutura lateral; por isso, ele normalmente é combinado com outros widgets, como listas ou colunas, para organizar seus elementos internos.

Dentro do `Drawer`, foi utilizado o widget `ListView`, responsável por organizar seus filhos em uma lista vertical com suporte a rolagem. Isso é essencial para menus, pois garante que todos os itens permaneçam acessíveis mesmo quando a quantidade de opções cresce. A principal propriedade do `ListView` é `children`, que recebe uma lista de widgets a serem exibidos. No código, essa lista é composta por um `DrawerHeader` e por uma sequência de `ListTile` gerados dinamicamente.

O `DrawerHeader` é um widget específico para a área superior do menu, normalmente utilizado para exibir título, identidade visual ou informações do usuário. Sua principal propriedade é `child`, que define o conteúdo interno, neste caso um widget `Text` com o título do menu. Ele ajuda a organizar visualmente o menu, separando o cabeçalho dos itens de navegação.

A geração dos itens do menu é feita por meio da expressão `...menuItems.map((item) { ... })`. O método `map` percorre a lista `menuItems` e transforma cada elemento em um novo widget, neste caso um `ListTile`. O operador `...` (spread operator) é utilizado para “expandir” o resultado do `map` dentro da lista de `children`, permitindo inserir múltiplos widgets de forma dinâmica. Cada `item` da lista é um mapa, e seus valores são acessados por meio das chaves `title` e `route`.

O widget `ListTile` representa cada opção do menu. Ele é um componente padrão para listas interativas e possui propriedades como `title`, que define o texto exibido, e `onTap`, que define a ação executada ao tocar no item. No código, o `onTap` utiliza `Navigator.pushNamed`, que realiza a navegação para a rota definida em `item['route']`. Isso integra o menu com o sistema de rotas da aplicação, permitindo que cada item leve o usuário para uma tela diferente.

De forma geral, esse código demonstra uma abordagem moderna e escalável para construção de menus em Flutter, baseada na geração dinâmica de interface a partir de dados. Isso evita repetição de código, facilita a inclusão de novos itens e prepara o sistema para evoluções futuras, como menus configurados por arquivos externos ou APIs.


```dart
// lib/shared/widgets/app_drawer.dart

import 'package:flutter/material.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    final menuItems = [
      {'title': 'Home', 'route': '/'},
    ];

    return Drawer(
      child: ListView(
        children: [
          const DrawerHeader(child: Text('Menu de Exemplos')),
          ...menuItems.map((item) {
            return ListTile(
              title: Text(item['title']!),
              onTap: () {
                Navigator.pushNamed(context, item['route']!);
              },
            );
          }),
        ],
      ),
    );
  }
}
```