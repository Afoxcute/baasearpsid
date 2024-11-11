"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = "1095361894439-81p6o10agj8ncuoefr87hrqb9r6i6rhg.apps.googleusercontent.com";

export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default Providers;