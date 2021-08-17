var current_page = 0;
$(document).ready(function () {
    loadPage(0);
    $('#response').on('click', '.choice', function () {
        var target = $(this).data('target');
        loadPage(target);
    });
});

function loadPage(id) {
    // Fetch JSON for page data associated with given ID
    var page_data = PAGES[id];

    clearPage();
    setText(page_data.text);
    if (page_data.type === 'yesno') {
        addPrompt("✔", page_data.targets[0])
        addPrompt("✘", page_data.targets[1])
    }
    // it not yesno, then end
}

function setText(text) {
    $("#page_text").append("<p>" + text + "</p>");
}

function addPrompt(text, target) {
    $("#response").append("<button class=choice data-target=" + target + ">" + text + "</button>");
}

function clearPage() {
    $("#page_text").empty();
    $("#response").empty();
}

// Page data
var PAGES = [{
    'text': 'Is the video better off without skipping the segment?',
    'type': 'yesno',
    'targets': [
        1, 2 // dns, root 2
    ]
}, {
    'text': "Do not submit anything"
}, {
    'text': 'Is the segment shorter than one second? Is the transition really bad?',
    'type': 'yesno',
    'targets': [
        1, 3 // dns, root 3
    ]
}, {
    'text': 'Is there any content in this segment?',
    'type': 'yesno',
    'targets': [
        // ahhh
    ]
}];