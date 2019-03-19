
public class Rectangle implements Shape{
	private double length;
	private double width;
	public Rectangle(double length, double width) {
		this.length = length;
		this.width = width;
	}
	
	public double getArea() {
		return length * width;
	}
	
	public String getInfo() {
		if(length == width) {
			return "I am a square with side length " + length;
		} else {
			return "I am a rectangle with length " + length + " and width " + width;
		}
	}
}
