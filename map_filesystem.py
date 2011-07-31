#!/usr/bin/env python2

import os
import sys

def main(root, main_filename):
  os.chdir(root)
  commands = []
  for (dirpath, dirnames, filenames) in os.walk('.'):
    for folder in dirnames:
      commands.append('FS.createFolder("%s", "%s", true, true);' %
                      (dirpath, folder))
    for filename in filenames:
      jsless_filename = filename[:-3] if filename.endswith('.js') else filename
      commands.append('FS.createLazyFile("%s", "%s", "%s", true, false);' %
                      (dirpath, jsless_filename, filename))

  infile = open(main_filename, 'r')
  src = infile.read().replace('// {{PRE_RUN_ADDITIONS}}', '\n'.join(commands))
  infile.close()

  outfile = open(main_filename, 'w')
  outfile.write(src)
  outfile.close()

if __name__ == '__main__':
  if len(sys.argv) != 3:
    print 'Usage: %s root outfile' % sys.argv[0]
  else:
    main(sys.argv[1], sys.argv[2])
