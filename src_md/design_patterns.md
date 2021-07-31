# Design Principles

- ### Encapsulate What Varies

  Identify the aspects of your application that vary and separate them from what stays the same. Take what varies and "encapsulate" it so it won't affect the rest of your code. This results in fewer unintended consequences from code changes and more flexibility in the system.

- ### Program to an Interface, NOT an Implementation

- ### Favor Composition over Inheritance

- ### Loose Coupling

  Strive for loosely coupled designed between objects that interact. Loosely coupled designes allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.

- ### Open-Closed Principle

  Class should be open for extension, but closed for modification. The goal is to allow classes to be easily extended to incorporate new behavior without modifying existing code. What do we get if we accomplish this? Designes that are resilient to change and flexible enough to take on new functionality to meet changing requirements. Be careful when choosing the areas of code that need to be extended: applying the Open-Closed Principle everywhere is wasteful and unnecessary, and can lead to complex, hard-to-understand code.

- ### Dependency Inversion Principle

  Depend upon abstractions. Do not depend upon concrete classes. High-level components should not depend on low-level components; rather, they should both depend on abstractions.

- ### Principle of Least Knowledge

  Talk only to your immediate friends. When you are designing a system, be careful of the number of classes it interacts with and also how it comes to interact with those classes. This prevents us from creating designs that have a large number of classes coupled together so that changes in one part of the system cascade to other parts, When you build a lot of dependencoes between many classes, you are building a fragile system that will be costly to maintain and comple for others to understand. The principle provides some guidelines (Law of Demeter): take any object; now from any method in that object, the principle tells us that we should only invoke methods that belong to:

  - The object itself
  - Objects passed in as a parameter to the method
  - Any object the method creates or instantiates
  - Any components of the object

- ### The Hollywood Principle

  "Don't call us, we'll call you"
  The Hollywood Principle gives us a way to prevent "dependency rot." Dependency rot happens when you have high-level components depending on low-level components depending on high-level components depending on side-ways components depending on low-level components, and so on. When rot sets in, no one can easily understand the way a system is designed. With the Hollywood principle, we allow low-level components to hook themselves into a system, but the high-level components determine when they are needed, and how. In other words, the high-level components give the low-level components a "don't call us, we'll call you" treatment.

- ### Single Responsibility Principle
  A class should have only one reason to change. Every responsibility of a class is an area of potential change, More than one responsibility means more than one area of change. This principle guides us to keep each class to a single responsibility.

# Design Patterns

