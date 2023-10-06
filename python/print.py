a = input("Enter string: ")

b = a.split(" ")

c = ""
for i in b:
    c += i[0]

print(c.upper())
