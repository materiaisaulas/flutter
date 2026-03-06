## Stateless

Vamos retomar o exemplo que aparece quando criamos um projeto Flutter utilizando o comando: flutter create nome_do_projeto

Esse comando gera automaticamente um projeto inicial com uma estrutura básica de aplicativo.

Todo aplicativo Flutter começa pela função `main()`.  
Ela é o ponto de entrada da aplicação e é responsável por inicializar o framework e executar o widget raiz do aplicativo.

```dart
void main() {
  runApp(const MyApp());
}
```

A classe MyApp usa um **widget imutável**. Isso significa que, após ser construído, ele não possui estado interno que possa ser alterado. Assim, interações do usuário — como cliques em botões, alterações de variáveis ou ações sobre ícones — **não modificam diretamente a interface construída por esse widget**.

Caso seja necessário alterar o que está sendo exibido na tela, o Flutter precisa **reconstruir o widget** com novos parâmetros ou a partir de uma atualização proveniente de um widget pai. Por esse motivo, `StatelessWidget` é utilizado principalmente para interfaces **estáticas ou dependentes apenas das propriedades recebidas**.

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorScheme: .fromSeed(seedColor: Colors.deepPurple)),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}
```

Já a classe `MyHomePage` utiliza um `Widget` mutável, pois estende um `StatefulWidget`. Em Flutter, estado é qualquer dado que pode mudar ao longo do tempo e que influencia o que é exibido na interface do aplicativo, esta classe passa então a ter a responsabilidade de configurar o `Widget`, e informar que a classe `_MyHomePageState` será responsável por controlar e armazenar o estado desse `Widget`. Essa associação ocorre por meio do método `createState()`, cuja função é criar e retornar uma nova instância da classe de estado que gerenciará as mudanças na interface.

>Lembre-se: Sempre que o estado é alterado (por exemplo, utilizando `setState()`), o Flutter reconstrói a interface do widget com base nos novos valores armazenados nessa classe de estado

```dart
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}
```

A classe responsável agora por construir a tela é a `_MyHomePageState()`, essa classe é então responsável por manter o estado **vivo** e controla a sua mudança. No caso do código atual a variável `_counter` é o contador associado ao clique por meio do método `FloatingActionButton`, que em resumo é controlador do **estado** .

Sempre que uma variável altera algum aspecto visual da tela (no caso `_counter`) como um número, um texto, uma cor, um ícone ou a visibilidade de um componente essa variável passa a fazer parte do **estado da interface**, e a sua mudança renderiza a tela.

>De forma resumida a classe `_MyHomePageState()` é responsável por: 
> * armazenar **variáveis de estado**
> * reagir a **interações do usuário**
> * chamar `setState()` quando necessário
> * **reconstruir a interface** através do método `build()`
>
> O que é caracteristica de um `StateFul`

>Lembre-se, o prefixo `_` indica que a classe ou variável possui escopo privado dentro do arquivo, o que é uma convenção comum no Flutter para classes de estado.

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
          mainAxisAlignment: .center,
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
´´´´
````


:::imgtext images/flutter_architecture.png
### Arquitetura do Flutter

O Flutter é organizado em três camadas principais:

- Widget
- Element
- RenderObject

Essas camadas permitem separar **descrição da interface**, **estrutura de execução** e **renderização gráfica**.
:::


:::tip
Sempre que um widget precisar ocupar **todo o espaço disponível em um Row ou Column**, utilize o widget `Expanded`.
:::

:::warning
Evite usar muitos widgets `Container` aninhados.  
Isso pode tornar o layout mais complexo e reduzir a legibilidade do código.
:::

:::info
O sistema de layout do Flutter é baseado em `BoxConstraints`, que define limites mínimos e máximos de largura e altura para cada widget.
:::