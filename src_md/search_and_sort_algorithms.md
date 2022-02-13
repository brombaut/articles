## First - a note on Big O

Big O notation is special notation that tells you how fast an algorithm is. For example, suppose you have a list of size _n_. Simple search needs to check each element, so it will take n operations. The run time in Big O notation is O(_n_). It's important to note that Big O doesn't tell you the speed in seconds, but rather lets you compare the number of operations. It tells you have fast the algorithm grows.

### Big O establishes a worst-case run time.

Suppose you're using simple search to look for a person in the phone book. You know that simple search takes O(_n_) time to run, which means in the worst case, you'll have to look through every single entry in your phone book. In this case, you're looking for Adit. This guy is the first entry in your phone book. So you didn't have to look at every entry - you found it on the first try. Did this algorithm take O(_n_) time? Or did it take O(1) (i.e., constant) time because you found the person on the first try?

Simple search still takes O(_n_) time. In this case, you found what you were looking for instantly. That's the best-case scenario. But Big O notation is about the _worst-case_ scenario. So you can say that, in the _worst case_, you'll have to look at every entry in the phone book once. That's O(_n_) time. It's a reassurance - you know that the simple search will never be slower than O(_n_) time.

> Note: Along with worst-case run time, it's also important to look at the average-case run time. More on that later...

### Some common Big O run times:

- O(log _n_), also known as _log time_. Example: Binary search.
- O(_n_), also known as _linear time_. Example: Simple search.
- O(_n_ \* log _n_). Example: A fast sorting algorithm, like quicksort.
- O(_n<sup>2</sup>_). Example: A slow sorting algorithm, like selection sort.
- O(_n!_). Example: A really slow algorithm, like the traveling salesman.

![](https://raw.githubusercontent.com/brombaut/articles-authored/main/assets/images/search_and_sort_algorithms/big_o.png)

## Searching Algorithms

### Simple Search

Just start at the beginning of the list and loop over all elements until either the item is found, or the end of the list is reached (in which case, the item is not in the list).

Time complexity: O(_n_)

```python
def simple_search(my_list, item):
  i = 0  # Start searching from the start of the list
  while i < len(my_list):  # While there are still elements to check in the list...
    guess = my_list[i]
      if guess == item:  # Found the item
        return i
  return None
```

### Binary Seach

The idea of binary search is that, with a sorted list and an item to find, you guess the middle item and eliminate half of all possibilities with each guess.

> Note: Binary search only works when your list is in sorted order.

Time complexity: O(log _n_)

```python
def binary_search(my_list, item):
  # low and high keep track of which
  # part of the list you'll search in.
  low = 0
  high = len(my_list) - 1

  while low <= high:  # While you haven't narrows it down to one element...
    mid = (low + high) / 2  # ...check the middle element
    guess = my_list[mid]
    if guess == item:  # Found the item
      return mid
    if guess > item:  # The guess was too high
      high = mid - 1
    else:  # The guess was too low
      low = mid + 1
  return None  # The item doesn't exist

my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 3))  # => 1
print(binary_search(my_list, -1)) # => None

```

## Sorting Algorithms

### Selection Sort

The idea of binary search is that you loop over the list, find the smallest element (assuming you are sorting in ascending order), remove it from the list while adding it to the end of a new (initially empty) list, and then loop back over the original list, again finding the smallest element (remember that the first smallest element has been removed), and repeat this process until you have a sorted list.

Time complexity: O(_n<sup>2</sup>_)

```python
def find_smallest(arr):
  smallest_index = 0  # Stores the index of the smallest value
  smallest = arr[smallest_index]  # Stores the smallest value
  for i in range (1, len(arr)):
    if arr[i] < smallest:
      smallest = arr[i]
      smallest_index = i
  return smallest_index


def selection_sort(arr):  # Sorts an array
  new_arr = list()
  for i in range(0, len(arr)):
    smallest = find_smallest(arr)  # Finds the smallest element in the array...
    new_arr.append(arr.pop(smallest))  # ...and adds it to the new array
  return new_arr

```

## More to come...
