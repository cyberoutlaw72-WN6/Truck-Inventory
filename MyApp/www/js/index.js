(function () {
    var appRoot = null;
    var state = {
        deviceReady: false,
        selectedCompartmentId: null,
        quiz: {
            isActive: false,
            isComplete: false,
            currentItem: null,
            answerCompartmentId: null,
            lastResult: null,
            scoreCorrect: 0,
            scoreWrong: 0,
            scoreTotal: 0,
            questionLimit: 50,
            questionQueue: [],
            questionIndex: 0
        }
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

    function getQuizCandidates() {
        var compartments = getAllCompartments();
        var itemCounts = {};

        compartments.forEach(function (compartment) {
            compartment.items.forEach(function (item) {
                itemCounts[item] = (itemCounts[item] || 0) + 1;
            });
        });

        return compartments.reduce(function (allCandidates, compartment) {
            compartment.items.forEach(function (item) {
                if (itemCounts[item] === 1) {
                    allCandidates.push({
                        item: item,
                        compartmentId: compartment.id,
                        compartmentName: compartment.name,
                        viewName: compartment.viewName
                    });
                }
            });

            return allCandidates;
        }, []);
    }

    function shuffleArray(values) {
        var shuffled = values.slice();
        var currentIndex = shuffled.length;

        while (currentIndex > 1) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            var temp = shuffled[currentIndex];
            shuffled[currentIndex] = shuffled[randomIndex];
            shuffled[randomIndex] = temp;
        }

        return shuffled;
    }

    function refillQuizQueue() {
        var candidates = getQuizCandidates();
        state.quiz.questionQueue = shuffleArray(candidates);
        state.quiz.questionIndex = 0;
    }

    function beginQuizRound() {
        if (state.quiz.questionIndex >= state.quiz.questionQueue.length) {
            refillQuizQueue();
        }

        if (!state.quiz.questionQueue.length) {
            state.quiz.currentItem = null;
            state.quiz.answerCompartmentId = null;
            state.quiz.lastResult = {
                status: 'empty',
                message: 'No unique items are available for quiz mode.'
            };
            return;
        }

        var selected = state.quiz.questionQueue[state.quiz.questionIndex];
        state.quiz.questionIndex += 1;

        state.quiz.currentItem = selected.item;
        state.quiz.answerCompartmentId = selected.compartmentId;
    }

    function startQuiz() {
        state.quiz.isActive = true;
        state.quiz.isComplete = false;
        state.quiz.scoreCorrect = 0;
        state.quiz.scoreWrong = 0;
        state.quiz.scoreTotal = 0;
        state.quiz.lastResult = null;
        state.quiz.questionQueue = [];
        state.quiz.questionIndex = 0;
        beginQuizRound();
    }

    function stopQuiz() {
        state.quiz.isActive = false;
        state.quiz.isComplete = false;
        state.quiz.currentItem = null;
        state.quiz.answerCompartmentId = null;
        state.quiz.lastResult = null;
        state.quiz.scoreWrong = 0;
        state.quiz.scoreCorrect = 0;
        state.quiz.scoreTotal = 0;
        state.quiz.questionQueue = [];
        state.quiz.questionIndex = 0;
    }

    function checkQuizGuess(compartmentId) {
        if (!state.quiz.isActive || state.quiz.isComplete || !state.quiz.answerCompartmentId) {
            return;
        }

        state.quiz.scoreTotal += 1;

        if (compartmentId === state.quiz.answerCompartmentId) {
            state.quiz.scoreCorrect += 1;
            state.quiz.lastResult = {
                status: 'correct',
                message: 'Correct. Nice work.'
            };

            if (state.quiz.scoreTotal >= state.quiz.questionLimit) {
                state.quiz.isComplete = true;
                state.quiz.currentItem = null;
                state.quiz.answerCompartmentId = null;
                state.quiz.lastResult = {
                    status: 'complete',
                    message: 'Test complete. You got ' + state.quiz.scoreCorrect + ' right and ' + state.quiz.scoreWrong + ' wrong (' + ((state.quiz.scoreCorrect / state.quiz.scoreTotal) * 100).toFixed(1) + '% correct).'
                };
                return;
            }

            beginQuizRound();
            return;
        }

        state.quiz.scoreWrong += 1;

        var answerCompartment = getAllCompartments().find(function (compartment) {
            return compartment.id === state.quiz.answerCompartmentId;
        });

        state.quiz.lastResult = {
            status: 'wrong',
            message: 'Wrong. The item is in ' + (answerCompartment ? answerCompartment.name : 'the correct compartment') + '.'
        };
        if (state.quiz.scoreTotal >= state.quiz.questionLimit) {
            state.quiz.isComplete = true;
            state.quiz.currentItem = null;
            state.quiz.answerCompartmentId = null;
            state.quiz.lastResult = {
                status: 'complete',
                message: 'Test complete. You got ' + state.quiz.scoreCorrect + ' right and ' + state.quiz.scoreWrong + ' wrong (' + ((state.quiz.scoreCorrect / state.quiz.scoreTotal) * 100).toFixed(1) + '% correct).'
            };
            return;
        }

        beginQuizRound();
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

        var quizStatusClass = '';
        var quizStatusMessage = 'Press Start Test, then click the compartment where the item is stored.';
        if (state.quiz.lastResult && state.quiz.lastResult.status === 'correct') {
            quizStatusClass = ' quiz-status--correct';
            quizStatusMessage = state.quiz.lastResult.message;
        } else if (state.quiz.lastResult && state.quiz.lastResult.status === 'wrong') {
            quizStatusClass = ' quiz-status--wrong';
            quizStatusMessage = state.quiz.lastResult.message;
        } else if (state.quiz.lastResult && state.quiz.lastResult.status === 'empty') {
            quizStatusClass = ' quiz-status--empty';
            quizStatusMessage = state.quiz.lastResult.message;
        } else if (state.quiz.lastResult && state.quiz.lastResult.status === 'complete') {
            quizStatusClass = ' quiz-status--complete';
            quizStatusMessage = state.quiz.lastResult.message;
        }

        var quizPrompt = state.quiz.isActive && !state.quiz.isComplete && state.quiz.currentItem
            ? 'Where is: <strong>' + escapeHtml(state.quiz.currentItem) + '</strong>?'
            : (state.quiz.isComplete ? 'Test complete. Start a new test when ready.' : 'Test mode is off.');

        var percentCorrect = state.quiz.scoreTotal
            ? ((state.quiz.scoreCorrect / state.quiz.scoreTotal) * 100).toFixed(1)
            : '0.0';

        var progressText = state.quiz.isActive && !state.quiz.isComplete
            ? 'Question ' + (state.quiz.scoreTotal + 1) + '/' + state.quiz.questionLimit
            : (state.quiz.isComplete ? 'Completed ' + state.quiz.questionLimit + '/' + state.quiz.questionLimit : 'Not started');

        var quizButtonMarkup = state.quiz.isActive && !state.quiz.isComplete
            ? '<button type="button" class="quiz-button quiz-button--stop" data-quiz-action="stop">Stop Test</button>'
            : '<button type="button" class="quiz-button" data-quiz-action="start">' + (state.quiz.isComplete ? 'Start New Test' : 'Start Test') + '</button>';

        var inventoryMarkup = selectedCompartment.items.length
            ? '<ol class="inventory-list">' + selectedCompartment.items.map(function (item) {
                return '<li>' + escapeHtml(item) + '</li>';
            }).join('') + '</ol>'
            : '<p class="empty-state">No items listed for this compartment.</p>';

        return '<aside class="inventory-panel">' +
            '<section class="quiz-card">' +
            '<p class="inventory-eyebrow">Compartment Test</p>' +
            '<p class="quiz-prompt">' + quizPrompt + '</p>' +
            '<div class="quiz-controls">' +
            quizButtonMarkup +
            '<span class="quiz-score">Right ' + state.quiz.scoreCorrect + ' | Wrong ' + state.quiz.scoreWrong + ' | ' + percentCorrect + '% correct</span>' +
            '</div>' +
            '<p class="quiz-progress">' + escapeHtml(progressText) + '</p>' +
            '<p class="quiz-status' + quizStatusClass + '" role="status" aria-live="polite">' + escapeHtml(quizStatusMessage) + '</p>' +
            '</section>' +
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
            var quizAction = event.target.closest('[data-quiz-action]');
            if (quizAction) {
                var action = quizAction.getAttribute('data-quiz-action');
                if (action === 'start') {
                    startQuiz();
                }
                if (action === 'stop') {
                    stopQuiz();
                }
                renderApp();
                return;
            }

            var button = event.target.closest('[data-compartment-id]');
            if (!button) {
                return;
            }

            state.selectedCompartmentId = button.getAttribute('data-compartment-id');
            checkQuizGuess(state.selectedCompartmentId);
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
