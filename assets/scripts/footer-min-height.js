// Set a minimum height to ensure screen can fit the last section plus the footer   
{% for section in this.theme.sections %}
{% if loop.last %} 
let lastSectionPosition = document.getElementById('{{ section.slug }}').getBoundingClientRect().top;  
{% endif %}
{% endfor %} 
let footer = document.getElementsByTagName('footer')[0]
let footerPosition = footer.getBoundingClientRect().top;
footer.style.minHeight = 'calc(100vh - ' + (footerPosition - lastSectionPosition) + 'px)';