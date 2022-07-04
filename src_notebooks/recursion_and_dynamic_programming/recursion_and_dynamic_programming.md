# Recursion and Dynamic Programming (Briefly)

## How to Approach

Recursive solutions, by definition, are built off of solutions to subproblems. Many times, this will mean simply to compute `f(n)` by adding something, removing something, or otherwise changing the solution for `f(n-1)`. In other cases, you might solve the problem for the first half of the data set, then the second half, then merge those results.

There are many ways you might divide a problem into subproblems. Three of the most common approaches to develop an algorithm are bottom-up, top-down, and half-and-half.

#### Bottom-Up Approach

The bottom-up approach is often the most intuitive. We start with knowing how to solve the problem for a simple case, like a list with only one element. Then we figure out how to solve the problem for two elements, then for three elements, and so on. The key here is to think about how you can _build_ the solution for one case off of the previous case (or multiple previous cases).

#### Top-Down Approach

The top-down approach can be more complex since it's less concrete. But soetimes, it's the best way to think about the problem.

In these problems, we think about how we can divide the problem for case `N` into subproblems.

Be careful of overlap between the cases.

#### Half-and-Half Approach
In addition to top-down and bottom-up approaches, it's often effective to divide the data set in half.

For example, binary search works with a "half-and-half" approach. When we look for an element in a sorted array, we first figure out which half of the array contains the value. Then we recurse and search for it in that half.

Merge sort is also a "half-and-half" approach. We sort each half of the array and then merge together the sorted halves.

### Recursive vs. Iterative Solutions

Recursive algorithms can be very space inefficient. Each recursive call adds a new layer to the stack, which means that if your algorithm recurses to a depth of `n`, it uses at least `O(n)` memory.

For this reason, it's often better to implement a recursive algorithm iteratively. _All_ recursive algorithms can be implemented iteratively, although sometimes the code to do so is much more complex. Before diving into recursive code, ask yourself how hard it would be to implement it iteratively, and consider the tradeoffs of each approach.

## Dynamic Programming & Memoization

Although people make a big deal about how scary dynamic programming problems are, there's really no need to be afraid of them. In fact, once you get the hang of them, these can actually be very easy problems.

Dynamic programming is mostly just a matter of taking a recursive algorithm and finding the overlapping subproblems (that is, the repeated calls). You then cache those results for future recursive calls.

Alternatively, you can study the pattern of the recursive calls and implement something iterative. You still "cache" previous work.

> A note on terminology: Some people call top-down dynamic programming "memoization" and only use "dynamic programming" to refer to bottom-up work.

One of the simplest examples of dynamic programming is computing the nth Fibonacci number. A good way to approach such a problem is often to implement it as a normal recursive solution, and then add the caching part.

## Fibonacci Numbers

We'll walk through a couple approaches to compute the nth Fibonacci number.

#### Recursive

We will start with a recursive implementation.

```java
int fib(int i) {
  if (i == 0) return 0;
  if (i == 1) return 1;
  return fib(i - 1) + fib(i - 2);
}
```
What is the runtime of this function? If you said $O(n)$ or $O(n^2)$ (as many people do), these are not correct. Study the code path that the code takes. Drawing the code paths as a tree (that is, the recursion tree) is useful on this and many recusrive problems.

![png](recursion_and_dynamic_programming_files/00_tree_fib_recursive.png)

Observe that the leaves on the tree are all `fib(1)` and `fib(0)`. Those signify the base cases.

The total number of nodes in the tree will represent the runtime, since each call only does $O(1)$ work outside of its recursive calls. Therefore, the number of calls is the runtime.

How many nodes are in the tree? Until we get down to the base cases (leaves), each node has two children. Each node branches out twice.

The root node has two children. Each of those children has two children (so four children total in the "grand-children" level). Each of those grand-children has two children, and so on. If we do this $n$ times, we'll have roughly $O(2^n)$ nodes. This gives us a runtime of roughly $O(2^n)$.

