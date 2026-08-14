package com.hideal.hideal.controller;

import com.hideal.hideal.dto.CompanyProfile;
import com.hideal.hideal.service.CompanyContentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/content")
public class ContentController {

	private final CompanyContentService companyContentService;

	public ContentController(CompanyContentService companyContentService) {
		this.companyContentService = companyContentService;
	}

	@GetMapping("/profile")
	public CompanyProfile getProfile() {
		return companyContentService.getProfile();
	}
}
