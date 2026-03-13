### Componente: InvoiceStatusCard

Este componente representa o **status da fatura do usuário no aplicativo**.

Exemplo de conteúdo exibido:

* Fatura aberta
* Botão para ver detalhes
* Ícone para ocultar ou visualizar valores

Esse tipo de card é comum em **aplicativos financeiros ou de serviços**, onde o usuário precisa acompanhar informações importantes logo na tela inicial.

# Estrutura conceitual do componente

A estrutura visual pode ser representada da seguinte forma:

```text
Card
 └── Column
      ├── Row
      │     ├── Text (status da fatura)
      │     └── IconButton (visualizar/ocultar)
      │
      └── Row
            ├── TextButton (ver detalhes)
            └── Icon (seta de navegação)
```

Elementos principais:

* **Text** → informa o status da fatura
* **IconButton** → permite ocultar ou visualizar valores
* **TextButton** → permite acessar mais detalhes
* **Icon** → indica navegação

```dart
// lib/widgets/cards/invoice_status_card.dart

import 'package:flutter/material.dart';

class InvoiceStatusCard extends StatelessWidget {
  final String status;

  const InvoiceStatusCard({
    super.key,
    required this.status,
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
        child: Column(
          children: [

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [

                Text(
                  status,
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),

                const Icon(
                  Icons.visibility,
                  color: Colors.grey,
                ),

              ],
            ),

            const SizedBox(height: 12),

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [

                TextButton(
                  onPressed: () {},
                  child: const Text("Ver detalhes"),
                ),

                const Icon(
                  Icons.chevron_right,
                  color: Colors.grey,
                ),

              ],
            ),

          ],
        ),
      ),
    );
  }
}
```
