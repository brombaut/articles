## Project File Structure

```less
my_project/
├─ images/
│ ├─ image1.jpg
├─ 00_main.tex
├─ 01_preamble.tex
├─ 02_title.tex
├─ 03_abstract.tex
├─ ...
├─ references.bib
```

## Main Tex File

How I structure the main project file. Having the _\chptroot_, _\lblroot_, and _\imgsroot_ just makes things easier if you ever need to move these documents into a larger parent project (e.g., a thesis).

```latex
\newcommand{\chptroot}{.}
\newcommand{\lblroot}{dbcs}
\newcommand{\imgsroot}{images}

% RQs - I'm not convinced this is actually a good idea, but just leaving it here. Alternatively you can just do \rqone, rqtwo, etc.
\newcommand\rqnumberX{1\xspace}
\newcommand\rqX{RQ1?}

\newcommand\rqnumberY{2\xspace}
\newcommand\rqY{RQ2?}

\newcommand\rqnumberZ{3\xspace}
\newcommand\rqZ{RQ3?}

% Common helpful commands
\newcommand{\floor}[1]{\lfloor#1\rfloor}
\newcommand{\ceil}[1]{\lceil#1\rceil}
\newcommand{\code}[1]{\texttt{#1}}
\newcommand{\quotes}[1]{``#1''}
\newcommand{\fnu}[1]{\footnote{\url{#1}}}

% Whatever technologies and other pieces of text you'll use a lot in the paper
\newcommand{\npm}{\textsf{npm}\xspace}

% Reviewing
\newcommand\ben[1]{\nbc{BEN}{#1}{blue}}

\input{\chptroot/01_preamble}
% Document
\begin{document}
  % \bstctlcite{BSTcontrol}
  \input{\chptroot/02_title}
  \input{\chptroot/03_authors}
  \input{\chptroot/04_abstract}

  % Weird IEEE stuff
  \maketitle
  \IEEEdisplaynontitleabstractindextext
  \IEEEpeerreviewmaketitle

  %Sections
  \input{\chptroot/05_intro}
  \input{\chptroot/06_background}
  \input{\chptroot/07_data}
  \input{\chptroot/08_findings}
  \input{\chptroot/09_discussion}
  \input{\chptroot/10_related_work}
  \input{\chptroot/11_threats}
  \input{\chptroot/12_conclusion}
  \input{\chptroot/13_acknowledgements}

  \bibliographystyle{IEEEtranN}  % basic style, author-year citations
  \bibliography{dbcs_references.bib}
  \newpage

  \input{\chptroot/14_bios}
  \newpage

  \begin{appendices}
    \input{\chptroot/99_app_ci_name_regex}
  \end{appendices}

\end{document}
```

## Labeling for Referencing

When creating labels to reference, if you are labeling a section, follow the pattern below, adding subsections as needed:

> \\lblroot:section_name:subsection_name:subsubsection_name

If you are labeling another entity (e.g., tables, figures, etc.), then follow the pattern below:

> \\lblroot:entity_type:label_name:sub_entity_name

Note that the sub)entity name is rarely used (e.g., for when there are multiple figures in a single figure).

See below for some different examples:

```latex
% Sections
\label{\lblroot:findings:existing_score}

% Figures
\label{\lblroot:figure:score_distributions}

% Tables
\label{\lblroot:table:failure_reasons}
```
