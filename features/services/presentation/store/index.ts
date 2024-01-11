import servicesReducer from "./servicesPageSlice";
import servicesDetailReducer from "./serviceDetailPageSlice";

export const services = {
  services: servicesReducer,
  services_detail: servicesDetailReducer
};
