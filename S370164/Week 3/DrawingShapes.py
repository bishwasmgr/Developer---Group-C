#Drwaing shapes using OOP Concepts

class Shape:
    width = 5
    height = 5
    printChar = '#'

    def printRow(self, i):
        raise NotImplementedError("Will be implemented by children extending this class")

    def print(self):
        for i in range(self.height):
            self.printRow(i)

class Square(Shape):
    def printRow(self, i):
        print(self.printChar * self.width)

class Triangle(Shape):
    def printRow(self, i):
        # For a right-angled triangle
        print(self.printChar * (i + 1))

t = Triangle()
t.print()

s = Square()
s.print()