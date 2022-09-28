package com.servico.email.service;

import com.servico.email.model.EmailModel;
import com.servico.email.model.StatusEmail;
import com.servico.email.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class EmailService {

    @Autowired
    private EmailRepository emailRepository;

    @Autowired
    private JavaMailSender emailSender;

    public EmailModel sendEmail(EmailModel model) {
        System.out.println("Enviando email");
        model.setSendDateEmail(LocalDateTime.now());

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(model.getEmailFrom());
            message.setTo(model.getEmailTo());
            message.setSubject(model.getSubject());
            message.setText(model.getText());
            emailSender.send(message);
            model.setStatusEmail(StatusEmail.SEND);

        } catch (Exception e) {
            model.setStatusEmail(StatusEmail.ERROR);

        } finally {
            return emailRepository.save(model);
        }
    }
}
