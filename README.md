<h1 align="center">Typescript gRPC Basic App</h1>

## Installing the dependencies
``` bash
npm i
```

## Fixing the style of file buf.yaml
``` bash
npm run buf:lint
npm run buf:format
```

## Generating interfaces from .proto files
``` bash
npm run protoc:generate
```

## Running the Server
``` bash
npm run server
```

## Running the Client
``` bash
npm run client
```

### Server
[image](https://github.com/gabrielleandro0801/typescript-grpc-basic-app/blob/develop/images/server-running.png)

### Client
[image](https://github.com/gabrielleandro0801/typescript-grpc-basic-app/blob/develop/images/client-running.png)

### Requsting on Postman
[image](https://github.com/gabrielleandro0801/typescript-grpc-basic-app/blob/develop/images/running-on-postman.png)

## Acknowledgments
Basic gRPC API in Typescript tutorials
- [dev.to - Aria Azadi Pour](https://dev.to/devaddict/use-grpc-with-node-js-and-typescript-3c58)
- [Medium - Mikhail Gus'kov](https://medium.com/front-end-weekly/implementation-of-grpc-in-web-and-server-with-typescript-165e8ca0155b)
- [Github - Idnan](https://github.com/Idnan/ts-grpc-example/blob/master/src/server.ts)
- [Github - CatsMiaow](https://github.com/CatsMiaow/node-grpc-typescript/blob/master/src/client.ts)
- [Github - Megoos](https://github.com/Megoos/gRPC-web-example/blob/main/server/services.ts)

Comparing REST Status Codes to gRPC Status Codes
- [dev.to - Milad Roudgarian](https://dev.to/mindwingx/common-status-codes-in-grpc-and-http-38pd)

gRPC for Node
- [Github - grpc](https://github.com/grpc/grpc-node?tab=readme-ov-file)
