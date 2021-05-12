import * as React from "react";

import {
  compileRun,
  input,
  inputCode,
  inputCompilation,
  label,
  select,
  textarea,
} from "./Input.css";
import { replHeading1 } from "./Repl.css";

export function Input({
  runTransform,
  setTransformationCode,
  watchModeEnabled,
  setWatchModeEnabled,
  jscParserSyntax,
  setJscParserSyntax,
  code,
  setCode,
}: {
  runTransform: () => void;
  setTransformationCode: (transformationCode: string) => void;
  watchModeEnabled: boolean;
  setWatchModeEnabled: (enabled: boolean) => void;
  jscParserSyntax: string;
  setJscParserSyntax: (syntax: string) => void;
  code: string;
  setCode: (code: string) => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        runTransform();
      }}
      className={input}
    >
      <h2 className={replHeading1}>Input</h2>

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

        <button className={compileRun}>Transform</button>
      </div>
    </form>
  );
}
