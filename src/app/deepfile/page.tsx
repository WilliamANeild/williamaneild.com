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
from pydantic import BaseModel
import requests
from io import BytesIO
from docx import Document

router = APIRouter(prefix="/sharepoint", tags=["sharepoint"])

# Replace with your actual S3 bucket name
BUCKET_NAME = "deepfile-dev-wn"

class SharePointFileRequest(BaseModel):
    file_name: str
    url: str
    ID: str

@router.post("/uploadFile")
def upload_file(request: SharePointFileRequest):
    print(f"File Name: {request.file_name}")
    print(f"URL: {request.url}")
    print(f"ID: {request.ID}")

    # Step 1: Download the file from the provided URL (streaming)
    file_ext = os.path.splitext(request.file_name)[1]
    print(f"File extension: {file_ext}")
    with requests.get(request.url, stream=True) as response:
        if response.status_code != 200:
            raise HTTPException(
                status_code=response.status_code,
                detail=f"Failed to download file from URL: {request.url}",
            )
        content = BytesIO()
        for chunk in response.iter_content(chunk_size=8192):
            if chunk:
                content.write(chunk)
        content.seek(0)

        # Load the .docx file from memory
        doc = Document(content)
        for para in doc.paragraphs:
            print(para.text)

    # Step 2: (Optional) Upload to S3 or integrate with semantic indexing
    # s3.upload_fileobj(BytesIO(response.content), BUCKET_NAME, request.file_name)

    return {"message": f"Successfully processed {request.file_name}"}
`;

export default function DeepFilePage() {
  useEffect(() => {
    // No props; initialization removed
  }, []);

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
            At DeepFile, I focused on diagnosing and resolving a high-priority product issue: the platform&apos;s file selection logic was returning inconsistent and sometimes irrelevant documents. I led an investigation into the indexing pipeline and semantic search stack, isolating the root causes within how embeddings were generated and how the cross-encoder reranking interacted with metadata filters. After mapping the architecture end to end, I redefined key stages of the file selection flow by adjusting how we parsed, embedded, and ranked documents. I worked closely with the CTO to validate improvements against a set of internal QA benchmarks. In parallel, I helped build out our SharePoint integration, which involved adding multi-user support, securely storing per-user access tokens using Fernet encryption, and developing logic to merge SharePoint documents with the platform&apos;s existing semantic search infrastructure. These contributions stabilized the product&apos;s core behavior, enabled enterprise client use cases, and laid the groundwork for future LLM-driven document intelligence features.
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
