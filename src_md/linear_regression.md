## Fitting a Line

Linear regression is the statistical method for fitting a line to data where the relationship
between two variables, x and y, can be modeled by a straight line with some error:

y = β<sub>0</sub> + β<sub>1</sub>x + ε

The values β<sub>0</sub> and β<sub>1</sub> represent the model’s parameters (β is the Greek letter beta), and the error is represented by ε (the Greek letter epsilon). The parameters are estimated using data, and we write their point estimates as b<sub>0</sub> and b<sub>1</sub>. When we use x to predict y, we usually call x the explanatory or predictor variable, and we call y the response; we also often drop the term when writing down the model since our main focus is often on the prediction of the average outcome.

## Residuals

**Residuals** are the leftover variation in the data after accounting for the model fit:

> Data = Fit + Residual

If an observation is above the regression line, then its residual,
the vertical distance from the observation to the line, is positive. Observations below the line have negative residuals. One goal in picking the right linear model is for these residuals to be as small as possible.

> <b>RESIDUAL: DIFFERENCE BETWEEN OBSERVED AND EXPECTED</b> \
> The residual of the i<sup>th</sup> observation (x<sup>i</sup>, y<sup>i</sup>) is the difference of the observed response (y<sup>i</sup>) and the response we would predict based on the model fit (y^<sup>i</sup>): \
> e<sup>i</sup> = y<sup>i</sup> − yˆ<sup>i</sup>\
> We typically identify y^<sup>i</sup> by plugging x<sup>i</sup> into the model.

Residuals are helpful in evaluating how well a linear model fits a data set. We often display them in a **residual plot**. The residuals are plotted at their original horizontal locations but with the vertical coordinate as
the residual. For instance, the point (85.0, 98.6) had a residual of 7.45, so in the residual plot it is placed at (85.0, 7.45)

## Correlation

> <b>CORRELATION: STRENGTH OF A LINEAR RELATIONSHIP</b> \
> <b>Correlation</b>, which always takes values between -1 and 1, describes the strength of the linear relationship between two variables. We denote the correlation by <b>R</b>.

Only when the relationship is perfectly linear is the correlation either -1 or 1. If the relationship is strong and positive, the correlation will be near +1. If it is strong and negative, it will be near -1. If there is no apparent linear relationship between the variables, then the correlation
will be near zero. The correlation is intended to quantify the strength of a linear trend. Nonlinear trends, even when strong, sometimes produce correlations that do not reflect the strength of the relationship.

## Least Squares Regression

### An objective measure for finding the best line

We begin by thinking about what we mean by “best”. Mathematically, we want a line that has small residuals. The first option that may come to mind is to minimize the sum of the residual magnitudes:

|e<sub>1</sub>| + |e<sub>2</sub>| + ··· + |e<sub>n</sub>|

However, a more common practice is to choose the line that minimizes the sum of the squared residuals:

e<sub>1</sub><sup>2</sup> + e<sub>2</sub><sup>2</sup> + ··· + e<sub>n</sub><sup>2</sup>

The line that minimizes this **least squares criterion** is commonly called the **least squares line**. It is usually chosen over minimizing the sum of residual magnitudes without any squaring because, in many applications, a residual twice as large as another residual is more than twice as bad. For example, being off by 4 is usually more than twice as bad as being off by 2. Squaring the residuals accounts for this discrepancy.

### Conditions for the least squares line

When fitting a least squares line, we generally require:

- Linearity
- Nearly normal residuals
- Constant variability
- Independent observations

### Interpreting regression model parameter estimates.

The slope describes the estimated difference in the y variable if the explanatory variable x for a case happened to be one unit larger. The intercept describes the average outcome of y if x = 0 and the linear model is valid all the way to x = 0, which in many applications is not the case.

### Extrapolation is treacherous

Linear models can be used to approximate the relationship between two variables. However, these models have real limitations. Linear regression is simply a modeling framework. The truth is almost always much more complex than our simple line. For example, we do not know how the data outside of our limited window will behave.

## Using <i>R<sup>2</sup></i> to Describe the Strength of Fit

We evaluated the strength of the linear relationship between two variables earlier using the correlation, _R_. However, it is more common to explain the strength of a linear fit using <i>R<sup>2</sup></i>, called **R-squared**. If provided with a linear model, we might like to describe how closely the data cluster around the linear fit. The <i>R<sup>2</sup></i> of a linear model describes the amount of variation in the response that is explained by the least squares line.

<!-- TODO: Types of outliers in linear regression -->

<hr>

## References

- [OpenIntro Statistics - Fourth Edition](https://www.openintro.org/book/os/)
