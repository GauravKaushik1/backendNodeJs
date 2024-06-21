# output
# print("Hello Gaurav, Python is case-sensitive")
# supports charcterSet
# letters - A to Z, a to z
# Digits - 0 to 0
# Special Symbols - * + / etc.
# Whitespaces - Blank Space, tab, carriage return, newline, formfeed
# Other characters - Python can process all ASCII and Unicode characters(emojies included) as a part of data or literals
# Escape Characters
# \\	Backslash	
# \n	New Line	
# \r	Carriage Return	
# \t	Tab	
# \b	Backspace	
# \f	Form Feed
# print("Backslash\\")
# print("New Line\n")
# print("Carriage Return\r")
# print("Tab\t")
# print("Backspace\b next is")
# print("Form Feed\f")
# #the string and numeric values can operate together
# print("Gaurav is great! "*3)

# A,B=2,3
# Txt = "@"
# print(2*Txt*3)

# A,B="2",3#here 2 is a string
# Txt="@"
# print((A+Txt)*B)

# Data Type
# Integers
# Float
# A,B=12,-5
# C=A//B#floor division meaning the smallest integer less than or equal to the float value
'''
0.1->0
5.2->5
7.99->7
11.2->11
-5.2->-6# negative value gets lower
5.0->5
'''
'''
remainder values(%):
n + - + - (ve)
/
d + - - + (ve)
=
r + + - + (ve)
'''
# print(C)
# Boolean
# None
# String

# format string in python
# Python uses C-style string formatting to create new, formatted strings. The "%" operator is used to format a set of variables enclosed in a "tuple" (a fixed size list), together with a format string, which contains normal text together with "argument specifiers", special symbols like "%s" and "%d".

# Let's say you have a variable called "name" with your user name in it, and you would then like to print(out a greeting to that user.)

# This prints out "Hello, John!"
# name = "Gaurav"
# print("Hello, %s!" % name)
# Run
# To use two or more argument specifiers, use a tuple (parentheses):
# This prints out "John is 23 years old."
# name = "Gaurav"
# age = 23
# print("%s is %d years old." % (name, age))

# Run
# Any object which is not a string can be formatted using the %s operator as well. The string which returns from the "repr" method of that object is formatted as the string. For example:
# This prints out: A list: [1, 2, 3]
# mylist = [1,2,3]
# print("A list: %s" % mylist)

# Run
# Here are some basic argument specifiers you should know:
# data = ("Gaurav", "Kaushik", 53.44)
# format_string = "Hello "

# Using f-string for formatting
# print(f"{format_string}{data}")

# data = ("Gaurav", "Kaushik", 53.44)
# format_string = "Hello {}"

# Using format() method for formatting
# print(format_string.format(data))

# %s - String (or any object with a string representation, like numbers)

# %d - Integers

# %f - Floating point numbers

# %.<number of digits>f - Floating point numbers with a fixed amount of digits to the right of the dot.

# %x/%X - Integers in hex representation (lowercase/uppercase)
# string functions
# capitalize()	Converts the first character to upper case
# casefold()	Converts string into lower case
# center()	Returns a centered string
# count()	Returns the number of times a specified value occurs in a string
# encode()	Returns an encoded version of the string
# endswith()	Returns true if the string ends with the specified value
# expandtabs()	Sets the tab size of the string
# find()	Searches the string for a specified value and returns the position of where it was found
# format()	Formats specified values in a string
# format_map()	Formats specified values in a string
# index()	Searches the string for a specified value and returns the position of where it was found
# isalnum()	Returns True if all characters in the string are alphanumeric
# isalpha()	Returns True if all characters in the string are in the alphabet
# isascii()	Returns True if all characters in the string are ascii characters
# isdecimal()	Returns True if all characters in the string are decimals
# isdigit()	Returns True if all characters in the string are digits
# isidentifier()	Returns True if the string is an identifier
# islower()	Returns True if all characters in the string are lower case
# isnumeric()	Returns True if all characters in the string are numeric
# isprintable()	Returns True if all characters in the string are printable
# isspace()	Returns True if all characters in the string are whitespaces
# istitle()	Returns True if the string follows the rules of a title
# isupper()	Returns True if all characters in the string are upper case
# join()	Joins the elements of an iterable to the end of the string
# ljust()	Returns a left justified version of the string
# lower()	Converts a string into lower case
# lstrip()	Returns a left trim version of the string
# maketrans()	Returns a translation table to be used in translations
# partition()	Returns a tuple where the string is parted into three parts
# replace()	Returns a string where a specified value is replaced with a specified value
# rfind()	Searches the string for a specified value and returns the last position of where it was found
# rindex()	Searches the string for a specified value and returns the last position of where it was found
# rjust()	Returns a right justified version of the string
# rpartition()	Returns a tuple where the string is parted into three parts
# rsplit()	Splits the string at the specified separator, and returns a list
# rstrip()	Returns a right trim version of the string
# split()	Splits the string at the specified separator, and returns a list
# splitlines()	Splits the string at line breaks and returns a list
# startswith()	Returns true if the string starts with the specified value
# strip()	Returns a trimmed version of the string
# swapcase()	Swaps cases, lower case becomes upper case and vice versa
# title()	Converts the first character of each word to upper case
# translate()	Returns a translated string
# upper()	Converts a string into upper case
# zfill()	Fills the string with a specified number of 0 values at the beginning

