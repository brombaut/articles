The details of the Linux directory structure are outlines in the Filesystem Hierarchy Standard, or FHS ([https://refspecs.linuxfoundation.org/fhs.shtml](https://refspecs.linuxfoundation.org/fhs.shtml)). Below are the most important subdirectories in root:

### **_/bin_**

Contains ready-to-run programs (also known as _executables_), including most of the basic Unix commands such as `ls` and `cp`. Most of the programs in _/bin_ are in binary format, having been created by a C compiler, but some are shell scripts in modern systems.

### **_/dev_**

Contains device files.

### **_/etc_**

This core system configuration directory contains the user password, boot, device, networking, and other setup files.

### **_/home_**

Holds home (personal) directories for regular users.

### **_/lib_**

An abbreviation for _library_, this directory holds library files containing code that executables can use. There are two types of libraries: static and shared. The _lib_ directory should contain only shared libraries, but other lib directories, such as _/usr/lib_, contain both varieties as well as other auxiliary files.

### **_/proc_**

Provides system statistics through a browsable directory-and-file interface. Much of the _/proc_ subdirectory structure on Linux is unique, but many other Unix variants have similar features. The _/proc_ directory contains information about currently running processes as well as some kernel parameters.

### **_/run_**

Contains runtime data specific to the system, including certain process IDs, socket files, status records, and, in many cases, system logging. This is a relatively recent addition to the root directory; in older systems, you can find it in _/var/run_. On newer systems, _/var/run_ is a symbolic link to _/run_.

### **_/sys_**

This directory is similar to _/proc_ in that is provides a device and system interface.

### **_/sbin_**

The place for system executables. Programs in _/sbin_ directories relate to system management, so regular users usually do not have _/sbin_ components in their command paths. Many of the utilities found here don't work if not run as root.

### **_/tmp_**

A storage area for smaller, temporary files that you don't care much about. Any user may read to and write from _/tmp_, but many users may not have permission to access another user's files there. Many programs use this directory as a workspace. If something is extremely important, don't put it in _/tmp_ because most distributions clear _/tmp_ when the machine boots and some even remove its old files periodically. Also, don't let _/tmp_ fill up with garbage because its space is usually shared with something critical (the rest of _/_, for example).

### **_/usr_**

Although pronounced "user", this subdirectory has no user files. Instead, it contains a large directory hierarchy, including the bulk of the Linux system. Many of the directory names in _/usr_ are the same as those in the root directory (like _/usr/bin_ and _/usr/lib_), and they hold the same type of files. (The reason that the root directory does not contain the complete system is primarily historic - in the past, it was to keep space requirements low for the root.)

> The _/usr_ directory may look relatively clean at first glance, but a quick look at _/usr/bin_ and _/usr/lib_ reveals that there's a lot here; _/usr_ is where most of the user-space programs and date reside. In addition to _/usr/bin_, _/usr/sbin_ and _/usr/lib_, _/usr_ contains the following:
>
> #### **_/usr/include_**
>
> Holds header files used by the C compiler.
>
> #### **_/usr/local_**
>
> Is where admins can install their own software. Its structure should like like that of _/_ and _/usr_.
>
> #### **_/usr/man_**
>
> Contains manual pages.
>
> #### **_/usr/share_**
>
> Contains files that should work on other kinds of Unix machines with no loss of functionality. These are usually auxiliary data files that programs and libraries read as necessary. In the past, networks of machines would share this directory from a file server, but today a _share_ directory used in this manner is rare because there are no realistic space restraints for these kinds of files on contemporary systems. Instead, on Linux distributions, you'll find _/man_, _/info_, and many other subdirectories here because it is an easily understood convention.

### **_/var_**

The variable subdirectory, where programs record information that can change over the course of time. System logging, user tracking, caches, and other files that system programs create and manage are here. (You'll notice a _/var/tmp_ directory here, but the system doesn't wipe it on boot.)

### **_/boot_**

Contains kernel boot loader files. These files pertain only to the very first stage of the Linux startup procedure, so you won't find information about how Linux starts up its services in this directory.

### **_/media_**

A base attachment point for removable media such as flash drives that is found in many distributions.

### **_/opt_**

This may contain additional third-party software. Many systems don't use _/opt_.

## References

- [How Linux Works - 3rd Edition](https://nostarch.com/howlinuxworks3)
