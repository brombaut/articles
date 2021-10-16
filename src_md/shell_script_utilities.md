## Common Shell Programs

### basename

If you need to strip the extension from a filename or get rid of the directories in a full pathname, use the **basename** command. Some examples:

```bash
$ basename example.html .html
$ basename /usr/local/bin/example
```

In both cases, **basename** returns _example_. The firs command strips the _.html_ suffix from _example.html_, and the second removes the directories from the full pathname.

This example shows how you can use **basename** in a script to convert GIF image files to the PNG format:

```bash
#!/bin/bash
for file in *.gif; do
  # exit if there are no files
  if [ ! -f $file ]; then
    exit
  fi
  b=$(basename $file .gif)
  echo Converting $b.gif to $b.png
  giftopnm $b.gif | pnmtopng > $b.png
done
```

### awk

The **awk** command is not a simple single-purpose command; it's actually a powerful programming language. However, many people use **awk** only to do one thing - to pick a single field out of an input stream like this:

```bash
$ ls -l | awk '{print $5}'
```

This command prints the fifth field of the **ls** output (ths file size). The result is a list of file sizes.

### sed

The **sed** ("stream editor") program is an automatic text editor that takes an input stream (a file or the standard input), alters it according to some expression, and prints the results to standard output. In general, **sed** takes an address and an operation as one argument. The address is a set of lines, and the command determines what to do with the lines.

A very common task for **sed** is to substitute some text for a regular expression, like this:

```bash
$ sed 's/exp/text/'
```

If you wanted to replace the first colon in each line of _/etc/passwd_ with a _%_ and send the result to the standard output, then you'd do it like this:

```bash
$ sed 's/:/%/' /etc/passwd
```

To substitute _all_ colons in _/etc/passwd_, add the **g** (global) modifier to the end of the operation, like this:

```bash
$ sed 's/:/%/g' /etc/passwd
```

Here's a command that operates on a per-line basis; it reads _/etc/passwd_, deletes lines three through six, and sends the result to the standard output:

```bash
$ sed 3,6d /etc/passwd
```

In this example, **3,6** is the address (a range of lines), and **d** is the operation (delete). If you omit the address, **sed** operates on all lines in its input stream. The two most common **sed** operations are probably **s** (search and replace) and **d**.

You can also use a regular expression as the address. This command deletes any line that matches the regular expression **exp**.

```bash
$ sed '/exp/d'
```

In all of these examples, **sed** writes to the standard output, and this is by far the most common usage. With no file arguments, **sed** reads from the standard input, a pattern that you'll frequently encounter in shell pipelines.

### xargs

When you have to run one command on a huge number of files, the command or shell may respond that it can't fit all of the arguments in its buffer. Use **xargs** to get around this problem by running a command on each file name in its standard input stream.

Many people use **xargs** with the **find** command. For example, the following script can help you verify that every file in the current directory tree that ends with _.gif_ is actually a GIF image:

```bash
$ find . -name '*.gif' -print | xargs file
```

Here, **xargs** runs the **file** command. However, this invocation can cause errors or leave your system open to security problems, because filenames can include spaces and newlines. When writing a script, use the following form instead, which changes the **find** output separator and the **xargs** argument delimiter from a newline to a NULL character:

```bash
$ find . -name '*.gif' -printO | xargs -O file
```

**xargs** starts a _lot_ of processes, so don't expect great performance if you have a large list of files.

You may need to add two dashes (--) to the end of your **xargs** command if there's a chance that any of the target files start with a single dash (-). The double dash (--) tells a program that any arguments that follow are filenames, not options. However, keep in mind that not all programs support the use of a double dash.

When using **find**, there's an alternative to **xargs**: the **-exec** option. However, the syntax is somewhat tricky because you need to supply braces, {}, to substitute the filename and a literal **;** to indicate the end of the command. Here's how to perforom the preceding task using only **find**:

```bash
$ find . -name '*.gif' -exec file {} \;
```

### expr

If you need to use arithmetic operations in your shell scripts, the **expr** command can help (and even do some string operations). For example, the command **expr 1 + 2** prints 3. (Run **expr --help** for a full list of operations.)

The **expr** command is a clumsy, slow way of doing math. If you find yourself using it frequently, you should probably be using a language like Python instead of a shell script.

### exec

The **exec** command is a built-in shell feature that replaces the current shell process with the program you name after **exec**. It carries out the **exec()** system call. This feature is designed for saving system resources, but remember tgar rgere's no return; when you run **exec** in a shell script, the script and shell running the script are gone, replaced by the new command.

To test this in a shell window, try running **exec cat**. After you cress **CTRL-D** or **CTRL-C** to terminate the **cat** program, your window should disappear because its child process no longer exists.

## Archiving and Compressing Files

Two common utilities for compressing and bundling files and directories are `gzip` and `tar`

### gzip

The program `gzip` (GNU Zip) is one of the current standard Unix compression programs. A file that ends with _.gz_ is a GNU Zip archive. Use `gunzip file.gz` to uncompress _\<file\>.gz_ and remove the suffix; to compress the file again, use `gzip file`.

### tar

Unlike the ZIP programs for other operating systems, `gzip` does not create archives of files; that is, it doesn't pack multiple files and directories into a single file. To create an archive, use `tar` instead:

```bash
$ tar cvf archive.tar file1 file2 ...
```

Archives created by `tar` usually have a _.tar_ suffix. The _c_ flag activates _create mode_. The _v_ flag activates verbose output (you can also do _vv_). The _f_ flag denotes the file option. The next argument on the command line after the _f_ flag must be the archive file for `tar` to create. You **must** use this option followed by a filename at all times, except with tape drives. To use standard input or output, set the filename to a dash (-).

#### Unpacking .tar files

To unpack a _.tar_ file with `tar` use the _x_ flag:

```bash
$ tar xvf archive.tar
```

### Compressed Archives (_.tar.gz_)

To unpack compressed archives, work from right to left; get rid of the _.gz_ first and then worry about the _.tar_. For example:

```bash
$ gunzip file.tar.gz
$ tar xvf file.tar
```

### zcat

A better way to do what was just shown is to combine archival and compression functions with a pipeline. For example, this command pipeline unpackage _\<file\>.tar.gz_:

```bash
$ zcat file.tar.gx | tar xvf -
```

The `zcat` command is the same as `gunzip -dc`. The _-d_ option decompresses and the _-c_ option sends the result to standard output (in this case, to the `tar` command).

Because it's so common to use `zcat`, the version of `tar` that comes with Linux has a shortcut. You can use _z_ as an option to automatically invoke `gzip` on the archive; this works both for extracting an archive (with the _x_ or _t_ modes in `tar`) and creating one (with _c_). For example, use the following command to verify (search for tar table-of-contents mode) a compressed archive:

```bash
$ tar ztvf file.tar.gz
```

However, try to remember that you're actually performing two steps when taking the shortcut.

> NOTE: A .tgz file is the same as a .tar.gz file. The suffix is meant to fit into FAT (MS-DOS-based filesystems).

## References

- [How Linux Works - 3rd Edition](https://nostarch.com/howlinuxworks3)
