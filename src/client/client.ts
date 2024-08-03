import { SayHelloResponse } from "../proto/greet/v1/greet_service_pb";
import { ServiceNames } from "../server/service-names";
import { GreetService } from "./greet-service-client";
import { RequestOutput } from "./grpc-client";
import { HealthService } from "./health-service-client";

const address = "0.0.0.0";
const port: number = 3000;

(async () => {
    const healthCheckClient: HealthService = new HealthService(address, port);
    const isHealthy: boolean = await healthCheckClient.isHealthy(ServiceNames.GREET_SERVICE);

    if (!isHealthy) {
        console.warn(`Service ${ServiceNames.GREET_SERVICE} is not serving`);
        return;
    }

    const greetClient: GreetService = new GreetService(address, port);
    const response: RequestOutput<SayHelloResponse> = await greetClient.sayHello("Gabriel");
    const { success, error } = response;

    if (!!error) {
        console.error(response);
        return;
    }

    console.log(success.getMessage());
})();
