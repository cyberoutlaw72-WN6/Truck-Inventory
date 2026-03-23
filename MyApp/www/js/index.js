(function () {
    var appRoot = null;
    var state = {
        deviceReady: false,
        selectedCompartmentId: null
    };

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[character];
        });
    }

    function getAppData() {
        return window.firetruckAppData || { appName: 'Firetruck Inventory', subtitle: '', views: [] };
    }

    function getAllCompartments() {
        return getAppData().views.reduce(function (allCompartments, view) {
            view.compartments.forEach(function (compartment) {
                allCompartments.push(Object.assign({ viewId: view.id, viewName: view.name }, compartment));
            });

            return allCompartments;
        }, []);
    }

    function getSelectedCompartment() {
        var compartments = getAllCompartments();
        return compartments.find(function (compartment) {
            return compartment.id === state.selectedCompartmentId;
        }) || compartments[0] || null;
    }

    function ensureSelectedCompartment() {
        if (!state.selectedCompartmentId) {
            var firstCompartment = getAllCompartments()[0];
            state.selectedCompartmentId = firstCompartment ? firstCompartment.id : null;
        }
    }

    function renderTruckChrome(view) {
        if (view.layout === 'rear') {
            return '<div class="rear-shell"></div>' +
                '<div class="rear-door rear-door--left"></div>' +
                '<div class="rear-door rear-door--right"></div>' +
                '<div class="rear-bumper"></div>' +
                '<div class="rear-light rear-light--left"></div>' +
                '<div class="rear-light rear-light--right"></div>';
        }

        return '<div class="truck-body"></div>' +
            '<div class="truck-cab"></div>' +
            '<div class="truck-stripe"></div>' +
            '<div class="truck-window truck-window--main"></div>' +
            '<div class="truck-window truck-window--small"></div>' +
            '<div class="pump-panel"></div>' +
            '<div class="wheel wheel--front"></div>' +
            '<div class="wheel wheel--rear"></div>';
    }

    function renderCompartment(compartment) {
        var isSelected = compartment.id === state.selectedCompartmentId;

        return '<button type="button" class="compartment compartment--' + escapeHtml(compartment.layout) + (isSelected ? ' is-selected' : '') + '" data-compartment-id="' + escapeHtml(compartment.id) + '" aria-pressed="' + String(isSelected) + '">' +
            '<span>' + escapeHtml(compartment.buttonLabel) + '</span>' +
            '<small>' + compartment.items.length + ' listed</small>' +
            '</button>';
    }

    function renderViewCard(view, index) {
        var isHighlighted = view.compartments.some(function (compartment) {
            return compartment.id === state.selectedCompartmentId;
        });
        var viewCardClass = view.id === 'rear' ? ' view-card--rear' : '';

        return '<section class="view-card' + viewCardClass + '" style="animation-delay:' + (index * 0.08).toFixed(2) + 's">' +
            '<div class="view-header">' +
            '<div>' +
            '<p class="view-eyebrow">Truck View</p>' +
            '<h2>' + escapeHtml(view.name) + '</h2>' +
            '<p class="view-description">' + escapeHtml(view.description) + '</p>' +
            '</div>' +
            '<span class="view-badge' + (isHighlighted ? ' view-badge--active' : '') + '">' + view.compartments.length + ' compartments</span>' +
            '</div>' +
            '<div class="truck-stage truck-stage--' + escapeHtml(view.layout) + '">' +
            renderTruckChrome(view) +
            view.compartments.map(renderCompartment).join('') +
            '</div>' +
            '</section>';
    }

    function renderInventoryPanel(selectedCompartment) {
        if (!selectedCompartment) {
            return '<aside class="inventory-panel"><h2>No inventory loaded</h2></aside>';
        }

        var inventoryMarkup = selectedCompartment.items.length
            ? '<ol class="inventory-list">' + selectedCompartment.items.map(function (item) {
                return '<li>' + escapeHtml(item) + '</li>';
            }).join('') + '</ol>'
            : '<p class="empty-state">No items listed for this compartment.</p>';

        return '<aside class="inventory-panel">' +
            '<p class="inventory-eyebrow">Selected Compartment</p>' +
            '<h3>' + escapeHtml(selectedCompartment.name) + '</h3>' +
            '<div class="inventory-meta">' +
            '<span>' + escapeHtml(selectedCompartment.viewName) + '</span>' +
            '<span>' + selectedCompartment.items.length + ' listed items</span>' +
            '</div>' +
            '<div class="inventory-list-wrap">' + inventoryMarkup + '</div>' +
            '</aside>';
    }

    function renderApp() {
        var data = getAppData();
        var selectedCompartment = getSelectedCompartment();

        appRoot.innerHTML = '<section class="page-header">' +
            '<div class="hero-copy">' +
            '<p class="eyebrow">Apparatus Inventory</p>' +
            '<h1>' + escapeHtml(data.appName) + '</h1>' +
            '<p class="intro">' + escapeHtml(data.subtitle) + '</p>' +
            '</div>' +
            '</section>' +
            '<section class="app-grid">' +
            '<div class="views-grid">' + data.views.map(renderViewCard).join('') + '</div>' +
            renderInventoryPanel(selectedCompartment) +
            '</section>';
    }

    function scrollInventoryIntoView() {
        var inventoryPanel = appRoot ? appRoot.querySelector('.inventory-panel') : null;
        if (!inventoryPanel) {
            return;
        }

        // Auto-scroll on narrower layouts where inventory sits below the view cards.
        if (window.matchMedia('(max-width: 1180px)').matches) {
            inventoryPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function initializeApp() {
        if (appRoot) {
            return;
        }

        appRoot = document.getElementById('app');
        if (!appRoot) {
            return;
        }

        ensureSelectedCompartment();
        renderApp();

        appRoot.addEventListener('click', function (event) {
            var button = event.target.closest('[data-compartment-id]');
            if (!button) {
                return;
            }

            state.selectedCompartmentId = button.getAttribute('data-compartment-id');
            renderApp();
            scrollInventoryIntoView();
        });
    }

    function onDeviceReady() {
        state.deviceReady = true;
        if (appRoot) {
            renderApp();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp, { once: true });
    } else {
        initializeApp();
    }

    document.addEventListener('deviceready', onDeviceReady, false);
})();
