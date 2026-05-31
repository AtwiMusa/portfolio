document.querySelectorAll('.poem-card-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const card = wrapper.querySelector('.poem-card');
    card.classList.toggle('expanded');
  });
});
