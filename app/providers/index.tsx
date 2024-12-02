import { useLoaderData } from "@remix-run/react";
import { ThemeProvider } from "remix-themes";
import { loader } from "@/root";

export function Providers({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  console.log("providers");
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      {children}
    </ThemeProvider>
  );
}
