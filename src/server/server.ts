import { GreetServiceService } from "../proto/greet/v1/greet_service_grpc_pb";
import { AddServicesInput, GrpcServer } from "./grpc-server";
import { ServiceNames } from "./service-names";
import { GreetServiceServer } from "./services/greet-service";

const server: GrpcServer = new GrpcServer();

const address = "0.0.0.0";
const port: number = 3000;

const services: AddServicesInput[] = [
    {
        name: ServiceNames.GREET_SERVICE,
        definition: GreetServiceService,
        implementation: new GreetServiceServer(),
    },
];

server.addServices(services);
server.listen(address, port);
