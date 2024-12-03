type DecodeRecord = Record<string, string | Record<string, string>>;
const decodePath = <T>(target: T, path: string): string => {
  const keys = path.split(".");
  const result = keys.reduce(
    (acc, key) => {
      return acc[key as keyof typeof acc] as DecodeRecord;
    },
    target as unknown as DecodeRecord,
  );
  return result as unknown as string;
};

export { decodePath };
