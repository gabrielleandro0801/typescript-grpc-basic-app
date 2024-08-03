import { credentials } from "@grpc/grpc-js";
import { GreetServiceClient, IGreetServiceClient } from "../proto/greet/v1/greet_service_grpc_pb";
import { SayHelloRequest, SayHelloResponse } from "../proto/greet/v1/greet_service_pb";
import { GrpcClient, RequestOutput } from "./grpc-client";

export class GreetService {
    private readonly client: IGreetServiceClient;

    constructor(address: string, port: number) {
        const uri: string = `${address}:${port}`;

        this.client = new GreetServiceClient(uri, credentials.createInsecure());
    }

    async sayHello(name: string): Promise<RequestOutput<SayHelloResponse>> {
        const request = new SayHelloRequest();
        request.setName(name);

        return await GrpcClient.request<IGreetServiceClient, SayHelloRequest, SayHelloResponse>({
            request,
            client: this.client,
            method: "sayHello",
        });
    }
}
