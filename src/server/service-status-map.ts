import { ServingStatusMap } from "grpc-health-check";
import { ServiceNames } from "./service-names";

export const serviceStatusMap: ServingStatusMap = {
    [ServiceNames.GREET_SERVICE]: "NOT_SERVING",
    "": "SERVING",
};
