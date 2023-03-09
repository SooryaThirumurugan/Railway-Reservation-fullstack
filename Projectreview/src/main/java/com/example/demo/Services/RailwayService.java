package com.example.demo.Services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Railway;
import com.example.demo.Repositories.RailwayRepo;





@Service
public class RailwayService {


    @Autowired
    RailwayRepo repository;

    public String addRailway(Railway railway) {
    	repository.save(railway);
    	return "Added";
    }
    
    public String deleteRailwayById(int id) {
    	repository.deleteById(id);
    	return "Railway deleted";
    }
    
    public String updateRailway(Railway railway) {
    	repository.save(railway);
    	return("updated");
    }

    public List<Railway> getRailway(){
    	return repository.findAll();
    }
//    Sorting
    public List<Railway> getRailwaySorted(String field){
    	return repository.findAll(Sort.by(Sort.Direction.ASC,field));

    }
//    pagination
    public List<Railway> getRailwayWithPagination(int offset,int pageSize){
    	Page<Railway> page=repository.findAll(PageRequest.of(offset, pageSize));
    	return page.getContent();
    }
//    pagination and sorting
    public List<Railway> getRailwayWithPaginationAndSorting(int offset,int pageSize, String field){
    	PageRequest paging=PageRequest.of(offset, pageSize,Sort.by(field));
    	Page<Railway> page=repository.findAll(paging);
    	return page.getContent();
    }
}