"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// MSAL-based React component code (for display only)
const msalCode = `import React, { useState } from "react";
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { openFilePickerPersonal } from "../lib/msal/personal";
import { openFilePickerOrg } from "../lib/msal/org";
import axios from "axios";
import { checkPersonalAccount, checkOrgAccount, getDownloadUrl } from "../lib/msal/helpers";
import { msalPersonalScopes, msalOrgScopes, msalConsumerAuthority, msalOrgAuthority } from "../lib/msal/constants";

function MsalContent() {
  const { instance } = useMsal();
  const [files, setFiles] = useState<unknown[]>([]);

  const handlePicked = async (items: unknown[], token: string) => {
    const enriched = await Promise.all(
      items.map(async (i) => ({
        ...i,
        downloadUrl: await getDownloadUrl(token, i.driveId, i.id),
      }))
    );
    setFiles(enriched);
  };

  // ...rest of snippet omitted for brevity
}`;

// FastAPI endpoint code (for display only)
const apiCode = `from fastapi import APIRouter, HTTPException
# ...rest of snippet omitted for brevity
`;

export default function DeepFilePage({ msalInstance }: { msalInstance?: unknown }) {
  useEffect(() => {
    if (typeof msalInstance === "object" && msalInstance !== null && "initialize" in msalInstance) {
      // @ts-expect-error dynamic call
      msalInstance.initialize();
    }
  }, [msalInstance]);

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-gray-900 to-black text-white space-y-12">
      {/* Back Link */}
      <Link href="/#experience" className="block mb-6 text-gray-400 hover:text-white">
        ← Back
      </Link>

      {/* Header & Intro */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative flex-shrink-0">
          <Image src="/DeepfileLogo.jpg" alt="DeepFile Logo" fill className="object-contain" />
        </div>
        <div className="md:ml-6 lg:ml-8 flex-1">
          <h1 className="text-4xl font-bold">DeepFile</h1>
          <p className="text-gray-500 mt-1 mb-4">2025</p>
          <div className="text-lg leading-relaxed">
            At DeepFile, I focused on solving a core product challenge: identifying and fixing inconsistencies in the platform’s file selection logic…
          </div>
        </div>
      </div>

      {/* Role Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Software Engineer Intern (Jun 2025 – Aug 2025)</h2>
      </section>

      {/* Code Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded shadow overflow-hidden">
          <div className="px-4 py-2 bg-gray-900 border-b">
            <h2 className="text-lg font-semibold">React MSAL File Picker</h2>
          </div>
          <div className="p-4 max-h-[400px] overflow-auto bg-gray-800">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers wrapLongLines>
              {msalCode}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="bg-gray-800 rounded shadow overflow-hidden">
          <div className="px-4 py-2 bg-gray-900 border-b">
            <h2 className="text-lg font-semibold">FastAPI Upload Endpoint</h2>
          </div>
          <div className="p-4 max-h-[400px] overflow-auto bg-gray-800">
            <SyntaxHighlighter language="python" style={vscDarkPlus} showLineNumbers wrapLongLines>
              {apiCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </main>
);
}
