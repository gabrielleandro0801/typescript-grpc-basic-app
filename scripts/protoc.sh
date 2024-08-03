#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd "${BASEDIR}"/../

OUT_DIR="./src"
TS_OUT_DIR="./src"

HEALTH_DIR="./proto/health"
GREET_DIR="./proto/greet/v1"

IN_DIRS=(
  "${HEALTH_DIR}"
  "${GREET_DIR}"
)

PROTOC="./node_modules/.bin/grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

FILE_OUT_DIR="${OUT_DIR}/${FILENAME}"
FILE_TS_OUT_DIR="${TS_OUT_DIR}/${FILENAME}"

for DIR in "${IN_DIRS[@]}"
do
    $PROTOC \
      -I="./" \
      --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
      --plugin=protoc-gen-grpc=$PROTOC_GEN_GRPC_PATH \
      --js_out=import_style=commonjs:$FILE_OUT_DIR \
      --grpc_out=grpc_js:$FILE_OUT_DIR \
      --ts_out=service=grpc-node,mode=grpc-js:$FILE_TS_OUT_DIR \
      "$DIR"/*.proto
    
    echo "TS and JS files generated for directory ${DIR}"
done
