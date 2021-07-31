# Practical Analysis for Data Scientists

Key term and ideas from the book.

# Chapter 1 - Exploratory Data Analysis

## Data Types

### Key Terms

- **Numeric**

  Data that is expressed on a numeric scale

  - **Continuous**

    Data that can take on any value in an interval (Synonyms: interval, float, numeric)

  - **Discrete**

    Data that can take on only integer values, such as counts. (Synonyms: integer, count)

- **Categorical**

  Data that can take on only a specific set of values representing a set of possible categories. (Synonyms: enum, enumerated, factors, nominal)

  - **Binary**

    A special case of categorical data with just two categories of values, e.g., 0/1, true/false. (Synonyms: dichotomous, logical, indicator, boolean)

  - **Ordinal**

    Categorical data that has an explicit ordering. (Synonym: ordered factor)

### Key Ideas

- Data is typically classified in software by type.
- Data types include numeric (continuous, discrete) and categorical (binary, ordinal).
- Data typing in software acts as a signal to the software on how to process the data.

## Rectangular Data

### Key Terms

- **Data frame**

  Rectangular data (like a spreadsheet) is the basic data structure for statistical and machine learning models.

- **Feature**

  A column within a table is commonly regerred to as a feature. (Synonyms: attribute, input, predictor, variable)

- **Outcome**

  Many data science projects involve predicting an outcome - often a yes/no outcome. The _features_ are sometimes used to predict the _outcome_ in an experiment or a study. (Synonyms: dependent variable, response, target, output)

- **Records**

  A row within a table is commonly referred to as a record. (Synonyms: case, example, instance obersvation pattern, sample)

### Key Ideas

- The basic data structure in data science is a rectangular matrix in which rows are records and columns are variables (features).
- Terminology can be confusing: there are a variety of synonyms arising from the different disciplines that contribute to data science (statistics, computer science, and IT).

## Estimates of Location

### Key Terms

- **Mean**

  The sum of all values divided by the number of values. (Synonym: average)

- **Weighted Mean**

  The sum of all values times a weight divided by the sum of the weights. (Synonym: weighted average)

- **Median**

  The value sucht hat one-half of the data lies above and below. (Synonym: 50th percentile)

- **Percentile**

  The value such that P percent of the data lies below. (Synonym: quantile)

- **Weighted Median**

  The value such that one-half of the sum of the weights lies aboe and below the sorted data.

- **Trimmed Mean**

  The average of all values after dropping a fixed number of extreme values. (Synonym: truncated mean)

- **Robust**

  Not sensitive to extreme values. (Synonym: resistant)

- **Outlier**

  A data value that is very different from most of the data. (Synonym: extreme value)

### Key Ideas

- The basic metric for location is the mean, but it can be sensitive to extreme values (outliers).
- Other metrics (median, trimmed mean) are less sensitive to outliers and unusual distributions and hence are more robust.

## Variability Metrics

### Key Terms

- **Deviations**

  The difference between the observed values and the estimate of location. (Synonyms: errors, residuals)

- **Variance**

  The sum of squared deviations from the mean divided by _n-1_ where _n_ is the number of data values. (Synonym: mean-squared error)

- **Standard Deviation**

  The square root of the variance.

- **Mean Absolute Deviation**

  The mean of the absolute values of the deviations from the mean. (Synonyms: l1-norm, Manhattan norm)

- **Median Absolute deviation from the median**

  The median of the absolute values of the deviations from the median.

- **Range**

  The difference between the largest and the smallest values in the data set.

- **Order Statistics**

  Metrics based on the data values sorted from smallest to biggest. (Synonym: rank)

- **Percentile**

  The value such that P percent of the values take on this value or less and (100-P) percent take on this value or more. (Synonym: quantile)

- **Interquartile Range**

  The difference between the 75th percentile and the 25th percentile. (Synonym: IQR)

### Key Ideas

- Variance and standard deviation are the most widespread and routinely reported statistics of variability
- Both are sensitive to outliers.
- More robust metrics include mean absolute deviation, median absolute deviation from the median, and percentiles (quantiles)

## Exploring the Distribution

### Key Terms

- **Boxplot**

  A plot introduced by Turkey as a quick way to visualize the distribution of data. (Synonym: box and whiskers plot)

- **Frequency Table**

  A tally of the count of numeric data values that fall into a set of intervals (bins)

- **Histogram**

  A plot of the frequency table with the bins on the x-axis and the count (or proportion) on the y-axis. While visually similar, bar charts should not be confused with histograms.

- **Density plot**

  A smoothed version of the histogram, often based on a _kernel density estimate_.

### Key Ideas

- A freqency histogram plots frequency counts on the y-axis and variable values on the x-axis: it gives a sense of the distribution of the data at a glance
- A frequency table is a tabular version of the frequency counts found in a histogram.
- A boxplot - with the top and bottom of the box at the 75th and 25th percentiles, respectively - also gives a quick sens of the distribution of the data; it is often used in side-by-side displays to compare distributions.
- A density plot is a smoothed version of a histogram; it requires a function to estimate a plot based on the data (multiple estimates are possible, of course)

## Exploring Categorical Data

### Key Terms

- **Mode**

  The most commonly occuring category or value in a data set.

