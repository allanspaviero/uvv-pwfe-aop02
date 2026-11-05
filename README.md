# Finanças Inteligentes

> **Programação Web - Front End** · AOP02 · UVV 2026-1 · Allan Spaviero Alpoim (matrícula 202636574)

## Sobre

Blog estático de educação financeira pessoal: planejamento do orçamento, reserva de
emergência e primeiros passos em investimentos, com uma página de contato.

| Página | Conteúdo |
|---|---|
| `index.html` | Home com os conteúdos em destaque |
| `planejamento.html` | Planejamento Financeiro Pessoal — o método dos 4 passos |
| `reserva.html` | Reserva de Emergência — o que é, como calcular e onde guardar |
| `investimentos.html` | Investimentos para Iniciantes — juros compostos, perfil, renda fixa × variável |
| `contato.html` | Formulário de contato |

## Tecnologias

| Componente | Escolha |
|---|---|
| Estrutura | HTML5 semântico, uma página por artigo |
| Estilo | CSS3 em folha única, layout responsivo |
| Comportamento | JavaScript puro (sem frameworks) |
| Publicação | GitHub Pages |

## Estrutura do projeto

```
index.html, planejamento.html, reserva.html, investimentos.html, contato.html
css/styles.css     estilos de todas as páginas
js/main.js         menu de navegação mobile e envio simulado do formulário
img/               imagens dos artigos e avatar
```

## Como executar

Não há build nem dependências: basta abrir `index.html` no navegador.

Para servir localmente (útil para testar a navegação entre páginas):

```bash
python -m http.server 8000
```

e acessar `http://localhost:8000`.

## Requisitos do enunciado e onde estão atendidos

O enunciado original desta AOP não foi preservado (a disciplina já não está disponível no
ambiente virtual). O que o projeto entrega:

- **Várias páginas interligadas** por um menu de navegação comum (`<nav class="main-nav">`).
- **Layout responsivo** — em telas até 768 px o menu vira um botão que abre e fecha
  (`js/main.js`), fechando ao clicar fora ou ao redimensionar a janela.
- **Formulário de contato** com feedback visual de envio; o envio é simulado no navegador,
  sem back-end.
- **Metadados de SEO** — `<meta name="description">` própria em cada página.

## Entrega

Site publicado: **<https://allanspaviero.github.io/uvv-pwfe-aop02/>**
