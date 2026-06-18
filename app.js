document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('services-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Ensure servicesData is available (from services-data.js)
    if (!window.servicesData) {
        console.error('servicesData is not defined. Make sure services-data.js is loaded before app.js.');
        return;
    }
    
    const services = window.servicesData;

    // Helper function to map category to CSS class for badges
    const getCategoryClass = (category) => {
        const catMap = {
            'Emergency': 'cat-emergency',
            'Special': 'cat-special',
            'Transport': 'cat-transport',
            'Care': 'cat-care'
        };
        return catMap[category] || 'cat-emergency';
    };

    // Function to generate HTML for a single service card
    const createServiceCard = (service, delayIndex) => {
        const catClass = getCategoryClass(service.category);
        
        // Generate features list
        const featuresHtml = service.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('');
        
        // Create the card element
        const card = document.createElement('div');
        card.className = 'service-card card-enter';
        card.style.animationDelay = `${delayIndex * 0.05}s`;
        
        card.innerHTML = `
            <div class="card-icon-wrapper">
                ${service.icon}
            </div>
            <span class="card-category ${catClass}">${service.category}</span>
            <h3 class="card-title">${service.title}</h3>
            <p class="card-desc">${service.shortDescription}</p>
            
            <div class="card-lists">
                <div>
                    <h4 class="list-title">Key Features</h4>
                    <ul class="card-list">
                        ${featuresHtml}
                    </ul>
                </div>
            </div>
            
            <div class="card-action">
                <a href="#" class="learn-more">
                    Learn Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
            </div>
        `;
        
        return card;
    };

    // Function to render the grid based on a filtered list
    const renderGrid = (items) => {
        if (!gridContainer) return;
        // Clear current grid
        gridContainer.innerHTML = '';
        
        // If no items, show a message
        if (items.length === 0) {
            gridContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted);">No services found for this category.</p>';
            return;
        }

        // Append new items
        items.forEach((item, index) => {
            const card = createServiceCard(item, index);
            gridContainer.appendChild(card);
        });
    };

    // Initialize with all services
    renderGrid(services);

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter data
            let filteredServices = services;
            if (filterValue !== 'all') {
                filteredServices = services.filter(service => service.category === filterValue);
            }
            
            // Re-render grid
            renderGrid(filteredServices);
        });
    });

    // Hero Slider Logic
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000);
    }

    // Card Slider Logic (first ambulance card slider, cycles every 5 seconds)
    const cardSlides = document.querySelectorAll('#omni-card-slider .card-slide');
    if (cardSlides.length > 0) {
        let currentCardSlide = 0;
        
        setInterval(() => {
            cardSlides[currentCardSlide].classList.remove('active');
            currentCardSlide = (currentCardSlide + 1) % cardSlides.length;
            cardSlides[currentCardSlide].classList.add('active');
        }, 5000);
    }

    // Card Slider Logic for TT Ambulance (second ambulance card slider, cycles every 5 seconds)
    const ttCardSlides = document.querySelectorAll('#tt-card-slider .card-slide');
    if (ttCardSlides.length > 0) {
        let currentTTCardSlide = 0;
        
        setInterval(() => {
            ttCardSlides[currentTTCardSlide].classList.remove('active');
            currentTTCardSlide = (currentTTCardSlide + 1) % ttCardSlides.length;
            ttCardSlides[currentTTCardSlide].classList.add('active');
        }, 5000);
    }

    // Card Slider Logic for Eco Ambulance (third ambulance card slider, cycles every 5 seconds)
    const ecoCardSlides = document.querySelectorAll('#eco-card-slider .card-slide');
    if (ecoCardSlides.length > 0) {
        let currentEcoCardSlide = 0;
        
        setInterval(() => {
            ecoCardSlides[currentEcoCardSlide].classList.remove('active');
            currentEcoCardSlide = (currentEcoCardSlide + 1) % ecoCardSlides.length;
            ecoCardSlides[currentEcoCardSlide].classList.add('active');
        }, 5000);
    }

    // Card Slider Logic for Mini Eco Ambulance (fourth ambulance card slider, cycles every 5 seconds)
    const miniEcoCardSlides = document.querySelectorAll('#mini-eco-card-slider .card-slide');
    if (miniEcoCardSlides.length > 0) {
        let currentMiniEcoCardSlide = 0;
        
        setInterval(() => {
            miniEcoCardSlides[currentMiniEcoCardSlide].classList.remove('active');
            currentMiniEcoCardSlide = (currentMiniEcoCardSlide + 1) % miniEcoCardSlides.length;
            miniEcoCardSlides[currentMiniEcoCardSlide].classList.add('active');
        }, 5000);
    }
});