- **Expected value**

  When the categories can be associated with a numeric value, this gives an average value based on a category's probability of occurence.

- **Bar Charts**

  The frequency or proportion for each category plotted as bars.

- **Pie Charts**

  The frequency or proportion for each category plotted as wedges in a pie.

### Key Ideas

- Categorical data is typically summed up in proportions and can be visualized in a bar chart.
- Categories might represent distinct things (apples and oranges, male and female), levels of a factor variable (low, medium, high), or numeric data that has been binned.
- Expected value is the sum of values times their probability of occurrence, often used to sum up factor variable lengths.

## Correlation

### Key Terms

- **Correlation Coefficient**

  A metric that measures the extent to which numeric variables are associated with one another (ranges from -1 to +1).

- **Correlation Matrix**

  A table where the variables are shown on both rows and columns, and the cell values are the correlations between variables.

- **Scatterplot**

  A plot in which the x-axis is the value of one variable, and the y-axis the value of another.

### Key Ideas

- The correlation coefficient measures the extent to which two paired variables (e.g. height and weight for individuals) are associated with one another.
- When high values of v1 go with high values of v2, v1 and v2 are positively associated.
- When high values of v1 go with low values of v2, v1 and v2 are negatively associated.
- The correlation coefficient is a standardized metric, so that it always ranges from -1 (perfect negative correlation) to +1 (perfect positive correlation).
- A correlation coefficient of zero indicates no correlation, but be aware that random arrangements of data will produce both positive and negative values for the correlation coefficient just by chance.

## Exploring Two or more Variables

### Key Terms

- **Contingency Table**

  A tally of counts between two eor more categorical variables.

- **Hexagonal Binning**

  A plot of two numeric variables with the records binned into hexagons.

- **Contour Plot**

  A plot showing the density of two numeric variables like a topographical map.

- **Violin Plot**

  Similar to a boxplot but showing the density estimate.

### Key Ideas

- Hexagonal binning and contour plots are useful tools that permit graphical examination of two numeric variables at a time, without being overwhelmed by huge amounts of data.
- Contingency tables are the standard tool for looking at the counts of two categorical variables.
- Boxplots and violin plots allow you to plot a numeric variable against a categorical variable.

# Chapter 2 - Data and Sampling Distributions

## Random Sampling

### Key Terms

- **Sample**

  - A subset from a larger data set.

- **Population**

  - The larger data set or idea of a data set.

- **N (n)**

  - The size of the population (sample).

- **Random Sampling**

  - Drawing elements into a sample at random.

- **Stratified Sampling**

  - Dividing the population into strata and randomly sampling from each strata.

- **Stratum (pl., strata)**

  - A homogeneous subgroup of a population with common characteristics.

- **Simple Random Sample**

  - The sample that results from random sampling without stratifying the population.

- **Bias**

  - Systematic error.

- **Sample Bias**

  - A sample that misrepresents the population.

### Key Ideas

- Even in the era of big data, random sampling remains an important arrow in the data scientist's quiver.
- Bias occurs when measurements or observations are systematically in error because they are not representative of the full population.
- Data quality is often more important than data quantity, and random sampling can reduce bias and facilitate quality improvements that would otherwise be prohibitively expensive.

## Selection Bias

### Key Terms

- **Selection Bias**

  - Bias resulting from the way in which observations are selected.

- **Data Snooping**

  - Extensive hunting through data in search of something interesting.

- **Vast search effect**

  - Bias or nonreproducibility resulting from repeated data modeling, or modeling data with large numbers of predictor variables.

### Key Ideas

- Specifying a hypothesis and then collecting data following randomization and random sampling principles ensures against bias.
- All other forms of data analysis run the risk of bias resulting from the data collection/analysis process (repeated running of models in data mining, data snooping in research, and after-the-fact selection of interesting events).

## Sampling Distribution

### Key Terms

- **Sample Statistic**

  - A metric calculated for a sample of data drawn from a larger population.

- **Data Distribution**

  - The frequency distribution of individual values in a data set.

- **Sampling Distribution**

  - The frequency distribution of a sample statistic over many samples or resamples.

- **Central Limit Theorem**

  - The tendency of the sampling distribution to take on a normal shape as a sample size rises.

- **Standard Error**

  - The variability (standard deviation) of a sample _statistic_ over many values (not to be confused wuth _standard deviation_, which by itself, refers to variability of individual data _values_).

### Key Ideas

- The frequency distribution of a sample statistic tells us how that metric would turn out differently from sample to sample.
- This sampling distribution can be estimated via the bootstrap, or via formulas that rely on the central limit theorem.
- A key metric that sums up the variability of a sample statistic is its standard error.

## The Bootstrap

### Key Terms

- **Bootstrap Sample**

  - A sample taken with replacement from an observed data set.

- **Resampling**

  - The process of taking repeated samples from observed data; includes both bootstrap and permutation (shuffling) procedures.

### Key Ideas

- The bootstrap (sampling with replacement from a data set) is a powerful tool for assessing the variability of a sample statistic.
- The bootstrap can be applied in similar fashion in a wide variety of circumstances, without extensive study of mathematical approxumations to sampling distributions.
- It also allows us to estimate sampling distributions for statistics where no mathematical approximation has been developed.
- When applied to predictive models, aggregating multiple bootstrap sample predictions (bagging) outperforms the use of a single model.

