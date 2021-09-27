# lsp-uuid
A uuid generator based on `SnowFlake` for both Browser and Nodejs. Keep sequence and can be deserialized.

## Why lsp-uuid
lsp-uuid has this features below:
- up to 262143 different ids in one second;
- keep sequence
- id‘s length is 15. less than others.
- can be deserialized

## How to use

### Using npm
```sh
    $ npm install lsp-uuid -save
```

### Using Browser
```html
    <script src="https://unpkg.com/lsp-uuid@1.0.0/dist/lsp-uuid.umd.js"></script>
```

### For es module
```js
    import { uuid, parseUUID } from 'lsp-uuid'

    parseUUID(uuid())
```

## For CDN and Browser
```html
    <html>
    <script src="https://unpkg.com/lsp-uuid@1.0.0/dist/lsp-uuid.umd.js"></script>
    <script>
      
    </script>
    <body>
        lspUUID.parseUUID(lspUUID.uuid())
    </body>
  </html>
```
