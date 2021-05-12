type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;

type SwcCore = Await<typeof import("@swc/core")>;

export type SwcCoreTransformOptions = NonNullable<
  Parameters<SwcCore["transformSync"]>[1]
>;
