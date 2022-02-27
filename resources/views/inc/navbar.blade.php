@php($routeName = \Route::currentRouteName())
<div class="site-preloader-wrap">
    <div class="spinner">
        <img src="{{asset('img/gm-loader.png')}}" style="height: 100px; width: 100px">
    </div>
    {{--<P>GOLDEN MOTHERS VISION INTERNATIONAL</P>--}}
</div><!-- Preloader -->

<header id="header" class="header-section">
    <div class="top-header">
        <div class="container">
            <div class="top-content-wrap row">
                <div class="col-sm-8">
                    <ul class="left-info">
                        <li><a href="#"><i class="ti-email"></i>
                                {{--{{'Info@'.request()->getHost()}}--}}
                                gmvint@yahoo.com
                            </a></li>
                        <li><a href="#"><i class="ti-mobile"></i>+(233) 0247719755</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 d-none d-md-block">
                    <ul class="right-info">
                        <li><a href="https://www.facebook.com/gmvint/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-header">
        {{--<div class="container">
            <div class="bottom-content-wrap row">
                <div class="col-sm-12 col-md-4">
                    <div class="site-branding">
                        <a href="#"><img src="{{asset('img/gm_logo.png')}}" alt="Brand"></a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 text-right">
                    <ul id="mainmenu" class="nav navbar-nav nav-menu">
                        <li><a class="nav-link"  style="color: {{ $routeName === 'welcome' ? '#0b1af8' : '' }}" href="{{url('/')}}">Home</a></li>
                        <li><a class="nav-link"  style="color: {{ $routeName === 'about' ? '#0b1af8' : '' }}" href="{{url('/about')}}">About</a></li>
                        <li><a class="nav-link"  style="color: {{ $routeName === 'event' ? '#0b1af8' : '' }}" href="{{url('/event')}}">Event</a></li>
                        <li><a class="nav-link"  style="color: {{ $routeName === 'gallery' ? '#0b1af8' : '' }}" href="{{url('/gallery')}}">Gallery</a></li>
                        <li><a class="nav-link"  style="color: {{ $routeName === 'contact' ? '#0b1af8' : '' }}" href="{{url('/contact')}}">Contact</a></li>
                    </ul>
                    <a href="{{url('/payment')}}" class="default-btn" style="text-decoration: none">Donate Now</a>
                </div>
            </div>
        </div>--}}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="site-branding">
                <a href="#"><img src="{{asset('img/gm_logo.png')}}" alt="Brand"></a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul id="mainmenu" class="nav navbar-nav nav-menu ml-auto mr-auto">
                    @auth()
                    <li><a class="nav-link"  style="color: {{ $routeName === 'home' ? '#0b1af8' : '' }}" href="{{route('home')}}">Dashboard</a></li>
                    @endauth
                    <li><a class="nav-link"  style="color: {{ $routeName === 'welcome' ? '#0b1af8' : '' }}" href="{{route('welcome')}}">Home</a></li>
                    <li><a class="nav-link"  style="color: {{ $routeName === 'about' ? '#0b1af8' : '' }}" href="{{route('about')}}">About</a></li>
{{--
                    <li><a class="nav-link"  style="color: {{ $routeName === 'event' ? '#0b1af8' : '' }}" href="{{url('/event')}}">Event</a></li>
--}}
                   {{-- <li><a class="nav-link"  style="color: {{ $routeName === 'gallery' ? '#0b1af8' : '' }}" href="{{url('/gallery')}}">Gallery</a></li>
                    <li><a class="nav-link"  style="color: {{ $routeName === 'contact' ? '#0b1af8' : '' }}" href="{{url('/contact')}}">Contact</a></li>--}}
                        @auth()
                            <li>
                                <a class="nav-link" href="" onclick="preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    Logout</a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                        @endauth
                </ul>
                <a href="{{url('/payment')}}" class="btn btn-primary text-white" style="text-decoration: none">Donate Now</a>
            </div>
        </nav>
    </div>
</header><!-- /Header Section -->
<div class="header-height"></div>
