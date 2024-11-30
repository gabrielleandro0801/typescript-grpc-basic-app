// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// The canonical version of this proto can be found at
// https://github.com/grpc/grpc-proto/blob/master/grpc/health/v1/health.proto
//
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_health_health_pb = require('../../proto/health/health_pb.js');

function serialize_grpc_health_v1_HealthCheckRequest(arg) {
  if (!(arg instanceof proto_health_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type grpc.health.v1.HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_health_v1_HealthCheckRequest(buffer_arg) {
  return proto_health_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_health_v1_HealthCheckResponse(arg) {
  if (!(arg instanceof proto_health_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type grpc.health.v1.HealthCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_health_v1_HealthCheckResponse(buffer_arg) {
  return proto_health_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Health is gRPC's mechanism for checking whether a server is able to handle
// RPCs. Its semantics are documented in
// https://github.com/grpc/grpc/blob/master/doc/health-checking.md.
var HealthService = exports.HealthService = {
  // Check gets the health of the specified service. If the requested service
// is unknown, the call will fail with status NOT_FOUND. If the caller does
// not specify a service name, the server should respond with its overall
// health status.
//
// Clients should set a deadline when calling Check, and can declare the
// server unhealthy if they do not receive a timely response.
//
// Check implementations should be idempotent and side effect free.
check: {
    path: '/grpc.health.v1.Health/Check',
    requestStream: false,
    responseStream: false,
    requestType: proto_health_health_pb.HealthCheckRequest,
    responseType: proto_health_health_pb.HealthCheckResponse,
    requestSerialize: serialize_grpc_health_v1_HealthCheckRequest,
    requestDeserialize: deserialize_grpc_health_v1_HealthCheckRequest,
    responseSerialize: serialize_grpc_health_v1_HealthCheckResponse,
    responseDeserialize: deserialize_grpc_health_v1_HealthCheckResponse,
  },
  // Performs a watch for the serving status of the requested service.
// The server will immediately send back a message indicating the current
// serving status.  It will then subsequently send a new message whenever
// the service's serving status changes.
//
// If the requested service is unknown when the call is received, the
// server will send a message setting the serving status to
// SERVICE_UNKNOWN but will *not* terminate the call.  If at some
// future point, the serving status of the service becomes known, the
// server will send a new message with the service's serving status.
//
// If the call terminates with status UNIMPLEMENTED, then clients
// should assume this method is not supported and should not retry the
// call.  If the call terminates with any other status (including OK),
// clients should retry the call with appropriate exponential backoff.
watch: {
    path: '/grpc.health.v1.Health/Watch',
    requestStream: false,
    responseStream: true,
    requestType: proto_health_health_pb.HealthCheckRequest,
    responseType: proto_health_health_pb.HealthCheckResponse,
    requestSerialize: serialize_grpc_health_v1_HealthCheckRequest,
    requestDeserialize: deserialize_grpc_health_v1_HealthCheckRequest,
    responseSerialize: serialize_grpc_health_v1_HealthCheckResponse,
    responseDeserialize: deserialize_grpc_health_v1_HealthCheckResponse,
  },
};

exports.HealthClient = grpc.makeGenericClientConstructor(HealthService);
