## Tensorflow Overview

What does TensorFlow offer?

- Its core is very similar to NumPy, but with GPU support.
- It supports distributed computing (across multiple devices and servers).
- It includes a kind of just-in-time (JIT) compiler that allows it to optimize computations for speed and memory usage. It works by extracting the _computation graph_ from a Python function, then optimizing it (e.g., by pruning unused nodes), and finally running it efficiently (e.g., by automatically running independent operations in parallel).
- Computation graphs can be exported to a portable format, so you can train a TensorFlow model in one environment (e.g., using Python on Linux) and run it in another (e.g., using Java on an Android device).
- It implements autodiff and provides some excellent optimizers so you can easily minimize all sorts of of loss functions.

At the lowest level, each TensorFlow operation (_op_ for short) is implemented using highly efficient C++ code. Many operations have multiple implementations called _kernels_: each kernel is dedicated to a specific device type, such as CPUs, GPUs, or even TPUs (_tensor processing units_). GPUs can dramatically speed up computations by splitting them into many smaller chuncks and running them in parallel across many GPU threads. TPUs are even faster: they are custom ASIC chips built specifically for Deep Learning operations.

### High-level Deep Learning APIs

> [tf.keras](https://www.tensorflow.org/api_docs/python/tf/keras) \
> [tf.estimator](https://www.tensorflow.org/api_docs/python/tf/estimator)

### Low-level Deep Learning APIs

> [tf.nn](https://www.tensorflow.org/api_docs/python/tf/nn) \
> [tf.losses](https://www.tensorflow.org/api_docs/python/tf/losses) \
> [tf.metrics](https://www.tensorflow.org/api_docs/python/tf/metrics) \
> [tf.optimizers](https://www.tensorflow.org/api_docs/python/tf/optimizers) \
> [tf.train](https://www.tensorflow.org/api_docs/python/tf/train) \
> [tf.initializers](https://www.tensorflow.org/api_docs/python/tf/initializers)

### Autodiff

> [tf.GradientTape](https://www.tensorflow.org/api_docs/python/tf/GradientTape) \
> [tf.gradients()](https://www.tensorflow.org/api_docs/python/tf/gradients)

### I/O and Preprocessing

> [tf.data](https://www.tensorflow.org/api_docs/python/tf/data) \
> [tf.feature_column](https://www.tensorflow.org/api_docs/python/tf/feature_column) \
> [tf.audio](https://www.tensorflow.org/api_docs/python/tf/audio) \
> [tf.image](https://www.tensorflow.org/api_docs/python/tf/image) \
> [tf.io](https://www.tensorflow.org/api_docs/python/tf/io) \
> [tf.queue](https://www.tensorflow.org/api_docs/python/tf/queue)

### Visualization with TensorBoard

> [tf.summary](https://www.tensorflow.org/api_docs/python/tf/summary) \

### Deployment and Optimization

> [tf.distribute](https://www.tensorflow.org/api_docs/python/tf/distribute) \
> [tf.saved_model](https://www.tensorflow.org/api_docs/python/tf/saved_model) \
> [tf.autograph](https://www.tensorflow.org/api_docs/python/tf/autograph) \
> [tf.graph_util](https://www.tensorflow.org/api_docs/python/tf/graph_util) \
> [tf.lite](https://www.tensorflow.org/api_docs/python/tf/lite) \
> [tf.quantization](https://www.tensorflow.org/api_docs/python/tf/quantization) \
> [tf.tpu](https://www.tensorflow.org/api_docs/python/tf/tpu) \
> [tf.xla](https://www.tensorflow.org/api_docs/python/tf/xla)

### Special Data Structures

> [tf.lookup](https://www.tensorflow.org/api_docs/python/tf/lookup) \
> [tf.nest](https://www.tensorflow.org/api_docs/python/tf/nest) \
> [tf.ragged](https://www.tensorflow.org/api_docs/python/tf/ragged) \
> [tf.sets](https://www.tensorflow.org/api_docs/python/tf/sets) \
> [tf.sparse](https://www.tensorflow.org/api_docs/python/tf/sparse) \
> [tf.strings](https://www.tensorflow.org/api_docs/python/tf/strings)

### Mathematics (including linear algebra and signal processing)

> [tf.math](https://www.tensorflow.org/api_docs/python/tf/math) \
> [tf.linalg](https://www.tensorflow.org/api_docs/python/tf/linalg) \
> [tf.signal](https://www.tensorflow.org/api_docs/python/tf/signal) \
> [tf.random](https://www.tensorflow.org/api_docs/python/tf/random) \
> [tf.bitwise](https://www.tensorflow.org/api_docs/python/tf/bitwise)

### Miscellaneous

> [tf.compat](https://www.tensorflow.org/api_docs/python/tf/compat) \
> [tf.config](https://www.tensorflow.org/api_docs/python/tf/config) \
> and more...

### References

- [TensorFlow API Docs](https://www.tensorflow.org/api_docs/python/tf)
- [Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 2nd Edition](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)
