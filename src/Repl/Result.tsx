import * as React from "react";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";

// @ts-ignore
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

import { replHeading1 } from "./Repl.css";
import { output } from "./Result.css";

type Props = {
  error?: any;
  result?: { code: string };
};

export function Result(props: Props) {
  return (
    <div role="region" aria-live="polite" className={output}>
      <h2 className={replHeading1} tabIndex={-1}>
        Result
      </h2>

      {props?.error && (
        <>
          <p>{props.error}</p>
        </>
      )}
      {props.result && (
        <SyntaxHighlighter language="javascript" style={docco}>
          {props?.result.code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}
