export function isValidIPv4(value: string): boolean {
  const ipv4 =
    /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

  return ipv4.test(value);
}

export function isValidIPv6(value: string): boolean {
  return /^[0-9a-fA-F:]+$/.test(value);
}
