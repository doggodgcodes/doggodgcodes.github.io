import sys
pyInput = sys.stdin.read()

line = ""
result = ""

for char in pyInput:
  if not char == "\n" or not char == " ":
    line += char
  if char == "\n":
    result += chr(256 - len(line))
    line = ""
    
result += chr(256 - len(line))
print(result)
