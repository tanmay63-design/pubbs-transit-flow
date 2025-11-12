import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Software from "./pages/Software";
import Network from "./pages/features/Network";
import FrequencySettings from "./pages/features/FrequencySettings";
import Scheduling from "./pages/features/Scheduling";
import CrewRostering from "./pages/features/CrewRostering";
import ControlSystem from "./pages/features/ControlSystem";
import DriverConsole from "./pages/features/DriverConsole";
import ResourceSoftware from "./pages/resources/ResourceSoftware";
import ResearchProject from "./pages/resources/ResearchProject";
import Publication from "./pages/resources/Publication";
import CaseStudy from "./pages/resources/CaseStudy";
import Videos from "./pages/resources/Videos";
import ResourceDriverConsole from "./pages/resources/ResourceDriverConsole";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/software" element={<Software />} />
          <Route path="/features/network" element={<Network />} />
          <Route path="/features/frequency-settings" element={<FrequencySettings />} />
          <Route path="/features/scheduling" element={<Scheduling />} />
          <Route path="/features/crew-rostering" element={<CrewRostering />} />
          <Route path="/features/control-system" element={<ControlSystem />} />
          <Route path="/features/driver-console" element={<DriverConsole />} />
          <Route path="/resources/software" element={<ResourceSoftware />} />
          <Route path="/resources/research-project" element={<ResearchProject />} />
          <Route path="/resources/publication" element={<Publication />} />
          <Route path="/resources/case-study" element={<CaseStudy />} />
          <Route path="/resources/videos" element={<Videos />} />
          <Route path="/resources/driver-console" element={<ResourceDriverConsole />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
