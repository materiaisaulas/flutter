#### Construção do App Padrão: main.dart e home.dart

O ensino de Flutter será conduzido a partir da construção de um aplicativo base, que servirá como referência ao longo de toda a disciplina. Em vez de abordar os widgets de forma isolada e sem contexto, adotaremos uma estratégia estruturada e progressiva, na qual cada conceito será introduzido dentro de um mesmo projeto. Esse aplicativo, que chamaremos de “app padrão”, será inicialmente composto por dois arquivos principais: `main.dart` e `home.dart`, cada um com responsabilidades bem definidas dentro da arquitetura da aplicação.

O arquivo `main.dart` será responsável por estabelecer a estrutura global do aplicativo. Nele, serão definidos elementos como a inicialização da aplicação por meio do `runApp`, a configuração do `MaterialApp`, o tema visual (incluindo cores e tipografia), além de possíveis rotas e configurações gerais de layout. Do ponto de vista didático, esse arquivo tende a permanecer estável ao longo do curso, pois representa a base estrutural da aplicação. Essa estabilidade é importante para que o aluno compreenda que existe uma camada responsável pela configuração global do sistema, separada da construção e experimentação das interfaces.

Por sua vez, o arquivo `home.dart` assumirá um papel central no processo de aprendizagem, funcionando como um ponto de integração entre os conteúdos estudados. Diferentemente de um simples ambiente de testes, o `home.dart` será responsável por **carregar dinamicamente os widgets que serão estudados ao longo das aulas**. Cada componente ou exemplo será implementado em arquivos separados, e o `home.dart` terá como função principal renderizar esses componentes dentro de sua estrutura, especificamente na propriedade `body` do `Scaffold`.

Durante a primeira fase do curso, à medida que novos widgets forem apresentados, o conteúdo do `body` do `home.dart` será continuamente alterado para carregar o widget correspondente ao tema da aula. Isso significa que, a cada novo conteúdo, o aluno não estará criando uma nova aplicação do zero, mas sim substituindo o componente exibido na tela principal. Essa abordagem permite foco total no conceito em estudo, eliminando distrações relacionadas à estrutura do projeto e reforçando a compreensão do comportamento de cada widget de forma isolada.

Na sequência, conforme o curso avança, os widgets previamente estudados deixarão de ser apenas exemplos isolados e passarão a ser combinados dentro do próprio `home.dart`, permitindo a construção de layouts mais complexos e próximos de aplicações reais. Nesse momento, o aluno começa a perceber como os componentes interagem entre si e como a composição de widgets é um dos pilares fundamentais do Flutter. Por fim, na etapa final, o aplicativo evolui para um modelo mais completo, funcionando como um “playground”, no qual diferentes componentes, interações e estruturas são integrados em uma interface funcional e organizada.

Essa estratégia pedagógica tem como objetivo promover uma aprendizagem progressiva e consistente, evitando a sobrecarga cognitiva e incentivando a reutilização de código. Ao centralizar a exibição dos conteúdos no `home.dart` e manter o `main.dart` como uma base estável, o aluno desenvolve uma compreensão clara sobre separação de responsabilidades dentro de um projeto Flutter. Ao final do curso, espera-se que o estudante não apenas domine os principais widgets da framework, mas também compreenda como organizá-los, integrá-los e evoluí-los dentro de uma aplicação real, estabelecendo uma base sólida para avançar em tópicos mais complexos, como componentização, gerenciamento de estado e arquitetura de software.

#### Componentes de visuais básicos 
objetivando a simplificação dos conceitos e funcionamento de cada um dos **widgets** apresentados, será utilizado uma aplicação padrão, que será modificada para cada um dos **widgets** o que pretende concentrar a atenção nas partes relevantes do código e entender como cada um dos **wigets** é utilizado e a implicação na na interface do usuário. 

#### O app padrão utilizado 

A função `main()` é o ponto de entrada da aplicação Flutter. Ao executar `runApp(const MyApp())`, o Flutter inicia a árvore de widgets utilizando a classe `MyApp` como raiz. Essa classe estende `StatelessWidget`, o que indica que ela não possui estado interno mutável e será reconstruída apenas quando necessário. Nesse contexto, `MyApp` representa a configuração global da aplicação, sendo responsável por definir temas, estrutura base e a tela inicial.

O widget `MaterialApp` é o núcleo da aplicação quando se utiliza o padrão Material Design. Ele encapsula diversas configurações essenciais, como navegação, tema visual e comportamento global. A propriedade `title` define um identificador da aplicação (utilizado em alguns sistemas operacionais), enquanto `debugShowCheckedModeBanner: false` remove a faixa de debug exibida durante o desenvolvimento, tornando a interface mais limpa para apresentação.

