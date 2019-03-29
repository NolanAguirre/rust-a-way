import random
from rectangle import Rectangle
from square import Square

shapes = []

for x in range(20):
    rect_x = x * random.randint(1,10) + 1
    rect_y = x * random.randint(1,10) + 1
    if random.randint(1,10) > 5:
        shapes.append(Rectangle(rect_x, rect_y))
    else:
        shapes.append(Square(rect_x))

for shape in shapes:
    print(shape.get_area())
    print(shape.get_info())
    print