## Confidence Intervals

### Key Terms

- **Confidence Level**

  - The percentage of confidence intervals, constructed in the same way from the same population, that are expected to contain the statistic of interest.

- **Interval Endpoints**

  - The top and bottom of the confidence interval.

### Key Ideas

- Confidence intervals are the typical way to present estimates as an interval range.
- The more data you have, the less variable a sample estimate will be.
- The lower the level of confidence you can tolerate, the narrower the confidence interval will be.
- The bootstrap is an effective way to construct confidence intervals.

## Normal Distribution

### Key Terms

- **Error**

  - The difference between a data point and a predicted or average value.

- **Standardize**

  - Subtract the mean and divide by the standard deviation.

- **z-score**

  - The result of standardizing an individual data point.

- **Standard normal**

  - A normal distribution with mean = 0 and standard deviation = 1.

- **QQ-Plot**

  - A plot to visualize how close a sample distribution is to a specified distribution. e.g. normal distribution.

### Key Ideas

- The normal distribution was essential to the historical development of statistics, as it permitted mathematical approximations of uncertainty and variability.
- While raw data is typically not normally distributed, errors often are, as are averages and totals in large samples.
- To convert data to _z-scores_, you subtract the mean of the data and divide by the standard deviation; you can then compare the data to a normal distribution.

## Long-Tailed Distribution

### Key Terms

- **Tail**

  - The long narrow portion of a frequency distribution, where relatively extreme values occure at low frequency.

- **Skew**

  - Where one tail of a distribution is longer than the other.

### Key Ideas

- Most data is not normally distributed.
- Assuming a normal distribution can lead to underestimates of extreme events ("black swans").

## Students t-Distribution

### Key Terms

- **n**

  - Sample size.

- **Degrees of Freedom**

  - A parameter that allows the t-distribution to adjust to different sample sizes, statistics, and numbers of groups.

### Key Ideas

- The t-distribution is actually a family of distributions resembling the normal distribution but with thicker tails.
- The t-distribution is widely used as a reference basis for the distribution of sample means, differences between two sample means, regression parameters, and more.

## Binomial Distribution

### Key Terms

- **Trial**

  - An event with a discrete outcome (e.g. a coin flip).

- **Success**

  - The outcome of interest for a trial. (Synonym: "1" as opposed to "0")

- **Binomial**

  - Having two outcomes.

- **Binomial Trial**

  - A trial with two outcomes. (Synonym: Bernoulli trial)

- **Binomial Distribution**

  - Distribution of number of successes in _x_ trials. (Synonym: Bernoulli distribution).

### Key Ideas

- Binamial outcomes are important to model, since they represent, among other things, fundamental decisions (buy or don't buy, click or don't click, survive or die, etc.).
- A binomial trial is an experiment with two possible outcomes: one with probability _p_ and the other with probability _1 - p_.
- With large _n_, and provided _p_ is not too close to 0 or 1, the binomial distribution can be approximated by the normal distribution.

## Chi-Square Distribution

### Key Ideas

- The chi-square distribution is typically concerned with counts of subjects or items falling into categories.
- The chi-square statistic measures the extent of departure from what you would expect in a null model.

## F-Distribution

### Key Ideas

- The F-distribution is used with experiments and linear models involving measured data.
- The F-statistic compares variation due to factors of interest to overall variation.

## Poisson and Related Distributions

### Key Terms

- **Lambda**

  - The rate (per unit of time or space) at which events occur.

- **Poisson Distribution**

  - The frequency distribution of the number of events in sampled units of time or space.

- **Exponential Distribution**

  - The frequency distribution of the time or distance from one event to the next event.

- **Weibull Distribution**

  - A generalized version of the exponential distribution in which the event rate is allowed to shift over time.

### Key Ideas

- For events that occur at a constant rate, the number of events per unit time or space can be modeled as a Poisson distribution.
- You can also model the time or distance between one event and the next as an exponential distribution.
- A changing event rate over time (e.g., an increasing probability of device failure) can be modeled with the Weibull distribution.

# Chapter 3 - Statistical Experiments and Significance Testing

## A/B Testiing

### Key Terms

- **Treatment**

  - Something (drug, price, web headline) to which a subject is exposed.

- **Treatment Group**

  - A group of subjects exposed to a specific treatment.

- **Control Group**

  - A group of subjects exposed to no (or standard) treatment.

- **Randomization**

  - The process of randomly assigning subjects to treatment.

- **Subjects**

  - The items (web visitors, patients, etc.) that are exposed to treatment.

- **Test Statistics**

  - The metric used to measure the effect of the treatment.

### Key Ideas

- Subjects are assigned to two (or more) groups that are treated exactly alike, except that the treatment under study differs from one group to another.
- Ideally, subjects are assigned randomly to the groups.

## Hypothesis Tests

### Key Terms

- **Null hypothesis**

  - The hypothesis that chance is to blame.

- **Alternative hypothesis**

  - Counterpoint to the null (what you hope to prove).

- **One-way test**

  - Hypothesis test that counts chance results only in one direction.

