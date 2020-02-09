package com.coco.odv;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * Crash incident model
 * @author Tu
 *
 */
@Entity
@Table(name = "crash_incident")
@NamedQuery( name = "Incident.findByMonthYear",
    query = "SELECT i FROM Incident i WHERE i.crash_year = :year AND i.crash_month = :month")
public class Incident {
	@Id
	private Long crash_record_number;
	private Integer county_code;
	private String county_name;
	private Integer municipality_code;
	private String municipality_name;
	private Integer crash_year;
	private Integer crash_month;
	private Integer day_of_week;
	private Integer time_of_day;
	private Integer hour_of_day;
	private String illumination;
	private String weather;
	private String road_condition;
	private String collision_type;
	private Integer fatality_count;
	private Integer injury_count;  
	private Integer arrival_time;
	private Integer dispatch_time;
	private Integer vehicle_count;
	private Integer automobile_count;
	private Integer motorcycle_count;
	private Integer bus_count;
	private Integer small_truck_count;
	private Integer heavy_truck_count;
	private Integer suv_count;
	private Integer van_count;
	private Integer bicycle_count;
	private Integer pedestrian_count;
	private Double latitude;
	private Double longitude;
	private String speeding;
	private String agressive_driving;  
	
	public Long getCrash_record_number() {
		return crash_record_number;
	}
	public void setCrash_record_number(Long crash_record_number) {
		this.crash_record_number = crash_record_number;
	}
	public Integer getCounty_code() {
		return county_code;
	}
	public void setCounty_code(Integer county_code) {
		this.county_code = county_code;
	}
	public String getCounty_name() {
		return county_name;
	}
	public void setCounty_name(String county_name) {
		this.county_name = county_name;
	}
	public Integer getMunicipality_code() {
		return municipality_code;
	}
	public void setMunicipality_code(Integer municipality_code) {
		this.municipality_code = municipality_code;
	}
	public String getMunicipality_name() {
		return municipality_name;
	}
	public void setMunicipality_name(String municipality_name) {
		this.municipality_name = municipality_name;
	}
	public Integer getCrash_year() {
		return crash_year;
	}
	public void setCrash_year(Integer crash_year) {
		this.crash_year = crash_year;
	}
	public Integer getCrash_month() {
		return crash_month;
	}
	public void setCrash_month(Integer crash_month) {
		this.crash_month = crash_month;
	}
	public Integer getDay_of_week() {
		return day_of_week;
	}
	public void setDay_of_week(Integer day_of_week) {
		this.day_of_week = day_of_week;
	}
	public Integer getTime_of_day() {
		return time_of_day;
	}
	public void setTime_of_day(Integer time_of_day) {
		this.time_of_day = time_of_day;
	}
	public Integer getHour_of_day() {
		return hour_of_day;
	}
	public void setHour_of_day(Integer hour_of_day) {
		this.hour_of_day = hour_of_day;
	}
	public String getIllumination() {
		return illumination;
	}
	public void setIllumination(String illumination) {
		this.illumination = illumination;
	}
	public String getWeather() {
		return weather;
	}
	public void setWeather(String weather) {
		this.weather = weather;
	}
	public String getRoad_condition() {
		return road_condition;
	}
	public void setRoad_condition(String road_condition) {
		this.road_condition = road_condition;
	}
	public String getCollision_type() {
		return collision_type;
	}
	public void setCollision_type(String collision_type) {
		this.collision_type = collision_type;
	}
	public Integer getFatality_count() {
		return fatality_count;
	}
	public void setFatality_count(Integer fatality_count) {
		this.fatality_count = fatality_count;
	}
	public Integer getInjury_count() {
		return injury_count;
	}
	public void setInjury_count(Integer injury_count) {
		this.injury_count = injury_count;
	}
	public Integer getArrival_time() {
		return arrival_time;
	}
	public void setArrival_time(Integer arrival_time) {
		this.arrival_time = arrival_time;
	}
	public Integer getDispatch_time() {
		return dispatch_time;
	}
	public void setDispatch_time(Integer dispatch_time) {
		this.dispatch_time = dispatch_time;
	}
	public Integer getVehicle_count() {
		return vehicle_count;
	}
	public void setVehicle_count(Integer vehicle_count) {
		this.vehicle_count = vehicle_count;
	}
	public Integer getAutomobile_count() {
		return automobile_count;
	}
	public void setAutomobile_count(Integer automobile_count) {
		this.automobile_count = automobile_count;
	}
	public Integer getMotorcycle_count() {
		return motorcycle_count;
	}
	public void setMotorcycle_count(Integer motorcycle_count) {
		this.motorcycle_count = motorcycle_count;
	}
	public Integer getBus_count() {
		return bus_count;
	}
	public void setBus_count(Integer bus_count) {
		this.bus_count = bus_count;
	}
	public Integer getSmall_truck_count() {
		return small_truck_count;
	}
	public void setSmall_truck_count(Integer small_truck_count) {
		this.small_truck_count = small_truck_count;
	}
	public Integer getHeavy_truck_count() {
		return heavy_truck_count;
	}
	public void setHeavy_truck_count(Integer heavy_truck_count) {
		this.heavy_truck_count = heavy_truck_count;
	}
	public Integer getSuv_count() {
		return suv_count;
	}
	public void setSuv_count(Integer suv_count) {
		this.suv_count = suv_count;
	}
	public Integer getVan_count() {
		return van_count;
	}
	public void setVan_count(Integer van_count) {
		this.van_count = van_count;
	}
	public Integer getBicycle_count() {
		return bicycle_count;
	}
	public void setBicycle_count(Integer bicycle_count) {
		this.bicycle_count = bicycle_count;
	}
	public Integer getPedestrian_count() {
		return pedestrian_count;
	}
	public void setPedestrian_count(Integer pedestrian_count) {
		this.pedestrian_count = pedestrian_count;
	}
	public Double getLatitude() {
		return latitude;
	}
	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}
	public Double getLongitude() {
		return longitude;
	}
	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	public String getSpeeding() {
		return speeding;
	}
	public void setSpeeding(String speeding) {
		this.speeding = speeding;
	}
	public String getAgressive_driving() {
		return agressive_driving;
	}
	public void setAgressive_driving(String agressive_driving) {
		this.agressive_driving = agressive_driving;
	}
	@Override
	public String toString() {
		return "Incident [crash_record_number=" + crash_record_number + ", county_code=" + county_code
				+ ", county_name=" + county_name + ", municipality_code=" + municipality_code + ", municipality_name="
				+ municipality_name + ", crash_year=" + crash_year + ", crash_month=" + crash_month + ", day_of_week="
				+ day_of_week + ", time_of_day=" + time_of_day + ", hour_of_day=" + hour_of_day + ", illumination="
				+ illumination + ", weather=" + weather + ", road_condition=" + road_condition + ", collision_type="
				+ collision_type + ", fatality_count=" + fatality_count + ", injury_count=" + injury_count
				+ ", arrival_time=" + arrival_time + ", dispatch_time=" + dispatch_time + ", vehicle_count="
				+ vehicle_count + ", automobile_count=" + automobile_count + ", motorcycle_count=" + motorcycle_count
				+ ", bus_count=" + bus_count + ", small_truck_count=" + small_truck_count + ", heavy_truck_count="
				+ heavy_truck_count + ", suv_count=" + suv_count + ", van_count=" + van_count + ", bicycle_count="
				+ bicycle_count + ", pedestrian_count=" + pedestrian_count + ", latitude=" + latitude + ", longitude="
				+ longitude + ", speeding=" + speeding + ", agressive_driving=" + agressive_driving + "]";
	}

	
}
