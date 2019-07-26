{{-- start top bar --}}

<div id="top-bar" class="top-bar--style-1 @yield('style')">
    <div class="container">
        <a id="top-bar__logo" class="site-logo" href="/">{{ config('app.name', 'Agro-Farming') }}</a>

        <a id="top-bar__navigation-toggler" href="javascript:void(0);"><span></span></a>

        <nav id="top-bar__navigation" role="navigation">
            <ul>
                <li class="current">
                    <a href="javascript:void(0);">{{__('Home')}}</a>
                </li>
                <li>
                    <a href="javascript:void(0);">Pages</a>

                    <div class="submenu">
                        <ul>
                            <li><a href="about.html">about</a></li>
                            <li><a href="products.html">products</a></li>
                            <li><a href="product_case.html">product case</a></li>
                            <li><a href="404.html">404 page</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="javascript:void(0);">Gallery</a>

                    <div class="submenu">
                        <ul>
                            <li><a href="gallery_1.html">2 Columns</a></li>
                            <li><a href="gallery_2.html">3 Columns</a></li>
                            <li><a href="gallery_3.html">4 Columns</a></li>
                            <li><a href="gallery_4.html">Masonry</a></li>
                            <li><a href="gallery_5.html">Masonry 2</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contacts.html">Contacts</a></li>
                <li class="li-btn"><a class="custom-btn primary" href="#spy-get-in-touch">Get in touch</a></li>
            </ul>
        </nav>
    </div>
</div>

{{-- end top bar --}}
