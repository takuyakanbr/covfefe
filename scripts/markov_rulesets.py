# Script to generate the necessary grammar rules for the
# markov generator output type

# Dataset:
# http://www.drmaciver.com/2009/12/i-want-one-meelyun-sentences/

import re

ALPHA = ' abcdefghijklmnopqrstuvwxyz'

# read data from file
with open('sentences', 'r', encoding="utf8") as f:
    content = f.read().splitlines()

n = len(content)
freq = {}

# process sentences
for i in range(n):
    content[i] = re.sub('[^a-z]+', ' ', content[i].lower())

    for word in content[i].split(' '):
        if len(word) < 1: continue
        word = ' ' + word + ' '

        # sum up next-letter frequencies
        pc = ''
        for j in range(len(word) - 1):
            c = word[j]
            if pc != ' ': c = pc + c
            nc = word[j+1]
            if c not in freq:
                freq[c] = {}
                for a in ALPHA:
                    freq[c][a] = 0
            freq[c][nc] += 1
            pc = word[j]

# normalize frequencies
for c, d in freq.items():
    sum_ = sum(d.values())
    for nc in d:
        d[nc] /= sum_

# helper functions for printing rulesets
def make_name(c):
    if c == ' ': return '@mstart'
    return '@m' + c

def make_option(pc, c, nc):
    if nc == ' ': return pc + c + '|'
    if c == ' ': return '@m' + nc + '|'
    if len(pc) == 0: return '@m' + c + nc + '|'
    return pc + ',@m' + c + nc + '|'

# print rulesets
for c, d in freq.items():
    rule = make_name(c) + '='
    pc = c[:-1]
    c = c[-1]
    for nc in d:
        if d[nc] <= 0.0055: continue
        mult = max(1, int(d[nc] / 0.01))
        rule += make_option(pc, c, nc) * mult
    print(rule[:-1])