// Booking Modal Logic
window.openBookingModal = function(equipmentName) {
    const modal = document.getElementById('booking-modal');
    const nameLabel = document.getElementById('modal-equipment-name');
    if (nameLabel) nameLabel.textContent = "Selected: " + equipmentName;
    if (modal) modal.classList.add('active');
};

window.closeBookingModal = function() {
    const modal = document.getElementById('booking-modal');
    if (modal) modal.classList.remove('active');
};

// Form submission and Location handler
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const locationBtn = document.getElementById('btn-current-location');
    const addressInput = document.getElementById('deliveryAddress');

    if (locationBtn && addressInput) {
        locationBtn.addEventListener('click', () => {
            if ("geolocation" in navigator) {
                const originalText = locationBtn.innerHTML;
                locationBtn.innerHTML = "Locating...";
                
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        
                        try {
                            // Reverse geocode using OpenStreetMap's Nominatim API (Free, no key required)
                            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
                            const data = await response.json();
                            
                            if (data && data.display_name) {
                                addressInput.value = data.display_name;
                            } else {
                                addressInput.value = `Location: https://maps.google.com/?q=${lat},${lng}`;
                            }
                        } catch (err) {
                            // Fallback to coordinates if the API fails
                            addressInput.value = `Location: https://maps.google.com/?q=${lat},${lng}`;
                        }
                        
                        locationBtn.innerHTML = '✅ Location Added';
                        setTimeout(() => {
                            locationBtn.innerHTML = originalText;
                        }, 3000);
                    },
                    (error) => {
                        alert("Unable to retrieve your location. Please check your browser location permissions.");
                        locationBtn.innerHTML = originalText;
                    }
                );
            } else {
                alert("Geolocation is not supported by your browser.");
            }
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Save selected equipment and user details to localStorage
            const nameLabel = document.getElementById('modal-equipment-name');
            const equipment = nameLabel ? nameLabel.textContent.replace('Selected: ', '') : 'Equipment';
            
            const custName = document.getElementById('customerName').value;
            const custPhone = document.getElementById('customerPhone').value;
            const custAddress = addressInput.value;
            
            localStorage.setItem('booking_equipment', equipment);
            localStorage.setItem('booking_name', custName);
            localStorage.setItem('booking_phone', custPhone);
            localStorage.setItem('booking_address', custAddress);
            
            // Redirect to payment page
            window.location.href = 'payment.html';
        });
    }

    // Ambulance Form submission
    const ambForm = document.getElementById('ambulance-booking-form');
    if (ambForm) {
        ambForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const ambType = document.getElementById('ambType') ? document.getElementById('ambType').value : '';
            const patientName = document.getElementById('patientName') ? document.getElementById('patientName').value : '';
            const mobileNumber = document.getElementById('mobileNumber') ? document.getElementById('mobileNumber').value : '';
            const pickupLocation = document.getElementById('pickupLocation') ? document.getElementById('pickupLocation').value : '';
            const destLocation = document.getElementById('destLocation') ? document.getElementById('destLocation').value : '';
            const bookingDateTime = document.getElementById('bookingDateTime') ? document.getElementById('bookingDateTime').value : '';
            const additionalNotes = document.getElementById('additionalNotes') ? document.getElementById('additionalNotes').value : '';

            // Format message for WhatsApp
            const message = `*New Ambulance Booking Request* 🚑
            
*Ambulance Type:* ${ambType}
*Patient Name:* ${patientName}
*Mobile Number:* ${mobileNumber}
*Pickup Location:* ${pickupLocation}
*Destination:* ${destLocation}
*Date & Time:* ${bookingDateTime ? new Date(bookingDateTime).toLocaleString() : ''}
${additionalNotes ? `*Notes:* ${additionalNotes}` : ''}

Please confirm the booking.`;

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Owner's WhatsApp number (with country code +91)
            const ownerNumber = "919060066139"; 
            
            // Open WhatsApp link in a new tab
            window.open(`https://wa.me/${ownerNumber}?text=${encodedMessage}`, '_blank');

            // Show success message, hide form
            const successMsg = document.getElementById('ambulance-booking-success');
            if (successMsg) {
                ambForm.style.display = 'none';
                successMsg.style.display = 'flex';
                successMsg.style.flexDirection = 'column';
                successMsg.style.alignItems = 'center';
                successMsg.style.textAlign = 'center';
                successMsg.style.padding = '32px 0';
            }
        });
    }

    // Current Location Logic
    const btnCurrentLocation = document.getElementById('btn-pickup-location');
    const pickupLocationInput = document.getElementById('pickupLocation');

    if (btnCurrentLocation && pickupLocationInput) {
        btnCurrentLocation.addEventListener('click', () => {
            if (navigator.geolocation) {
                const originalText = btnCurrentLocation.innerHTML;
                btnCurrentLocation.innerHTML = 'Fetching...';
                btnCurrentLocation.disabled = true;

                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        try {
                            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                            const data = await response.json();
                            if (data && data.display_name) {
                                pickupLocationInput.value = data.display_name;
                            } else {
                                pickupLocationInput.value = `Lat: ${lat.toFixed(5)}, Lng: ${lon.toFixed(5)}`;
                            }
                        } catch (error) {
                            console.error('Error fetching address:', error);
                            pickupLocationInput.value = `Lat: ${lat.toFixed(5)}, Lng: ${lon.toFixed(5)}`;
                        } finally {
                            btnCurrentLocation.innerHTML = originalText;
                            btnCurrentLocation.disabled = false;
                        }
                    },
                    (error) => {
                        console.error('Geolocation error:', error);
                        alert('Unable to retrieve your location. Please check your browser location permissions.');
                        btnCurrentLocation.innerHTML = originalText;
                        btnCurrentLocation.disabled = false;
                    },
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
                );
            } else {
                alert('Geolocation is not supported by your browser.');
            }
        });
    }
});

