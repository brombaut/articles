# Prime Numbers
Every positive integer can be decomposed into a product of primes. For example:

$84 = 2^2 * 3^1 * 5^0 * 7^1 * 11^0 * 13^0 * 17^0 * ...$

Note that many of these primes have an exponent of zero.

## Divisibility

The prime number law stated above means that, in order for a number $x$ to be divisiable by a number $y$ (written `x\y` or `mod(y, x) = 0`), all primes in $x$'s prime factorization must be in $y$'s prime factorization. Or, more specifically:

Let: $x = 2^{j0} * 3^{j1} * 5^{j2} * 7^{j3} * 11^{j4} * ...$

Let: $y = 2^{k0} * 3^{k1} * 5^{k2} * 7^{k3} * 11^{k4} * ...$

If `x\y`, then for all `i`, `ji <= ki`

In fact, the greatest common divisor of `x` and `y` will be:

$gcd(x, y) = 2^{min(j0, k0)} * 3^{min(j1, k1)} * 5^{min(j2, k2)} * ...$

The least common multiple of `x` and `y` will be:

$lcm(x, y) = 2^{max(j0, k0)} * 3^{max(j1, k1)} * 5^{max(j2, k2)} * ...$

> As an exercise, what do you think $gcd * lcm$ is?
>
> $gcd * lcm = 2^{min(j0, k0)} * 2^{max(j0, k0)} * 3^{min(j1, k1)} * 3^{max(j1, k1)} * ...$
>
> $gcd * lcm = 2^{min(j0, k0) + max(j0, k0)} * 3^{min(j1, k1) + max(j1, k1)} * ...$
>
> $gcd * lcm = 2^{j0 + k0} * 3^{j1 + k1} * ...$
>
> $gcd * lcm = 2^{j0} * 2^{k0} * 3^{j1} * 3^{k1} * ...$
> 
> $gcd * lcm = xy$


## Checking for Primailty
The naive way to check for primality is to simply iterate from 2 through $n-1$, checking for diviibility on each iteration.


```python
def prime_naive(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

%timeit prime_naive(104729)
print(prime_naive(104729))
```

    19.2 ms ± 4.35 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
    True


A small but important improvement is to iterate only up through the square root of n.


```python
import math

def prime_slightly_better(n):
    if n < 2:
        return False
    for i in range(2, math.floor(math.sqrt(n))):
        if n % i == 0:
            return False
    return True

%timeit prime_naive(104729)
print(prime_naive(104729))
```

    15.4 ms ± 5.13 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
    True


The $n^{1/2}$ is sufficient because, for every number $a$ which divides $n$ evenly, there is a complement $b$, where $a * b = n$. If $a > n^{1/2}$, then $b < n^{1/2}$. We therfore don't need $a$ to check $n$'s primailty, since we would have already checked with $b$.

Of course, in reality, all we really need to do is to check if $n$ is divisible by a prime number.

### Generating a List of Primes: The Sieve of Eratosthenes

The Sieve of Eratosthenes is a highly efficient way to generate a list of primes. It works by recognizing that all non-prime numbers are divisible by a prime number.

We start with a list of all the numbers up through some value `max`. First, we cross off all numbers divisible by 2. Then, we look for the next prime (the next non-crossed off number) and cross off all numbers divisible by it. By crossing off all numbers divisible by 2, 3, 5, 7, 11, and so on, we wind up with a list of prime numbers from 2 through `max`.

The code below implements the Sieve of Eratosthenes:


```python
def sieve_of_eratosthenes(max):
    flags = [True for _ in range(0, max+1)]
    flags[0] = False
    flags[1] = False
    count = 0
    prime = 2
    while prime <= math.sqrt(max):
        # Cross off remaining multiples of prime
        cross_off(flags, prime)
        # Find next value which is true
        prime = get_next_prime(flags, prime)
    return flags

def cross_off(flags, prime):
    # Cross off remaining multiples of prime.
    # We canstart with (prime*prime), because if we have a k*prime,
    # where k < prime, this value would have already been crossed
    # off in a prior iteration.
    i = prime*prime
    while i < len(flags):
        flags[i] = False
        i += prime

def get_next_prime(flags, prime):
    next_prime = prime + 1
    while next_prime < len(flags) and not flags[next_prime]:
        next_prime += 1
    return next_prime

test_prime = 11
print(f"List of primes up to {test_prime}:")
print(sieve_of_eratosthenes(test_prime))
print()
test_large_prime = 104729
%timeit sieve_of_eratosthenes(test_large_prime)
print(sieve_of_eratosthenes(test_large_prime)[test_large_prime])
```

    List of primes up to 11:
    [False, False, True, True, False, True, False, True, False, False, False, True]
    
    86.7 ms ± 38.2 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
    True


Of course, there are a number of optimizations that can be made to this. One simple one is to only use off numbers in the array, which would allow us to reduce our space usage by half.
