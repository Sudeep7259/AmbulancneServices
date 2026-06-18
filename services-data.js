const servicesData = [
  {
    id: 'bls-ambulance',
    category: 'Emergency',
    title: 'Basic Life Support (BLS)',
    shortDescription: 'Essential emergency transport equipped with foundational life-saving equipment. Designed for patients requiring continuous medical supervision without advanced interventions during transit. Prompt and professional care.',
    features: [
      'Automated External Defibrillator (AED)',
      'Oxygen delivery systems',
      'Basic airway management tools',
      'Trained Emergency Medical Technicians (EMTs)',
      'Vital signs monitoring equipment'
    ],
    benefits: [
      'Rapid response for non-critical emergencies',
      'Cost-effective medical transport solution',
      'Comfortable and secure patient transfer',
      'Continuous foundational medical monitoring'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/><path d="M12 7v4"/><path d="M10 9h4"/></svg>`
  },
  {
    id: 'als-ambulance',
    category: 'Emergency',
    title: 'Advanced Life Support (ALS)',
    shortDescription: 'High-acuity medical transport providing intensive care unit-level capabilities on the move. Manned by experienced paramedics capable of administering advanced cardiac life support and interventions.',
    features: [
      'Advanced cardiac monitors and defibrillators',
      'Intravenous (IV) therapy and advanced medications',
      'Endotracheal intubation equipment',
      'CPAP and advanced respiratory support',
      'Highly trained paramedics on board'
    ],
    benefits: [
      'Immediate critical care intervention during transit',
      'Stabilization of severe trauma and cardiac patients',
      'Seamless transfer from emergency scene to hospital',
      'Highest level of pre-hospital medical care'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  },
  {
    id: 'nicu-ambulance',
    category: 'Special',
    title: 'Neonatal ICU (NICU) Transport',
    shortDescription: 'A specialized transport unit designed exclusively for critically ill or premature newborns. Equipped with state-of-the-art incubators to ensure a controlled, safe environment for the most fragile patients.',
    features: [
      'Transport incubators with temperature regulation',
      'Neonatal ventilators and respiratory support',
      'Phototherapy equipment',
      'Specialized neonatal medical team',
      'Precision infusion pumps for newborns'
    ],
    benefits: [
      'Maintains exact environmental needs of premature babies',
      'Provides uninterrupted critical neonatal care',
      'Smooth, vibration-reduced transport mechanics',
      'Expert handling by specialized pediatric staff'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20h6"/><path d="M12 10v10"/><path d="M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z"/></svg>`
  },
  {
    id: 'picu-ambulance',
    category: 'Special',
    title: 'Pediatric ICU (PICU) Transport',
    shortDescription: 'Custom-designed intensive care transport for children and adolescents. Features age-appropriate medical equipment and a comforting environment to reduce anxiety for both the child and parents.',
    features: [
      'Child-sized medical equipment and airway tools',
      'Pediatric advanced life support (PALS) monitors',
      'Distraction tools and comforting interiors',
      'Accommodations for a traveling parent/guardian',
      'Specialized pediatric intensive care nurses'
    ],
    benefits: [
      'Care tailored specifically to pediatric physiology',
      'Reduced psychological trauma for the child',
      'Unbroken chain of pediatric intensive care',
      'Family-centered transport approach'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    id: 'bariatric-ambulance',
    category: 'Transport',
    title: 'Bariatric Ambulance',
    shortDescription: 'Specialized heavy-duty ambulances engineered for the safe, dignified, and comfortable transport of bariatric patients. Utilizes specialized lifting mechanics and extra-wide securement systems.',
    features: [
      'Extra-wide, heavy-duty stretcher systems',
      'Hydraulic lifting platforms and winch systems',
      'Reinforced vehicle suspension and chassis',
      'Expanded interior space for medical staff access',
      'Specialized bariatric medical equipment'
    ],
    benefits: [
      'Preserves patient dignity and comfort',
      'Eliminates lifting injury risks for patients and staff',
      'Secure transport accommodating heavier weight capacities',
      'Full BLS/ALS capabilities within a larger format'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    id: 'patient-transport',
    category: 'Transport',
    title: 'Patient Transport Service',
    shortDescription: 'Reliable, non-emergency transport for hospital discharges, clinical appointments, and inter-facility transfers. Focuses on punctuality, safety, and patient comfort during routine journeys.',
    features: [
      'Comfortable seating and wheelchair accessibility',
      'Basic first aid and oxygen capabilities',
      'Courteous, trained transport attendants',
      'GPS tracked for precise arrival times',
      'Climate-controlled passenger environments'
    ],
    benefits: [
      'Stress-free travel to routine medical appointments',
      'Dependable hospital discharge transportation',
      'Cost-effective alternative to emergency ambulances',
      'Assistance provided from bed-to-bed'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`
  },
  {
    id: 'psychiatric-transport',
    category: 'Care',
    title: 'Psychiatric Transport',
    shortDescription: 'Secure, discreet, and compassionate transport designed for patients experiencing mental health crises. Focuses on de-escalation, safety, and providing a calming environment during transit.',
    features: [
      'Discreet, unmarked vehicles available upon request',
      'Staff trained in crisis intervention and de-escalation',
      'Secure compartments free of hazardous objects',
      'Soft restraints (only if medically required and authorized)',
      'Comforting and quiet interior environment'
    ],
    benefits: [
      'Ensures absolute safety for the patient and staff',
      'Minimizes anxiety and distress during transit',
      'Preserves patient privacy and dignity',
      'Professional handling of complex psychological emergencies'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`
  },
  {
    id: 'micu-ambulance',
    category: 'Emergency',
    title: 'Mobile Intensive Care Unit (MICU)',
    shortDescription: 'The pinnacle of road-based critical care. Effectively a rolling intensive care unit, staffed by critical care nurses or physicians, designed to transport the most severely unstable patients.',
    features: [
      'Comprehensive point-of-care laboratory testing',
      'Advanced mechanical ventilators (multi-mode)',
      'Invasive hemodynamic monitoring systems',
      'Staffed by Critical Care Paramedics or Physicians',
      'Multi-channel smart infusion pumps'
    ],
    benefits: [
      'Provides hospital-level intensive care on the road',
      'Safely transports highly unstable, intubated patients',
      'Allows continuous administration of complex vasopressors',
      'Highest level of medical expertise available in transit'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`
  },
  {
    id: 'event-standby',
    category: 'Special',
    title: 'Event Medical Standby',
    shortDescription: 'On-site proactive medical coverage for public gatherings, sporting events, and corporate functions. Ensures immediate response to medical incidents before formal emergency services arrive.',
    features: [
      'Dedicated on-site ambulance and rapid response vehicles',
      'First aid stations and triage tents',
      'Customized medical coverage plans per event scale',
      'Roving medical teams with portable trauma kits',
      'Direct communication links to local hospitals'
    ],
    benefits: [
      'Immediate medical intervention within seconds of an incident',
      'Reduces liability for event organizers',
      'Prevents minor injuries from becoming major emergencies',
      'Provides peace of mind for attendees and staff'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
  },
  {
    id: 'air-ambulance',
    category: 'Special',
    title: 'Air Ambulance Services',
    shortDescription: 'Rapid, long-distance medical evacuation using medically equipped helicopters and fixed-wing aircraft. Crucial for life-threatening emergencies requiring immediate cross-country or international transport.',
    features: [
      'Pressurized fixed-wing aircraft or rapid response helicopters',
      'Aviation-certified medical equipment',
      'Flight-trained medical teams (Flight Nurses/Paramedics)',
      'Bed-to-bed logistics coordination',
      'International repatriation capabilities'
    ],
    benefits: [
      'Drastically reduces transit time over long distances',
      'Access to remote or severely trafficked areas',
      'Continuous critical care during high-altitude transit',
      'Seamless coordination with ground transport at both ends'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-1.3 2.6c-.2.4-.1 1 .3 1.3L9 14l-4 4-3-1-1 1 4 4 1-1-1-3 4-4 3.4 6.3c.3.4.9.5 1.3.3l2.6-1.3c.3-.2.6-.6.5-1.1z"/></svg>`
  },
  {
    id: 'organ-transport',
    category: 'Transport',
    title: 'Organ Transport',
    shortDescription: 'Time-critical, ultra-secure transport of vital organs and transplant teams. Operating under priority "blue light" conditions to ensure life-saving organs arrive well within their viability window.',
    features: [
      'High-speed priority response vehicles',
      'Advanced temperature-controlled transport coolers',
      'GPS live-tracking for recipient hospital preparation',
      'Police escort coordination capabilities',
      'Highly trained rapid-response drivers'
    ],
    benefits: [
      'Maximizes the viability window of delicate donor organs',
      'Ensures absolute chain of custody and security',
      'Rapid deployment 24/7/365',
      'Saves lives by optimizing transplant logistics'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
  },
  {
    id: 'ecmo-transport',
    category: 'Care',
    title: 'ECMO Transport',
    shortDescription: 'Highly complex transport for patients on Extracorporeal Membrane Oxygenation (ECMO). Manages the transport of the patient and the intricate machinery keeping their heart and lungs functioning.',
    features: [
      'Specialized space for ECMO circuits and consoles',
      'High-capacity dual oxygen and power supplies',
      'Staffed by specialized Perfusionists and ECMO Physicians',
      'Continuous blood gas monitoring',
      'Extreme shock-absorption stretcher mounts'
    ],
    benefits: [
      'Enables transport of patients with complete cardiac/respiratory failure',
      'Continuous life-sustaining cardiopulmonary bypass on the move',
      'Highest complexity transport safely executed',
      'Connects regional hospitals to advanced transplant centers'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  },
  {
    id: 'vip-executive',
    category: 'Special',
    title: 'VIP / Executive Ambulance',
    shortDescription: 'Premium medical transport combining top-tier medical capabilities with luxury, privacy, and absolute discretion. Designed for high-profile individuals, executives, and diplomats.',
    features: [
      'Unmarked, luxury-chassis exterior design',
      'Premium interior finishes and privacy glass',
      'Advanced encrypted communication systems',
      'Accommodations for personal security details',
      'Elite medical personnel trained in discreet care'
    ],
    benefits: [
      'Total privacy and media avoidance during transport',
      'Uncompromised ICU-level medical care',
      'Seamless coordination with private security protocols',
      'Maximum comfort during critical situations'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    id: 'dialysis-transport',
    category: 'Transport',
    title: 'Dialysis Patient Transport',
    shortDescription: 'Scheduled, reliable transport specifically structured for patients requiring frequent, ongoing hemodialysis treatments. Ensures patients never miss a crucial appointment.',
    features: [
      'Pre-scheduled recurring booking systems',
      'Wheelchair and stretcher compatible vehicles',
      'Trained staff familiar with post-dialysis fatigue',
      'Comfortable seating for frequent journeys',
      'Direct coordination with dialysis centers'
    ],
    benefits: [
      'Guarantees timely arrival for critical ongoing treatments',
      'Provides a safe ride home when patients are weakened',
      'Reduces the burden on family members for frequent transport',
      'Consistent, familiar care teams to build patient rapport'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  {
    id: 'mortuary-ambulance',
    category: 'Transport',
    title: 'Dead Body Transport',
    shortDescription: 'Respectful, dignified, and prompt transport of deceased individuals. Operating with the highest level of professionalism to support grieving families and funeral homes.',
    features: [
      'Specialized climate-controlled rear compartments',
      'Discreet, respectful vehicle exteriors',
      'Professional staff trained in bereavement etiquette',
      'Coordination with hospitals, morgues, and funeral directors',
      'Long-distance repatriation services available'
    ],
    benefits: [
      'Ensures absolute dignity and respect for the deceased',
      'Removes logistical stress from grieving families',
      'Compliant with all health and transport regulations',
      'Seamless handover to funeral care professionals'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
  }
];

// Export for usage (if modules) or attach to window
window.servicesData = servicesData;
