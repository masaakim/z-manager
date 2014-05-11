# z-manager [![Build Status](https://travis-ci.org/morishitter/z-manager.svg)](https://travis-ci.org/morishitter/z-manager)


Set z-index value relatively and manage easily.

## Installation

```
$ npm install z-manager -g
```

## Example

```shell
$ z-manager create your-css-file.css
```

Create `.zmanagerc` and edit this file.

```javascript
{
  "1": ".z1",
  "2": "#header",
  "3": "#footer",
  "4": "#footer .ico",
  "5": ".container",
  "6": ".nav"
}
```

All of selectors have z-index property are written in `.zmanagerc`.

Sort property in descending order of z-index value you want.

and, run bellow command:

```shell
$ z-manager adapt your-css-file.css
```

## License
The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
