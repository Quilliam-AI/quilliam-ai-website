"use client";

export function ManageCookies() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("cookie_consent");
        window.location.reload();
      }}
      className="text-xs text-stone-400 hover:text-stone-600 transition-colors py-1 inline-block cursor-pointer"
    >
      Manage Cookies
    </button>
  );
}
