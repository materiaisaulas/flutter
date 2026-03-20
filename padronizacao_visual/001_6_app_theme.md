#### app_theme.dart 

O arquivo `app_theme.dart` tem como objetivo centralizar a **configuração visual da aplicação**, estabelecendo um ponto único de definição para cores, estilos e padrões de interface. Em vez de definir estilos diretamente em cada widget, essa abordagem permite que toda a aplicação utilize um tema consistente, facilitando a manutenção e a evolução do design. A classe `AppTheme` atua como um contêiner dessas configurações e expõe, por meio de um atributo estático, um tema que pode ser reutilizado globalmente.

A propriedade `static final ThemeData light` define um tema claro para a aplicação. O uso de `static` permite acessar esse tema sem a necessidade de instanciar a classe, enquanto `final` garante que o objeto não será alterado após sua criação, promovendo imutabilidade. O tipo `ThemeData` é a estrutura principal do Flutter para configuração de temas no padrão Material Design. Ele agrupa diversas definições visuais, como cores, tipografia, estilos de botões, entre outros.

Dentro do `ThemeData`, a propriedade `useMaterial3: true` indica que a aplicação utilizará a versão mais recente do Material Design (Material 3). Essa configuração altera o comportamento e a aparência de diversos componentes padrão, como botões, campos de texto e barras superiores, alinhando a interface com as diretrizes mais modernas do Google.

A propriedade `colorScheme` define o conjunto de cores que será utilizado em toda a aplicação. Em vez de configurar cada cor manualmente, foi utilizado o método `ColorScheme.fromSeed`, que gera automaticamente uma paleta de cores harmonizada a partir de uma cor base (`seedColor`). No código, essa cor base é `Colors.blue`, e a partir dela o Flutter calcula variações como cores primárias, secundárias, de fundo, de superfície, entre outras. Essa abordagem facilita a criação de temas consistentes sem a necessidade de definir cada cor individualmente.

Embora `ThemeData` não seja um widget visual, ele influencia diretamente o comportamento de diversos widgets da aplicação, como `AppBar`, `Scaffold`, `Text`, `ElevatedButton` e outros. Ao aplicar esse tema no `MaterialApp`, todos esses componentes passam a utilizar automaticamente as definições estabelecidas, garantindo uniformidade visual.

De forma geral, esse código introduz um conceito fundamental no desenvolvimento de interfaces: a **separação entre lógica, estrutura e estilo**. Ao centralizar o tema em um único arquivo, a aplicação se torna mais organizada, mais fácil de manter e preparada para evoluções futuras, como a implementação de múltiplos temas (claro e escuro) ou a adoção de um design system mais avançado.

```dart
// lib/core/theme/app_theme.dart

import 'package:flutter/material.dart';

class AppTheme {
  static final ThemeData light = ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
  );
}

```