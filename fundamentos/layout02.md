#### Layout parte 2 

O `MaterialApp` tem diferentes propriedades, uma delas é a propriedade **`builder`** que permite **interceptar e modificar o layout global da aplicação antes que qualquer página seja exibida**. Ela funciona como um **wrapper global da árvore de widgets**, permitindo envolver todas as telas do aplicativo com algum comportamento ou layout adicional.

A propriedade recebe uma **função** com dois parâmetros:

```dart
builder: (context, child) {
  return Widget;
}
```

| Parâmetro | Significado                                        |
| --------- | -------------------------------------------------- |
| `context` | contexto da aplicação                              |
| `child`   | o widget da rota atual (a página que será exibida) |

O **`child`** representa o conteúdo que o `MaterialApp` normalmente renderizaria, como uma rota definida em `routes`, `home` ou `onGenerateRoute`.


Se não usarmos o `builder`, o Flutter renderiza diretamente a página da rota:

```
MaterialApp
   └── HomePage
```

Com o `builder`, é possível envolver todas as páginas com outros widgets:

```
MaterialApp
   └── builder
        └── Widget personalizado
             └── child (HomePage ou outra rota)
```

# Exemplo simples

```dart
MaterialApp(
  builder: (context, child) {
    return Container(
      color: Colors.grey.shade200,
      child: child,
    );
  },
)
```

Aqui:

1. O `MaterialApp` decide qual página deve ser exibida.
2. Essa página é passada para `child`.
3. O `builder` envolve a página dentro de um `Container`.

A propriedade `builder` é útil quando queremos aplicar **comportamentos globais**, como:

1️⃣ Layout global, Exemplo: centralizar conteúdo ou limitar largura.

2️⃣ SafeArea global, evitar que a interface fique atrás de notch ou barra do sistema.

```dart
builder: (context, child) {
  return SafeArea(child: child!);
}
```
3️⃣ Aplicar temas ou overlays, exemplo: colocar um widget que aparece em todas as páginas.

```
MaterialApp
   └── Overlay / Loader global
   └── child (rotas)
```

4️⃣ Responsividade, comum em **Flutter Web** para criar layouts semelhantes a sites.

#### Diferença entre `home` e `builder`

| Propriedade | Função                                     |
| ----------- | ------------------------------------------ |
| `home`      | define a primeira tela do app              |
| `routes`    | define navegação                           |
| `builder`   | modifica o layout global de todas as telas |

:::info 
O `builder` do `MaterialApp` permite modificar ou envolver todas as telas do aplicativo antes que elas sejam exibidas, funcionando como uma camada global de layout ou comportamento da interface.
:::


#### Combinando builder e LayoutBuilder 

O **`LayoutBuilder`** é um widget do Flutter utilizado quando precisamos **construir a interface com base no espaço disponível na tela**. Ele permite que o layout seja **adaptável (responsivo)**, pois fornece ao widget filho as **restrições de tamanho (`constraints`)** definidas pelo widget pai. Em outras palavras, o `LayoutBuilder` permite **decidir como desenhar a interface dependendo da largura ou altura disponível**.

A estrutura do `LayoutBuilder` possui dois elementos principais:

* **context** – o contexto do widget.
* **constraints** – objeto do tipo `BoxConstraints` que informa o espaço disponível.

Nesse exemplo, o widget recebe a largura máxima disponível e exibe esse valor.

```dart
LayoutBuilder(
  builder: (context, constraints) {
    return Text(
      'Largura disponível: ${constraints.maxWidth}',
    );
  },
)
```

O parâmetro `constraints` contém informações sobre o espaço disponível para o widget, essas informações permitem **adaptar o layout dinamicamente**.

| Propriedade | Significado               |
| ----------- | ------------------------- |
| `maxWidth`  | largura máxima disponível |
| `maxHeight` | altura máxima disponível  |
| `minWidth`  | largura mínima permitida  |
| `minHeight` | altura mínima permitida   |

Um uso comum do `LayoutBuilder` é alterar o layout dependendo do tamanho da tela.

```dart
LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth > 600) {
      return Row(
        children: [
          Expanded(child: Container(color: Colors.blue)),
          Expanded(child: Container(color: Colors.green)),
        ],
      );
    } else {
      return Column(
        children: [
          Container(height: 200, color: Colors.blue),
          Container(height: 200, color: Colors.green),
        ],
      );
    }
  },
)
```

Outro uso é quando ao Comportamento

* **Tela larga (desktop/tablet)** → usa `Row`
* **Tela estreita (mobile)** → usa `Column`

Isso permite criar **interfaces que se adaptam automaticamente ao dispositivo**.


O `LayoutBuilder` é útil quando:

1. O layout depende do **tamanho disponível do widget pai**
2. Precisamos criar **interfaces responsivas**
3. Queremos adaptar a UI para **mobile, tablet e desktop**
4. Precisamos tomar decisões de layout **durante o processo de renderização**


Diferença entre `LayoutBuilder` e `MediaQuery`

| Widget          | O que mede                               |
| --------------- | ---------------------------------------- |
| `MediaQuery`    | tamanho da **tela inteira**              |
| `LayoutBuilder` | espaço **disponível para aquele widget** |

Exemplo:

```dart
MediaQuery.of(context).size.width
```

retorna a largura total da tela.

Já:

```dart
constraints.maxWidth
```

retorna **apenas o espaço disponível naquele ponto da árvore de widgets**.

## Aplicando ao main.dart 


```dart
// lib/main.dart
import 'package:flutter/material.dart';
import 'pages/home_page.dart';
import 'pages/nova_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Exemplo StatefulWidget",
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
      ),

      //***Bloco adicionado ao código do main.dart ******************************
      builder: (context, child) {
        return LayoutBuilder(
          builder: (context, constrains) {
            double maxWidth;
            maxWidth = constrains.maxWidth > 900 ? 900 : constrains.maxWidth;
            return Center(
              child: ConstrainedBox(
                constraints: BoxConstraints(maxWidth: maxWidth),
                child: child,
              ),
            );
          },
        );
      },
      //***********************************************************************

      initialRoute: '/',

      routes: {
        '/': (context) => const HomePage(),
        '/nova': (context) => const NovaPage(),
      },
    );
  }
}
```

O que acontece aqui:

1. O `LayoutBuilder` verifica **a largura disponível da tela**.
2. Se a tela for **maior que 900px**, limita o conteúdo a **900px**.
3. Se for menor, usa **toda a largura disponível**.
4. O `Center` centraliza o conteúdo.
5. O `ConstrainedBox` aplica a restrição de largura.

Resultado:

* **Em telas grandes (web/desktop)** o conteúdo fica centralizado e limitado.
* **Em telas pequenas (mobile)** ocupa toda a largura.

Esse é um padrão comum chamado de **layout com largura máxima**, muito usado em aplicações web.



**Resumo**

`LayoutBuilder` é um widget que:

* fornece as **restrições de layout disponíveis**
* permite criar **interfaces responsivas**
* adapta a UI com base no **tamanho do espaço disponível**
* é mais preciso que `MediaQuery` em layouts complexos.


