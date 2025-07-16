import datetime
import random

# Number of shapes (One, Two, tHree): OTH
NUMBER = ("O", "T", "H")
# Shape (Diamond, Squiggle, Oval): DSO
SHAPE = ("D", "S", "O")
# Shading (Solid, sTriped, Open): STO
SHADING = ("S", "T", "O")
# Color (Red, Green, Purple): RGP
COLOR = ("R", "G", "P")

def CardMaker():
  return random.choice(NUMBER) + random.choice(SHAPE) + random.choice(SHADING) + random.choice(COLOR)

def BoardMaker():
  cards = []
  uniquecards = set() 
  for i in range(12):
    card = CardMaker()
    while card in uniquecards:
      card = CardMaker()
    cards.append(card)
    uniquecards.add(card)
  return cards

def Match(c1, c2, c3):
  for i in range(4):
    if len(set((c1[i], c2[i], c3[i]))) == 2:
      return False
  return True

def BoardMatches(board):
  matches = 0
  for i in range(10):
    for j in range(i+1, 11):
      for k in range(j+1, 12):
        if Match(board[i], board[j], board[k]):
          matches += 1
  return matches

boardsofsix = set()
outputboards = [] 

def Main():
  boards = 100000
  print("Generating %i boards..." % (boards,))
  matchfreq = {}
  for i in range(boards):
    board = BoardMaker()
    matches = BoardMatches(board)
    matchfreq.setdefault(matches, 0)
    matchfreq[matches] += 1

    if matches == 6:
      boardsort = " ".join(sorted(board))
      if boardsort in boardsofsix:
        print("Skipping duplicate")
      boardsofsix.add(boardsort)
      outputboards.append(board)

      # remove
      if len(outputboards) == 2000: break
  for i, j in sorted(iter(matchfreq.items())):
    print(i, j)
  begofyear = datetime.date(2025, 1, 1).toordinal()
  n = 0
  for board in outputboards:
    d = datetime.date.fromordinal(begofyear+n).isoformat()
    print("\"%s\": [%s]," % (d, ", ".join(("\"%s\"" % (c,) for c in board))))
    n += 1
  output = 0
  #for board in outputboards:
  #  print("<table>")
  #  for c in board:
  #    if output % 3 == 0:
  #      print("<tr>")
  #    print("<td><img id=\"%s\" src=\"images/%s.png\"/>" % (c,c,))
  #    if output % 3 == 2:
  #      print("</tr>")
  #    output += 1
  #  print("</table>")
  #  #print("".join("<img id=\"%s\" src=\"images/%s.png\"/>" % (c,c,) for c in board))


Main()