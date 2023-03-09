package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Railway {
	@Id
	private int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTrainName() {
		return TrainName;
	}
	public void setTrainName(String TrainName) {
		this.TrainName = TrainName;
	}
	public String getArraival() {
		return Arraival;
	}
	public void setArraival(String arraival) {
		Arraival = arraival;
	}
	public String getDeparture() {
		return Departure;
	}
	public void setDeparture(String departure) {
		Departure = departure;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	private String name;
	private String TrainName;
    private String Departure;
    private String Arraival;
    private String Date;
//    private String formTime;
    private String toTime;
	private String fromTime;
	public String getFrom() {
		return fromTime;
	}
	public void setFrom(String from) {
		fromTime = from;
	}
	public String getTo() {
		return toTime;
	}
	public void setTo(String to) {
		toTime = to;
	}
	
}
