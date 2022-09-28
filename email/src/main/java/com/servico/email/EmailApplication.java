package com.servico.email;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@ComponentScan({"com.servico.ativo.controller"})
public class EmailApplication {

	public static void main(String[] args) {

		SpringApplication.run(EmailApplication.class, args);
	}

}