- **Two-way test**

  - Hypothesis test that counts chance results in two directions.

### Key Ideas

- A null hypothesis is a logical contruct embodying the notion that nothing special gas gappened, and any effect you observe is due to random chance.
- The hypothesis test assumes that the null hypothesis is true, creates a "null model" (a probability model), and tests whether the effect you observe is a reasonable outcome of that model.

## Resampling

### Key Terms

- **Permutation Test**

  - The procedure of combining two or more samples together and randomly (or exhaustively) reallocating the observations to resamples. (Synonyms: Randomization test, random permutation test, exact test).

- **Resampling**

  - Drawing additionsl samples ("resamples") from an observed data set.

- **With or without replacement**

  - In sampling, whether or not an item is returned to the sample before the next draw.

### Key Ideas

- In a permutation test, multiple samples are combined and then shuffled.
- The shuffled values are then divided into resamples, and the statistic of interest is calculated.
- This process is then repeated, and the resampled statistic is tabulated.
- Comparing the observed value of the statistic to the resampled distribution allows you to judge whether an observed difference between samples might occur by chance.

## Statistical Significant and p-Values

### Key Terms

- **p-value**

  - Given a chance model that embodies the null hypothesis, the p-value is the probability of obtaining results as unusual or extreme as the observed results.

- **Alpha**

  - The probability threshold of "unusualness" that chance results must surpass for actual outcomes to be deemed statistically significant.

- **Type 1 error**

  - Mistakenly concluding an effect is real (when it is due to chance).

- **Type 2 error**

  - Mistakenly concluding an effect is due to chance (when it is real).

### Key Ideas

- Significant tests are used to determine whether an observed effect is within the range of chance variation for a null hypothesis.
- The p-value is the probability that results as extreme as the observed results might occur, given a null hypothesis model.
- The alpha value is the threshold of "unusualness" in a null hypothesis chance model.
- Significance testing has been much more relevant for formal reporting of research than for data science (but has been fading recently, even for the former).

## t-Tests

### Key Terms

- **Test statistic**

  - A metric for the difference or effect of interest.

- **t-statistic**

  - A standardized version of common test statistic such as means.

- **t-distribution**

  - A reference distribution (in this case derived from the null hypothesis), to which the observed t-statistic can be compared.

### Key Ideas

- Before the advent of computers, resampling tests were not practical, and statisticians used standard reference distributions.
- A test statistic could then be standardized and compared to the reference distribution.
- One such widely used standardized statistic is the t-statistic.

## Multiple Testing

### Key Terms

- **Type 1 error**

  - Mistakenly concluding that an effect is statistically significant.

- **False recovery rate**

  - Across multiple tests, the rate of making a Type 1 error.

- **Alpha inflation**

  - The multiple testing phenomenon, in whic alpha, the probability of making a Type 1 error, increases as you conduct more tests.

- **Adjustment of p-values**

  - Accounting for doing multiple tests on the same data.

- **Overfitting**

  - Fitting the noise.

### Key Ideas

- Multiplicity in a research study or data mining project (multiple comparisons, many variables, many models, etc.) increase the risk of concluding that something is significant just by chance.
- For situations involving multiple statistical comparisons (i.e. multiple tests of significant), there are statistical adjustment procedures.
- In a data mining situation, use of a holdout sample with labeled outcome variables can help avoid misleading results.

## Degrees of Freedom

### Key Terms

- **n or sample size**

  - The number of observations (also called rows or records) in the data.

- **d.f.**

  - Degrees of freedom.

### Key Ideas

- The number of degrees of freedom (d.f.) forms part of the calculation to standardize test statistics so they can be compared to reference distributions (t-distributions, F-distributions, etc.).
- The conecpt of degrees of freedom lies behind factoring of categorical variables into n - 1 indicator or dummy variables when doing a regression (to avoid multicollinearity).

## ANOVA (Analysis of Variance)

### Key Terms

- **Pairwise comparison**

  - A hypothesis test (e.g. of means) between two groups among multiple groups.

- **Omnibus test**

  - A single hypothesis test of the overall variance among multiple group means.

- **Decomposition of variance**

  - Separation of components contributing to an individual value (e.g. from the overall average, from a treatment mean, and from a residual error).

- **F-statistic**

  - A standardized statistic that measures the extent to which differences among group means exceed what might be expected in a chance model.

- **SS**

  - "Sum of squares", referring to deviations from some average value.

### Key Ideas

- ANOVA is a statistical procedure for analysing the results of an experiment with multiple groups.
- It is the extension of similar procedures for the A/B test, used to assess whether the overall variation among groups is within the range of chance variation.
- A useful outcome of ANOVA is the identification of variance components associated with group treatments, interaction effects, and errors

## Chi-Square test

### Key Terms

- **Chi-square statistic**

  - A measure of the exten to which some observed data departs from expectation.

- **Expectation or expected**

  - How we would expect the data to turn out under some assumption, typically the null hypothesis.

### Key Ideas

- A common procedure in statistics is to test whether observed data counts are consistent with an assumption of independence (e.g., propensity to buy a particular item is independent of gender).
- The chi-square distribution is the reference distribution (which embodies the assumption of independence) to which the observed calculate chi-square statistic must be compared.

