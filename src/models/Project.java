package com.mpl.models;
import java.util.List;

public class Project {
    private String id;
    private String name;
    private String location;
    private String area;
    private String floors;
    private List<String> amenities;
    private String status;

    public Project(String id, String name, String location, String area, String floors, List<String> amenities, String status) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.area = area;
        this.floors = floors;
        this.amenities = amenities;
        this.status = status;
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public String getLocation() { return location; }
    public String getArea() { return area; }
    public String getFloors() { return floors; }
    public List<String> getAmenities() { return amenities; }
    public String getStatus() { return status; }
}
