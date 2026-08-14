package com.hideal.hideal.dto;

import java.util.List;

public record CompanyProfile(
		String name,
		String tagline,
		String founded,
		String about,
		String mission,
		ContactInfo contact,
		List<ServiceArea> services,
		List<SustainabilityPillar> sustainability,
		String renewableEnergy,
		List<String> communityImpact,
		List<String> innovations,
		String conclusion
) {
	public record ContactInfo(String location, String address, String phone, String email) {
	}

	public record ServiceArea(String title, String description, List<String> highlights) {
	}

	public record SustainabilityPillar(String title, String description) {
	}
}
