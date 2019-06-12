package sopra.extern.testing;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
	
	
	
	
	@GetMapping("/hello")
	public String hellod() {
		return "hey";
	}
	@GetMapping("/hello/{message}")
	public String hello(@PathVariable String message) {
		return "hey " +message;
	}

}
