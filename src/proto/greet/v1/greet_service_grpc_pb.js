// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_greet_v1_greet_service_pb = require('../../../proto/greet/v1/greet_service_pb.js');

function serialize_greet_v1_SayHelloRequest(arg) {
  if (!(arg instanceof proto_greet_v1_greet_service_pb.SayHelloRequest)) {
    throw new Error('Expected argument of type greet.v1.SayHelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_v1_SayHelloRequest(buffer_arg) {
  return proto_greet_v1_greet_service_pb.SayHelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_v1_SayHelloResponse(arg) {
  if (!(arg instanceof proto_greet_v1_greet_service_pb.SayHelloResponse)) {
    throw new Error('Expected argument of type greet.v1.SayHelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_v1_SayHelloResponse(buffer_arg) {
  return proto_greet_v1_greet_service_pb.SayHelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreetServiceService = exports.GreetServiceService = {
  // Sends a greeting
sayHello: {
    path: '/greet.v1.GreetService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: proto_greet_v1_greet_service_pb.SayHelloRequest,
    responseType: proto_greet_v1_greet_service_pb.SayHelloResponse,
    requestSerialize: serialize_greet_v1_SayHelloRequest,
    requestDeserialize: deserialize_greet_v1_SayHelloRequest,
    responseSerialize: serialize_greet_v1_SayHelloResponse,
    responseDeserialize: deserialize_greet_v1_SayHelloResponse,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
