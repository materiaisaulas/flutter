### Componente: HomePage

A `HomePage` representa a **tela inicial do aplicativo**, exibindo ao usuário:

* banner principal
* status da fatura
* promoção de indicação
* menu de ações rápidas
* serviços automotivos
* banners de produtos

Ela organiza esses elementos dentro de uma **estrutura rolável**, permitindo que a tela cresça sem comprometer a usabilidade.

A composição da página pode ser representada da seguinte forma:

```text
Scaffold
 └── SafeArea
      └── SingleChildScrollView
            └── Column
                 ├── AppHeaderBanner
                 ├── InvoiceStatusCard
                 ├── ReferralBannerCard
                 ├── QuickActionsMenu
                 ├── SectionHeader
                 ├── ServiceCard
                 └── ProductBannerCard
```

Essa organização mostra claramente que a página **não cria elementos diretamente**, apenas **combina widgets reutilizáveis**.

```dart
// lib/pages/home_page.dart
import 'package:flutter/material.dart';
import '../widgets/banners/app_header_banner.dart';
import '../widgets/banners/referral_banner_card.dart';
import '../widgets/banners/product_banner_card.dart';
import '../widgets/cards/invoice_status_card.dart';
import '../widgets/cards/service_card.dart';
import '../widgets/menu/quick_actions_menu.dart';
import '../widgets/common/section_header.dart';
import '../controllers/like_controller.dart';
import '../widgets/like_card.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final LikeController controller = LikeController();

  @override
  void initState() {
    super.initState();

    controller.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Exemplo StatefulWidget"),
        centerTitle: true,
        leading: const Icon(Icons.menu),
        actions: const [
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 10),
            child: Icon(Icons.search),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 10),
            child: Icon(Icons.more_vert),
          ),
        ],
      ),

      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, constraints) {
            double maxWidth;

            // Se a tela for larga (web/desktop)
            if (constraints.maxWidth > 900) {
              maxWidth = 900;
            } else {
              maxWidth = constraints.maxWidth;
            }

            return Center(
              child: ConstrainedBox(
                constraints: BoxConstraints(maxWidth: maxWidth),
                child: SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const AppHeaderBanner(
                        message:
                            "Descubra tudo o que o app oferece para seu carro",
                        actionText: "Conhecer",
                      ),

                      const InvoiceStatusCard(status: "Fatura aberta"),

                      const ReferralBannerCard(
                        message: "Indique um amigo e ganhe R\$ 70 na fatura",
                      ),

                      const SectionHeader(title: "Serviços Automotivos"),

                      const ServiceCard(
                        title: "Consultar IPVA 2026",
                        showBadge: true,
                        badgeText: "Oferta",
                      ),

                      const ProductBannerCard(
                        text: "Tag, crédito de até R\$ 50 mil, seguro e mais",
                        icon: Icons.credit_card,
                      ),

                      const QuickActionsMenu(),

                      const SizedBox(height: 30),

                      LikeCard(
                        likes: controller.likes,
                        onCurtir: controller.incrementar,
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      ),

      floatingActionButton: FloatingActionButton(
        onPressed: controller.incrementar,
        child: const Icon(Icons.thumb_up),
      ),

      bottomNavigationBar: BottomAppBar(
        height: 60,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: const [
            Icon(Icons.home),
            Icon(Icons.favorite),
            Icon(Icons.settings),
          ],
        ),
      ),
    );
  }
}
```

Ao desenvolver aplicações com Flutter que podem ser executadas tanto em **dispositivos móveis quanto em navegadores web ou desktops**, é importante considerar as diferenças de tamanho de tela entre essas plataformas. Em celulares, a interface normalmente ocupa toda a largura disponível e é organizada verticalmente, pois a área de visualização é limitada. Já em ambientes web ou desktop, as telas costumam ser muito mais largas, o que pode fazer com que o conteúdo fique excessivamente espalhado ou com grandes espaços vazios nas laterais. Por esse motivo, é uma boa prática utilizar técnicas de **layout responsivo**, permitindo que a interface se adapte dinamicamente ao tamanho da tela. Uma solução comum é limitar a largura máxima do conteúdo em telas grandes e centralizá-lo, mantendo uma experiência visual equilibrada tanto em **mobile quanto em web**, sem a necessidade de manter códigos diferentes para cada plataforma, o que é feit pelo trecho de código 

```dart 
            // Se a tela for larga (web/desktop)
            if (constraints.maxWidth > 900) {
              maxWidth = 900;
            } else {
              maxWidth = constraints.maxWidth;
            }

```
