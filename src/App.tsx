import { QueryClient, QueryClientProvider } from "react-query";
import Geolocation from "@/components/Geolocation/Geolocation";
import Weather from "@/components/Weather/Weather";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Geolocation />
      <Weather />
    </QueryClientProvider>
  );
};

export default App;
