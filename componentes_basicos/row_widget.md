#### Row

O `Row` é um widget utilizado para organizar elementos horizontalmente na interface, permitindo posicionar múltiplos widgets lado a lado. Ele é amplamente utilizado na construção de layouts como menus, barras de navegação e agrupamentos de componentes.

Diferente do `Column`, que organiza os elementos na vertical, o `Row` distribui seus filhos ao longo do eixo horizontal, chamado de **eixo principal (main axis)**. Já o eixo vertical é chamado de **eixo secundário (cross axis)**. Essa distinção é fundamental para compreender como o posicionamento dos elementos funciona.

O `Row` recebe seus elementos por meio da propriedade `children`, que define os widgets que serão exibidos na linha. Para controlar a distribuição desses elementos, utiliza-se a propriedade `mainAxisAlignment`, que define como os itens serão posicionados ao longo do eixo horizontal. Por exemplo, `MainAxisAlignment.start` posiciona os elementos no início, `center` centraliza, e opções como `spaceBetween`, `spaceAround` e `spaceEvenly` distribuem os elementos com espaçamentos diferentes entre eles.

Além disso, o `Row` permite controlar o alinhamento vertical dos elementos por meio da propriedade `crossAxisAlignment`. Essa propriedade define como os widgets serão posicionados no eixo vertical, podendo ser alinhados ao início (`start`), ao centro (`center`) ou ao final (`end`).

Uma característica importante do `Row` é que ele não realiza quebra de linha automaticamente. Isso significa que todos os elementos precisam caber no espaço horizontal disponível. Caso contrário, ocorre um erro de overflow, indicando que o conteúdo excedeu os limites da tela.

```dart
Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  crossAxisAlignment: CrossAxisAlignment.center,

  children: const [
    Icon(Icons.home, size: 30),
    Icon(Icons.search, size: 30),
    Icon(Icons.favorite, size: 30),
    Icon(Icons.person, size: 30),
  ],
)
```

:::note Conceito central

O `Row` é um widget essencial para organização horizontal de elementos, permitindo controlar tanto a distribuição quanto o alinhamento dos componentes. Compreender seus eixos e propriedades é fundamental para a construção de layouts estruturados e responsivos no Flutter.
:::
