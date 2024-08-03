import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { IGreetServiceServer } from "../../proto/greet/v1/greet_service_grpc_pb";
import { SayHelloRequest, SayHelloResponse } from "../../proto/greet/v1/greet_service_pb";

export class GreetServiceServer implements IGreetServiceServer {
    // required due to https://github.com/agreatfool/grpc_tools_node_protoc_ts/blob/master/doc/server_impl_signature.md#class-style
    [name: string]: UntypedHandleCall;

    sayHello(call: ServerUnaryCall<SayHelloRequest, SayHelloResponse>, callback: sendUnaryData<SayHelloResponse>) {
        try {
            console.log(`Request: ${call.request.toString()}`);
            const name: string = call.request.getName();

            if (name === "") {
                return callback({
                    message: "Name can not be null",
                    name: "NAME_NULL",
                    code: Status.FAILED_PRECONDITION,
                });
            }

            const response = new SayHelloResponse();
            response.setMessage(`Hello, ${name}! Nice to meet you!`);

            return callback(null, response);
        } catch (error) {
            return callback({
                message: "Internal Error",
                name: "Unknown Error",
                code: Status.UNKNOWN,
            });
        }
    }
}