> Actually, it's slightly better than $O(2^n)$. If you look at the subtree, you might notice that (excluding the leaf nodes and those immediately above it) the right subtree of any node is always smaller than the left subtree. If they were the same size, we'd have an $O(2^n)$ runtime. But since the right and left subtrees are not the same size, the true runtime is closer to $O(1.6^n)$. Saying $O(2^n)$ is still technically correct though as it describes an upper bound on the runtime.

Indeed, if we were to implement this on a computer and time it, we would see the number of seconds to run the function to completion increases exponentially.

We should look for a way to optimize this.

#### Top-Down Dynamic Porgramming (or Memoization)

Have a look at the recursion tree above. Where do you see identical nodes?

There are lots of identical nodes. For example, `fib(3)` appears twice and `fib(2)` appears three times. Why should we recompute these from scratch each time?

In fact, when we call `fib(n)`, we shouldn't have to do much more than $O(n)$ calls, since there's only $O(n)$ possible values we can throw at `fib`. Each time we compute `fib(1)`, we should just cache this result and use it later.

This is exactly what memoization is.

With just a small modification, we can tweak this function to run in $O(n)$ time. We simply cache the results of `fib(i)` between calls.

```java
int fib(int n) {
  return fib(n, new int[n + 1]);
}

int fib(int i, int[] memo) {
  if (i == 0 || i == 1) return i;

  if (memo[i] == 0) {
    memo[i] = fib(i - 1, memo) + fib(i - 2, memo);
  }
  return memo[i];
}
```

While the first recursive function may take over a minute to generate the 50th Fibonacci number on a typical computer, the dynamic programming method can generate the 10,000th Fibonacci number in just fractions of a millisecond. (Of course, with this exact code, the `int` would have overflowed very early on.)

Now if we draw the recursion tree, it looks something like this (the black boxes represent cached calls that returned immediately):

![png](recursion_and_dynamic_programming_files/01_tree_fib_top_down_imbalanced.png)

How many nodes are in this tree now? We might notice that the tree now just shoots straight down, to a depth of roughly $n$. Each node of those nodes has one other child, resulting in roughly $2n$ children in the tree. This gives us a runtime of $O(n)$.

Often it can be useful to picture the recursion tree as something like this:

![png](recursion_and_dynamic_programming_files/02_tree_fib_top_down_balanced.png)

This is not actually how the recusrion occurred. However, by expanding the further up nodes rather than the lower nodes, you have a tree that grows wide before it grows deep. (It's like doing this breadth-first rather than depth-first.) Sometimes this makes it easier to compute the number of nodes in the tree. All you're really doing is changing which nodes you expand and which ones return cached values. Try this if you're stuck on computing the runtime of a dynamic programming problem.

#### Bottom-Up Dynamic Programming

We can also take this approach and implement it with bottom-up dynamic programming. Think about doing the same things as the recursive memoized approach, but in reverse.

First, we compute `fib(1)` and `fib(0)`, which are already known from the base cases. Then we use those to compute `fib(2)`. Then we use the prior answers to compute `fib(3)`, then `fib(4)`, and so on.

```java
int fib(int n) {
  if (n == 0 || n == 1) return n;

  int[] memo = new int[n];
  memo[0] = 0;
  memo[1] = 1;
  for (int i = 2; i < n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n - 1] + memo[n - 2];
}
```

If you really think about how this works, you only use `memo[i]` for `memo[i+1]` and `memo[i+2]`. You don't need it after that. Therefore, we can get rid of the `memo` table and just store a few variables.

```java
int fib(int n) {
  if (n == 0) return 0;
  int a = 0;
  int b = 1;
  for (int i = 2; i < n; i++) {
    int c = a + b;
    a = b;
    b = c;
  }
  return a + b;
}
```

This is basically storing the results from the last two Fibonacci values into `a` and `b`. At each iteration, we compute the next value (`c = a + b`) and then move `(b, c = a + b)` into `(a, b)`.


