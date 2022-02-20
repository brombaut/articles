From [Ravi et al. - "Deep Learning for Health Informatics"](https://ieeexplore.ieee.org/document/7801947).

## Deep Neural Network

![](https://raw.githubusercontent.com/brombaut/articles-authored/main/assets/images/deep_learning_architectures/deep_neural_network.png)

### Description

- General deep framework usually used for classification or regression.
- Made of many hidden layers (more than 2).
- Allows complex (non-linear) hypotheses to be expressed.

### Pros

- Widely used with successes in many areas.

### Cons

- Training is not trivial because once the errors are back-propagated to the first few layers, they become miniscule (vanishing gradient problem).
- The learning process can be very slow.

## Deep Autoencoder

![](https://raw.githubusercontent.com/brombaut/articles-authored/main/assets/images/deep_learning_architectures/deep_autoencoder.png)

### Description

- Proposed in [Hinton et al. - "Reducing the Dimensionality of Data with Neural Networks"](https://www.science.org/doi/10.1126/science.1127647) and is mainly designed for feature extraction or dimensionality reduction.
- Has the same number of input and output nodes.
- Aims to recreate the input vector.
- Unsupervised learning method.

### Pros

- Does not require labelled data for training.
- Many variations have been proposed to make the representation more robust: Sparse AutEnc. ([Poultney et al. - "Efficient learning of sparse representations with an energy-based model"](https://proceedings.neurips.cc/paper/2006/file/87f4d79e36d68c3031ccf6c55e9bbd39-Paper.pdf)), Denoising AutEnc. ([Vincent et al. - "Extracting and composing robust features with denoising autoencoders"](https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf)), Contractive AutEnc. ([Rifai et al. - "Contractive auto-encoders: Explicit invariance during feature extraction"](https://icml.cc/2011/papers/455_icmlpaper.pdf)), Convolutional AutEnc. ([Masci et al. - "Stacked convo- lutional auto-encoders for hierarchical feature extraction"](https://people.idsia.ch/~ciresan/data/icann2011.pdf)).

### Cons

- Requires a pre-training stage.
- Training can also suffer from vanishing of the errors.

## Deep Belief Network

![](https://raw.githubusercontent.com/brombaut/articles-authored/main/assets/images/deep_learning_architectures/deep_belief_network.png)

### Description

- Proposed in [Hinton et al. - "A fast learning algorithm for deep belief nets"](https://www.cs.toronto.edu/~hinton/absps/fastnc.pdf) - is a composition of RBM where each sub-network's hidden layer serves as the visible layer for the next.
- Has undirected connections just at the top two layers.
- Allows unsupervised and supervised training of the network.

### Pros

- Proposes a layer-by-layer greedy learning strategy to initialize the network.
- Inferences tractable maximizing the likelihood directly.

### Cons

- Training procedure is computationally expensive due to the initialization process and sampling.

## Deep Boltzmann Machine

![](https://raw.githubusercontent.com/brombaut/articles-authored/main/assets/images/deep_learning_architectures/deep_boltzmann_machine.png)

### Description

- Proposed in [Salakhutdinov and Hinton - "Deep boltzmann machines"](http://www.cs.toronto.edu/~fritz/absps/dbm.pdf), it is another approach based on the Boltzmann family.
- Processes undirected connections (conditionally independent) between all layers of the network.
- Uses a stochastic maximum likelihood ([Younes - "On the convergence of markovian stochastic algorithms with rapidly decreasing ergodicity rates"](https://www.tandfonline.com/doi/abs/10.1080/17442509908834179)) algorithm to maximize the lower bound of the likelihood.

### Pros

- Incoroprates top-down feedback for more robust inferences with ambiguous inputs.

### Cons

- Time complexity for the inference is higher than DBN.
- Optimization of the parameters is not practical for large datasets.

## Recurrent Neural Network

![](https://raw.githubusercontent.com/brombaut/articles-authored/main/assets/images/deep_learning_architectures/recurrent_neural_network.png)

### Description

- Proposed in [Williams and Zipser - "A learning algorithm for continually running fully recurrent neural networks"](), is a NN capable of analyzing a stream of data.
- Useful in applications where the output depends on the previous computations.
- Shares the same weights across all steps.

### Pros

- Can memorize sequential events.
- Can model time dependencies.
- Has shown great success in many Natural Language Processing applications.

### Cons

- Learning issues are frequent due to the vanishing gradient and exploding gradient problems.

## Convolutional Neural Network

![](https://raw.githubusercontent.com/brombaut/articles-authored/main/assets/images/deep_learning_architectures/convolutional_neural_network.png)

### Description

- Proposed in [LeCun et al. - "Gradient-based learning applied to document recognition"](https://ieeexplore.ieee.org/document/726791), it is well suited for 2D data such as images.
- Every hidden convolutional filter transforms its input to a 3D output volume of neuron activations.
- Inspired by the neurobiological model of the visual cortex ([Hubel and Wiesel - "Receptive fields, binocular interaction and functional architecture in the cat’s visual cortex"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1359523/)).

### Pros

- Few neuron connections required with respect to a typical NN.
- Many variants have been proposed: AlexNet ([Krizhevsky et al. - "Imagenet classification with deep convolutional neural networks"](https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf)), Clarifai ([Zeiler and Fergus - "Visualizing and understanding convolutional networks"](https://cs.nyu.edu/~fergus/papers/zeilerECCV2014.pdf)), and GoogLeNet ([Szegedy et al. - Going deeper with convolutions"](https://www.cs.unc.edu/~wliu/papers/GoogLeNet.pdf)).

### Cons

- It may require many layers to find an entire hierarchy of visual features.
- It usually requires a large dataset of labelled images.
