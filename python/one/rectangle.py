class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width
    def get_area(self):
        return self.length * self.width
    def get_info(self):
        if self.length == self.width:
            return 'I am a square'
        else:
            return 'I am a rectangle'