A propriedade `theme` define o **Design System básico da aplicação**, centralizando aspectos visuais. Nesse caso, `ThemeData` está sendo configurado com `useMaterial3: true`, habilitando a versão mais recente do Material Design. O `colorScheme` é gerado a partir de uma cor base (`Colors.blue`), garantindo consistência automática nas cores do sistema. Além disso, o `scaffoldBackgroundColor` define um fundo neutro para todas as telas, e o `appBarTheme` padroniza a aparência das barras superiores, incluindo cor de fundo (azul claro), cor dos elementos (preto) e remoção de elevação. Essa centralização evita repetição e mantém uniformidade visual em toda a aplicação.

:::imgtext ../flutter/componentes_basicos/imgs/app_padrao.png

A propriedade `builder` permite interceptar a renderização de todas as telas do aplicativo, funcionando como um **wrapper global de layout**. Nesse ponto, o widget `SafeArea` é utilizado para garantir que o conteúdo não invada áreas críticas da interface do dispositivo, como notch, barra de status ou áreas de gesto. Isso é fundamental para manter a usabilidade em diferentes dispositivos.

Dentro do `SafeArea`, o widget `Center` é utilizado para centralizar o conteúdo na tela. Ele posiciona seu filho no centro disponível, evitando alinhamentos indesejados, especialmente em telas maiores ou quando o conteúdo não ocupa todo o espaço. Em conjunto com o `Center`, o `ConstrainedBox` impõe uma restrição de largura máxima (`maxWidth: 600`), o que é particularmente importante para ambientes web ou desktop, pois impede que o layout se expanda excessivamente, mantendo uma proporção semelhante à de dispositivos móveis e facilitando a leitura e compreensão visual.
:::


Por fim, a propriedade `home` define a tela inicial da aplicação, que neste caso é a `HomePage`. É a partir dessa página que o conteúdo visível ao usuário começa a ser exibido. A `HomePage` contém o `Scaffold`, que estrutura a interface da tela com elementos como `AppBar` e `body`, permitindo que os widgets estudados sejam apresentados de forma organizada e isolada.

#### Widget Text

O `Text` é um dos widgets mais fundamentais do Flutter, sendo responsável por exibir conteúdo textual na interface. Ele representa a forma mais simples de apresentar informação ao usuário e, por isso, costuma ser utilizado como ponto de partida no aprendizado de construção de interfaces.

De forma conceitual, o `Text` recebe uma string e a renderiza na tela, podendo ser estilizado por meio de diversas propriedades. Apesar de sua simplicidade aparente, ele oferece um conjunto robusto de opções para controle de aparência e comportamento, permitindo desde textos simples até composições mais elaboradas.

```dart
Text(
  "Container",
  style: TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.bold,
  ),
)
```

#### Explicação do código

O widget `Text` recebe como primeiro parâmetro o conteúdo textual que será exibido. No exemplo, a string `"Container"` é apresentada na tela. Esse valor é obrigatório e representa o dado principal do widget.

A propriedade `style` permite definir a aparência do texto por meio do objeto `TextStyle`. Dentro dele, `fontSize` controla o tamanho da fonte, sendo definido em pixels lógicos, enquanto `fontWeight` define o peso da fonte, como no caso de `FontWeight.bold`, que deixa o texto em negrito.

Além dessas propriedades básicas, o `TextStyle` permite configurar diversos outros aspectos visuais, como cor (`color`), estilo da fonte (`fontStyle`), espaçamento entre letras (`letterSpacing`) e altura da linha (`height`). Esses atributos possibilitam um controle refinado da tipografia na interface.

#### Outras propriedades importantes do Text

Além do estilo, o widget `Text` possui propriedades que controlam seu comportamento no layout. Entre elas, destaca-se `textAlign`, que define o alinhamento do texto dentro do seu espaço disponível, podendo assumir valores como `TextAlign.left`, `center`, `right` ou `justify`.

Outra propriedade relevante é `overflow`, que define como o texto se comporta quando não há espaço suficiente para sua exibição completa. Exemplos incluem `TextOverflow.ellipsis`, que adiciona reticências ao final do texto, e `TextOverflow.clip`, que simplesmente corta o conteúdo excedente.

A propriedade `maxLines` permite limitar o número de linhas que o texto pode ocupar, sendo frequentemente utilizada em conjunto com `overflow` para controlar a apresentação de textos longos.
