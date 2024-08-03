import { Metadata, ServiceError } from "@grpc/grpc-js";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { promisify } from "node:util";

export type RequestInput<Cli, Req> = {
    client: Cli;
    method: keyof Cli;
    request: Req;
    metadata?: Metadata;
};

export type RequestOutput<Res> = {
    success?: Res;
    error?: ServiceError;
};

export class GrpcClient {
    static async request<Cli, Req, Res>(input: RequestInput<Cli, Req>): Promise<RequestOutput<Res>> {
        try {
            const { client, method, request, metadata } = input;
            const fn: Function = client[method] as Function;
            const promisifiedFn = promisify<Req, Metadata, Res>(fn.bind(client));

            const response: Res = await promisifiedFn(request, metadata ?? new Metadata());

            return {
                success: response,
            };
        } catch (error) {
            const { name = "", message = "", code = Status.UNKNOWN, metadata = new Metadata(), details = "" } = error;

            return {
                error: {
                    name,
                    message,
                    code,
                    metadata,
                    details,
                },
            };
        }
    }
}
