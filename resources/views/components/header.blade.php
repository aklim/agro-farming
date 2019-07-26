{{-- start header --}}
<header id="start-screen" class="start-screen--style-1">
    <div id="vegas-slider" data-dots="true">
        <div class="vegas-control">
            <span id="vegas-control__prev" class="vegas-control__btn">Prev</span>
            <span id="vegas-control__next" class="vegas-control__btn">Next</span>
        </div>
    </div>

    <div id="start-screen_content-container">
        <div class="start-screen__content start-screen__content-first">
            <div class="v-align">
                <div class="v-middle">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-12 col-xl-10">
                                <p class="title">Agricom</p>

                                <p class="subtitle">
                                    agro company
                                </p>

                                <p>
                                    <a class="custom-btn big primary" href="#">Discover</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="start-screen__content start-screen__content-second">
            <div class="v-align">
                <div class="v-middle">
                    <div class="container">
                        <div class="row justify-content-md-center text-center">
                            <div class="col-12 col-lg-10 col-xl-8 pl-sm-0 pl-5 pr-5 pr-sm-0">
                                <p class="title">Fruits</p>

                                <p>
                                    Evulates vast a real proven works discount secure care. Market invigorate a awesome
                                    handcrafted bigger comes newer recommended lifetime. Odor to yummy high racy bonus
                                    soaking mouthwatering. First superior full-bodied drink. Like outstanding odor
                                    economical deal clinically
                                </p>

                                <p>
                                    <a class="custom-btn big primary" href="#">find out</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="start-screen__content start-screen__content-third">
            <div class="v-align">
                <div class="v-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-8 pl-sm-0 pl-5 pr-5 pr-sm-0">
                                <p class="title">Fresh ideas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        (function()
        {
            var oInterval = setInterval(function ()
            {
                if (typeof window.jQuery !== 'undefined')
                {
                    clearInterval(oInterval);

                    jQuery(document).ready(function($){

                        var slider = $('#vegas-slider'),
                            slides = [
                                {
                                    name: "img 1",
                                    src: '../images/home/img_1.jpg'
                                },
                                {
                                    name: "img 2",
                                    src: '../images/home/img_2.jpg'
                                },
                                {
                                    name: "img 3",
                                    src: '../images/home/img_3.jpg'
                                }
                            ],
                            slider_content = $('.start-screen__content'),
                            dots, a, x;

                        slider.vegas({
                            autoplay: false,
                            timer: false,
                            preloadImage: true,
                            transition: [ 'fade', 'zoomOut', 'blur', 'swirlLeft', 'swirlRight' ],
                            transitionDuration: 4000,
                            delay: 5000,
                            slides: slides,
                            overlay: '../images/overlays/04.png',
                            init: function (globalSettings) {

                                if ( this.data('dots') == true ) {

                                    var $this = this,
                                        dots = $('<nav class="vegas-dots"></nav>');

                                    $this.find('.vegas-control').append(dots);

                                    for (var i = 0; i < slides.length; i++) {
                                        x = $('<a "href="#" class="paginatorLink"></a>');

                                        x.on('click', function(e) {
                                            e.preventDefault();

                                            $this.vegas('jump', dots.find('a').index(this));
                                        });

                                        dots.append(x);
                                    };

                                    a = dots.find('a');
                                    a.eq(0).addClass('active');

                                    slider_content.eq(0).addClass('active');
                                };
                            },
                            play: function (index, slideSettings) {

                            },
                            walk: function (index, slideSettings) {

                                if ( this.data('dots') == true ) {

                                    a.removeClass('active').eq(index).addClass('active');
                                };

                                slider_content.removeClass('active').eq(index).addClass('active');
                            }
                        });

                        $('#vegas-control__prev').on('click', function () {
                            slider.vegas('previous');
                        });

                        $('#vegas-control__next').on('click', function () {
                            slider.vegas('next');
                        });
                    });
                }
            }, 500);
        })();
    </script>
</header>
{{-- end header --}}
