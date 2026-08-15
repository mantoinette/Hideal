package com.hideal.hideal.service;

import com.hideal.hideal.dto.ContactRequest;
import com.hideal.hideal.entity.ContactInquiry;
import com.hideal.hideal.repository.ContactInquiryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactInquiryService {

	private final ContactInquiryRepository repository;

	public ContactInquiryService(ContactInquiryRepository repository) {
		this.repository = repository;
	}

	@Transactional
	public ContactInquiry save(ContactRequest request) {
		ContactInquiry inquiry = new ContactInquiry();
		inquiry.setName(request.name().trim());
		inquiry.setEmail(request.email().trim());
		inquiry.setPhone(request.phone() == null || request.phone().isBlank() ? null : request.phone().trim());
		inquiry.setMessage(request.message().trim());
		return repository.save(inquiry);
	}
}
