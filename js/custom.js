$(window).load(function() {
    jQuery('#all').click();
    return false;
});

$(document).ready(function() {
	$('.carousel').carousel();
    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false

    });

    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle)
    }
    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    var container = $('#portfolio_wrapper');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function() {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }

    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function() {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function() {
        setColumns();
    });


    $(window).bind('resize', function() {
        setProjects();
    });

   $(".fancybox").fancybox();
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();
const someElement = document.getElementById('someElementId');
if (someElement) {
    someElement.onclick = function() {
        var section = document.createElement('section');
        section.classList.add('wow', 'fadeInDown', 'shake', 'zoomIn', 'lightSpeedIn');
        this.parentNode.insertBefore(section, this);
    };
}

// Example function to submit data to backend
const AUTH_TOKEN = 'rhVHdZG7kb32cRrOSq5Ch9IRMYm7WyfL1fSxL6gb';

const submitData = async (formData) => {
    try {
        const response = await fetch('https://u1wzkcuyud.execute-api.us-east-1.amazonaws.com/Prod', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer rhVHdZG7kb32cRrOSq5Ch9IRMYm7WyfL1fSxL6gb'
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`); // Correct error message formatting
        }
        const result = await response.json();
        console.log('Response from API:', result); // Debugging log
        alert('Message sent successfully!');
    } catch (error) {
        console.error('Error submitting data:', error);
        alert('Failed to send message.');
    }
};

// Example of how to use submitData, e.g., on form submission
document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name,
        email,
        message
    };

    console.log('Sending data:', data); // Debugging log
    await submitData(data);
});
