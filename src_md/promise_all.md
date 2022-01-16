## Context

Let's say we want to retrieve the transitive (or direct) dependencies of a client package. This means that, for every dependency (a.k.a., provider package) of a client package, we need to retrieve the dependencies of said provider package. We specify the dependencies of a specific package using the following type:

```typescript
type PackageDependencies = { [packageName: string]: string };
```

where the key is the provider package name and the value is the provider package version used by the client.

## Make requests in serial

The following function takes in an object consisting of key-value pairs that represent a client package's dependencies. We loop over the key-value pairs, and retrieve the dependencies of each provider package, one after the other.

> Notice that we only make a new request once the previous request has completed.

```typescript
async function buildDependencyTree(dependencies: PackageDependencies) {
  const dependencyTree = {};
  for (const [dep, version] of Object.entries(dependencies)) {
    const subDep = await getDependencies(dep, version);
    dependencyTree[dep] = { version, dependencies: subDep };
  }
  return dependencyTree;
}
```

## Parallelize with `Promise.all()`

We realize that each request we are making (i.e., retrieving the dependencies of a package) are independent of each other. That is to say that the result of retrieving the dependencies of 1 package is not affected in any way by the results of retrieving the dependencies of another package. This means we do not have to wait until the previous request has finished to make the next request, and we can actually parallelize the whole loop to speed up the process. We do this using `Promise.all()`, as shown below:

```typescript
async function buildDependencyTree(dependencies: PackageDependencies) {
  const dependencyTree = {};
  const promises = Object.entries(dependencies).map(async ([dep, version]) => {
    const subDep = await getDependencies(dep, version);
    dependencyTree[dep] = { version, dependencies: subDep };
  });
  await Promise.all(promises);
  return dependencyTree;
}
```

Now this function will still only return once all of the requests have completed (because of `await Promise.all(promises);`), but all of the requests are executed in parralel.
