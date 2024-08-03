// package: grpc.health.v1
// file: proto/health/health.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_health_health_pb from "../../proto/health/health_pb";

interface IHealthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    check: IHealthService_ICheck;
    watch: IHealthService_IWatch;
}

interface IHealthService_ICheck
    extends grpc.MethodDefinition<
        proto_health_health_pb.HealthCheckRequest,
        proto_health_health_pb.HealthCheckResponse
    > {
    path: "/grpc.health.v1.Health/Check";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_health_health_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<proto_health_health_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<proto_health_health_pb.HealthCheckResponse>;
    responseDeserialize: grpc.deserialize<proto_health_health_pb.HealthCheckResponse>;
}
interface IHealthService_IWatch
    extends grpc.MethodDefinition<
        proto_health_health_pb.HealthCheckRequest,
        proto_health_health_pb.HealthCheckResponse
    > {
    path: "/grpc.health.v1.Health/Watch";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_health_health_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<proto_health_health_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<proto_health_health_pb.HealthCheckResponse>;
    responseDeserialize: grpc.deserialize<proto_health_health_pb.HealthCheckResponse>;
}

export const HealthService: IHealthService;

export interface IHealthServer {
    check: grpc.handleUnaryCall<proto_health_health_pb.HealthCheckRequest, proto_health_health_pb.HealthCheckResponse>;
    watch: grpc.handleServerStreamingCall<
        proto_health_health_pb.HealthCheckRequest,
        proto_health_health_pb.HealthCheckResponse
    >;
}

export interface IHealthClient {
    check(
        request: proto_health_health_pb.HealthCheckRequest,
        callback: (error: grpc.ServiceError | null, response: proto_health_health_pb.HealthCheckResponse) => void,
    ): grpc.ClientUnaryCall;
    check(
        request: proto_health_health_pb.HealthCheckRequest,
        metadata: grpc.Metadata,
        callback: (error: grpc.ServiceError | null, response: proto_health_health_pb.HealthCheckResponse) => void,
    ): grpc.ClientUnaryCall;
    check(
        request: proto_health_health_pb.HealthCheckRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (error: grpc.ServiceError | null, response: proto_health_health_pb.HealthCheckResponse) => void,
    ): grpc.ClientUnaryCall;
    watch(
        request: proto_health_health_pb.HealthCheckRequest,
        options?: Partial<grpc.CallOptions>,
    ): grpc.ClientReadableStream<proto_health_health_pb.HealthCheckResponse>;
    watch(
        request: proto_health_health_pb.HealthCheckRequest,
        metadata?: grpc.Metadata,
        options?: Partial<grpc.CallOptions>,
    ): grpc.ClientReadableStream<proto_health_health_pb.HealthCheckResponse>;
}

export class HealthClient extends grpc.Client implements IHealthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public check(
        request: proto_health_health_pb.HealthCheckRequest,
        callback: (error: grpc.ServiceError | null, response: proto_health_health_pb.HealthCheckResponse) => void,
    ): grpc.ClientUnaryCall;
    public check(
        request: proto_health_health_pb.HealthCheckRequest,
        metadata: grpc.Metadata,
        callback: (error: grpc.ServiceError | null, response: proto_health_health_pb.HealthCheckResponse) => void,
    ): grpc.ClientUnaryCall;
    public check(
        request: proto_health_health_pb.HealthCheckRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (error: grpc.ServiceError | null, response: proto_health_health_pb.HealthCheckResponse) => void,
    ): grpc.ClientUnaryCall;
    public watch(
        request: proto_health_health_pb.HealthCheckRequest,
        options?: Partial<grpc.CallOptions>,
    ): grpc.ClientReadableStream<proto_health_health_pb.HealthCheckResponse>;
    public watch(
        request: proto_health_health_pb.HealthCheckRequest,
        metadata?: grpc.Metadata,
        options?: Partial<grpc.CallOptions>,
    ): grpc.ClientReadableStream<proto_health_health_pb.HealthCheckResponse>;
}
