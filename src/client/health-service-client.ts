import { credentials } from "@grpc/grpc-js";
import { HealthClient, IHealthClient } from "../proto/health/health_grpc_pb";
import { HealthCheckRequest, HealthCheckResponse } from "../proto/health/health_pb";
import { ServiceNames } from "../server/service-names";
import { GrpcClient, RequestOutput } from "./grpc-client";

export class HealthService {
    private readonly client: IHealthClient;

    constructor(address: string, port: number) {
        const uri: string = `${address}:${port}`;

        this.client = new HealthClient(uri, credentials.createInsecure());
    }

    async isHealthy(service: ServiceNames): Promise<boolean> {
        const request = new HealthCheckRequest();
        request.setService(service);

        const response: RequestOutput<HealthCheckResponse> = await GrpcClient.request({
            request,
            client: this.client,
            method: "check",
        });

        const { success, error } = response;
        if (!!error) {
            return false;
        }

        const status: HealthCheckResponse.ServingStatus = success.getStatus();

        return status === HealthCheckResponse.ServingStatus.SERVING;
    }
}
