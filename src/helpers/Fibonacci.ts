import { EPROTONOSUPPORT } from "constants"

export function fibonacci(i: number): number {
  if (i <= 0) {
    throw Error(`Illigal value: ${i}. Should be >= 0`);
  } else if (i>50) {
    throw Error(`Illigal value: ${i}. Should be < 50`);
  }
  else if (i < 3) {
    return 1;
  } else {
    return fibonacci(i-2) + fibonacci(i-1);
  }
}