document.addEventListener('DOMContentLoaded', function() {
          // Mobile menu toggle
          const menuToggle = document.querySelector('.menu-toggle');
          const navbar = document.querySelector('.navbar ul');
          
          menuToggle.addEventListener('click', function() {
              navbar.classList.toggle('show');
          });
          
          // Smooth scrolling for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                  e.preventDefault();
                  
                  const targetId = this.getAttribute('href');
                  if (targetId === '#') return;
                  
                  const targetElement = document.querySelector(targetId);
                  if (targetElement) {
                      window.scrollTo({
                          top: targetElement.offsetTop - 80,
                          behavior: 'smooth'
                      });
                      
                      // Close mobile menu if open
                      navbar.classList.remove('show');
                  }
              });
          });
          
          // Header scroll effect
          const header = document.querySelector('header');
          window.addEventListener('scroll', function() {
              if (window.scrollY > 100) {
                  header.classList.add('scrolled');
              } else {
                  header.classList.remove('scrolled');
              }
          });
          
          // Animate elements when they come into view
          const animateOnScroll = function() {
              const elements = document.querySelectorAll('.belief-card, .about-content, .about-image');
              
              elements.forEach(element => {
                  const elementPosition = element.getBoundingClientRect().top;
                  const windowHeight = window.innerHeight;
                  
                  if (elementPosition < windowHeight - 100) {
                      element.style.opacity = '1';
                      element.style.transform = 'translateY(0)';
                  }
              });
          };
          
          // Set initial state for animated elements
          document.querySelectorAll('.belief-card, .about-content, .about-image').forEach(element => {
              element.style.opacity = '0';
              element.style.transform = 'translateY(20px)';
              element.style.transition = 'all 0.6s ease';
          });
          
          window.addEventListener('scroll', animateOnScroll);
          animateOnScroll(); // Run once on page load

          // Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            // Here you would normally send the form data to a server
            // For this example, we'll just show a success message
            alert('Obrigado por sua mensagem, ' + name + '! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Animation for contact page elements
    const animateContactElements = function() {
        const elements = document.querySelectorAll('.info-box, .contact-form');
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.info-box, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateContactElements);
    animateContactElements(); // Run once on page load
      });
      });