## Multi-Arm Bandits

### Key Terms

- **Multi-arm bandit**

  - An imaginary slot machine with multiple arms for the customer to choose from, each with different payoffs, here taken to be an analogy for a multitreatment experiment.

- **Arm**

  - A treatment in an experiment (e.g., "headline A in a web test").

- **Win**

  - The experimental analog of a win at the slot machine (e.g., "customer clicks on the link").

### Key Ideas

- Traditional A/B tests envision a random sampling process, which can lead to excessive exposure to the inferior treatment.
- Multi-arm bandits, in contrast, alter the sampling process to incorporate information learned during the experiment and reduce the frequency of the inferior treatment.
- They also facilitate efficient treatment of more than two treatments.
- There are different algorithms for shifting sampling probability away from the inferior treatment(s) and to the p(presumed) superior one.

## Power and Sample Size

### Key Terms

- **Effect Size**

  - The minimum size of the effect that you hope to be able to detect in a statistical test, such as "20% improvement in click rates".

- **Power**

  - The probability of detecting a given effect size with a given sample size.

- **Significance level**

  - The statistical significance level at which the test will be conducted.

### Key Ideas

- Finding out how big a sample size you need requires thinking ahead to the statistical test you plan to conduct.
- You must specify the minimum size of the effect that you want to detect.
- You must also specify the required probability of detecting that effect size (power).
- Finally, you must specify the significance level (alpha) at which the test will be conducted.

# Chapter 4 - Regression and Prediction

## Simple Linear Regression

### Key Terms

- **Response**

  - The variable we are trying to predict. (Synonys: dependent variable, Y variable, target, outcome)

- **Independent Variable**

  - The variable used to predict the response. (Synonyms: X variable, feature, attribute, predictor)

- **Record**

  - The vector of predictor and outcome values for a specific individual or case. (Synonym: row, case, instance, example)

- **Intercept**

  - The intercept of the regression line - that is, the predicted value when X = 0.

- **Regression coefficient**

  - The slope of the regression line. (Synonyms: Parameter estimates, weights)

- **Fitted Values**

  - The estimates obtained from the regression line. (Synonym: predicted values)

- **Residuals**

  - The difference between the observed values and the fitted values. (Synonym: errors)

- **Least Squares**

  - The method of fitting a regression by minimizing the sum of squared residuals. (Synonyms: ordinary least squares, OLS)

### Key Ideas

- The regression equation models the relationship between a response variable Y and a predictor variable X as a line.
- A regression model yields fitted values and residuals - predictions of the response and the errors of the predictions.
- Regression models are typically fit by the method of least squares.
- Regression is used both for prediction and explanation.

## Multiple Linear Regression

### Key Terms

- **Root mean square error**

  - The square root of the average squared error of the regression (this is the most widely used metric to compare regression models). (Synonym: RMSE)

- **Residual standard error**

  - The same as the root mean squared error, but adjusted for degrees of freedom. (Synonym: RSE)

- **R-squared**

  - The proportion of variance explained by the model, from 0 to 1. (Synonym: coefficient of determination)

- **t-statistic**

  - The coefficient for a predictor, divided by the standard error of the coefficient, giving a metric to compare the importance of variables in the model.

- **Weighted regression**

  - Regression with the records having different weights.

### Key Ideas

- Multiple linear regression models the relationship between a response variable Y and multiple predictor variables X1 ... Xp.
- The most important metrics to evaluate a model are root mean squared error (RMSE) and R-squared (R^2).
- The standard error of the coefficients can be used to measure the reliability of a variable's contribution to a model.
- Stepwise regression is a way to automatically determine which variables should be included in the model.
- Weighted regression is used to give certain records more or less weight in fitting the equation.

## Prediction Using Regression

### Key Terms

- **Prediction Interval**

  - An uncertainty interval around an individual predicted value.

- **Extrapolation**

  - Extension of a model beyond the range of the data used to fit it.

### Key Ideas

- Extrapolation beyond the range of the data can lead to error.
- Confidence intervals quantify uncertainty around regression coefficients.
- Prediction intervals quantify uncertainty in individual predictions.
- Most software, R included, will produce prediction and confidence intervals in default or specified output, using formulas.
- The bootstrap can also be used to produce prediction and confidence intervals; the interpretation and idea are the same.

## Factor Variables

### Key Terms

- **Dummy Variables**

  - Binary 0-1 variables derived by recording factor data for use in regression and other models.

- **Reference coding**

  - The most common type of coding used by statisticians, in which one level of a factor is used as a reference and other factors are compared to that level. (Synonym: treatment coding)

- **One hot encoder**

  - A common type of coding used in the machine learning community in which all factor levels are retained. While useful for certain machine learning algorithms, this approach is not appropriate for multiple linear regression.

- **Deviation coding**

  - A type of coding that compares each level against the overall mean as opposed to the reference level. (Synonym: sum contrast)

### Key Ideas

- Factor variables need to be converted into numeric variables for us in a regression.
- The most common method to encode a factor variable with P distinct values is to represent them using P - 1 dummy variables.
- A factor variable with many levels, even in very big data sets, may need to be consolidated into a variable with fewer levels.
- Some factors have levels that are ordered and can be represented as a single numeric variable.

