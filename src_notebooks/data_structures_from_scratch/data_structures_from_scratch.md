# Data Structures From Scratch
Here are some common data structures, implemented from scratch in Python. Each data structure includes a set of assertions that test the implementation.

## Stack

A stack is a first-in, last-out (FILO) data structure. Think about how you would stack dinner plates on top of each other.


```python
class Stack:
    class StackNode:
        def __init__(self, data):
            self.data = data
            self.next = None

    def __init__(self):
        self.top: self.StackNode = None

    def pop(self):
        if not self.top:
            raise Exception("Empty Stack")
        data = self.top.data
        self.top = self.top.next
        return data

    def push(self, item):
        t = self.StackNode(item)
        t.next = self.top
        self.top = t

    def peek(self):
        if not self.top:
            raise Exception("Empty Stack")
        return self.top.data

    def is_empty(self):
        return self.top == None
```


```python
stack = Stack()
assert(stack.is_empty())

stack.push(4)
stack.push(2)
assert(stack.peek() == 2)
assert(not stack.is_empty())

x = stack.pop()
assert(x == 2)
assert(stack.peek() == 4)
assert(not stack.is_empty())

stack.pop()
assert(stack.is_empty())
```

## Queue

A queue is a first-in, first-out data structure. Think about how a line works when you're checking out at a grocery store.


```python
class Queue:
    class QueueNode:
        def __init__(self, data):
            self.data = data
            self.next = None

    def __init__(self):
        self.first: self.QueueNode = None
        self.last: self.QueueNode = None

    def add(self, data):
        t = self.QueueNode(data)
        if self.last is not None:
            self.last.next = t
        self.last = t
        if self.first is None:
            self.first = self.last

    def remove(self):
        if self.first is None:
            raise Exception("Empty Queue")
        data = self.first.data
        self.first = self.first.next
        if self.first is None:
            self.last = None
        return data

    def peek(self):
        if self.first is None:
            raise Exception("Empty Queue")
        return self.first.data

    def is_empty(self):
        return self.first is None
```


```python
queue = Queue()
assert(queue.is_empty())

queue.add(4)
queue.add(2)
assert(queue.peek() == 4)
assert(not queue.is_empty())

x = queue.remove()
assert(x == 4)
assert(queue.peek() == 2)
assert(not queue.is_empty())

queue.remove()
assert(queue.is_empty())
```

## Hash Table
TODO

## Array List
TODO

## StringBuilder
TODO
