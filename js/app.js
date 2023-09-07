const faqs = document.querySelectorAll('.faq_wrapper');
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faqs.forEach((faq) => {
      faq.classList.remove('faq_active');

      //   faq.classList.add('faq_active');
    });
    faq.classList.toggle('faq_active');
  });
});
