<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/emoji-library/main/.github/images/favicon512x512-emoji-lib.png" align="center" alt=":package: emoji-api" />
 <h2 align="center">:package: emoji-api</h2>
 <p align="center">Set of searchable emojis for web</p>
  <p align="center">
    <a href="https://github.com/hebertcisco/emoji-api/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/emoji-api?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/emoji-api/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/emoji-api?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/emoji-library">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/emoji-library?style=flat&color=336791" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/emoji-library/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/emoji-library/issues/new/choose">Request Feature</a>
  </p>
<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong>Set of searchable emojis for web</strong>✨</p>

# Getting started

## Performing a query via API Endpoint

> Curl

```sh
curl --location --request GET 'https://emoji-server.vercel.app/emoji/search?q=kiss'
```

> HTTP

```http
GET /emoji/search?q=kiss HTTP/1.1
Host: emoji-server.vercel.app
```

> URL: [https://emoji-server.vercel.app/emoji/search?q=kiss](https://emoji-server.vercel.app/emoji/search?q=kiss)

### Endpoint

`/search?q=[term_of_search]`

### Result

```json
[
{
  "_id": "5ff7f6536ea31b02c0a37931",
  "title": "Kiss Mm",
  "symbol": "👨",
  "keywords": "kiss (man,man) people gay men love sex lgbt lgbt"
}
{...}
]
```

## Installation

> Install with yarn or npm: `yarn` or `npm`:

```bash
# yarn
yarn add emoji-library
```

```bash
# npm
npm i emoji-library --save
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
