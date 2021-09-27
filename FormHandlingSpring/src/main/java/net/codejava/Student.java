package net.codejava;

public class Student {
	private String name;
	private String email;
	private String javafun;
	private boolean subscribed;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getJavafun() {
		return javafun;
	}

	public void setJavafun(String javafun) {
		this.javafun = javafun;
	}

	public boolean isSubscribed() {
		return subscribed;
	}

	public void setSubscribed(boolean subscribed) {
		this.subscribed = subscribed;
	}

	// @Override
	// public String toString() {
	// 	return "User [name=" + name + ", email=" + email + ", password=" + password + ", gender=" + gender + ", note="
	// 			+ note + ", married=" + married + ", birthday=" + birthday + ", profession=" + profession + "]";
	// }
}
