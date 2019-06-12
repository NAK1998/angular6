package sopra.extern.user;

import java.util.Date;
import java.util.List;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Component;

@Entity
public class EventHistory {
	
	
	
	@Id
	@GeneratedValue
	private Integer number;
	
	private Integer no;
	
	private String url;
	
	private String description;
	private Double longi;
	private Double lati;
	
	
	
	private int id;
	private String type;
	private Date date;
	
	
	
	static {
		
	}
	
	
	public Integer getNumber() {
		return number;
	}
	public void setNumber(Integer number) {
		this.number = number;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer getNo() {
		
		return no;
	}
	public void setNo(Integer no) {
		this.no = no;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getLongi() {
		return longi;
	}
	public void setLongi(Double longi) {
		this.longi = longi;
	}
	public Double getLati() {
		return lati;
	}
	public void setLati(Double lati) {
		this.lati = lati;
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public EventHistory(Integer no, String url, String description, Double longi, Double lati, int id, String type, Date date) {
		super();
		this.no = no;
		this.url = url;
		this.description = description;
		this.longi = longi;
		this.lati = lati;
		this.id = id;
		this.type = type;
		this.date= date;
	}
	public EventHistory() {
		
		
	}

}
