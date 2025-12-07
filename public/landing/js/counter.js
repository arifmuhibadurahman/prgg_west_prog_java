document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter-value');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        if (target === 758994) {
                            counter.textContent = Math.floor(current).toLocaleString('id-ID');
                        } else {
                            counter.textContent = current.toFixed(2).replace('.', ',');
                        }
                        setTimeout(updateCounter, 16);
                    } else {
                        if (target === 758994) {
                            counter.textContent = target.toLocaleString('id-ID');
                        } else {
                            counter.textContent = target.toFixed(2).replace('.', ',');
                        }
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
