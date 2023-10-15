"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [testResponse, setTestResponse] = useState<any>(null);

  useEffect(() => {
    fetch("/api/test").then((data) => setTestResponse(data));
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <div>{JSON.stringify(testResponse)}</div>
    </main>
  );
}
