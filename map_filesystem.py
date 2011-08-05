#!/usr/bin/env python2

import os
import sys

def main(root):
  os.chdir(root)
  commands = []
  for (dirpath, dirnames, filenames) in os.walk('.'):
    for folder in dirnames:
      commands.append('FS.createFolder("%s", "%s", true, true);' %
                      (dirpath, folder))
    for filename in filenames:
      jsless_filename = filename[:-3] if filename.endswith('.js') else filename
      commands.append('FS.createLazyFile("%s", "%s", "%s", true, false);' %
                      (dirpath, jsless_filename, dirpath + '/' + filename))

  print '\n'.join(commands) + '\n'

if __name__ == '__main__':
  if len(sys.argv) != 2:
    print 'Usage: %s root' % sys.argv[0]
  else:
    main(sys.argv[1])
