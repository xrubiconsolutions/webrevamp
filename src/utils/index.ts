export const handleResponseMessage = (
  responseMessage: string | Array<string>
) => {
  if (typeof responseMessage === "string") {
    return responseMessage;
  } else {
    return responseMessage.join(", ");
  }
};

export const classes = (...args: string[]) => args.join(" ");

export const chunk = <T = any>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
