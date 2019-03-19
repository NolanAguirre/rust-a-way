import java.util.ArrayList;
import java.util.Random;

public class One {

	public static void main(String[] args) {
		ArrayList<Shape> shapes = new ArrayList<Shape>();
		Random rand = new Random();
		for(int x = 0; x < 10; x++) {
			shapes.add(new Circle(x));
			shapes.add(new Rectangle(x * rand.nextDouble() + 1, x * rand.nextDouble() + 1));
		}
		for(Shape shape : shapes) {
			System.out.println(shape.getArea());
			System.out.println(shape.getInfo());
			System.out.println();
		}
	}
}
