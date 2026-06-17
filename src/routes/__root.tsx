import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">
          404
        </h1>

        <p className="mt-3 text-muted-foreground">
          This page doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          {error.message}
        </p>

        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        // TITLE
        {
          title:
            "CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD. — Professional Vocational Training in Cambodia",
        },

        // DESCRIPTION
        {
          name: "description",
          content:
            "Premier vocational training in Phnom Penh. Security, Fire Safety, Drone Operations, and Chinese Language certification.",
        },

        // OPEN GRAPH
        {
          property: "og:title",
          content:
            "CAMBODIAN SPEED ACCURATE TACTICAL CO., LTD.",
        },

        {
          property: "og:description",
          content:
            "Train. Protect. Lead. Industry-certified programs in Phnom Penh, Cambodia.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:url",
          content: "https://yourdomain.com",
        },

        // LOGO IMAGE
        {
          property: "og:image",
          content: "https://yourdomain.com/logo.png",
        },

        // TWITTER
        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:image",
          content: "https://yourdomain.com/logo.png",
        },
      ],

      links: [
        // CSS
        {
          rel: "stylesheet",
          href: appCss,
        },

        // FAVICON
        {
          rel: "icon",
          href: "/logo.png",
        },

        // GOOGLE FONTS
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
              <Outlet />
            </main>

            <Footer />
          </div>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}