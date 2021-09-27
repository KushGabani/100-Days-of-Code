package net.codejava;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {
	
	@GetMapping("/register")
	public String showForm(Model model) {
		Student student = new Student();
		model.addAttribute("student", student);
		return "register_form";
	}
	
	@PostMapping("/register")
	public String submitForm(@ModelAttribute("student") Student student) {
		return "register_success";
	}
}
