package com.example.EmployeeTp.CustomExceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RessoucesNotFoundException extends RuntimeException{
    public RessoucesNotFoundException(String message){
        super(message);
    }
}
