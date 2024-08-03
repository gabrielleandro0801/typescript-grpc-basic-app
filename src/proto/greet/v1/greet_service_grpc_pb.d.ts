// package: greet.v1
// file: proto/greet/v1/greet_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_greet_v1_greet_service_pb from "../../../proto/greet/v1/greet_service_pb";

interface IGreetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreetServiceService_ISayHello;
}

interface IGreetServiceService_ISayHello
    extends grpc.MethodDefinition<
        proto_greet_v1_greet_service_pb.SayHelloRequest,
        proto_greet_v1_greet_service_pb.SayHelloResponse
    > {
    path: "/greet.v1.GreetService/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_greet_v1_greet_service_pb.SayHelloRequest>;
    requestDeserialize: grpc.deserialize<proto_greet_v1_greet_service_pb.SayHelloRequest>;
    responseSerialize: grpc.serialize<proto_greet_v1_greet_service_pb.SayHelloResponse>;
    responseDeserialize: grpc.deserialize<proto_greet_v1_greet_service_pb.SayHelloResponse>;
}

export const GreetServiceService: IGreetServiceService;

export interface IGreetServiceServer {
    sayHello: grpc.handleUnaryCall<
        proto_greet_v1_greet_service_pb.SayHelloRequest,
        proto_greet_v1_greet_service_pb.SayHelloResponse
    >;
}

export interface IGreetServiceClient {
    sayHello(
        request: proto_greet_v1_greet_service_pb.SayHelloRequest,
        callback: (error: grpc.ServiceError | null, response: proto_greet_v1_greet_service_pb.SayHelloResponse) => void,
    ): grpc.ClientUnaryCall;
    sayHello(
        request: proto_greet_v1_greet_service_pb.SayHelloRequest,
        metadata: grpc.Metadata,
        callback: (error: grpc.ServiceError | null, response: proto_greet_v1_greet_service_pb.SayHelloResponse) => void,
    ): grpc.ClientUnaryCall;
    sayHello(
        request: proto_greet_v1_greet_service_pb.SayHelloRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (error: grpc.ServiceError | null, response: proto_greet_v1_greet_service_pb.SayHelloResponse) => void,
    ): grpc.ClientUnaryCall;
}

export class GreetServiceClient extends grpc.Client implements IGreetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(
        request: proto_greet_v1_greet_service_pb.SayHelloRequest,
        callback: (error: grpc.ServiceError | null, response: proto_greet_v1_greet_service_pb.SayHelloResponse) => void,
    ): grpc.ClientUnaryCall;
    public sayHello(
        request: proto_greet_v1_greet_service_pb.SayHelloRequest,
        metadata: grpc.Metadata,
        callback: (error: grpc.ServiceError | null, response: proto_greet_v1_greet_service_pb.SayHelloResponse) => void,
    ): grpc.ClientUnaryCall;
    public sayHello(
        request: proto_greet_v1_greet_service_pb.SayHelloRequest,
        metadata: grpc.Metadata,
        options: Partial<grpc.CallOptions>,
        callback: (error: grpc.ServiceError | null, response: proto_greet_v1_greet_service_pb.SayHelloResponse) => void,
    ): grpc.ClientUnaryCall;
}
