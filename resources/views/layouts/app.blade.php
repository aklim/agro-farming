<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="no-js">
<head>
    <title>{{ config('app.name', 'Agro-Farming') }}@hasSection('title') - @yield('title')@endif</title>

    <meta charset="utf-8">
    <meta name="description" content="">

    <meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
    <meta name="viewport"
          content="user-scalable=no, width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, minimal-ui"/>

    {{-- FAV icon & mobile tmele styles ============================= --}}
    <meta name="theme-color" content="{{ config('app.mobile.color', '#4A8B71') }}"/>
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="msapplication-navbutton-color" content="{{ config('app.mobile.color', '#4A8B71') }}"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="{{ config('app.mobile.color', '#4A8B71') }}"/>

    {{-- Favicon's ================================================== --}}
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">

    {{-- CSRF Token ================================================= --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- Fonts ====================================================== --}}
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    {{-- Load google font --}}
    <script type="text/javascript">
        WebFontConfig = {
            google: {
                families: [
                    'Montserrat:300,400,500,600,700',
                    'Poppins:300,400,500,600,700'
                ]
            }
        };
        (function () {
            var wf = document.createElement('script');
            wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
                '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    </script>

    <script type="text/javascript">
        document.documentElement.className = document.documentElement.className.replace("no-js", "js");
    </script>


    {{-- Styles ===================================================== --}}
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="page @yield('body_styles')">
@include('components.topBar')
@include('components.header')

{{-- Main content =============================================== --}}
<main role="main" id="app">
    @yield('content')
</main>

@include('components.footer')

<div id="btn-to-top-wrap">
    <a id="btn-to-top" class="circled" href="javascript:void(0);" data-visible-offset="1000"></a>
</div>

{{-- Scripts ==================================================== --}}
<script src="{{ mix('/js/app.js') }}" defer></script>

{{-- Global site tag (gtag.js) - Google Analytics --}}
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-144389762-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {dataLayer.push(arguments);}

    gtag('js', new Date());
    gtag('config', 'UA-144389762-1');
</script>

</body>
</html>
