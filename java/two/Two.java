import java.util.ArrayList;
import java.util.Random;

public class Two {
	public static void main(String[] args) {
		ArrayList<Shape> shapes = new ArrayList<Shape>();
		Random rand = new Random();
		for(int x = 0; x < 10; x++) {
			double foo = x * rand.nextDouble() + 1;
			double bar = x * rand.nextDouble() + 1;
			shapes.add(new Circle(foo));
			shapes.add(new Rectangle(foo, bar));
			shapes.add(new Square(bar));
		}
		
		for(Shape shape : shapes) {
			System.out.println(shape.getArea());
			System.out.println(shape.getInfo());
			System.out.println();
		}
	}
}
