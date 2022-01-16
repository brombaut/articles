## Context

Let's say we want to retrieve the information for a package on `npm`. We might just initialy write this function:

```typescript
async function getNpmPackage(name): Promise<NPMPackage> {
  return await got(`https://registry.npmjs.org/${name}`).json();
}
```

where we simply take a package name, and make a request to `npm` every time we want the package information. However, this can lead to unneccesary extra requests, since we may be repeating calls to `npm` that we have made in the near past.

## Using a closure to cache results

If we expect to be making the same request multiple times and we don't expect the result to change between each identical request, we can cache the response of the first request, and then simply return that cached response on each subsequent request.

This might be the case in our context, for example, if we are retriving the information on the dependencies of different packages, and we expect many of these packages to be using the same dependencies. In this situation, we would benefit from caching the responses and avoid unneccesary extra requests.

To do this, we can write a closure that acts as a proxy between the client making a request and the request actually being sent. In the code below, `getNpmPackageProxy()` first declares `npmPackages` as a cache in the enclosed function scope, and then returns a function that takes a package name as a parameter, checks to see if we have already made a request for that package name, if not, makes the request and saves the result in the cache, and then returns the result stored in the cache.

We then assign the result of calling `getNpmPackageProxy()` to `getNpmPackage(name)`. We can the simply call `getNpmPackage(name)` exactly as we were before, expect now we will first check the cache to see if we have already made the request and can avoid the repeated call.

```typescript
function getNpmPackageProxy(): (name: string) => Promise<NPMPackage> {
  const npmPackages: { [packageName: string]: NPMPackage } = {};
  return async (name: string) => {
    if (!npmPackages[name]) {
      npmPackages[name] = await got(
        `https://registry.npmjs.org/${name}`
      ).json();
    }
    return npmPackages[name];
  };
}

const getNpmPackage: (name: string) => Promise<NPMPackage> =
  getNpmPackageProxy();
```
