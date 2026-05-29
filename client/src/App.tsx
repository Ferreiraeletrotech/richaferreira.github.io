import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Rota final de fallback (404) */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTA: Sobre o Tema
// - Primeiro escolha um tema padrão de acordo com seu estilo de design (fundo escuro ou claro), depois altere a paleta de cores no index.css
//   para manter a consistência das cores de primeiro plano/fundo em todos os componentes
// - Se você quiser tornar o tema alternável, passe `switchable` para o ThemeProvider e use o hook `useTheme`

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
