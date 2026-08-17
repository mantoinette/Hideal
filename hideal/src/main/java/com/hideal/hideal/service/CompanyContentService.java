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
				"Fueling the Future, Powering Progress",
				"2022",
				"Founded in 2022 and headquartered in Rwanda, HIDEAL is a forward-thinking startup operating under a limited by shares structure. Positioned at the intersection of real estate development and technology innovation, we aim to transform the urban landscape by responding to the growing demand for sustainable, smart, and inclusive living environments.",
				"At HIDEAL, our mission is to redefine real estate development by integrating cutting-edge technology with sustainable practices. We are committed to delivering high-quality, environmentally responsible solutions that meet the evolving needs of modern living while making a positive impact on both communities and the planet.",
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
								"Designing and building high-performance, sustainable buildings that embody functionality, aesthetics, and ecological responsibility.",
								List.of(
										"High-performance sustainable buildings",
										"Functionality and aesthetics combined",
										"Ecologically responsible design"
								)
						),
						new ServiceArea(
								"Technology-Driven Solutions",
								"Leveraging modern innovations to create smart, energy-efficient, and future-ready structures.",
								List.of(
										"Smart building technologies",
										"Energy-efficient systems",
										"Future-ready infrastructure"
								)
						)
				),
				List.of(
						new SustainabilityPillar(
								"Energy-Efficient Designs",
								"Prioritize reducing energy consumption through various strategies, ultimately leading to lower operational costs, increased comfort, and a smaller environmental footprint."
						),
						new SustainabilityPillar(
								"Eco-Friendly Materials",
								"Minimize environmental harm throughout their lifecycle, from raw material extraction to disposal. Made from recycled or renewable resources for reduced waste and lower carbon footprints."
						),
						new SustainabilityPillar(
								"Renewable Energy Systems",
								"Connecting diverse sources like wind, solar, and hydropower to the electricity network to reduce carbon emissions and enhance grid reliability."
						),
						new SustainabilityPillar(
								"Climate-Resilient Planning",
								"Proactively designing strategies to reduce vulnerability to climate change impacts while mitigating greenhouse gas emissions for sustainable development."
						)
				),
				"Our team brings in-depth expertise in solar energy integration, enabling us to embed renewable energy solutions seamlessly into our projects. This ensures lower energy costs, reduced carbon footprints, and enhanced long-term value for both clients and communities.",
				List.of(
						"Community outreach",
						"Local partnerships",
						"Economic growth",
						"Inclusive development",
						"Resilient communities"
				),
				List.of(
						"Advanced design and planning software",
						"Smart building technologies",
						"Data-driven construction management"
				),
				"HIDEAL is pioneering a new era in real estate—one where sustainability, technology, and community well-being are integral to every project. With a steadfast commitment to excellence, integrity, and environmental stewardship, we are set to lead the transformation of Rwanda's built environment and contribute to a more sustainable future for Africa and beyond."
		);
	}
}
