package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.RailwayService;
import com.example.demo.Model.Railway;




@RestController
public class ApiController {
	@Autowired
	RailwayService service;
    @CrossOrigin
	@GetMapping("/Railway")
	public List<com.example.demo.Model.Railway> Railway(){
		return service.getRailway();
	}
    @CrossOrigin
	@PostMapping("/Railway")
	public String addRailway(@RequestBody Railway railway) {
		service.addRailway(railway);
		return "Added Railway"+ railway.getId();
	}

//	sorting
	@CrossOrigin
	@GetMapping("/Railway/{field}")
	public List<Railway> RailwayWithSort(@PathVariable String field){
		return service.getRailwaySorted(field);
	}

//	pagination
	@GetMapping("/Railway/{offset}/{pageSize}")
	public List<Railway> RailwayWithPagination(@PathVariable int offset,@PathVariable int pageSize){
		return service.getRailwayWithPagination(offset, pageSize);
	}

//	sorting and pagination
	
	@GetMapping("/Railway/{offset}/{pageSize}/{field}")
	public List<Railway> getRailwayWithPaginationAndSorting(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field){
	   return service.getRailwayWithPaginationAndSorting(offset, pageSize, field);	
	}
	@CrossOrigin
	@DeleteMapping("/Railway")
	public String delete(@RequestParam int id) {
		return service.deleteRailwayById(id);
	}
	@CrossOrigin
	@PutMapping("/Railway")
	public String update(@RequestBody Railway railway) {
		return service.updateRailway(railway);
	}
}