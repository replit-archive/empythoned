#!/usr/bin/env python2

import os
import sys

MAX_SIZE_TO_INLINE = 32

def main(root):
  os.chdir(root)
  commands = []
  for (dirpath, dirnames, filenames) in os.walk('.'):
    for folder in dirnames:
      commands.append('FS.createFolder("%s", "%s", true, false);' %
                      (dirpath, folder))
    for filename in filenames:
      # NOTE: Remove the python.js entry to prevent unnecesary re-reading.
      if dirpath == '.' and filename == 'python.js': continue
      jsless_filename = filename[:-3] if filename.endswith('.js') else filename
      full_path = os.path.join(dirpath, filename)
      if os.stat(full_path).st_size <= MAX_SIZE_TO_INLINE:
        contents = ', '.join(str(ord(i)) for i in open(full_path, 'rb').read())
        commands.append('FS.createDataFile("%s", "%s", [%s], true, false);' %
                        (dirpath, jsless_filename, contents))
      else:
        commands.append('FS.createLazyFile("%s", "%s", "%s", true, false);' %
                        (dirpath, jsless_filename, full_path))

  # Start out in a writeable folder.
  commands.append('FS.createFolder(".", "sandbox", true, true);')
  commands.append('FS.currentPath = "/sandbox";')

  print '\n'.join(commands)

if __name__ == '__main__':
  if len(sys.argv) != 2:
    print 'Usage: %s root' % sys.argv[0]
  else:
    main(sys.argv[1])