## Interpreting the Regression Equation

### Key Terms

- **Correlated Variables**

  - When the predictor variables are highly correlated, it is difficult to interpret the individual coefficients.

- **Multicollinearity**

  - When the predictor variables have perfect, or near perfect, correlation, the regression can be unstable or impossible to compute. (Synonym: collinearity)

- **Confounding Variables**

  - An important predictor that, when omitted, leads to spurious relationships in a regression equation.

- **Main Effects**

  - The relationship between a predictor and the outcome variable, independent of other variables.

- **Interactions**

  - An interdependent relationship between two or more predictors and the response.

### Key Ideas

- Because of correlation between predictors, care must be taken in the interpretation of the coefficients in multiple linear regression.
- Multicollinearity can cause numerical instability in fitting the regression equation.
- A confounding variable is an important predictor that is omitted from a model and can lead to a regression equation with spurious relationships.
- An interaction term between two variables is needed if the relationship between the variables and the response is interdependent.

## Regression Diagnostics

### Key Terms

- **Standardized Residuals**

  - Residuals divided by the standard error of the residuals.

- **Outliers**

  - Records (or outcome values) that are distant from the rest of the data (or the predicted outcome).

- **Influential Value**

  - A value or record whose presence or absence makes a big difference in the regression equation.

- **Leverage**

  - The degree of influence that a single record has on a regression equation. (Synonym: hat-value)

- **Non-normal residuals**

  - Non-normally distributed residuals can invalidate some technical requirements of regression but are usually not a concern in data science.

- **Heteroskedasticity**

  - When some ranges of the outcome experience residuals with higher variance (may indicate a predictor missing from the equation).

- **Partial Residual Plots**

  - A diagnostic plot to illuminate the relationship between the outcome variable and a single predictor. (Synonym: added variable plot)

### Key Ideas

- While outliers can cause problems for small data sets, the primary interest with outliers it to identify problems with the data, or locate anomalies.
- Single records (including regression outliers) can have a big influence on a regression equation with small data, but this effect washes out in big data.
- If the regression model is used for formal inference (p-values and the like), then certain assumptions about the distribution of the residuals should be checked. In general, however, the distribution of redisuals is not critical in data science.
- The partial residuals plot can be used to qualitatively assess the fit for each regression term, possibly leading to alternative model specifications.

## Nonlinear Regression

### Key Terms

- **Polynomial regression**

  - Adds polynomial terms (squares, cubes, etc.) to a regression.

- **Spline regression**

  - Fitting a smooth curve with a series of polynomial segments.

- **Knots**

  - Values that separate spline segments.

- **Generalized additive models**

  - Spline models with automated selection of knots. (Synonym: GAM)

### Key Ideas

- Outliers in regression are records with a large residual.
- Multicollinearity can cause numerical instability in fitting the regression equation.
- A confounding variable is an important predictor that is omitted from a model and can lead to a regression equation with spurious relationships.
- An interaction term between two bariables is needed if the effect of one variable depends on the level or magnitude of the other.
- Polynomial regression can fit nonlinear relationships between predictos and the outcome variable.
- Splines are series of polynomial segments strung together, joining at knots.
- We can automate the process of specifying the knots in splines using generalized additive models (GAM).

# Chapter 5 - Classification

## Naive Bayes

### Key Terms

- **Conditional Probability**

  - The probability of observing some event (say, x = i) given some other event (say, Y = i), written as P(X<sub>i</sub>|Y<sub>i</sub>)

- **Posterior Probability**

  - The probability of an outcome after the predictor information has been incorporated (in contrast to the _prior probability_ of outcomes, not taking predictor information into account).

### Key Ideas

- Naive Bayes works with categorical (factor) predictors and outcomes.
- It asks, "Within each outcome category, which predictor categories are most probable?"
- That information is then inverted to estimate probabilities of outcome categories, given predictor values.

## Discriminant Analysis

### Key Terms

- **Covariance**

  - A measure of the extent to which one variable varies in concert with another (i.e., similar magnitude and direction).

- **Discriminant function**

  - The function that, when applied to the predictor variables, maximizes the separation of the classes.

- **Discriminant weights**

  - The scores that result from the applications of the discriminant function and are used to estimate probabilities belonging to one class or another.

### Key Ideas

- Discriminant analysis works with continuous or categorical predictors, as well as with categorical outcomes.
- Using the covariance matrix, it calculates a _linear discriminant function_, which is used to distinguish records belonging to one class from those belonging to another.
- This function is applied to the records to derive weights, or scores, for each record (one weight for each possible class), which determines its estimated class.

## Logistic Regression

### Key Terms

- **Logit**

  - The function that maps class membership probability to a range from plus/minus infinity (instead of 0 to 1).

- **Odds**

  - The ration of "success" (1) to "not success" (0).

- **Log odds**

  - The response in the transformed model (now linear), which gets mapped back to a probability.

### Key Ideas

- Logistic regression is like linear regression, except that the outcomes ia a binary variable.
- Several transformations are needed to get the model into a form that can be fit as a linear model, with the log of the odds ration as the response variable.
- After the linear model is fit (by an iterative process), the log odds is mapped back to a probability.
- Logistic regression is popular because it is computationally fast and produces a model that can be scored to new data with only a few arithmetic operations.

