"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  // @ts-ignore
} from "@azure/msal-react";

// MSAL-based React component code
const msalCode = `import React, { useState } from "react";
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { openFilePickerPersonal } from "../lib/msal/personal";
import { openFilePickerOrg } from "../lib/msal/org";
import axios from "axios";
import { checkPersonalAccount, checkOrgAccount, getDownloadUrl } from "../lib/msal/helpers";
import { msalPersonalScopes, msalOrgScopes, msalConsumerAuthority, msalOrgAuthority } from "../lib/msal/constants";

function MsalContent() {
  const { instance } = useMsal();
  const [files, setFiles] = useState<any[]>([]);

  const handlePicked = async (items: any[], token: string) => {
    const enriched = await Promise.all(
      items.map(async (i) => ({
        ...i,
        downloadUrl: await getDownloadUrl(token, i.driveId, i.id),
      }))
    );
    setFiles(enriched);
  };

  const handlePersonal = () => {
    const accounts = instance.getAllAccounts();
    if (!accounts.some(checkPersonalAccount)) {
      instance.loginPopup({
        redirectUri: window.location.origin + "/",
        scopes: msalPersonalScopes,
        authority: msalConsumerAuthority,
      });
    }
  };

  const handleOrg = () => {
    const accounts = instance.getAllAccounts();
    if (!accounts.some(checkOrgAccount)) {
      instance.loginPopup({
        redirectUri: window.location.origin + "/",
        scopes: msalOrgScopes,
        authority: msalOrgAuthority,
      });
    }
  };

  const handleOpen = () => {
    const accounts = instance.getAllAccounts();
    if (accounts.some(checkPersonalAccount)) {
      openFilePickerPersonal(instance, handlePicked);
    } else {
      openFilePickerOrg(instance, handlePicked);
    }
  };

  const handleUpload = () => {
    files.forEach((f) => {
      axios
        .post("/sharepoint/uploadFile", {
          file_name: f.name,
          url: f.downloadUrl,
          ID: f.id,
        })
        .then((res) => console.log(res.data))
        .catch(console.error);
    });
  };

  return (
    <div>
      <UnauthenticatedTemplate>
        <button onClick={handlePersonal} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded mr-2">
          Connect Personal OneDrive
        </button>
        <button onClick={handleOrg} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">
          Connect SharePoint (Org)
        </button>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <button onClick={handleOpen} className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded mr-2">
          Open File Picker
        </button>
        {files.length > 0 && (
          <button onClick={handleUpload} className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded">
            Upload {files.length} File{files.length > 1 ? "s" : ""}
          </button>
        )}
        <pre className="mt-4 bg-gray-800 p-4 rounded max-h-60 overflow-auto text-sm">
          {JSON.stringify(files, null, 2)}
        </pre>
      </AuthenticatedTemplate>
    </div>
}`;

// FastAPI endpoint code
const apiCode = `from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import requests
import boto3
from io import BytesIO
from app.connectors.microsoft import MicrosoftOAuth2Service

router = APIRouter(prefix="/sharepoint", tags=["sharepoint"])
S3 = boto3.client("s3")
BUCKET = "deepfile-dev-wn"

class SharePointFileRequest(BaseModel):
    file_name: str
    url: str
    ID: str

@router.get("/test")
def login():
    return MicrosoftOAuth2Service().get_token()

@router.post("/uploadFile")
def upload_file(req: SharePointFileRequest):
    token = MicrosoftOAuth2Service().get_token()
    if not token:
        raise HTTPException(401, "Could not acquire Microsoft token")

    resp = requests.get(req.url, headers={"Authorization": f"Bearer {token}"})
    if resp.status_code != 200:
        raise HTTPException(resp.status_code, f"Download failed: {req.url}")

    try:
        S3.upload_fileobj(BytesIO(resp.content), BUCKET, req.file_name)
    except Exception as e:
        raise HTTPException(500, f"S3 upload error: {e}")

    return {"message": f"Uploaded {req.file_name}"}
`;

export default function DeepFilePage({ msalInstance }: { msalInstance?: any }) {
  useEffect(() => {
    if (msalInstance?.initialize) msalInstance.initialize();
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
            At DeepFile, I focused on solving a core product challenge: identifying and fixing inconsistencies in the platform’s file selection logic. My work involved tracing why documents were misclassified or surfaced randomly and proposing deterministic selection criteria based on semantic search and metadata interpretation. I contributed to the SharePoint connector integration, defining multi-user token storage and enabling personalized retrieval through document embedding and vector search. By internship’s end, I improved file discovery reliability and long-term knowledge integration architecture—making the product more usable, scalable, and precise.
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