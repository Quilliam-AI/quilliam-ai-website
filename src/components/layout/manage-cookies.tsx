"use client";

import { Button } from "@/components/ui/button";

export function ManageCookies() {
  return (
    <Button
      type="button"
      variant="text-muted"
      size="text"
      onClick={() => {
        localStorage.removeItem("cookie_consent");
        window.location.reload();
      }}
    >
      Manage Cookies
    </Button>
  );
}
