#!/usr/bin/env python2

import glob
import subprocess
import re

SIGNATURE = 'EMPYTHONED_MODULE'
JAVA_MEMORY_LIMIT = '5g'
CLOSURE_JAR = '/home/max/emscripten-workspace/closure/build/compiler.jar'
COMPILED_MODULE_REGEX = re.compile(r'^window\["%s ([^\]]+)"\]=(.*)' % SIGNATURE,
                                   re.DOTALL)

def merge():
  core = open('dist/python.elim.js').read()
  parts = [core]
  for module_name in glob.glob('dist/lib/python2.7/*.so.js'):
    module_content = open(module_name).read()
    module_content = module_content.replace('"use strict";', '').strip()
    parts.append('window["%s"]();' % SIGNATURE)
    parts.append('window["%s %s"] = %s' %
                 (SIGNATURE, module_name, module_content))
  merged_file = open('dist/python.merged.js', 'w')
  merged_file.write('\n'.join(parts))
  merged_file.close()

def minify():
  subprocess.call(['java',
                   '-Xmx' + JAVA_MEMORY_LIMIT,
                   '-jar', CLOSURE_JAR,
                   '--compilation_level', 'ADVANCED_OPTIMIZATIONS',
                   '--js', 'dist/python.merged.js',
                   '--js_output_file', 'dist/python.merged.opt.js'])

def split():
  merged = open('dist/python.merged.opt.js').read()
  parts = merged.split('window.%s();' % SIGNATURE)
  print 'Split into core and ' + str(len(parts) - 1) + ' modules'
  core_file = open('dist/python.opt.js', 'w')
  core_file.write(parts[0])
  core_file.close()
  for module in parts[1:]:
    module = module.strip()
    (name, content) = re.findall(COMPILED_MODULE_REGEX, module)[0]
    print 'Writing ' + name + ' + with size ' + str(len(content))
    module_file = open(name, 'w')
    module_file.write('(')
    module_file.write(content[:-1])
    module_file.write(');')
    module_file.close()

def main():
  merge()
  minify()
  split()

if __name__ == '__main__':
  main()