#Take user input

# #string input
# name = input("name : ")
# print(name)

# # int input
# age = int(input("age : "))
# print(age)

# # float input
# price = float(input("price : "))
# print(price)

# #None
# a = None
# print(type(a))

# age = 23
# old = False
# a = None
# print("type of age is ",type(age))
# print("type of old is ",type(old))
# print("type of a is ",type(a))
# print("** is a valid operator in python i.e., 2**3 is 2^3 or ",2**3)

'''
Types of Operators
Arithmetic Operators(+, -, *, /, %, **)
Relational / Comparision Operators(==, !=, >, <, >=, <= )
Assignment Operators(=, -=, *=, /=, %=, //=, **=)
Logical Operators(not, and, or)
Membership Operators(in, in not)
Identity Operators(is, is not)
Bitwise Operators(&, |, ^)

Operator precedence
The precedence order is described in the table below, starting with the highest precedence at the top:

Operator	Description	Try it
()	Parentheses	
**	Exponentiation	
+x  -x  ~x	Unary plus, unary minus, and bitwise NOT	
*  /  //  %	Multiplication, division, floor division, and modulus	
+  -	Addition and subtraction	
<<  >>	Bitwise left and right shifts	
&	Bitwise AND	
^	Bitwise XOR	
|	Bitwise OR	
==  !=  >  >=  <  <=  is  is not  in  not in 	Comparisons, identity, and membership operators	
not	Logical NOT	
and	AND	
or	OR	
If two operators have the same precedence, the expression is evaluated from left to right.
not>and>or
'''
'''
# Ternary Operator
<var> = (false_val, true_val)[<condition>] 
'''
# age = int(input("age :"))
# vote = ("false", "true") [age<18]
# print(vote)
'''
Best Practices
simple instructions
one instruction per task
short & meaningful variable names
use appropriate comments
avoid complex expressions
'''
'''
conditional statements
if -always checks
elif -only checks when if does not match
else -if all are false run this default case
'''

'''
String
'''
# str1 = "This is a string"
# str2 = 'ApnaCollege'
# str3 = """this is a string"""
# use escape sequence characters to print the next line, etc and the "
# " is not supported in the python
# str1 = "Gaurav"
# str2 = "Kaushik"
# final_str = str1 + str2
# print(final_str)
# final_str = str1+ " "+ str2#the length also includes spaces and special characterstics
# print(final_str)
'''
Index
'''
# str = "Gaurav"
# ch = str[2]
# print(ch)
#cannot change the string using assignment using index
# str[0]='g'
'''
Slicing
Accessing the parts of a string
str[starting_index : ending_index] #ending idx is not included
'''
# str = "Gaurav Kaushik"
# print(str[5:12])#usefull in machine learing
# print(str[:4])
# print(str[1:])
# print(str[5:len(str)])# the last index is len(str) i.e.m length of str
'''
-ve index in Slicing
-ve indexes is limited to slicing
'''
# str = "Apple"
# print(str[-5:-2])#count to the last

'''
String Functions
'''
# str = "I am a coder. The software engineer in the making"
# print(str.endswith("er."))#returns true if string ends with substr
# print(str.capitalize())#capitalizes 1st char
# old = "coder"
# new = "programmer"
# print(str.replace(old, new))#replaces all occurrences of old with new
# print(str)
# word ="engineer"
# print(str.find(word))#returns 1st index of 1st occurence
# print(str.count("am"))
# userFirstName = input("Enter your name: ")
# print(len(userFirstName))
# str = "$ sojroe $sjklf $"
# print(str.count("$"))
# num = int(input("Enter a number"))
# if (num%2 == 0):
#     print("even")
# else:
#     print("odd")
# a =int(input("Enters first number"))
# b =int(input("Enters second number"))
# c =int(input("Enters third number"))
# if(a >= b and a >= c):
#     print("first number is largest",a)
# elif(b >= c):
#     print("second number is largest",b)
# else:
#     print("third is largest",c)

# x = int(input("enter number: "))

