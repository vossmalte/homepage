function zipWith<A, B = A, C = A>(operator: (a: A, b: B) => C) {
  return function (a: A[], b: B[]): C[] {
    if (!(a.length === b.length)) throw new DOMException('arrays must have same length');
    const result = a.map((c, index) => operator(c, b[index]));
    // console.table({ a, b, op: String(operator), result });
    return result;
  };
}

export const vecMinus = zipWith((a: number, b: number) => a - b);
export const vecPlus = zipWith((a: number, b: number) => a + b);

export function vecLength(a: number[]): number {
  return Math.sqrt(a.reduce((c, accumulator: number) => accumulator + c * c, 0));
}

export function vecNormalize(a: number[]): number[] {
  const length = vecLength(a);
  return a.map((x) => x / length / length);
}

export type Coordinate = { x: number; y: number };

export function coordinateMinus(a: Coordinate, b: Coordinate): Coordinate {
  return { x: a.x - b.x, y: a.y - b.y };
}

export function coordinateRadians(a: Coordinate): number {
  if (Math.abs(a.x) < 10) return 0;
  return Math.atan(a.y / a.x);
}
