document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.anime-article');

    articles.forEach((article, index) => {
        setTimeout(() => {
            article.classList.add('fade-in');
        }, 300 * index);
    });

    const toggleButtons = document.querySelectorAll('.toggle-content');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const extraContent = this.previousElementSibling;

            if (extraContent.classList.contains('hidden')) {
                extraContent.classList.remove('hidden');
                this.textContent = 'Sembunyikan';

                // Tambahkan transisi tampil
                extraContent.style.opacity = '0';
                extraContent.style.maxHeight = '0';

                setTimeout(() => {
                    extraContent.style.transition = 'opacity 0.5s ease, max-height 0.5s ease';
                    extraContent.style.opacity = '1';
                    extraContent.style.maxHeight = '500px';
                }, 10);
            } else {
               
                extraContent.style.opacity = '0';
                extraContent.style.maxHeight = '0';

                setTimeout(() => {
                    extraContent.classList.add('hidden');
                    this.textContent = 'Baca Selengkapnya';
                }, 500);
            }
        });
    });

    
    const bakugoItems = document.querySelectorAll('#bakugo-list li');
    bakugoItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.color = '#FF8C00';
            this.style.fontWeight = 'bold';
        });

        item.addEventListener('mouseleave', function () {
            this.style.color = '';
            this.style.fontWeight = '';
        });
    });

    window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(210, 105, 30, 0.9)';
            nav.style.transition = 'background-color 0.3s ease';
        } else {
            nav.style.backgroundColor = '#D2691E';
        }
    });
});
