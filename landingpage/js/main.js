// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
  
      if (!groupHeader) return;
  
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');
  
      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
      
      // Toggle visibily
      groupBody.classList.toggle('open');

      // close other open fqa bodies
      const othersGroup = faqContainer.querySelectorAll('.faq-content');

      othersGroup.forEach(otherGroup => {

        if (otherGroup ==! group) {
          const otherGroupBody = otherGroup.querySelector('.faq-group-body');
          const otherGroupIcon = otherGroup.querySelector('.faq-header-group i');
          otherGroupBody.classList.remove('open');
          otherGroupIcon.classList.remove('fa-minus');
          otherGroupIcon.classList.add('fa-plus');

          
        }
        
      });

    
  });

});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});