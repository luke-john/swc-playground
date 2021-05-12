import * as React from "react";

import { transform } from "../swc";
import {
  compileRun,
  input,
  inputCode,
  inputCompilation,
  label,
  output,
  repl,
  replHeading1,
  select,
  textarea,
} from "./Repl.css";

export function Repl() {
  const [code, setCode] = React.useState(`var test: string = "cat";`);
  const [jscParserSyntax, setJscParserSyntax] = React.useState("typescript");
  const [watchModeEnabled, setWatchModeEnabled] =
    React.useState<boolean>(false);
  const [transformationCode, setTransformationCode] = React.useState<string>();
  const [transformation, setTransformation] =
    React.useState<{
      error?: any;
      result?: any;
    }>();

  async function runTransform(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTransformationCode(code);
  }

  React.useEffect(() => {
    if (transformationCode !== undefined) {
      const controller = new AbortController();

      // Note: mutation is okay for now, as this is the only consumer
      defaultSwcOptions.jsc.parser.syntax = jscParserSyntax;

      // TODO provide way to modify more swc options
      transform(code, defaultSwcOptions)
        .then((result) => {
          return { result };
        })
        .catch((error) => {
          if (typeof error === "string") {
            return { error };
          } else {
            return { error: "failed to run compilation " };
          }
        })
        .then((transformation) => {
          if (!controller.signal.aborted) {
            setTransformation(transformation);
          }
        });

      return () => {
        controller.abort();
      };
    }
  }, [transformationCode, jscParserSyntax]);

  return (
    <div className={repl}>
      <form onSubmit={runTransform} className={input}>
        <h2 className={replHeading1}>Input</h2>

        <fieldset>
          <legend className={label}>Options</legend>
          <label htmlFor="jsx-parser-syntax" className={label}>
            Choose a syntax:{" "}
          </label>

          <select
            id="jsx-parser-syntax"
            className={select}
            value={jscParserSyntax}
            onChange={(e) => {
              setJscParserSyntax(e.currentTarget.value);
            }}
          >
            <option value="ecmascript">ecmascript</option>
            <option value="typescript">typescript</option>
          </select>
        </fieldset>

        <div className={inputCode}>
          <label htmlFor="repl-input" className={label}>
            Code
          </label>

          <textarea
            id="repl-code"
            className={textarea}
            value={code}
            rows={8}
            onChange={(e) => {
              setCode(e.currentTarget.value);

              if (watchModeEnabled) {
                setTransformationCode(e.currentTarget.value);
              }
            }}
          ></textarea>
        </div>

        <div className={inputCompilation}>
          <label className={label}>
            <input
              type="checkbox"
              checked={watchModeEnabled}
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  setTransformationCode(e.currentTarget.value);
                }
                setWatchModeEnabled(e.currentTarget.checked);
              }}
            />
            Run in watch mode
          </label>

          <button className={compileRun}>Compile</button>
        </div>
      </form>

      <div role="region" aria-live="polite" className={output}>
        <h2 className={replHeading1} tabIndex={-1}>
          Result
        </h2>

        {transformation && transformation?.error ? (
          <>
            <p>{transformation.error}</p>
          </>
        ) : (
          <pre>
            <code>{transformation?.result.code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

const defaultSwcOptions = {
  // Some options cannot be specified in .swcrc
  filename: "input.js",
  sourceMaps: true,
  // Input files are treated as module by default.
  isModule: false,

  // All options below can be configured via .swcrc
  jsc: {
    parser: {
      syntax: "typescript",
    },
    transform: {},
  },
};
