age = 19 
print("your age is "+ str(age))

#multiple assignment 
name,age,mathsResult = "Karan",19,True
print(mathsResult)

man1 = man2 = man3 = "failed in maths"
print(man1)

name = "karan verma"
print(len(name))
print(name.isdigit())
print(name.find("a"))
print(name.replace("a","x"))
print("happy birthday \n"*3)

#name = input("what is your name :")
#age = int(input("enter your age"))
#age+=3
#print(age)

import math
pi =3.14
x,y,z =1,2,3
print(abs(pi))
print(round(pi))
print(math.ceil(pi))

print(name[:5])

print(name[::2])

reverse = name[::-1]
print(reverse)

web = "http://youtube.com"


for i in range(10):
    print(i+1)

import time

for i in range(1,10,2):
    print(i)

for i in "karan":
    print(i)

for seconds in range(10,0,-1):
    time.sleep(1)
    print(seconds)
print("happy new year")
print("heppy new ")