
public interface Shape {
	double getArea();
	default String getInfo() {
		return "I am a shape.";
	}
}
