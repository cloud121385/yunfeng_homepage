const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-links');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('selected', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  projects.forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    if (!project.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = `Showing ${count} ${category === 'all' ? '' : category + ' '}project${count === 1 ? '' : 's'}.`;
}));
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = sectionLinks.map(link => document.querySelector(link.getAttribute('href')));
let scheduled = false;
function syncNavigation() {
  let active = sections[0];
  for (const section of sections) if (section.getBoundingClientRect().top <= 150) active = section;
  sectionLinks.forEach(link => {
    const current = link.getAttribute('href') === `#${active.id}`;
    link.classList.toggle('active', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(syncNavigation); }
}, { passive: true });
syncNavigation();