NOTE: Code examples and classes that are referenced are found [here](https://github.com/brombaut/BEC/tree/master/design-patterns).

## Creational Patterns

---

### **Simple Factory**

Simple Factory isn't an actual design pattern, more of a programming idiom that is commonly used.

### **Abstract Factory**

The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### **Factory Method**

The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which clas to instantiate. Factory method lets a class defer instantiation to subclasses.

```Java
abstract Product factoryMethod(String type)
```

### **Singleton**

The Singleton Pattern ensures a class has only one instannce, and provides a global point of access to it.

The `getInstance()` method is static, which means it's a class method, so you can conveniently access this method from anywhere in your code using `Singleton.getInstance()`. That's just as easy as accessing a global variable, but we get benefits like lazy initialization from the Singleton. The `uniqueInstance` class variable holds our one and only instance of Singleton. A class implementing the Singleton pattern is more than a Singleton; it is a general purpose class with its own set of data and methods.

#### Handling Multithreading Issues

_SynchronizedSingleton_ - By adding the synchronized keyword to `getInstance()`, we force every thread to wait its turn before it can enter the method. That is, notwo threads may enter the method at the same time. Keep in mind that synchronizing a method can decrease performance by a factor of 100, so if a high-traffic part of your code begins using `getInstance()`, another option might have to be considered.

_EagerSingleton_ - If your application always creates and uses an instance of the Singleton or the overhead of creation and runtime aspects of the Singleton are not onerous, you may want to create your Singleton eagerly.

_DoubleCheckedLockingSingleton_ - With double-checked locking, we first check to see if an instance is created, and if not, THEN we synchronize. This way, we only synchronize the first time through. The `volatile` keyword ensure that multiple threads handle the `uniqueInstance` variable correctly when it is being initialized to the Singleton instance

## Structural Patterns

---

### **Adapter**

The Adapter Pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

### **Composite**

The Composite Pattern allows you to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly. Using a composite structures, we can apply the same operations over both composites and individual objects. In other words, in most cases, we can ignore the differences between compositions of objects and individual objects.

### **Decorator**

The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

The java.io package heavily uses the decorator design pattern.

Each decorator HAS-A (wraps) a components, which means the decorator has an instance variable that holds a reference to a components. Decorators implement the same interface or abstract class as the component they are going to decorate.

### **Facade**

The Facade Pattern provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

## Behavioral Patterns

---

### **Command**

The Command pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.

Command declares an interface for all commands. A command is invoked through its `execute()` method, which asks a receiver to perform an action. It can also perform `undo()` actions.

### **Iterator**

The Iterator Pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It also places the task of traversal on the iterator object, not on the aggregate, which simplifies the aggregate interface and implementation, and places the responsibility where it should be.

The Iterator interface provides the interface that all iterators must implement, and a set of methods for traversing over elements of a collection. Here we're using the java.util.Iterator. If you don't want to use Java's Iterator interface, you can always create your own.

### **Observer**

The Oberver Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependets are notified and updated automatically.

Objects use the Subject interface to register as observers and also to remove themselves from being observers. Each Subject can have many observers.

A concrete subject always implements the Subject interface. In addition to the register and remove methods, the concrete subject implements a notifyObservers() method that is used to updateall the current observers whenever state changes. The concrete subject may also have mthods for setting and getting its state.

All potential observers need to implement the Observer interface. This interface just has one method, update(), that gets called when the Subject's state changes.

Concrete observers can be any class that implements the Observer interface. Each observer registers with a concrete subject to recieve updates.

### **State**

The State Pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

The Context is the class that cna have a number of internal states. In our example, the GumballMachine is the Context. Whenever the request() is made on the Context it is delegated to the state to hande.

The State interface defines a common interface for all concrete states; the states all implement the same interface so they are interchangeable.
State

ConcreteStates handle requests from the Context. Each ConcreteState provides its own implementation for a request. In this way, when the Context changes state, its behavior will change as well

Many concrete states are possible

### **Strategy**

The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary indepentently from clients that use it.

### **Template Method**

The Template Method Pattern defines the skelwton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure

The AbstractClass contains the template method and abstract versions of the operations used in the template method. The template method makes use of the primitiveOperations to implement an algorithm. It is decoupled from the actual implementation of these operations.

There may be many ConcreteClasses, each implementing the full set of operations required by the template method. The ConcreteClass implements the abstract operations, which are called when the templateMethod() needs them.

A hook is a method that is declared in the abstract class, but only given an empty or default implementation. This gives subclasses the ability to "hook into" the algorithm at various points, if they wish; a subclass is also free to ignore the hook.

## Compound - A collection of design patterns used together

---

_What did we do?_

**We started with a bunch of Quackables...**

**A goose came along and wanted to act like a Quackable too.** So we used the _Adapter Pattern_ to adapt the goose to a Quackable. Now, you can call quack() on a goose wrapped in the adapter and it will honk!

**Then, the Quackologists decided they wanred to count quacks.** So we used the _Decorator Pattern_ to add a QuackCounter decorator that keeps track of the number of times quack() is called, and then delegates the quack to the Quackable it's wrapping.

**But the Quackologists were worried they'd forget to add the QuackCounter decorator.** So we used the _Abstract Factory Pattern_ to create ducks for them. Now, whenever they want a duck, they ask the factory for one, and it hands back a decorated duck. (And don't forget, they can also use another duck factory if they want an undecorated duck.)

**We had management problems keeping track of all those ducks and geese and quackables.** So we used the _Composite Pattern_ to group Quackables into Flocks. The pattern also allows the Quackologist to create sub-flocks to manage duck families. We used the _Iterator Pattern_ in our implementation by using java.util's iterator in ArrayList.

**The Quackologists also wanted to be notified when any Quackable quacked.** So we used the _Observer Pattern_ to let the Quackologists register as Quackable Observers. Now they're notified every time any Quackable quacks. We used iterator again in this implementation. The Quackologists can even use the Observer Pattern with their composites.
