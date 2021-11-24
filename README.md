# lsp-uuid
A uuid generator based on `SnowFlake` for both Browser and Nodejs. Keep sequence and can be deserialized.

## Why lsp-uuid
lsp-uuid has this features below:
- up to 65536 different ids in one second.
- keep sequence.
- id‘s length is 15. less than others.
- can be deserialized.
- no dependencies.
- less than 1kb.

## Benchmark
| lsp-uuid | random-32char | random-hex32 | random-32 | random-16 |
| -- | -- | -- | -- | -- |
| 55330ms/billion | 214773ms/billion | 116751ms/billion | 50055ms/billion | 60735ms/billion |

## How to use

### Using npm
```sh
    $ npm install lsp-uuid -save
```

### Using Browser
```html
    <script src="https://unpkg.com/lsp-uuid@1.0.1/dist/lsp-uuid.umd.js"></script>
```

### For es module
```js
    import { uuid, parseUUID } from 'lsp-uuid'

    const id = uuid() // 5f095641fe00000
    parseUUID(id) // {flg: 0, timestamp: 1632714164216, count: 0}
```

## For CDN and Browser
```html
    <html>
    <script src="https://unpkg.com/lsp-uuid@1.0.1/dist/lsp-uuid.umd.js"></script>
    <script>
      
    </script>
    <body>
        const id = lspUUID.uuid() // 5f095641fe00000
        lspUUID.parseUUID(id) // {flg: 0, timestamp: 1632714164216, count: 0}
    </body>
  </html>
```
