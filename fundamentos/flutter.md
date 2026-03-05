
# StatelessWidget e StatefulWidget

## Introdução

Vamos retomar o exemplo que é gerado automaticamente quando criamos um projeto Flutter utilizando o comando:

```bash
flutter create nome_do_projeto
```

Esse comando cria um projeto inicial contendo uma estrutura básica de aplicativo.

<div style="display:flex; align-items:center; gap:20px;">
<img src="../assets/images/futter_demo.jpg" width="300">
<div>
### Estrutura do Widget

Neste exemplo observamos a estrutura básica de um aplicativo Flutter.

O `StatelessWidget` descreve a interface enquanto o `StatefulWidget`
permite a existência de **estado mutável**.

</div>

</div>

Todo aplicativo Flutter começa pela função `main()`.

Ela é o **ponto de entrada da aplicação** e tem a responsabilidade de inicializar o framework Flutter e executar o **widget raiz** do aplicativo.

```dart
void main() {
  runApp(const MyApp());
}
```

A função `runApp()` recebe um widget e o insere na árvore de widgets da aplicação.

## StatelessWidget

A classe `MyApp` utiliza um **widget imutável**, pois estende `StatelessWidget`.

Isso significa que, depois de construído, esse widget **não possui estado interno mutável**.

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}
```

### Características de um StatelessWidget

Um `StatelessWidget`:

- não possui estado interno mutável
- sua interface depende apenas das **propriedades recebidas**
- sempre que algo precisa mudar, o widget precisa ser **reconstruído**

Em outras palavras:

> A interface de um StatelessWidget é **uma função das propriedades recebidas**.

### Exemplos comuns de StatelessWidget

Alguns widgets comuns que são stateless:

- `Text`
- `Icon`
- `Container`
- `Row`
- `Column`

Esses widgets apenas **descrevem a interface**, mas não armazenam dados que mudam ao longo do tempo.


## Quando precisamos de estado

Muitas interfaces precisam reagir a eventos como:

- cliques
- animações
- contadores
- mudanças de dados
- respostas de APIs

Nesses casos, precisamos de um **widget que possua estado mutável**.

Para isso o Flutter fornece o:

# StatefulWidget

A classe `MyHomePage` utiliza um widget mutável porque estende `StatefulWidget`.

```dart
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}
```

Em Flutter, **estado** é qualquer dado que:
- pode mudar ao longo do tempo
- influencia o que é exibido na interface

Exemplos de estado:
- número de cliques
- texto digitado
- posição de um scroll
- resposta de uma API

O `StatefulWidget` **não armazena diretamente o estado**.

Ele apenas define:

- a **configuração do widget**
- qual classe irá controlar o estado

Isso acontece através do método:

```dart
createState()
```

que retorna a classe responsável por gerenciar o estado.

# Classe State

A classe `_MyHomePageState` é responsável por:

- armazenar o estado
- reagir a interações do usuário
- reconstruir a interface

```dart
class _MyHomePageState extends State<MyHomePage> {

  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('You have pushed the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

## O que é setState()

O método `setState()` informa ao Flutter que o **estado foi alterado**.

```dart
setState(() {
  _counter++;
});
```

Quando `setState()` é executado:

1. o estado é atualizado
2. o Flutter chama novamente o método `build()`
3. a interface é reconstruída

Isso segue o modelo declarativo do Flutter:

> **Interface = função do estado atual**

## Por que o Scaffold fica na classe State

O `Scaffold` define a estrutura visual da tela:

- AppBar
- Body
- FloatingActionButton
- Drawer
- BottomNavigationBar

Como a interface precisa ser reconstruída quando o estado muda, o `Scaffold` precisa estar dentro do método `build()` da classe `State`.

Fluxo simplificado:

```
StatefulWidget
      │
      ▼
createState()
      │
      ▼
State
      │
      ▼
build()
      │
      ▼
Scaffold
```

---

## Acesso às propriedades do widget

A classe `State` pode acessar propriedades do `StatefulWidget` usando:

```dart
widget.propriedade
```

Exemplo:

```dart
title: Text(widget.title)
```

Aqui:

- `widget` é uma referência ao `MyHomePage`
- `title` é a propriedade definida nele

---

## Diagrama conceitual

```mermaid
flowchart TD

A[StatelessWidget] --> B[Interface Imutável]

C[StatefulWidget] --> D[Configuração do Widget]
D --> E[Classe State]
E --> F[Estado Mutável]
F --> G[build()]
G --> H[Scaffold]
```

---

# Comparação StatelessWidget vs StatefulWidget

| Característica | StatelessWidget | StatefulWidget |
|---|---|---|
| Estado interno | Não | Sim |
| Interface muda | Não | Sim |
| Uso comum | Layout estático | Interações e dados dinâmicos |

---

## Regra mental importante

Uma forma simples de entender:

```
StatelessWidget → descrição da interface
StatefulWidget → configuração do widget
State → estado + lógica
```

# Conclusão

O Flutter utiliza uma arquitetura baseada em **widgets imutáveis**.

Quando precisamos de dados mutáveis, utilizamos `StatefulWidget`, que separa:

- **configuração do widget**
- **controle do estado**
- **reconstrução da interface**

Essa separação permite ao Flutter:

- reconstruir interfaces rapidamente
- manter o estado consistente
- garantir alta performance.

