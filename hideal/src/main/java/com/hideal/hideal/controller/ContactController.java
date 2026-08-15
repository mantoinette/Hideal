package com.hideal.hideal.controller;

import com.hideal.hideal.dto.ContactRequest;
import com.hideal.hideal.dto.ContactResponse;
import com.hideal.hideal.service.ContactInquiryService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

	private static final Logger log = LoggerFactory.getLogger(ContactController.class);

	private final ContactInquiryService contactInquiryService;

	public ContactController(ContactInquiryService contactInquiryService) {
		this.contactInquiryService = contactInquiryService;
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ContactResponse submitContact(@Valid @RequestBody ContactRequest request) {
		contactInquiryService.save(request);
		log.info("Contact inquiry saved from {} ({})", request.name(), request.email());
		return new ContactResponse("Thank you for reaching out. Our team will respond shortly.");
	}
}
