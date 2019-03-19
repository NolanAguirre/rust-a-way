
public class Square extends Rectangle {
	public Square(double side) {
		super(side, side);
	}
	
	@Override
	public String getInfo() {
		return "I am a sqaure";
	}
}
