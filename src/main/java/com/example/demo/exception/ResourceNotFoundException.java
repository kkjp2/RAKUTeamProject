package com.example.demo.exception;
//异常处理（Exception）
public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
