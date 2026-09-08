package com.mpl.controllers;

import com.mpl.models.Project;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @GetMapping
    public List<Project> getAllProjects() {
        return Arrays.asList(
            new Project("1", "MPL Rupkotha Centre", "Pabna, Bangladesh", "Contact for details", "Multi-storied", 
                Arrays.asList("Modern Architecture", "Dedicated Parking", "24/7 Security", "Rooftop Access"), "Ongoing"),
            new Project("2", "MPL Prothoma", "Pabna, Bangladesh", "Contact for details", "Multi-storied", 
                Arrays.asList("Contemporary Design", "Reserved Parking", "Security System", "Green Spaces"), "Completed")
        );
    }
}
