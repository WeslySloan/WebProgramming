function qsort(arr) {
  if (arr.length < 2) return arr;
  const [pivot, ...rest] = arr;
  const lesser = rest.filter(x => x <= pivot);
  const greater = rest.filter(x => x > pivot);

  return [...qsort(lesser), pivot, ...qsort(greater)];
  // return qsort(lesser).concat(pivot, qsort(greater));
}

let data = [4, 3, 1, 6, 8, 9, 5, 6, 2, 4, 7]
sorted = qsort(data);
console.log(sorted);
console.log(data);