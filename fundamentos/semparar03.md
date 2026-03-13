### Componente: SectionHeader

Este componente representa **o título de uma seção da tela**, será usado antes de grupos de conteúdo, como:

* Serviços automotivos
* Produtos financeiros
* Ofertas
* Outros serviços

A estrutura visual é bastante simples:

```
Container
 └── Text
```

O `Container` controla **margens e espaçamento**, enquanto o `Text` exibe o título da seção.

```dart
// lib/widgets/common/section_header.dart

import 'package:flutter/material.dart';

class SectionHeader extends StatelessWidget {
  final String title;

  const SectionHeader({
    super.key,
    required this.title,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 16,
        vertical: 12,
      ),
      child: Text(
        title,
        style: const TextStyle(
          fontSize: 18,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
```
