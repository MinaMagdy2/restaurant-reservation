window.observeRestaurantCards = () => {
    const cards = document.querySelectorAll('.restaurant-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;

            // حالة ثابتة لكل كارت
            if (!card.__visible) card.__visible = false;

            if (entry.isIntersecting && !card.__visible) {
                card.__visible = true;
                card.classList.add('show');
            }

            if (!entry.isIntersecting && card.__visible) {
                card.__visible = false;
                card.classList.remove('show');
            }
        });
    }, {
        threshold: 0.35,
        rootMargin: "0px 0px -15% 0px"
    });

    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 60}ms`;
        observer.observe(card);
    });
};

window.bootstrapModal = {
    show: function (id) {
        const modal = new bootstrap.Modal(document.getElementById(id));
        modal.show();
    }
};
window.tryHistoryBack = () => {
    if (window.history.length > 1) {
        window.history.back();
        return true;
    }
    return false;
};
window.disableBrowserBack = () => {
    // كل مرة يحصل popstate (يعني المستخدم ضغط Back)
    window.addEventListener('popstate', function (event) {
        // نرجع نفس الصفحة لتمنع الرجوع
        history.pushState(null, document.title, location.href);
    });

    // نضيف entry جديدة للـ history بحيث يكون هناك مكان آمن
    history.pushState(null, document.title, location.href);
};