## Evaluating Classification Models

### Key Terms

- **Accuracy**

  - The percent (or proportion) of cases classified correctly.

- **Confusion Matrix**

  - A tabular display (2x2 in the binary case) of the record counts by their predicted and actual classification status.

- **Sensitivity**

  - The percent (or proportion) of all 1s that are correctly classified as 1s. (Synonym: Recall)

- **Specificity**

  - The percent (or proportion) of all 0s that are correctly classified as 0s.

- **Precision**

  - The percent (proportion) of predicted 1s that are actually 1s.

- **ROC Curve**

  - A plot of sensitivity versus specificity.

- **Lift**

  - A measure of how effective the model is at identifying (comparatively rare) 1s at different probability cutoffs.

### Key Ideas

- Accuracy (the percent of predicted classifications that are correct) is but a first step in evaluating a model.
- Other metrics (recall, specificity, precision) focus on more specific performance characteristics (e.g., recall measures how good a model is at correctly identifying 1s).
- AUC (area under the ROC curve) is a common metric for the ability of a model to distinguish 1s from 0s.
- Similarly, lift measures how effective a model is in identifying the 1s, and it is often calculated decile by decile, starting with the most probable 1s.

## Imbalanced Data

### Key Terms

- **Undersample**

  - Use fewer of the prevalent class records in the classification model. (Synonym: Downsample)

- **Oversample**

  - Use more of the rare class recprds in the classification model, bootstrapping if necessary. (Synonym: Upsample)

- **Up weight or down weight**

  - Attach more (or less) weight to the rare (or prevalent) class in the model.

- **Data generation**

  - Like bootstrapping, except each new bootstrapped record is slightly different from its source.

- **z-score**

  - The value that results after standardization.

- **K**

  - The number of neighbors considered in the nearest neighbor calculation.

### Key Ideas

- Highly imbalanced data (i.e., where the interesting outcomes, the 1s, are rare) are problematic for classification algorithms.
- One strategy for working with imbalanced data is to balance the training data via undersampling the abundant case (or oversampling the rare case).
- If using all the 1s still leaves you with too few 1s, you can bootstrap the rare cases, or use SMOTE to create synthetic data similar to existing rare cases.
- Imbalanced data usually indicates that correctly classifying one class (the 1s) has higher value, and that value ration should be built into the assessment metric.

# Chapter 6 - Statistical Machine Learning

## K-Nearest Neighbors

### Key Terms

- **Neighbor**

  - A record that has similar predictor values to another record.

- **Distance Metrics**

  - Measures that sum up in a single number how far one record is from another.

- **Standardization**

  - Subtract the mean and divide by the standard deviation. (Synonym: Normalization)

- **z-score**

  - The value that results after standardization.

- **K**

  - The number of neighbors considered in the nearest neighbor calculation.

### Key Ideas

- K-Nearest Neighbors (KNN) classifies a record by assigning it to the class that similar records belong to.
- Similarity (distance) is determined by Euclidian distance or other related metrics.
- The number of nearest neighbors to compare a record to, K, is determined by how well the algorithm performs on training data, using different values for K.
- Typically, the predictor variables are standardized so that variables of large scale do not dominate the distance metric.
- KNN is often used as a first stage in predictive modeling, and the _predictor_ value is added back into the data as a predictor for second-stage (non-KNN) modeling

## Trees

### Key Terms

- **Recursive partitioning**

  - Repeatedly dividing and subdividing the data with the goal of making the outcomes in each final subdivision as homogeneous as possible.

- **Split value**

  - A predictor value that divides the records into those where that predictor is less than the split value, and those where it is more.

- **Node**

  - In the decision tree, or in the set of corresponding branching rules, a node is the graphical or rule representation of a split value.

- **Leaf**

  - The end of a set of if-then rules, or branches of a tree - the rules that bring you to that leaf provide one of the classification rules for any record in a tree.

- **Loss**

  - The number of misclassifications at a stage in the splitting process; the more losses, the more impurity.

- **Impurity**

  - The extent to which a mix of classes is found in a subpartition of the data (the more mixed, the more impure). (Synonym: Heterogeneity) (Antonyms: Homogeneity, purity)

- **Pruning**

  - The process of taking a fully grown tree and progressively cutting its branches back to reduce overfitting.

### Key Ideas

- Decision trees produce a set of rules to classify or predict an outcome.
- The rules correspond to successive partitioning of the data into subpartitions.
- Each partition, or split, references a specific value of a predictor variable and divides the data into records where that predictor value is above or below that split value.
- At each stage, the tree algorithm chooses the split that minimizes the outcome impurity within each subpartition.
- When no further splits can be made, the tree is fully grown and each terminal node, or leaf, has records of a single class; new cases folling that rule (split) path would be assigned that class.
- A fully grown tree overfits data and must be pruned back so that it captures signal and not noise.
- Multiple-tree algorithms like random forests and boosted trees yield better predictive performance, but they lose the rule-based communicative power of single trees

## Bagging and the Random Forst

### Key Terms

- **Ensemble**

  - Forming a prediction by using a collection of models. (Synonym: Model averaging)