// Ambulance Booking Modal Logic
window.openAmbulanceModal = function(ambulanceType) {
    const modal = document.getElementById('ambulance-booking-modal');
    const nameLabel = document.getElementById('modal-ambulance-name');
    const select = document.getElementById('ambType');
    
    if (nameLabel) nameLabel.textContent = "Selected: " + ambulanceType;
    
    // Reset form and success state
    const form = document.getElementById('ambulance-booking-form');
    const successMsg = document.getElementById('ambulance-booking-success');
    if (form) form.style.display = 'block';
    if (successMsg) successMsg.style.display = 'none';
    if (form) form.reset();
    if (select) select.value = ambulanceType;
    
    if (modal) modal.classList.add('active');
};

window.closeAmbulanceModal = function() {
    const modal = document.getElementById('ambulance-booking-modal');
    if (modal) modal.classList.remove('active');
};

// Drawer Toggle Logic
window.toggleDrawer = function() {
    const drawer = document.getElementById('side-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
    }
};

// General Services Modal
window.openServicesModal = function() {
    const modal = document.getElementById('general-services-modal');
    if (modal) modal.classList.add('active');
};

window.closeServicesModal = function() {
    const modal = document.getElementById('general-services-modal');
    if (modal) modal.classList.remove('active');
};

// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    // Auto-add animate classes to equipment cards for staggered effect
    const eqCards = document.querySelectorAll('.equipment-card');
    eqCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        const delay = ((index % 4) + 1) * 100;
        card.classList.add('animate-delay-' + delay);
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});
