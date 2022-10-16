const bubbleSort = (
  array: Array<number>,
  order: 'asc' | 'desc',
): Array<number> => {
  const length = array.length

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (
        (order === 'asc' && array[j] > array[j + 1]) ||
        (order === 'desc' && array[j] < array[j + 1])
      ) {
        const tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }

  return array
}

// asc, 配列の要素20個
console.log(
  bubbleSort(
    [...Array(20)].map(() => Math.floor(Math.random() * 100)),
    'asc',
  ),
)

// desc, 配列の要素20個
console.log(
  bubbleSort(
    [...Array(20)].map(() => Math.floor(Math.random() * 100)),
    'desc',
  ),
)
