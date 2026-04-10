'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function MarketplaceContent() {
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get('id');
  const fbUrl = `https://www.facebook.com/marketplace/create/vehicle?adpilot_id=${vehicleId}`;

  const [status, setStatus] = useState<'checking' | 'redirect' | 'install'>('checking');

  useEffect(() => {
    // Check if extension is installed via message ping/pong
    const handler = (event: MessageEvent) => {
      if (event.data?.type === 'ADPILOT_PONG') {
        setStatus('redirect');
        setTimeout(() => {
          if (vehicleId) window.location.href = fbUrl;
        }, 1000);
      }
    };

    window.addEventListener('message', handler);
    window.postMessage({ type: 'ADPILOT_PING' }, '*');

    // If no response in 1.5s, show install instructions
    const timeout = setTimeout(() => {
      setStatus((s) => (s === 'checking' ? 'install' : s));
    }, 1500);

    return () => {
      window.removeEventListener('message', handler);
      clearTimeout(timeout);
    };
  }, [vehicleId, fbUrl]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full overflow-hidden">
        {/* Header */}
        <div
          className="text-white px-8 py-6 text-center"
          style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
        >
          <h1 className="text-xl font-bold">Ad Pilot Marketplace</h1>
          <p className="text-sm opacity-85 mt-1">Vehicle Listing Assistant</p>
        </div>

        <div className="p-8">
          {/* Checking */}
          {status === 'checking' && (
            <div className="text-center py-10">
              <div className="w-10 h-10 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-500 text-sm">Checking for Chrome extension...</p>
            </div>
          )}

          {/* Redirect */}
          {status === 'redirect' && (
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                &#10003;
              </div>
              <p className="text-base font-semibold text-gray-900 mb-2">Extension detected!</p>
              <p className="text-gray-500 text-sm">Opening Facebook Marketplace...</p>
            </div>
          )}

          {/* Install instructions */}
          {status === 'install' && (
            <div>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                To auto-fill your Marketplace listings, you need to install the{' '}
                <strong>Ad Pilot Chrome extension</strong> first. It only takes a minute:
              </p>

              {[
                { title: 'Download the extension', desc: 'Click the button below to download the zip file' },
                { title: 'Unzip the file', desc: 'Double-click the downloaded zip to extract the folder' },
                {
                  title: 'Open Chrome Extensions',
                  desc: (
                    <>
                      Go to{' '}
                      <code className="bg-gray-100 px-2 py-0.5 rounded text-sm text-indigo-600">
                        chrome://extensions
                      </code>{' '}
                      in your browser
                    </>
                  ),
                },
                { title: 'Enable Developer Mode', desc: 'Toggle the switch in the top-right corner' },
                {
                  title: 'Load the extension',
                  desc: 'Click "Load unpacked" and select the unzipped folder',
                },
                {
                  title: 'Come back and click the link again',
                  desc: 'The extension will auto-fill your listing on Facebook!',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div className="pt-1 text-sm text-gray-600 leading-relaxed">
                    <strong className="text-gray-900">{step.title}</strong>
                    <br />
                    {step.desc}
                  </div>
                </div>
              ))}

              <a
                href="https://drive.google.com/file/d/10WXgxILZTbbav9t5xkR6kHxbNxzj2Hlh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 text-white font-semibold rounded-xl text-base mt-6 hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
              >
                Download Extension
              </a>

              <div className="text-center mt-4">
                <a
                  href={fbUrl}
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  I already installed it — continue to Facebook &rarr;
                </a>
              </div>

              <p className="text-center mt-4 text-xs text-gray-400">
                Need help? Text Kelly at 217-XXX-XXXX
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MarketplacePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <p className="text-gray-400">Loading...</p>
        </div>
      }
    >
      <MarketplaceContent />
    </Suspense>
  );
}
