### Componente: ServiceCard

O `ServiceCard` representa um **serviço disponível no aplicativo**.

Exemplo de uso na interface:

* Consultar IPVA 2026
* Licenciamento do veículo
* Multas e infrações
* Outros serviços automotivos

A estrutura visual pode ser representada da seguinte forma:

```id="9r00ca"
Card
 └── Row
      ├── StatusIndicator
      ├── Text (nome do serviço)
      ├── Badge (opcional)
      └── Icon (seta de navegação)
```

Elementos do layout:

* **StatusIndicator** → pequeno ponto colorido indicando disponibilidade
* **Text** → nome do serviço
* **Badge** → destaque opcional (ex: "Oferta")
* **Chevron Icon** → indica navegação para outra tela

```dart id="pocog7"
// lib/widgets/cards/service_card.dart

import 'package:flutter/material.dart';

class ServiceCard extends StatelessWidget {
  final String title;
  final bool showBadge;
  final String badgeText;

  const ServiceCard({
    super.key,
    required this.title,
    this.showBadge = false,
    this.badgeText = '',
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(
        horizontal: 16,
        vertical: 6,
      ),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [

            // Indicador de status
            Container(
              width: 10,
              height: 10,
              decoration: const BoxDecoration(
                color: Colors.green,
                shape: BoxShape.circle,
              ),
            ),

            const SizedBox(width: 12),

            // Nome do serviço
            Expanded(
              child: Text(
                title,
                style: const TextStyle(
                  fontSize: 16,
                ),
              ),
            ),

            // Badge opcional
            if (showBadge)
              Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: 8,
                  vertical: 4,
                ),
                margin: const EdgeInsets.only(right: 8),
                decoration: BoxDecoration(
                  color: Colors.orange,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  badgeText,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 12,
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
