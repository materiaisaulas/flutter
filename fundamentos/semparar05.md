### Componente: ProductBannerCard

Este componente representa um **banner de divulgação de produtos ou serviços do aplicativo**.

Exemplos de conteúdo exibido nesse tipo de banner:

* Tag para pedágio
* Crédito disponível
* Seguro veicular
* Novos serviços do aplicativo

A estrutura visual pode ser representada da seguinte forma:

```text
Card
 └── Row
      ├── Image
      ├── Expanded
      │     └── Text
      └── Icon (seta de navegação)
```

Elementos principais:

* **Image** → representa visualmente o produto ou serviço
* **Text** → mensagem promocional
* **Icon** → seta indicando navegação para mais detalhes

```dart
// lib/widgets/banners/product_banner_card.dart

import 'package:flutter/material.dart';

class ProductBannerCard extends StatelessWidget {
  final String text;
  final IconData icon;

  const ProductBannerCard({
    super.key,
    required this.text,
    required this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(
        horizontal: 16,
        vertical: 8,
      ),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [

            // Ícone representando o produto
            Icon(
              icon,
              size: 40,
              color: Colors.pink,
            ),

            const SizedBox(width: 12),

            // Texto promocional
            Expanded(
              child: Text(
                text,
                style: const TextStyle(
                  fontSize: 16,
                ),
              ),
            ),

            // Ícone de navegação
            const Icon(
              Icons.chevron_right,
              color: Colors.grey,
            ),

          ],
        ),
      ),
    );
  }
}
```
