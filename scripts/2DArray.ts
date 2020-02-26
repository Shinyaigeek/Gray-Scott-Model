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

export const get2DArrayWithRange = (len: number) => {
  const res = [];
  for (let i = 0; i < len; i++) {
    const col = [];
    for (let j = 1; j <= len; j++) {
      col.push(j + i * len);
    }
    res.push(col);
  }
  return res;
};

export const shift2dArray = (target: number[][], n: number, axis?: 0 | 1) => {
  if (axis === 0) {
    if (n >= 0) {
      const copy = Array.from(target);
      const sliced = copy.splice(target.length - n);
      return sliced.concat(copy);
    } else {
      const copy = Array.from(target);
      const sliced = copy.splice(-n);
      return sliced.concat(copy);
    }
  } else if (axis === 1) {
    if (n >= 0) {
      let res = Array.from(target);
      for (let i in res) {
        const col = Array.from(res[i]);
        const sliced = col.splice(target.length - n);
        res[i] = sliced.concat(col);
      }
      return res;
    } else {
      let res = Array.from(target);
      for (let i in res) {
        const col = Array.from(res[i]);
        const sliced = col.splice(-n);
        res[i] = sliced.concat(col);
      }
      return res;
    }
  } else {
    if (n >= 0) {
      const converted1d = convert2dArrayTo1d(target);
      const sliced = converted1d.splice(converted1d.length - n);
      return convert1dArrayTo2d(
        sliced.concat(converted1d),
        target[0].length,
        target.length
      );
    } else {
      const converted1d = convert2dArrayTo1d(target);
      const sliced = converted1d.splice(-n);
      return convert1dArrayTo2d(
        sliced.concat(converted1d),
        target[0].length,
        target.length
      );
    }
  }
};

export const convert1dArrayTo2d = (
  target: number[],
  col: number,
  row: number
) => {
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

export const convert2dArrayTo1d = (target: number[][]) => {
  const res = [];
  for (let col of target) {
    for (let i of col) {
      res.push(i);
    }
  }
  return res;
};

export const sum2d2d = (left: number[][], right: number[][]) => {
  if (left.length !== right.length || left[0].length !== right[0].length)
    throw new Error();
  return left.map((col, i) => {
    return col.map((c, j) => {
      return c + right[i][j];
    });
  });
};

export const minus2d2d = (left: number[][], right: number[][]) => {
  if (left.length !== right.length || left[0].length !== right[0].length)
    throw new Error();
  return left.map((col, i) => {
    return col.map((c, j) => {
      return c - right[i][j];
    });
  });
};

export const div2dWithSch = (arr: number[][], sch: number) => {
  return arr.map(col => col.map(i => i / sch));
};

export const mul2dWithSch = (arr: number[][], sch: number) => {
  return arr.map(col => col.map(i => i * sch));
};

export const mul2dWith2d = (left: number[][], right: number[][]) => {
  return left.map((col, i) => {
    return right[0].map((c, j) => {
      return calcInner(col, getRow(right, j));
    });
  });
};

export const getRow = (target: number[][], row: number) => {
  const res = target.map((col, i) => {
    return col[row];
  });
  return res;
};

export const calcInner = (left: number[], right: number[]) => {
  let ans = 0;
  for (let i in left) {
    ans += left[i] * right[i];
  }
  return ans;
};
