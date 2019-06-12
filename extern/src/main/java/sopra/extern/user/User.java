package sopra.extern.user;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonFilter;


@JsonFilter("userfilter")
@Entity
public class User {
	
	
	@Id
	@GeneratedValue
	private Integer id;
	
	
	private String password;
	
	private String name;
	
	

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", password=" + password + ", name=" + name + "]";
	}

	public User(Integer id, String password, String name) {
		super();
		this.id = id;
		this.password = password;
		this.name = name;
	}
	public User() {
		
	}
	
	
	
	

}
