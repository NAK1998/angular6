package sopra.extern.user;

import java.awt.PageAttributes.MediaType;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;


@RestController
public class UserJPAResource {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	Events im;
	
	@Autowired
	EventsRepository eventsRepository;
	
	@Autowired
	EventHistoryRepository ehr;
	
	
	
	
	
	
	
	
	@GetMapping("/users")
	public MappingJacksonValue retrieveAllUsers(){
		
		List<User> list = userRepository.findAll();
		SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("id" ,"password", "name","eventHistory");
		FilterProvider filters = new SimpleFilterProvider().addFilter("userfilter", filter);
		MappingJacksonValue mapping = new MappingJacksonValue(list);
		mapping.setFilters(filters);
		
		return mapping;
		 
		
		
	}
	@GetMapping("/users/{id}")
	public MappingJacksonValue retrieveSpecificUsers(@PathVariable int id){
		
		Optional<User> us = userRepository.findById(id);
		if (!us.isPresent())
		{
			throw new UserNotFoundException("id is" +id);
		}
		SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("id" , "password","name");
		FilterProvider filters = new SimpleFilterProvider().addFilter("userfilter", filter);
		MappingJacksonValue mapping = new MappingJacksonValue(us);
		mapping.setFilters(filters);
		
		return mapping;
		
	}
	@GetMapping("/events")
	public List<Events> returnimage() {
		//im.setUrl("https://opensource.google.com/assets/static/images/home/blog/blog_image_1.jpg");
		//im.setLati(12.0d);
		//im.setLongi(14.0d);
		return eventsRepository.findAll();
		//return im;
		
	}
	@RequestMapping(method = RequestMethod.POST, value = "/users",consumes = "application/json")
    public String createUser( @RequestBody User user) {
		
		User savedUser = userRepository.save(user);
		
	URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedUser.getId()).toUri();
		
	
		return savedUser.getId().toString();
		
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/events",consumes = "application/json")
	public int saveEvent(@RequestBody EventHistory event) {
		int flag = 0;
		List<EventHistory> l1 = ehr.findAll();
		for (int i = 0; i < l1.size();i++) {
			EventHistory eventHistory = l1.get(i);
			if (eventHistory.getNo()==event.getNo() && eventHistory.getId()==event.getId()) {
				flag = 1;
				break;
		}
		}
		
		
		
		if (flag ==0) {
		EventHistory savedHistory = ehr.save(event);
		return savedHistory.getId();
		}
		else
			return 0;
		
		
	}
	
	@GetMapping("/events/history/{id}")
	public List<EventHistory> getHistory(@PathVariable int id){
			List<EventHistory> l1 = ehr.findAll();
			List<EventHistory> l2 = new ArrayList<>();
			EventHistory eventHistory;
			for (int i = 0; i <l1.size();i++) {
				eventHistory = l1.get(i);
				if (eventHistory.getId()==id) {
					l2.add(eventHistory);
				}
				
				
			}
			return l2;

}
}




