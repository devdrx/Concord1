package com.concord.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
public class Role {
    @Id
    private int id;

    private String name;

}
