## TQDM

I've found myself mapping functions onto large data sets lately, which sometimes takes minutes or even hours to complete. Using [TQDM](https://github.com/tqdm/tqdm) has been super helpful for giving me an idea of how long these operations can take. Of course the next step is to parallelize everything...

## [Quick Bonus] Pip Install from a Notebook

```python
import sys
!{sys.executable} -m pip install ipywidgets
# If using Jupyter Labs
!{sys.executable} -m jupyter labextension install @jupyter-widgets/jupyterlab-manager
```

## Import TQDM and Setup

```python
import pandas as pd
from tqdm.notebook import tqdm, trange
tqdm.pandas()
```

## Now you can use progress bars

For loops:

```python
for idx, row in tqdm(df.iterrows()):
  # Do something on each row
```

Apply on DataFrame:

```python
def foo(row):
  # Do something on each row
df.progress_apply(foo, axis=1)
```