- **Bagging**

  - A general technique to form a collection of models by bootstrapping the data. (Synonym: Bootstrap aggregation)

- **Random Forest**

  - A type of bagged estimate based on decision tree models. (Synonym: Bagged decision trees)

- **Variable Importance**

  - A measure of the importance of a precitor variable in the performance of the model.

### Key Ideas

- Ensemble models improve model accuracy by combining the results from many models.
- Bagging is a particular type of ensemble model based on fitting many models to bootstrapped samples of the data and averaging the models.
- Random forest is a special type of bagging applied to decision trees. In addition to resampling the data, the random forest algorithm samples the predictor variables when splitting the trees.
- A useful output from the random forest is a measure of variable importance that ranks the predictors in terms of their contribution to model accuracy.
- The random forest has a set of hyperparameters that should be tuned using cross-validation to avoid overfitting.

## Boosting

### Key Terms

- **Ensemble**

  - Forming a prediction by using a collection of models. (Synonym: Model averaging)

- **Boosting**

  - A general technique to fit a sequence of models by giving more weight to the records with large residuals for each successive round.

- **Adaboost**

  - An early version of boosting that reqeights the data based on the residuals.

- **Gradient Boosting**

  - A more general form of boosting that is cast in terms of minimizing a cost function.

- **Stochastic Gradient Boosting**

  - The most general algorithm for boosting that incorporates resampling of records and columns in each round.

- **Regularization**

  - A technique to avoid overfitting by adding a penalty term to the cost function on the number of parameters in the model.

- **Hyperparameters**

  - Parameters that need to be set before fitting the algorithm.

### Key Ideas

- Boosting is a class of ensemble models based on fitting a sequence of models, with more weight given to records with large errors in successive rounds.
- Stochastic gradient boosting is the most general type of boosting and offers the best performance. The most common form of stochastic gradient boosting uses tree models.
- XGBoost is a popular and computationally efficient software package for stochastic gradient boosting: it is available is all commong languages used in data science.
- Boosting is prone to overfitting the data, and the hyperparameters need to be tuned to avoid this.
- Regularization is one way to avoid overfitting by including a penalty term on the number of parameters (e.g., tree size) in a model.
- Cross-validation is especially important for boosting due to the large number of hyperparameters that need to be set.

# Chapter 7 - Unsupervised Learning

## Principal Component Analysis

### Key Terms

- **Principal Component**

  - A linear combination of the predictor variables.

- **Loadings**

  - The weights that transform the predictors into the components. (Synonym: Weights)

- **Screeplot**

  - A plot of the variances of the components, showing the relative importance of the components, either as explained variance or as proportion of explained variance.

### Key Ideas

- Principal components are linear combinations of the predictor variables (numeric data only).
- Principal components are calculated so as to minimize correlation between components, reducing redundancy.
- A limited number of components will typically explain most of the variance in the outcome variable.
- The limited set of principal components can then be used in place of the (more numerous) original predictors, reducing dimensionality.
- A superficially similar technique for categorical data is correspondence analysis, but it is not useful in a big data context.

## K-Means Clustering

### Key Terms

- **Cluster**

  - A group of records that are similar.

- **Cluster mean**

  - The vector of variable means for the records in a cluster.

- **K**

  - The nuber of clusters.

### Key Ideas

- The number of desired clusters, K, is chosen by the user.
- The algorithm develops clusters by iteratively assigning records to the nearest cluster mean until clust assignments do not chance.
- Practical considerations usually dominate the choice of K; there is no statistically determined optimal number of clusters.

## Hierarchical Clustering

### Key Terms

- **Dendrogram**

  - A visual representation of the records and the hierarchy of clusters to which they belong.

- **Distance**

  - A measure of how close one record is to another.

- **Dissimilarity**

  - A measure of how close one cluster is to another.

### Key Ideas

- Hierarchical clustering starts with every record in its own cluster.
- Progressively, clusters are joined to nerby clusters until all records belong to a single cluster (the agglomerative algorithm).
- The agglomeration history is retained and plotted, and the user (without specifying the number of clusters beforehand) can visualize the number and the structure of clusters at different stages.
- Inter-cluster distances are computed in different ways, all relying on the set of all inter-record distances.

## Model-Based Clustering

### Key Ideas

- Clusters are assumed to derive from different data-generating processes with different probability distributions.
- Different models are fit, assuming different numbers of (typically normal) distributions.
- The method chooses the model (and the associated number of clusters) that fits the data well without using too many parameters (i.e., overfitting).

## Scaling Data

### Key Terms

- **Scaling**

  - Squashing or expanding data, usually to bring multiple variables to the same scale.

- **Normalization**

  - One method of scaling - subtracting the mean and dividing by the standard deviation. (Synonym: Standardization)

- **Gower's Distance**

  - A scaling algorithm applied to mixed numeric and categorical data to bring all variables to a 0-1 range.

### Key Ideas

- Variables measured on different scaled need to be transformed to similar scales so that their impact on algorithms is not determined mainly by their scale.
- A common scaling method is normalization (standardization) - subtracting the mean and dividing by the standard deviation.
- Another method is Gower's distance, which scales all variables to the 0-1 range (it is often used with mixed numeric and categorical data).
