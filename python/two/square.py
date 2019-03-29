from rectangle import Rectangle
class Square(Rectangle):
    def __init__(self, side):
        Rectangle.__init__(self, side, side)
    def get_info(self):
        return 'I am a square'
