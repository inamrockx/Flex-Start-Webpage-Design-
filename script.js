    
    // Navbar bg-change effect
    const navbar = document.getElementById('navbar');
    
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-lg', 'backdrop-blur-sm');

      } else {
        navbar.classList.remove('bg-white', 'shadow-lg', 'backdrop-blur-sm');

      }
    });
                    
                    // Universal dropdown handler - works for ANY number of dropdowns!
                    document.addEventListener('DOMContentLoaded', function () {

                        // Handle all main dropdowns
                        const dropdowns = document.querySelectorAll('.dropdown-container');

                        dropdowns.forEach(dropdown => {
                            const trigger = dropdown.querySelector('.dropdown-trigger');
                            const menu = dropdown.querySelector('.dropdown-menu');

                            if (!trigger || !menu) return;

                            // Click to toggle
                            trigger.addEventListener('click', function (e) {
                                e.stopPropagation();

                                // Close other dropdowns
                                document.querySelectorAll('.dropdown-menu').forEach(m => {
                                    if (m !== menu) m.classList.remove('active');
                                });

                                menu.classList.toggle('active');
                            });

                            // // Hover to open
                            // dropdown.addEventListener('mouseenter', function () {
                            //     menu.classList.add('active');
                            // });

                            // // Mouse leave to close
                            // dropdown.addEventListener('mouseleave', function (e) {
                            //     setTimeout(function () {
                            //         if (!dropdown.matches(':hover') && !menu.matches(':hover')) {
                            //             menu.classList.remove('active');
                            //             // Also close any nested menus
                            //             menu.querySelectorAll('.nested-dropdown-menu').forEach(nm => {
                            //                 nm.classList.remove('active');
                            //             });
                            //         }
                            //     }, 100);
                            // });

                            menu.addEventListener('click', function (e) {
                                e.stopPropagation();
                            });
                        });

                        // Handle all nested dropdowns
                        const nestedDropdowns = document.querySelectorAll('.nested-dropdown-container');

                        nestedDropdowns.forEach(nested => {
                            const trigger = nested.querySelector('.nested-dropdown-trigger');
                            const menu = nested.querySelector('.nested-dropdown-menu');

                            if (!trigger || !menu) return;

                            // Click to toggle
                            trigger.addEventListener('click', function (e) {
                                e.stopPropagation();
                                menu.classList.toggle('active');
                            });

                            // // // Hover to open
                            //  nested.addEventListener('mouseenter', function () {
                            //      menu.classList.add('active');
                            //  });

                            //  // Mouse leave to close
                            //  nested.addEventListener('mouseleave', function (e) {
                            //      if (!menu.contains(e.relatedTarget)) {
                            //          menu.classList.remove('active');
                            //      }
                            //  });

                              menu.addEventListener('mouseenter', function () {
                                  menu.classList.add('active');
                              });

                              menu.addEventListener('mouseleave', function (e) {
                                  if (!nested.contains(e.relatedTarget)) {
                                      setTimeout(function () {
                                          if (!menu.matches(':hover')) {
                                              menu.classList.remove('active');
                                          }
                                      }, 100);
                                  }
                             });
                        });

                        // Close all dropdowns when clicking outside
                        document.addEventListener('click', function () {
                            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                                menu.classList.remove('active');
                            });
                        });
                    });



        // Hamburger 

        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('menuIcon');
        const closeIcon = document.getElementById('closeIcon');

        mobileMenuButton.addEventListener('click', function() {
            // Toggle mobile menu
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icons
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        }); 

        //Accordions

            function toggleAccordion(button) {
      const content = button.nextElementSibling;
      const arrow = button.querySelector('.accordion-arrow');
      const isOpen = content.classList.contains('max-h-40');
      
      if (isOpen) {
        content.classList.remove('max-h-40');
        content.classList.add('max-h-0');
        arrow.classList.remove('rotate-90');
      } else {
        content.classList.remove('max-h-0');
        content.classList.add('max-h-40');
        arrow.classList.add('rotate-90');
        content.classList.add('text-blue-600');
      }
    }


    // Nav filter for image gallery 

            function filterItems(category) {
            const items = document.querySelectorAll('.item');
            const buttons = document.querySelectorAll('.filter-btn');
            
            // Update button styles
            buttons.forEach(btn => {
                if (btn.dataset.filter === category) {
                    
                    btn.classList.add('text-blue-600');
                } else {
                    btn.classList.remove('text-blue-600');
                    
                }
            });
            
            // Filter items
            items.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.classList.remove('hidden');
                    item.classList.add('animate-fadeIn');
                } else {
                    item.classList.add('hidden');
                }
            });
        }

        // Clients Carousal 

        const slides = document.querySelectorAll('.carousel-slide');
                const indicators = document.querySelectorAll('.indicator');
                const prevBtn = document.getElementById('prev');
                const nextBtn = document.getElementById('next');

                let currentSlide = 0;

                function showSlide(index) {
                    // Hide all slides
                    slides.forEach(slide => slide.classList.add('hidden'));

                    // Show current slide
                    slides[index].classList.remove('hidden');

                    // Update indicators
                    indicators.forEach((indicator, i) => {
                        if (i === index) {
                            indicator.classList.remove('bg-opacity-50');
                        } else {
                            indicator.classList.add('bg-opacity-50');
                        }
                    });
                }

                function nextSlide() {
                    currentSlide = (currentSlide + 1) % slides.length;
                    showSlide(currentSlide);
                }

                function prevSlide() {
                    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                    showSlide(currentSlide);
                }

                // Event listeners
                nextBtn.addEventListener('click', nextSlide);
                prevBtn.addEventListener('click', prevSlide);

                // Indicator clicks
                indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => {
                        currentSlide = index;
                        showSlide(currentSlide);
                    });
                });

                // Auto-play (optional)
                setInterval(nextSlide, 2000);