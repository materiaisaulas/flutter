### Componente: QuickActionItem

Este componente representa um item individual do menu de ações rápidas.

Exemplos na tela:

* Minhas Tags
* Pedir Tag
* Pagar Fatura
* Indique e Ganhe
* Cashback

Cada um desses itens é uma instância do mesmo widget.

<img src="/assets/images/estrutura_componente_quick.svg"
     alt="Estrutura visual do componente"
     style="width:90%;">

O `Container` define:

* tamanho
* espaçamento
* bordas arredondadas
* fundo

A `Column` organiza os elementos verticalmente.

### Código do componente

```dart
import 'package:flutter/material.dart';

class QuickActionItem extends StatelessWidget {
  final IconData icon;
  final String label;

  const QuickActionItem({
    super.key,
    required this.icon,
    required this.label,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 90,
      padding: const EdgeInsets.symmetric(vertical: 12),
      decoration: BoxDecoration(
        color: Colors.grey.shade200,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          
          // Ícone da ação
          Icon(
            icon,
            size: 28,
            color: Colors.pink,
          ),

          const SizedBox(height: 6),

          // Texto da ação
          Text(
            label,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontSize: 12,
            ),
          ),
        ],
      ),
    );
  }
}
```

Depois de criado, o componente pode ser utilizado assim:

```dart
QuickActionItem(
  icon: Icons.credit_card,
  label: "Minhas Tags",
)
```

