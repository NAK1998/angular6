package sopra.extern.user;

import java.util.Date;

import javax.persistence.Entity;

import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
@Component
public class Events {
	
	@Id
	private Integer no;
	private String url;
	
	private String description;
	private Double longi;
	private Double lati;
	private String type;
	private Date date;

	public Events(String url, Double longi, Double lati,Integer no, String description, String type, Date date) {
		super();
		this.url = url;
		this.longi = longi;
		this.lati = lati;
		this.no = no;
		this.description = description;
		this.type = type;
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getNo() {
		return no;
	}

	public void setNo(Integer no) {
		this.no = no;
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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Events() {
		
	}

}
