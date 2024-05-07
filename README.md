## Add comments and improve algorithm 


This commit enhances the `findIndex` function for finding the correct index where a target number should be inserted into a sorted array. Here's a breakdown of the changes:

1. Added comments to explain the purpose of the function and the logic behind it.
2. Improved clarity in the algorithm implementation by providing step-by-step explanations within the code comments.

Algorithm Explanation:
- The `findIndex` function sorts the input array `numbers` in ascending order using the `sort` method.
- It then attempts to find the index of the `target` number in the sorted array using `indexOf`.
- If the `target` is not found (`indexOf` returns -1), the function iterates through the sorted array to find the correct index for insertion while maintaining the sorted order.
- This is achieved by looping through the sorted array and comparing each element with the `target`. When an element greater than the `target` is found, the loop breaks, and the index is set to the current iteration index.
- Finally, the function returns the index.

These changes enhance code readability and maintainability, making it easier for developers to understand and maintain the `findIndex` function.

