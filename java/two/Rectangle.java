
public class Rectangle implements Shape{
	protected double length;
	protected double width;
	
	public Rectangle(double lenght, double width) {
		this.length = lenght;
		this.width = width;
	}
	
	public double getArea() {
		return length * width;
	}
	
	public String getInfo() {
		return "I am a rectangle";
	}
}
