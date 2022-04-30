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

### Breadth-First Search

> #### First: A note on _Graphs_
> A graph models a set of connections. Graphs are made up of nodes and edges. A node can be directly connected to many other nodes. Those nodes are called its neighbors. Graphs are a way to model how different things are connected to one another.

Breadth-first search is a search algorithm that runs on graphs. It can help to answer two types of questions:
- 1: Is there a path from node A to node B?
- 2: What is the shortest path from node A to node B?

The idea behind breadth-first search is that you maintain a queue of nodes you need to check (note that a `queue` follows the first in, first out rule (FIFO), as opposed to a `stack`, which follows a first in, last out rule (FILO)). You first visit all of your immediate neighbours (i.e., all the nodes you are directly connected with get added to the queue) and check to see if they are the node you are looking for. 

As you visit a node, you add all of its direct neighbours to your search queue (i.e., enqueue), taking care not to add any nodes to the queue that you have already visited. You then keep dequeueing nodes from your search queue until you either find the node you are looking for, or your queue becomes empty, in which case the node you are looking for is not present in the graph.

In summary, you search the nodes that are closest to you first, and keep expanding your search away from you until you find the node you want or you have searched the whole graph. Bread-first search guarentees that you will find the node in the graph if it is present, as well as that you will find the shortest path to that node.


**Time complexity**: If you search your entire graph, that means you'll follow each edge. So the running time is at least O(number of edges). You also keep a queue of every node to search. Adding a node to the queue takes constant time: O(1). Doing this for every node will take O(number of people) total. Therefore, breadth-first search takes O(number of people + number of edges), and is more commonly written as O(V+E) (V for vertices, E for edges)

```python
from collections import deque

graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["arthur", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["tom", "jonny"]
graph["arthur"] = []
graph["peggy"] = []
graph["tom"] = []
graph["jonny"] = []

def search(name):
  search_queue = deque()
  search_queue += graph[name]
  searched = []  # Who you've already searched
  while search_queue:
    person = search_queue.popleft()
    if not person in searched: # Only search this person if you haven't already searched them
      if person_is_who_we_are_looking_for(person):
        return True
      else:
        search_queue += graph[person]
        searched.append(person)  # Mark this person as searched
  return False

search("you")  # Will starting search from the "you" node and return true if we find the person we are looking for (implemented in person_is_who_we_are_looking_for, not included)
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

### Quick Sort

What's the simplest array that a sorting algorithm can handle? Well, some arrays don't need to be sorted at all. Empty arrays and arrays with only 1 element are already sorted, so if we encounter these, we don't have to do anything because there's nothing to sort (base case).

An array with two elements is pretty easy to sort too. If the first element is larger than the second, just swap them.

If there are 3 elements, we can take a "divide and conquer" approach. First, pick an element from the array. This element is called the <i>pivot</i>. Now find the elements smaller than the pivot and the elements larger than the pivot. This is called <i>partitioning</i>. Now you have:

- A sub-array of all the numbers less than the pivot
- The pivot
- A sub-array of all the numbers greater than the pivot.
  The two sub-arrays aren't sorted. They're just partitioned. But if they were sorted, then you can just combine the whole thing like this - `left array + pivot + right array` - and you get a sorted array.

How do you sort the sub-arrays? Well, the quicksort base case already knows how to sort arrays of 0, 1 (base cases) and 2 (base case + 1 pivot) elements. So if you call quicksort on the two sub-arrays and then combine the results, you get a sorted array!

> No matter what pivot you pick, you can call quicksort recursively on the two sub-arrays.

Time complexity: Average: O(_n_ \* log _n_), Worst Case: O(_n<sup>2</sup>_)

```python
def quicksort(arr):
  if len(arr) < 2:  # Base case: arrays with 0 or 1 elements are already "sorted"
    return arr
  pivot = arr[0]  # Recursive case
  less = [i for i in arr[1:] if i <= pivot]  # Sub-array of all the elements less than the pivot
  greater = [i for i in arr[1:] if i > pivot]  # Sub-array of all the elements greater than the pivot

  return quicksort(less) + pivot + quicksort(greater)

```

## More to come...
