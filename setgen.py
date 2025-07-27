import datetime
import random
import sys

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

def BoardMaker(c):
  cards = []
  uniquecards = set() 
  for i in range(c):
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
  for i in range(len(board)-2):
    for j in range(i+1, len(board)-1):
      for k in range(j+1, len(board)):
        if Match(board[i], board[j], board[k]):
          matches += 1
  return matches

def Main():
  if len(sys.argv) == 2 and sys.argv[1] not in ("easy", "normal", "hard"):
    print("Invalid mode, use 'easy', 'normal', or 'hard'.")
    sys.exit(-1)
  boardsize = 12 if len(sys.argv) != 2 or sys.argv[1] == "normal" else 9 if sys.argv[1] == "easy" else 15
  desiredmatches = 6 if len(sys.argv) != 2 or sys.argv[1] == "normal" else 3 if sys.argv[1] == "easy" else 9
  uniqueboards = set()
  begofyear = datetime.date(2025, 1, 1).toordinal()
  n = 0
  print("boards%s = {" % (sys.argv[1],))
  while n < 1826: # 5 years including leap day for 2028
    board = BoardMaker(boardsize)
    matches = BoardMatches(board)

    if matches == desiredmatches:
      boardsort = " ".join(sorted(board))
      if boardsort in uniqueboards:
        continue
      uniqueboards.add(boardsort)
      d = datetime.date.fromordinal(begofyear+n).isoformat()
      print("  \"%s\": [%s]," % (d, ", ".join(("\"%s\"" % (c,) for c in board))))
      n += 1
  print("};")


Main()
