import React, { useEffect } from "react";
import Prism from "prismjs";

export function Code({ code }: { code: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-javascript`}>{code}</code>
      </pre>
    </div>
  );
}
