import * as React from "react";

import { transform } from "../swc";
import { repl } from "./Repl.css";

import { Result } from "./Result";
import { Input } from "./Input";

export type SwcOptions = {
  jscParserSyntax: "typescript" | "ecmascript";
};

export type SwcOptionsDispatch = (update: {
  option: keyof SwcOptions;
  value: any;
}) => void;

export function Repl() {
  const [code, setCode] = React.useState(`var test: string = "cat";`);
  const [optionsState, optionsDispatch] = React.useReducer(
    (
      prevState: SwcOptions,
      action: { option: keyof SwcOptions; value: any }
    ) => {
      prevState[action.option] = action.value;

      return { ...prevState };
    },
    {
      jscParserSyntax: "typescript",
    }
  );

  const [watchModeEnabled, setWatchModeEnabled] =
    React.useState<boolean>(false);
  const [transformationCode, setTransformationCode] = React.useState<string>();
  const [transformation, setTransformation] =
    React.useState<{
      error?: any;
      result?: any;
    }>();
  const [lastOptions, setLastOptions] = React.useState<string>();

  async function runTransform() {
    setTransformationCode(code);
  }

  React.useEffect(() => {
    if (transformationCode !== undefined) {
      const controller = new AbortController();

      // Note: mutation is okay for now, as this is the only consumer
      defaultSwcOptions.jsc.parser.syntax = optionsState.jscParserSyntax;

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
            setLastOptions(JSON.stringify(defaultSwcOptions, null, 4));
          }
        });

      return () => {
        controller.abort();
      };
    }
  }, [transformationCode, optionsState.jscParserSyntax]);

  return (
    <div className={repl}>
      <Input
        runTransform={runTransform}
        setTransformationCode={setTransformationCode}
        watchModeEnabled={watchModeEnabled}
        setWatchModeEnabled={setWatchModeEnabled}
        code={code}
        setCode={setCode}
        optionsState={optionsState}
        optionsDispatch={optionsDispatch}
      />

      <Result
        error={transformation?.error}
        result={transformation?.result}
        lastOptions={lastOptions}
      />
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
    transform: {
      react: {
        runtime: "classic",
        // importSource: "react",
      },
    },
  },
};

function test(props: {}) {
  return <div />;
}