# if(x % 7 == 0):
#     print("multiple of 7")
# else:
#     print("not a multiple")
'''
Lists - uses []
List and tupples are eqivalent of arrays
A built-in data type that stores set of values
It can store elements of different types(interger, float, string, etc)
'''
# marks = [87,64,33,95,76] #marks[0], marks[1]
# student = ["Karan",85,"Delhi"] #student[0], student[1]
# student[0] = "Arjun" #allowed in python
# len(student) #returns length
# print(marks)
# print(type(marks))
# print(marks[3])
# print(marks[1:])
# print(marks[:3])
# print(marks[2:4])#last index is not included
# print(marks[-3:-1])
'''
Python lists are different from C++ and Java as the different data types can be merged together
list string does not allow the changing of the string
lists are mutable
'''
'''
List specific Methods
'''
# list = [2, 1, 3]
# print(list.append(4))#adds one element at the end [2, 1, 3, 4]
# print(list.sort())#sorts in ascending order [1, 2, 3]
# # print(list.sort(reverse==True))#sorts in descending order [3, 2, 1]
# print(list.reverse())#reverse list [3, 1, 2]
# print(list.insert(index,element))#insert element at index
'''
Tupples in Python - uses ()
A built-in data type that lets us create immutable sequences of values.
These are immutable
'''
# tup = (87, 64, 33, 95, 76) #tup[0], tup[1]
# tup[0] = 43 #NOT allowed in python

# tup1 = ()
# tup1 = (1,)
# tup3 = (1, 2, 3)
# print(tup[0])
# print(tup[1])
# print(type(tup))
# tup = (1)#integer wrapped in ()
# print(type(tup))
# tup = (1,)#add , to make it behave like tupple
# print(type(tup))
# tup = (2, 1, 3, 1)
# el=1
# print(tup.index(el))#returns index of first occurrence tup.index(1) is 1
# el=1
# print(tup.count(el))#tup.count(1) is 2
'''
First Approach
'''
# movies = []

# mov1 = input("enter 1st movie: ")
# mov2 = input("enter 2nd movie: ")
# mov3 = input("enter 3rd movie: ")

# movies.append(mov1)
# movies.append(mov2)
# movies.append(mov3)

# print(movies)

'''
Second Approach
'''
# movies = []

# mov = input("enter 1st movie: ")
# movies.append(mov)
# mov = input("enter 2nd movie: ")
# movies.append(mov)
# mov = input("enter 3rd movie: ")
# movies.append(mov)

# print(movies)
'''
Third Approach
'''
# movies = []

# movies.append(input("enter 1st movie: "))
# movies.append(input("enter 2nd movie: "))
# movies.append(input("enter 3rd movie: "))

# print(movies)
'''
Forth Approach -yet to be done
# TODO
The range() Function
To loop through a set of code a specified number of times, we can use the range() function,
The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.

'''
movies = []
for i in range(5):
    # movies.append(input("enter ",i,(((("th", "rd") [i==3], "nd") [i==2], "st") [i==1])," movie: "))
    result_str = "Enter "+ str(i + 1) str(((("th","rd")[(i+1) == 3],"nd")[(i+1)==2],"st") [(i+1) == 1])#used the string concatenation and also the ternary operator
    movies.append(input(result_str)) + "Movie name"
print(movies)

# Check if the list is a palindrome of elements. (Hint: use copy() method)
# list = [1, 2, 1]
# copy_list = list.copy()#copy() makes a shallow copy
# copy_list.reverse()
# if(copy_list == list):
#     print("palindrome")
# else:
#     print("not palindrome")
# count the number of students with the "A" grade in the following tuple.
# grade = ("C","D","A","A","B","B","A")
# print(grade.count("A"))
# store the above values in a list & sort them "A" to "D"
# grade = ["C","D","A","A","B","B","A"]
# grade.sort()
# print(grade)

'''
Dictionary
Dictionary are used to store data values in key:value pairs
They are unordered, mutable(changeable) & don't allow duplicate keys
key can be float
tupple is the key only and not value
no duplicate keys okay
'''
'''
dict = {
    "name": "Gaurav",
    "cgpa": 9.6,
    "marks": [98, 97, 95],
}
dict["name"], dict["cgpa"], dict["marks"]
dict["key"] = "value" #to assign or add new
'''
# info = {
#     "key": "value",
#     "name": "apnacollege",
#     "learning": "coding"
# }
# print(info)
'''
nested Dictionary
'''
# student = {
#     "name": "Gaurav Kaushik",
#     "subjects": {
#         "phy": 100,
#         "chem": 100,
#         "math": 100
#     }
# }
# print(student["subjects"]["chem"])
# print(students.keys())#returns all keys but not nested keys
# print(list(students.keys()))#using type casting to convert to list
# print(len(list(student.keys())))#using the len to get the total number of keys
# print(students.values())#returns all values 
# print(list(students.values()))#dictionary inside of list
# print(students.items())#returns all(key, val) pairs as tuples
# print(students.get("key"))#returns the key according to value
# print(students.update("city": "delhi"))#inserts the specified items{key: value pair} to the dictionary
# new_dict = {"newsLetter": "yes"}
# student.update(new_dict)
'''
Sets
'''