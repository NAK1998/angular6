package sopra.extern.user;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fasterxml.jackson.annotation.JsonFilter;



public interface UserRepository extends JpaRepository<User,Integer>{

}
