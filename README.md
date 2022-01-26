# lsp-uuid
A powerful, fast and small uuid generator based on `SnowFlake` for both Browser and Nodejs. Keep sequence and can be deserialized.

## Why lsp-uuid
lsp-uuid has this features below:
- up to 65536 different ids in one second.
- keep sequence.
- id‘s length is 15. less than others. Server side is 29.
- can be deserialized.
- no dependencies.
- less than 1kb.
- can work both for borwser and node side.
- keep unique on distribute system.

## Benchmark
| lsp-uuid | random-32char | random-hex32 | random-32 | random-16 | lsp-uuid(server) |
| -- | -- | -- | -- | -- | -- |
| 55330ms/billion | 214773ms/billion | 116751ms/billion | 50055ms/billion | 60735ms/billion | 55061ms/billion |

## How to use

### Using npm
```sh
    $ npm install lsp-uuid -save
```

### Using Browser
```html
    <script src="https://unpkg.com/lsp-uuid@3.1.2/dist/lsp-uuid.umd.js"></script>
```

### For es module
```js
    import { uuid, parse, s_uuid } from 'lsp-uuid'

    const id = uuid() // 5f095641fe00000
    const suid = s_uuid() // ab04f349e710000-0a1a670d-af79
    parse(id) // {flg: 0, timestamp: 1632714164216, count: 0}
```

## For CDN and Browser
```html
    <html>
    <script src="https://unpkg.com/lsp-uuid@3.1.2/dist/lsp-uuid.umd.js"></script>
    <script>
      
    </script>
    <body>
        const id = lspUUID.uuid() // 5f095641fe00000
        lspUUID.parse(id) // {flg: 0, timestamp: 1632714164216, count: 0}
    </body>
  </html>
```
