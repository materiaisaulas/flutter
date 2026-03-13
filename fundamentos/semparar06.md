### Componente: ReferralBannerCard

Este componente representa um **banner promocional de indicação de amigos**.

Exemplo de conteúdo exibido:

> Indique um amigo e ganhe R$ 70 na fatura.

Esse tipo de elemento é comum em aplicativos que utilizam **estratégias de crescimento baseadas em indicação de usuários**.

A estrutura visual pode ser representada da seguinte forma:

```text id="0pyr0j"
Card
 └── Row
      ├── Icon (usuário / indicação)
      ├── Expanded
      │     └── Text (mensagem promocional)
      └── Icon (seta de navegação)
```

Elementos do layout:

* **Icon** → representa visualmente a indicação de usuários
* **Text** → mensagem promocional
* **Chevron Icon** → indica que o card leva para outra tela


```dart id="4nq2ub"
// lib/widgets/banners/referral_banner_card.dart

import 'package:flutter/material.dart';

class ReferralBannerCard extends StatelessWidget {
  final String message;

  const ReferralBannerCard({
    super.key,
    required this.message,
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

            // Ícone representando indicação de usuários
            const Icon(
              Icons.group_add,
              size: 36,
              color: Colors.pink,
            ),

            const SizedBox(width: 12),

            // Texto da promoção
            Expanded(
              child: Text(
                message,
                style: const TextStyle(
                  fontSize: 16,
                ),
              ),
            ),

            // Ícone indicando navegação
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
