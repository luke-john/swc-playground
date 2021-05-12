type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;

type SwcModule = Await<typeof import("./vendor/swc-wasm-web")>;

const _swc: {
  loaded: Promise<boolean> | boolean;
  swc: SwcModule | undefined;
} = {
  loaded: new Promise<boolean>(async (res) => {
    // TODO handle failed loads
    const swcWasmWeb = await import("./vendor/swc-wasm-web");

    _swc.swc = swcWasmWeb;

    await _swc.swc.default();

    res(true);
  }),
  swc: undefined,
};

export async function transform(
  ...args: Parameters<SwcModule["transformSync"]>
) {
  if (_swc.loaded !== true) {
    await Promise.resolve(_swc.loaded);
  }

  const result = _swc.swc!.transformSync(...args);

  return result;
}

export async function parseSync(...args: Parameters<SwcModule["parseSync"]>) {
  if (_swc.loaded !== true) {
    await Promise.resolve(_swc.loaded);
  }

  const result = _swc.swc!.parseSync(...args);

  return result;
}

export async function printSync(...args: Parameters<SwcModule["printSync"]>) {
  if (_swc.loaded !== true) {
    await Promise.resolve(_swc.loaded);
  }

  const result = _swc.swc!.printSync(...args);

  return result;
}
