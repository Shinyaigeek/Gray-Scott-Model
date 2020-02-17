export const get2DArrayWithZeros = (len: number) => {
  const col: number[] = new Array(len);
  col.fill(0);
  const res: number[][] = [];
  for (let i = 0; i < len; i++) {
    res.push(col);
  }
  return res;
};

export const get2DArrayWithOnes = (len: number) => {
  const col: number[] = new Array(len);
  col.fill(1);
  const res: number[][] = [];
  for (let i = 0; i < len; i++) {
    res.push(col);
  }
  return res;
};

export const slicing = (
  target: any[],
  rep: any,
  start: number,
  end: number
) => {
  const res = Array.from(target);
  for (let i = start; i < end; i++) {
    res[i] = rep;
  }
  return res;
};

export const shift2dArray = (target: any[][], n: number, axis?: 0 | 1) => {
  if (axis === 0) {
    const copy = Array.from(target);
    const sliced = copy.splice(n);
    return sliced.concat(copy);
  } else if (axis === 1) {
    let res = Array.from(target);
    for (let i in res) {
      const col = Array.from(res[i]);
      const sliced = col.splice(n);
      res[i] = sliced.concat(col);
    }
    return res;
  } else {
    const converted1d = convert2dArrayTo1d(target);
    const sliced = converted1d.splice(n);
    return convert1dArrayTo2d(
      sliced.concat(converted1d),
      target[0].length,
      target.length
    );
  }
};

export const convert1dArrayTo2d = (target: any[], col: number, row: number) => {
  if (target.length !== col * row) {
    throw new Error("Please check col, row, target");
  }
  const res = [];
  for (let i = 0; i < row; i++) {
    const c = [];
    for (let j = 0; j < col; j++) {
      c.push(target[col * i + j]);
    }
    res.push(c);
  }
  return res;
};

export const convert2dArrayTo1d = (target: any[][]) => {
  const res = [];
  for (let col of target) {
    for (let i of col) {
      res.push(i);
    }
  }
  return res;
};

export const sum2d2d = (left: any[][], right: any[][]) => {
  if (left.length !== right.length || left[0].length !== right[0].length)
    throw new Error();
  return left.map((col, i) => {
    return col.map((c, j) => {
      return c + right[i][j];
    });
  });
};

export const div2dWithSch = (arr: any[][], sch: any) => {
  return arr.map(col => col.map(i => i / sch));
};

export const mul2dWithSch = (arr: any[][], sch: any) => {
  return arr.map(col => col.map(i => i * sch));
};
