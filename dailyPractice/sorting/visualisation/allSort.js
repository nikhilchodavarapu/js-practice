import { bubbleSort } from "./bubble_sort.js";
import { insertionSort } from "./insertion_sort.js";
import { mergeSort } from "./merge_sort.js";
import { quickSort } from "./quick_sort.js";
import { selectionSort } from "./selection_sort.js";

const selectSort = (input) => {
  switch (input) {
    case 1: return bubbleSort;
    case 2: return selectionSort;
    case 3: return insertionSort;
    case 4: return quickSort;
    case 5: return mergeSort;
  }
}

const main = (data) => {
  const input = parseInt(
    prompt("SELECT\n________\n1. Bubble Sort\n2. Selection Sort\n3. Insertion Sort\n4. Quick Sort\n5. Merge Sort\n6. Tim Sort")
  );

  const sort = selectSort(input);
  sort(data);
}

main(Deno.args);