import sys
print("Gwaugu Interpreter")

i = "$!www!wwwy!!ggg!@wwwwwww!$yggggg!qgg!ggg!qgggg!qgg!"#sys.stdin.readline().lower()
asc = 32
final = ""

for char in i:
    if char == "g":
        asc += 1
    if char == "!":
        final += chr(asc)
    if char == "w":
        asc -= 1
    if char == "y":
        asc += 10
    if char == "q":
        asc -= 10
    if char == "$":
        asc += 40
    if char == "@":
        asc -= 40
    print(asc)
        
print(final)
