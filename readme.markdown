# z-manager

Set z-index value relatively and manage easily.

## Example

```shell
$ zmanager -c your-css-file.css
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

This file is all of selectors have z-index property.

All you have to do is sorting property in descending order of z-index value you want.

and,

```shell
$ zmanager -m your-css-file.css
```
