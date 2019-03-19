from rectangle import Rectangle 
import random as rand
rectangles = []

for x in range(10):
    rect_x = x * rand.randint(1,10) + 1
    rect_y = x * rand.randint(1,10) + 1
    rectangles.append(Rectangle(rect_x, rect_y))

for rectangle in rectangles:
    print(rectangle.get_area())
    print(rectangle.get_info())
    print()
