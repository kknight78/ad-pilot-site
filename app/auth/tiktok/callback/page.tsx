import { site } from "@/content/siteData";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: `TikTok Connected | ${site.name}`,
  description: "TikTok account authorization callback",
};

export default function TikTokCallbackPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const authCode = searchParams.auth_code || searchParams.code;
  const error = searchParams.error;
  const errorDescription = searchParams.error_description;

  return (
    <>
      <header className="border-b border-black/10 py-4">
        <div className="container-xl">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/bird-light-bg.svg" alt={site.name} className="h-10 w-auto" />
            <span className="text-sm font-medium">{site.name}</span>
          </Link>
        </div>
      </header>

      <main className="py-14 sm:py-18">
        <div className="container-xl max-w-lg mx-auto text-center">
          {error ? (
            <>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-50 mb-6">
                <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-3">Connection Failed</h1>
              <p className="text-black/60 mb-4">
                {typeof errorDescription === "string" ? errorDescription : "Something went wrong connecting your TikTok account."}
              </p>
              <p className="text-sm text-black/40">
                Error: {typeof error === "string" ? error : "unknown"}
              </p>
            </>
          ) : authCode ? (
            <>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-50 mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-3">TikTok Connected</h1>
              <p className="text-black/60 mb-6">
                Your TikTok account has been successfully authorized. You can close this window.
              </p>
              <div className="bg-black/5 rounded-xl p-4 text-left">
                <p className="text-xs text-black/40 mb-1">Authorization Code</p>
                <code className="text-xs text-black/70 break-all select-all">{typeof authCode === "string" ? authCode : authCode[0]}</code>
              </div>
            </>
          ) : (
            <>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-50 mb-6">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-3">No Authorization Data</h1>
              <p className="text-black/60">
                This page is the TikTok authorization callback. It should be accessed via the TikTok authorization flow, not directly.
              </p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
