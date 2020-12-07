export class IsArraySorted {
  isSorted(a: Array<number>, n: number): boolean {
    if (n === 1) return true;
    return a[n-1]<a[n-2] ? false : this.isSorted(a, n-1);
  }
}
