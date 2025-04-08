"use client";

import * as React from "react";
import { ContactTable } from "../../components/ContactTable";

export default function ContactPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 ml-60 mt-20">
        <h1 className="text-2xl font-bold mb-6">Contacts & Exchanges</h1>
        <ContactTable />
      </div>
    </div>
  );
}
