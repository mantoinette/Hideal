package com.hideal.hideal.service;

import com.hideal.hideal.dto.CompanyProfile;
import com.hideal.hideal.dto.CompanyProfile.ContactInfo;
import com.hideal.hideal.dto.CompanyProfile.ServiceArea;
import com.hideal.hideal.dto.CompanyProfile.SustainabilityPillar;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyContentService {

	public CompanyProfile getProfile() {
		return new CompanyProfile(
				"HIDEAL",
				"Building Rwanda's Future. Intelligently. Sustainably.",
				"2022",
				"Founded in Rwanda in 2022, HIDEAL is an emerging real-estate and technology company focused on developing intelligent, comfortable, energy-efficient and environmentally responsible environments. Our work brings together development thinking, technology, energy solutions and sustainable design to respond to the changing needs of Rwanda's cities and communities.",
				"HIDEAL combines real-estate development, technology, energy efficiency and responsible design to create places that deliver long-term value for people, communities and the planet.",
				new ContactInfo(
						"Kimihurura, Kigali, Rwanda",
						"55 KG 656 ST KIMIHURURA KIGALI RWANDA",
						"+250 781 151 757",
						"info@hideal.rw",
						"support@hideal.rw"
				),
				List.of(
						new ServiceArea(
								"Real Estate Development",
								"Identifying, planning and developing opportunities across residential, commercial and mixed-use environments.",
								List.of(
										"Residential and commercial opportunities",
										"Mixed-use environment planning",
										"Thoughtful development identification"
								)
						),
						new ServiceArea(
								"Sustainable Building Solutions",
								"Integrating energy efficiency, responsible materials, resource management and climate-conscious design into development decisions.",
								List.of(
										"Energy efficiency integration",
										"Responsible materials selection",
										"Climate-conscious design"
								)
						)
				),
				List.of(
						new SustainabilityPillar("Energy", "Reduce consumption and increase renewable energy."),
						new SustainabilityPillar("Materials", "Use durable and responsible materials where appropriate."),
						new SustainabilityPillar("Water", "Improve efficiency and responsible resource management."),
						new SustainabilityPillar("Nature", "Integrate trees, vegetation and green spaces."),
						new SustainabilityPillar("Waste", "Reduce construction and operational waste."),
						new SustainabilityPillar("Resilience", "Design for changing environmental conditions.")
				),
				"Energy performance begins with design. HIDEAL's approach is to reduce energy demand, integrate renewable energy where appropriate and use technology to improve building performance.",
				List.of(
						"Community outreach",
						"Local partnerships",
						"Economic growth",
						"Inclusive development",
						"Resilient communities"
				),
				List.of(
						"Digital planning and visualization",
						"Data-supported project coordination",
						"Smart building systems and monitoring",
						"Performance data and continuous improvement"
				),
				"Whether you have a development opportunity, investment proposition, technical capability or partnership idea, HIDEAL would like to explore what we can build together. We are at an early stage of our development, but our ambition and methodology are designed for the long term."
		);
	}
}
