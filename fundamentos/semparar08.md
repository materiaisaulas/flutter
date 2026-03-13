### Componente: AppHeaderBanner

Este componente representa o **banner informativo localizado no topo da tela principal**.

Sua função é:

* apresentar um **destaque do aplicativo**
* convidar o usuário a **explorar funcionalidades**
* servir como **elemento visual de abertura da interface**

A estrutura visual pode ser representada da seguinte forma:

```text
Container
 └── Row
      ├── Icon
      ├── Expanded
      │     └── Text
      └── TextButton
```

Elementos principais:

* **Icon** → representação visual do tema do banner
* **Text** → mensagem informativa ou promocional
* **TextButton** → botão de ação para explorar a funcionalidade


```dart
// lib/widgets/banners/app_header_banner.dart

import 'package:flutter/material.dart';

class AppHeaderBanner extends StatelessWidget {
  final String message;
  final String actionText;

  const AppHeaderBanner({
    super.key,
    required this.message,
    required this.actionText,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 16,
        vertical: 12,
      ),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.grey.shade200,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        children: [

          const Icon(
            Icons.directions_car,
            size: 36,
            color: Colors.pink,
          ),

          const SizedBox(width: 12),

          Expanded(
            child: Text(
              message,
              style: const TextStyle(
                fontSize: 16,
              ),
            ),
          ),

          TextButton(
            onPressed: () {},
            child: Text(actionText),
          ),

        ],
      ),
    );
  }
}
```
