#!/usr/bin/env python2

from __future__ import with_statement

import os
import subprocess
import shutil
import sys

# LLVM commands.
# TODO: Factor out to be configurable from ./build.
CC = '/home/max/emscripten-workspace/llvm-gcc-install/bin/llvm-gcc'
LINK = '/home/max/emscripten-workspace/llvm-build/Release/bin/llvm-link'
LLC = '/home/max/emscripten-workspace/llvm-build/Release/bin/llc'

# Argument filters.
SKIPPED_CC_ARGS = [
  # Don't run optimizations prematurely.
  '-O1',
  '-O2',
  '-O3',
]
ADDITIONAL_CC_ARGS = [
  # Compile for the most basic posible x86 machine.
  '-m32',
  # Compile with debugging info, so emscripten can easily access struct members.
  '-g',
  # Avoid architecture-specific optimizations.
  '-U__i386__',
  '-U__x86_64__',
  '-U__SSE__',
  # Our doubles are funky. Don't rely on accuracy.
  '-UX87_DOUBLE_ROUNDING',
  # We can't run inline assembly.
  '-UHAVE_GCC_ASM_FOR_X87',
  # Use plain old utime() instead of utimes().
  '-UHAVE_UTIMES',
  # Tell expat we actually have MEMMOVE, despite its belief in the opposite.
  '-DHAVE_MEMMOVE',
  # Tell elementtree that we have expat available.
  '-DUSE_PYEXPAT_CAPI',
]
ALLOWED_LINK_ARGS = [
  # Don't allow linking to external libraries.
  '-f',
  '-help',
  '-o',
  '-print-after',
  '-print-after-all',
  '-print-before',
  '-print-before-all',
  '-time-passes',
  '-v',
  '-verify-dom-info',
  '-version',
]

# Determine whether we want to call the linker or the compiler.
call = LINK
for arg in sys.argv[1:]:
  if arg ==  '--version' or (not arg.startswith('-') and arg.endswith('.c')):
    call = CC
    break

# Filter the args.
if call == CC:
  newargs = [arg for arg in sys.argv[1:] if arg not in SKIPPED_CC_ARGS]
  newargs += ADDITIONAL_CC_ARGS
  if 'conftest.c' not in newargs:
    # For real files (rather than tests), we want to compile to LLVM bytecode.
    newargs.append('-emit-llvm')
    newargs.append('-c') 
else:
  def isArgAllowed(arg):
    return not arg.startswith('-') or arg.split('=')[0] in ALLOWED_LINK_ARGS
  newargs = [arg for arg in sys.argv[1:] if isArgAllowed(arg)]

# Run the linker or compiler.
with open('ccproxy.log', 'a') as log:
  log.write('## Called with %s\n' % ' '.join(sys.argv))
  if any(i.startswith('-print-prog-name') for i in sys.argv):
    # Redirect any program name queries to us.
    print sys.argv[0]
    ret = 0
  elif call == LINK and 'libpython2.7.a' in sys.argv:
    # We don't care about the final Python binary. Create a fake.
    fake_python_file = open('python', 'w')
    fake_python_file.write('#!/bin/bash\n')
    fake_python_file.close()
    ret = subprocess.call(['chmod', '+x', 'python'])
  else:
    log.write('** Calling %s %s\n\n' % (call, ' '.join(newargs)))
    ret = subprocess.call([call] + newargs)
    if call == LINK and 'Parser/pgen' in sys.argv:
      # We want to compile the parser generator to native code.
      target = 'Parser/pgen'
      subprocess.call([LLC, '--filetype=obj', target, '-o', target + '.tmp.o'])
      subprocess.call([CC, '-m32', target + '.tmp.o', '-o', target])
      os.unlink(target + '.tmp.o')
  # Pass the subprocess result to the caller.
  sys.exit(ret)
