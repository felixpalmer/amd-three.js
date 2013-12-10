#!/usr/bin/python
# Utility to convert .frag and .vert shader files into a require.js module
import os
import re
import shutil
import subprocess 

DIR=os.path.dirname(os.path.realpath(__file__))
OUTPUT=os.path.join(DIR, "../app/shader.js")
def get_shader_files(directory):
    shaders = []
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f.endswith(".frag") or f.endswith(".vert"):
                shaders.append(f)
    return shaders

FORMAT = """define( [], function() {
  return {
    vertex: {
%s
    },
    fragment: {
%s
    },
  }
} );"""

COMMENT_REGEX = re.compile("^\s*//")
BLANK_REGEX = re.compile("^\s*$")

def write_shaders(shader_files):
    return "\n".join(map(write_shader, shader_files))

def write_shader(shader_file):
    shader = "      %s: [\n" % shader_file.split(".")[0]
    with open(os.path.join(DIR, shader_file), 'r') as f:
        for line in f.readlines():
            if COMMENT_REGEX.match(line):
                shader += "         %s\n" % line.strip("\n")
            elif BLANK_REGEX.match(line):
                shader += "\n"
            else:
                shader += "        \"%s\",\n" % line.strip("\n")

    shader += "      ].join(\"\\n\"),"
    print "Compiled %s" % shader_file
    return shader

def standalone():
    print "Compiling shaders in %s" % DIR
    shader_files = get_shader_files(DIR)
    vertex_shaders = [s for s in shader_files if s.endswith(".vert")]
    fragment_shaders = [s for s in shader_files if s.endswith(".frag")]
    with open(OUTPUT, 'w') as out:
        out.write(FORMAT % (write_shaders(vertex_shaders), write_shaders(fragment_shaders)))
        print "Shaders written to %s" % OUTPUT

if __name__ == "__main__":
    standalone()
