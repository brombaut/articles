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

## Linked List


```python
class Node:
    def __init__(self, d):
        self.next = None
        self.data = d

    def append_to_tail(self, d):
        end = Node(d)
        n = self
        while n.next is not None:
            n = n.next
        n.next = end

    def delete_node(self, head, d):
        n = head
        if n.data == d:
            return head.next
        while n.next is not None:
            if n.next.data == d:
                n.next = n.next.next
                return head
            n = n.next
        return head

    def find(self, head, d):
        n = head
        while n:
            if n.data == d:
                return n.data
            n = n.next
        return None

class LinkedList:
    def __init__(self, d):
        self.head = Node(d)

    def append_to_tail(self, d):
        self.head.append_to_tail(d)

    def delete_node(self, d):
        self.head = self.head.delete_node(self.head, d)

    def linked_list_as_list(self):
        result = list()
        n = self.head
        while n is not None:
            result.append(n.data)
            n = n.next
        return result

    def find(self, d):
        return self.head.find(self.head, d)
```


```python
ll = LinkedList(4)
ll.append_to_tail(6)
assert(ll.linked_list_as_list() == [4, 6])

ll.append_to_tail(8)
assert(ll.linked_list_as_list() == [4, 6, 8])
ll.delete_node(4)
assert(ll.linked_list_as_list() == [6, 8])
assert(ll.find(8) == 8)


```

## Hash Table

In a simple has map implementation, we use an array of linked lists and a hash code function. To insert a key (which might be a strin g or essentially any other data type) and value, we do the following:

1. First, compute the key's hash code. Note that two different keys could have the same hash code, as there may be an infinite number of keys and a finite number of hash codes.
2. Then map the hash code to an index in the array. This could be done with something like `hash(key) % array_length`. Two different hash codes could, of course, map to the same index.
3. At this index, there is a linked list of keys and values. Store they key and value in this index. We must use a linked list because of collisions: you could have two different keys with the same has code, or two different hash codes that map to the same index.

To retrieve the value pair by its key, you repeat the process. Compute the hash code from the key, and then compute the index from the hash code. Then, search through the linked list for the value with this key.


```python
class HashMap:
    class KeyValPair:
        def __init__(self, k, v):
            self.key = k
            self.val = v
            self.next = None

    def __init__(self):
        self.array_len = 5
        self.array = [None] * self.array_len
    
    def add(self, key, value):
        h = hash(key)
        array_pos = h % self.array_len
        if self.array[array_pos] is None:
            self.array[array_pos] = self.KeyValPair(key, value)
        else:
            kv = self.array[array_pos]
            while kv.next is not None:
                kv = kv.next
            kv.next = self.KeyValPair(key, value)

    def get(self, key):
        h = hash(key)
        array_pos = h % self.array_len
        kv = self.array[array_pos]
        while kv is not None:
            if kv.key == key:
                return kv.val
            kv = kv.next
        return None


```


```python
hm = HashMap()
hm.add("ben", "rombaut")
assert(hm.get("ben") == "rombaut")
```

## Array List
TODO

## StringBuilder
TODO
