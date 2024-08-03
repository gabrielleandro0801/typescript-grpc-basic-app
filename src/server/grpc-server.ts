import { Server, ServerCredentials, ServiceDefinition, UntypedServiceImplementation } from "@grpc/grpc-js";
import { HealthImplementation } from "grpc-health-check";
import { ServiceNames } from "./service-names";
import { serviceStatusMap } from "./service-status-map";

export interface AddServicesInput {
    name: ServiceNames;
    definition: ServiceDefinition;
    implementation: UntypedServiceImplementation;
}

export class GrpcServer {
    private healthChecking: HealthImplementation;
    private readonly server: Server;

    constructor() {
        this.server = new Server();
        this.configureHealthCheck();
    }

    addServices(services: AddServicesInput[]) {
        for (const service of services) {
            this.startService(service);
        }
    }

    listen(address: string, port: number): void {
        const uri: string = `${address}:${port}`;

        this.server.bindAsync(uri, ServerCredentials.createInsecure(), (error: Error, port: number) => {
            if (error) {
                console.log(`Error: ${error.message}`);
                throw error;
            }

            console.log(`Server running on [${uri}]`);
        });
    }

    private configureHealthCheck() {
        this.healthChecking = new HealthImplementation(serviceStatusMap);
        this.healthChecking.addToServer(this.server);
        this.healthChecking.setStatus(ServiceNames.EMPTY_SERVICE, "SERVING");
    }

    private startService(service: AddServicesInput) {
        const { name, definition, implementation } = service;

        this.server.addService(definition, implementation);
        this.healthChecking.setStatus(name, "SERVING");

        console.debug(`Service [${name}] is serving`);
    }
}
