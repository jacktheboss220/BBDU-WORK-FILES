# numbe5{r = [2, 34, 667, 67, 7, 667]

number = []

n = input("Enter the Range: ")

for i in range(0, int(n)):
    number.append(int(input("Enter the number:")))

a = list(set(number))
a.sort()
print(a[-2])
