$(document).ready(function () {
    loadPage(0);
    $('#display').on('click', '.choice', function () {
        var target = $(this).data('target');
        var current = $('#response').attr('data-value');
        loadPage(target, current);
    });
});

function loadPage(id, previous) {
    // Fetch JSON for page data associated with given ID
    var page_data = PAGES[id];

    clearPage();
    // set attr
    $('#response').attr('data-value', id);
    setText(page_data.text);
    if (page_data.type === 'yesno') {
        addPrompt('button1', '\u2714', page_data.targets[0])
        addPrompt('button2', '\u2718', page_data.targets[1])
    }
    setPrevious(previous);
    // it not yesno, then end
}

function setText(text) {
    $("#page_text").append("<p>" + text + "</p>");
}

function addPrompt(id, text, target) {
    $("#response").append(`<button class=choice id=${id} data-target=${target}>${text}</button>`);
}

function setPrevious(id) {
    $('#control').prepend(`<button class=choice data-target=${id}>Back</button>`)
}

function clearPage() {
    $("#page_text").empty();
    $("#response").empty();
    $('#control').empty();
}

// Page data
var PAGES = [{
    'text': 'Is the video better off without skipping the segment?',
    'type': 'yesno',
    'targets': [
        1, 2
    ]
}, {
    'text': "Do not submit anything"
}, {
    'text': 'Is the segment shorter than one second? Is the transition really bad?',
    'type': 'yesno',
    'targets': [
        1, 3
    ]
}, {
    'text': 'Is there any content in this segment?',
    'type': 'yesno',
    'targets': [
        12, 4
    ]
}, {
    'text': 'Is there a sponsor in the segment?',
    'type': 'yesno',
    'targets': [
        16, 5
    ]
}, {
    'text': 'Are they asking you to live, subscribe, turn on notifications, comment and share?',
    'type': 'yesno',
    'targets': [
        23, 6
    ]
}, {
    'text': 'Are they promoting something',
    'type': 'yesno',
    'targets': [
        26, 7
    ]
}, { 
    'text': 'Does this segment contain an animation or still frame? (May contain audio)',
    'type': 'yesno',
    'targets': [
        29, 8
    ]
}, {
    'text': 'Is this a unique spoken introduction? Or a unique skit?',
    'type': 'yesno',
    'targets': [
        1, 9
    ]
}, {
    'text': 'Is this a time-lapse or slowmo clip? Is it showing preperation/ cleanup of some sort?',
    'type': 'yesno',
    'targets': [
        1, 10
    ]
}, {
    'text': 'Is music the primary aspect of the video',
    'type': 'yesno',
    'targets': [
        36, 1
    ]
}, {
    'text': 'Is this video part of a series',
    'type': 'yesno',
    'targets': [
        12, 1
    ]
}, {
    'text': 'Does this segment appear in the next or previous videos?',
    'type': 'yesno',
    'targets': [
        14, 1
    ]
}, {
    'text': 'Does content from this segment appear later or earlier in this video?',
    'type': 'yesno',
    'targets': [
        14, 11
    ]
}, {
    'text': 'Is there a spoken summary that is not present in the other appearance?',
    'type': 'yesno',
    'targets': [
        1, 15
    ]
}, {
    'text': 'Preview/ Recap'
}, {
    'text': 'Is the video primarily about the sponsor or could this be cause of bias?',
    'type': 'yesno',
    'targets': [
        1, 17
    ]
}, {
    'text': 'Is it obvious the sponsor is owned by the same company/person',
    'type': 'yesno',
    'targets': [
        25, 18
    ]
}, {
    'text': 'Is it obvious the creator is being paid to promote this? (or received free stuff)',
    'type': 'yesno',
    'targets': [
        19, 25
    ]
}, {
    'text': 'Is the sponsor Nebula or Curiosity Stream',
    'type': 'yesno',
    'targets': [
        20, 39
    ]
}, {
    'text': 'Does the creator have exclusive videos on the platform',
    'type': 'yesno',
    'targets': [
        21, 39
    ]
}, {
    'text': 'Do they switch between promoting the platform and their exclusives rapidly',
    'type': 'yesno',
    'targets': [
        39, 22
    ]
}, {
    'text': 'When promoting their exclusive: self promo, While promoting the platform: sponsor',
}, {
    'text': 'Do they rapidly switch between reminding you to interact and self promotion?',
    'type': 'yesno',
    'targets': [
        25, 24
    ]
}, {
    'text': 'Interaction Reminder'
}, {
    'text': 'Are endcards present or would outro make more sense if it was included',
    'type': 'yesno',
    'targets': [
        31, 28
    ]
}, {
    'text': 'Does it cost the viewer money to use/get the promoting thing?',
    'type': 'yesno',
    'targets': [
        27, 30
    ]
}, {
    'text': 'Merchandise? Charity? Patren? Donations?',
    'type': 'yesno',
    'targets': [
        25, 30
    ]
}, {
    'text': 'Unpaid/ Self Promotion'
}, {
    'text': 'Is the segment located at or near the end of the video?',
    'type': 'yesno',
    'targets': [
        31, 32
    ]
}, {
    'text': 'Would someone watching the video probably want to know about this?',
    'type': 'yesno',
    'targets': [
        1, 18
    ]
}, {
    'text': 'Endcards/ Credits'
}, {
    'text': 'Is this segment identical to other segments in videos by the same creator?',
    'type': 'yesno',
    'targets': [
        33, 1
    ]
}, {
    'text': 'Is this a disclaimer intended to protect the viewer? (Epilepsy, Trigger Warning, 18+)',
    'type': 'yesno',
    'targets': [
        1, 34
    ]
}, {
    'text': 'Is the segment skipping to the main point of the video?',
    'type': 'yesno',
    'targets': [
        1, 35
    ]
}, {
    'text': 'Intermission/ Intro Animation'
}, {
    'text': 'Is the segment present in the official music? (Spotify Version)',
    'type': 'yesno',
    'targets': [
        1, 37
    ]
}, {
    'text': 'Is part of the song playing in the background of the segment?',
    'type': 'yesno',
    'targets': [
        1, 38
    ]
}, {
    'text': 'Music: Non-Music Section'
}, {
    'text': 'Sponsory'
}];