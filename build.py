#!/usr/bin/env python
from os.path import dirname, join

def salt(*saltfiles):
    salts = set()
    out = ["var salt = {};\n"]

    for saltfile in saltfiles:
        requires = open(saltfile).readlines()
        salts.update(filter(None, map(str.strip, requires)))

    saltsdir = dirname(__file__)
    salt = lambda f: join(saltsdir, "src", f + ".js")
    source = ("".join(open(salt(s)).readlines()) for s in salts)
    out.extend(source)

    return "".join(out)

if __name__ == '__main__':
    from sys import argv
    print(salt(*argv[1:]))
