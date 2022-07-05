@extends('layouts.app')


@section('content')
    <section class="slider-section pt-5 mt-5">
        <div class="slider-wrapper">
            <div id="main-slider" class="nivoSlider">
                <img src="{{asset('img/slider-1.jpg')}}" alt="" title="#slider-caption-1"/>
                <img src="{{asset('img/slider-5.jpg')}}" alt="" title="#slider-caption-2"/>
                <img src="{{asset('img/slider-3.jpg')}}" alt="" title="#slider-caption-3"/>
                <img src="{{asset('img/slider-2.jpg')}}" alt="" title="#slider-caption-2"/>
            </div><!-- /#main-slider -->

            <div id="slider-caption-1" class="nivo-html-caption slider-caption">
                <div class="display-table">
                    <div class="table-cell">
                        <div class="container">
                            <div class="slider-text">
                                <h5 class="wow cssanimation fadeInBottom">Join Us Today</h5>
                                <h1 class="wow cssanimation leFadeInRight sequence">Better Life for People</h1>
                                <p class="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br>Forget what you can get and see what you can give.</p>
                                <a href="#" class="btn btn-primary text-white no-under wow cssanimation fadeInBottom" data-wow-delay="0.8s" style="text-decoration: none" data-toggle="modal" data-target="#volunteerModal">Join With Us</a>
                                <a href="{{url('/payment')}}" class="btn btn-primary text-white no-under wow cssanimation fadeInBottom" data-wow-delay="0.8s" style="text-decoration: none">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- /#slider-caption-1 -->
            <div id="slider-caption-2" class="nivo-html-caption slider-caption">
                <div class="display-table">
                    <div class="table-cell">
                        <div class="container">
                            <div class="slider-text">
                                <h1 class="wow cssanimation fadeInTop" data-wow-delay="1s" data-wow-duration="800ms">Together we  <br>can make a Difference</h1>
                                <p class="wow cssanimation fadeInBottom" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br>Forget what you can get and see what you can give.</p>
                                <a href="#" class="btn btn-primary text-white wow cssanimation fadeInBottom" data-wow-delay="0.8s" data-toggle="modal" data-target="#volunteerModal">Join With Us</a>
                                <a href="{{url('/payment')}}" class="btn btn-primary text-white wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- /#slider-caption-2 -->
            <div id="slider-caption-3" class="nivo-html-caption slider-caption">
                <div class="display-table">
                    <div class="table-cell">
                        <div class="container">
                            <div class="slider-text">
                                <h5 class="wow cssanimation fadeInBottom">Join Us Today</h5>
                                <h1 class="wow cssanimation lePushReleaseFrom sequence" data-wow-delay="1s">Give a little. Change a lot.</h1>
                                <p class="wow cssanimation fadeInTop" data-wow-delay="1s">Help today because tomorrow you may be the one who needs helping! <br>Forget what you can get and see what you can give.</p>
                                <a href="#" class="btn btn-primary text-white cssanimation fadeInBottom" data-wow-delay="0.8s" data-toggle="modal" data-target="#volunteerModal">Join With Us</a>
                                <a href="{{url('/payment')}}" class="btn btn-primary text-white wow cssanimation fadeInBottom" data-wow-delay="0.8s">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- /#slider-caption-3 -->
        </div>
    </section><!-- /#slider-Section -->
    <section class="d-none d-lg-block d-md-block promo-section bd-bottom">
        <div class="promo-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 xs-padding">
                        <div class="promo-content">
                            <img src="{{asset('img/icon-1.png')}}" alt="prmo icon">
                            <h3>MAKE A DONATION</h3>
                            <p>
                                Every second, every minute, every hour, a child dies of malaria, Tuberculosis (TB) and other infectious diseases. Vulnerable women all over the world go through thick and thin to bring a standard to their children.
                            </p>
                            <p>
                                Donate $1 dollar to give a life to that child who needs medical help and to the woman who needs empowerment.
                            </p>
                            <a href="#">Read More</a>
                            <h3>DONATE NOW, DONATE TODAY.</h3>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 xs-padding">
                        <div class="promo-content">
                            <img src="{{asset('img/icon-2.png')}}" alt="prmo icon">
                            <h3>FUNDRAISING</h3>
                            <p>
                                Golden Mothers Vision International and coalition of NGO for Women and Children seeks to bring formal education to every child in every town or village in Ghana.
                            </p>
                            <br>
                            <P>
                                We are raising funds to support school building blocks and provision of educational materials in
                                the Rural and Deprived communities in the country.
                            </P>
                            <a href="#">Read More</a>
                            <h3>HELLO, DONATE NOW!</h3>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 xs-padding">
                        <div class="promo-content">
                            <img src="{{asset('img/icon-3.png')}}" alt="prmo icon">
                            <h3>Become A Volunteer</h3>
                            <p>
                                Become a volunteer of GMVINT today. Be a teacher to our village school and our
                                community medical screening. Volunteer today with us as a foreigner
                                and you stand a great chance of becoming part of our Ghanaian society.
                            </p>
                            <a href="#volunteers">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="d-md-none">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6 xs-padding">
                    <div class="promo-content">
                        <img src="{{asset('img/icon-1.png')}}" alt="prmo icon">
                        <h3>MAKE A DONATION</h3>
                        <p>
                            Every second, every minute, every hour, a child dies of malaria, Tuberculosis (TB) and other infectious diseases. Vulnerable women all over the world go through thick and thin to bring a standard to their children.
                        </p>
                        <p>
                            Donate $1 dollar to give a life to that child who needs medical help and to the woman who needs empowerment.
                        </p>
                        <a href="#">Read More</a>
                        <h3>DONATE NOW, DONATE TODAY.</h3>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 xs-padding">
                    <div class="promo-content">
                        <img src="{{asset('img/icon-2.png')}}" alt="prmo icon">
                        <h3>FUNDRAISING</h3>
                        <p>
                            Golden Mothers Vision International and coalition of NGO for Women and Children seeks to bring formal education to every child in every town or village in Ghana.
                        </p>
                        <br>
                        <P>
                            We are raising funds to support school building blocks and provision of educational materials in
                            the Rural and Deprived communities in the country.
                        </P>
                        <a href="#">Read More</a>
                        <h3>HELLO, DONATE NOW!</h3>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 xs-padding">
                    <div class="promo-content">
                        <img src="{{asset('img/icon-3.png')}}" alt="prmo icon">
                        <h3>Become A Volunteer</h3>
                        <p>
                            Become a volunteer of GMVINT today. Be a teacher to our village school and our
                            community medical screening. Volunteer today with us as a foreigner
                            and you stand a great chance of becoming part of our Ghanaian society.
                        </p>
                        <a href="#volunteers">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Promo Section -->

    <section class="causes-section bg-grey bd-bottom padding">
        <div class="container">
            <div class="section-heading text-center mb-40">
                <h2>Recent Causes</h2>
                <span class="heading-border"></span>
                <p>Golden Mothers Vision Internation<br>is embacking on a number of projects
                    to improve the life of people in the <br><strong>Deprived Areas</strong></p>
            </div><!-- /Section Heading -->
            <div class="causes-wrap row">
                <div class="col-md-4 xs-padding">
                    <div class="causes-content">
                        <div class="causes-thumb">
                            <div id="carouselOneControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="{{asset('img/Courses/maternal/causes-1-1.jpg')}}" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="{{asset('img/Courses/maternal/causes-1-2.jpg')}}" alt="Second slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="{{asset('img/Courses/maternal/causes-1-3.jpg')}}" alt="Third slide">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselOneControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselOneControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <a href="{{url('/payment')}}" class="donate-btn">Donate Now<i class="ti-plus"></i></a>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="wow cssanimation fadeInLeft">25%</span></div>
                            </div>
                        </div>
                        <div class="causes-details">
                            <h3>Mothers Home And Educational Complex.</h3>
                            <p>
                                Fund Raising to build an ultra modern orphanage facility to serve as Home and Formal School
                                for Ghanaians.
                            </p>
                            <p>
                                Location: Mampong in the Western Region
                            </p>
                            <p>

                            </p>

                            <div class="donation-box">
                                {{--<p><i class="ti-bar-chart"></i>Goal: $450000</p>--}}
                                {{--<p><i class="ti-thumb-up"></i>Raised: $55000</p>--}}
                            </div>
                            <a href="#" class="read-more" data-toggle="modal" data-target="#mothersHomeModal">Read More</a>
                        </div>
                    </div>
                </div><!-- /Causes-1 -->
                <div class="col-md-4 xs-padding">
                    <div class="causes-content">
                        <div class="causes-thumb">
                            <div id="teenageCarousel" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="{{asset('img/teenage/teenage-one.jpg')}}" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="{{asset('img/teenage/teenage-two.jpg')}}" alt="Second slide">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#teenageCarousel" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#teenageCarousel" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <a href="{{url('/payment')}}" class="donate-btn">Donate Now<i class="ti-plus"></i></a>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="wow cssanimation fadeInLeft">25%</span></div>
                            </div>
                        </div>
                        <div class="causes-details">
                            <h3>Addressing The Rise Of Teenage Pregnancy</h3>
                            <p>
                                Teenage pregnancy is an emerging global issue that affects sustainable development.
                            </p>
                            <p>
                                On the 4th of June ,2021, Golden Mothers Vision International organised a program about the rise...
                            </p>
                            <p>

                            </p>

                            <div class="donation-box">
                                {{--<p><i class="ti-bar-chart"></i>Goal: $450000</p>--}}
                                {{--<p><i class="ti-thumb-up"></i>Raised: $55000</p>--}}
                            </div>
                            <a href="#" class="read-more" data-toggle="modal" data-target="#teenageModal">Read More</a>
                        </div>
                    </div>
                </div><!-- /Causes-2 -->

                <div class="col-md-4 xs-padding">
                    <div class="causes-content">
                        <div class="causes-thumb">
                            <div id="carouselThreeControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="{{asset('img/causes-3-1.jpg')}}" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="{{asset('img/causes-3-2.jpg')}}" alt="Second slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="{{asset('img/causes-3-3.jpg')}}" alt="Third slide">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselThreeControls" role="button" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselThreeControls" role="button" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only dot">Next</span>
                                </a>
                            </div>
                            <a href="{{url('/payment')}}" class="donate-btn">Donate Now<i class="ti-plus"></i></a>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="wow cssanimation fadeInLeft">75%</span></div>
                            </div>
                        </div>
                        <div class="causes-details">
                            <h3>Women In The Oil And Gas Industry.</h3>
                            <p>Human resource is an essential ingredient in the growth process especially if the
                                quality of the human capital is high irrespective of sex.</p>
                            <a href="#" class="read-more" data-toggle="modal" data-target="#weModal">Read More</a>
                        </div>
                    </div>
                </div><!-- /Causes-3 -->
            </div>
        </div>
    </section><!-- /Causes Section -->
    <section class="causes-section bg-grey bd-bottom padding">
        <div class="container">
            <div class="causes-wrap row justify-content-center">
                <div class="col-md-4 xs-padding">
                    <div class="causes-content">
                        <div class="causes-thumb">
                            <div id="carouselOneControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="{{asset('img/Courses/maternal/causes-1-1.jpg')}}" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="{{asset('img/Courses/maternal/causes-1-2.jpg')}}" alt="Second slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="{{asset('img/Courses/maternal/causes-1-3.jpg')}}" alt="Third slide">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselOneControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselOneControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <a href="{{url('/payment')}}" class="donate-btn">Donate Now<i class="ti-plus"></i></a>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="wow cssanimation fadeInLeft">25%</span></div>
                            </div>
                        </div>
                        <div class="causes-details">
                            <h3>Face Of Maternal Health.</h3>
                            <p>
                                Maternal and Child Mortality is one of the biggest and challenging problems we face as a Nation.<br><br>
                            </p>

                            <div class="donation-box">
                                {{--<p><i class="ti-bar-chart"></i>Goal: $450000</p>--}}
                                {{--<p><i class="ti-thumb-up"></i>Raised: $55000</p>--}}
                            </div>
                            <a href="#" class="read-more" data-toggle="modal" data-target="#gmModal">Read More</a>
                        </div>
                    </div>
                </div><!-- /Causes-1 -->
                <div class="col-md-4 xs-padding">
                    <div class="causes-content">
                        <div class="causes-thumb">
                            <div id="carouseltwoControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="{{asset('img/causes-2-1.jpg')}}" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="{{asset('img/causes-2-2.jpg')}}" alt="Second slide">
                                    </div>
                                    {{--<div class="carousel-item">
                                    <img class="d-block w-100" src="{{asset('img/causes-2.jpg')}}" alt="Third slide">
                                    </div>--}}
                                </div>
                                <a class="carousel-control-prev" href="#carouseltwoControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouseltwoControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only dot">Next</span>
                                </a>
                            </div>
                            <a href="{{url('/payment')}}" class="donate-btn">Donate Now<i class="ti-plus"></i></a>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 45%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="wow cssanimation fadeInLeft">45%</span></div>
                            </div>
                        </div>
                        <div class="causes-details">
                            <h3>Face Of Mother Ghana.</h3>
                            <p>As part of our vision to bring health to every child, woman and youth, we are embarking on a 3-day campaign on sanitation.</p>
                            <a href="#" class="read-more" data-toggle="modal" data-target="#mgModal">Read More</a>
                        </div>
                    </div>
                </div><!-- /Causes-2 -->
            </div>
        </div>
    </section><!-- /Causes Section -->

    <section class="causes-section bg-white bd-bottom padding">
        <h2 class="text-center">Nurses Recruitment!!!</h2>
        <span class="heading-border"></span>
        <div class="container">
            <div class="causes-wrap row justify-content-center">
                <div class="col-md-6 xs-padding">
                    <img class="d-block w-100" src="{{asset('img/nurses/nurse-poster.jpg')}}" alt="Banner">
                </div><!-- /Nurse Banner-1 -->
                <div class="col-md-6 xs-padding">
                    <p><strong>Golden Mothers Vision International is looking for Nurses to work in the USA</strong></p>
                    <p>Are you a qualified nurse?</p>
                    <p>Are you ready to work in the USA?</p>
                    <p>If yes to the above questions, kindly send your CV and transcript to conwaac@gmail.com</p>
                    <p>Registration Fee: <strong>GH¢ 500.00</strong></p>
                    <p>Processing Fee: <strong>US$ 3900.00</strong></p>
                    <p><strong>For more information contact: 0247719755</strong></p>
                </div><!-- /Nurse Content-2 -->
            </div>
        </div>
    </section><!-- /Nurses Section -->
    <section>
        <div class="section-heading text-center mb-40">
            <h2>Popular Videos</h2>
            <span class="heading-border"></span>
        </div><!-- /Section Heading -->
        <div class="row justify-content-center py-4">
            @forelse($activity_videos as $activity_video)
            <div class="col-md-4 col-sm-12">
                <h5 class="text-center">{{$activity_video->title}}</h5>
                {!! $activity_video->video_html !!}
            </div>
            @empty
                <div class="col-md-12">
                    <h2 class="text-center">No Videos Available</h2>
                </div>
            @endforelse
        </div>
        <div class="pb-2" style="border-bottom: 2px solid rgba(11,26,248,0.27)"></div>
    </section><!-- /event videos -->

    <!-- /international women's day start -->
<!--    <section>
        <div class="section-heading text-center mb-40">
            <h2>Happy International Women's Day</h2>
            <span class="heading-border"></span>
            <div class="container">
                <p>Today we celebrate you.
                    Let your achievements for yester years, bring a steering positive, demanding significant change to
                    the community, the nation and your home.
                    For if there must be a Change, it started with you. Aver that change to the next generation,
                    let them know, <strong>Women are HELPERS, not punching bags, not sex slaves,</strong> but they are Powerful tool to effect
                    positive change in any man's world. </p>
                <p>
                    <strong>".....This is the Bone of my bone, and the flesh of my flesh, and you, shall be called WOMAN!</strong>
                </p>
                <p>
                    Great respect to all the men who have stood behind their women to be where they are now. As we celebrate our day, we also do appreciate your presence in our lives.
                </p>
                <p><strong>To God be the Glory for Creating WOMEN.</strong></p>
            </div>
        </div>&lt;!&ndash; /Section Heading &ndash;&gt;
        <div class="row justify-content-center">
            <div class="col-md-4">
                <img class="d-block w-100" src="{{asset('img/int_women/aggrey.jpg')}}" alt="Second slide">
            </div>
            <div class="col-md-4">
                <img class="d-block w-100" src="{{asset('img/int_women/card.jpg')}}" alt="Fourth slide">
            </div>
            <div class="col-md-4">
                <img class="d-block w-100" src="{{asset('img/int_women/mariama.jpg')}}" alt="Third slide">
            </div>
        </div>
    </section>-->
    <!-- /international women's day end -->

    <!-- /Soap making start -->
    <section>
        <div class="section-heading text-center mb-40">
            <h2>Women Fellowships & JHS Schools In Soap Making</h2>
            <span class="heading-border"></span>
            <div class="container">
                <p>Golden Mothers Vision International seeks to empower Women Fellowship Groups and JHS School Children
                    with the skills and knowledge in Soap Making,
                    We therefore seek <strong>Support in the form of Donations</strong> to help make this dream a reality </p>
                <p>
                    <strong>To Empower your Women Fellowship and Schools, Please Contact 0247719755</strong>
                </p>
<!--                <p>
                    Great respect to all the men who have stood behind their women to be where they are now. As we celebrate our day, we also do appreciate your presence in our lives.
                </p>
                <p><strong>To God be the Glory for Creating WOMEN.</strong></p>-->
            </div>
        </div> <!--/Section Heading -->
        <div class="row justify-content-center">
            <div class="col-md-10">
                <img class="d-block w-100" src="{{asset('img/soap_making/soap-making-banner-web.jpg')}}" alt="Second slide">
            </div>
            <div class="col-md-12 my-3 py-3">
            <!-- Images Of Soap making -->
                <images-dialog-component folder-name="img/soap_making/all-images"></images-dialog-component>
            </div>
<!--            <div class="col-md-4">
                <img class="d-block w-100" src="{{asset('img/int_women/card.jpg')}}" alt="Fourth slide">
            </div>
            <div class="col-md-4">
                <img class="d-block w-100" src="{{asset('img/int_women/mariama.jpg')}}" alt="Third slide">
            </div>-->
        </div>
    </section>
    <!-- /Soap making end -->

    <section class="about-section bd-bottom shape circle padding">
        <div class="container">
            <div class="row">
                <div class="col-md-4 xs-padding">
                    <div class="profile-wrap">
                        <img class="profile" src="{{asset('img/profile.jpg')}}" alt="profile">
                        <h3>Mrs Aggrey Abundant <span>CEO & Founder of GMVINT.</span></h3>
                        <about-ceo></about-ceo>
                        <img width="100px" class="img-fluid" src="{{asset('img/signature.png')}}" alt="sign">
                    </div>
                </div>
                <div class="col-md-8 xs-padding">
                    <div class="about-wrap row">
                        <div class="col-md-6 xs-padding">
                            <img src="{{asset('img/history.jpg')}}" alt="about-thumb">
                            <h3>Our History</h3>
                            <p>
                                GOLDEN MOTHERS VISION INTERNATIONAL with her board,
                                executives are the founders of the Coalition for Women
                                and Children Affairs (CONWAC), after careful study of Human
                                Rights violation and Discrimination in the World particularly that
                                of Ghana and the sub-Saharan Africa.
                                GOLDEN MOTHERS VISION INTERNATIONAL is
                                Also aware of our responsibility to support and protect every individual,
                                to safe guard the welfare of the poor and desirous of making optimum utilization
                                of the benefits that can be accrued from Advocacy and sensitization Programmes.
                            </p>
                            {{--<a href="#" class="default-btn">Read More</a>--}}
                        </div>
                        <div class="col-md-6 xs-padding">
                            <img src="{{asset('img/mission.jpg')}}" alt="about-thumb">
                            <h3>Our Mission</h3>
                            <p>The Mission of GMVI is to promote the welfare of Women, Children and the Marginalized in Ghana and other deprived economies</p>
                            {{--<a href="#" class="default-btn">Read More</a>--}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- /Causes Section -->

    <section class="campaigns-section bd-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-6 xs-padding">
                    <div class="campaigns-wrap">
                        <h4>Featured Campaigns</h4>
                        <h2>Featured project to built a School.</h2>
                        <div style="background-color: #2a2a2a;">
                            <p>
                                Golden Mothers Vision International and coalition of NGO for Women and Children seeks to bring formal education to every child in every town or village in Ghana. We are raising funds to support school building blocks and
                                provision of educational materials in the Rural and Deprived communities in the country.
                            </p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 35%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="wow cssanimation fadeInLeft">35%</span></div>
                        </div>
                        {{--<div class="donation-box">--}}
                        {{--<h3><i class="ti-bar-chart"></i>Goal: $450000</h3>--}}
                        {{--<h3><i class="ti-thumb-up"></i>Raised: $55000</h3>--}}
                        {{--</div>--}}
                        <a href="{{url('/payment')}}" class="btn btn-primary text-white">Donate Now</a>
                    </div>
                </div>
                <div class="col-md-6 xs-padding">
                    <div class="video-wrap">
                        <img src="{{asset('img/video.jpg')}}" alt="video">
                        <div class="play">
                            <a class="img-popup" data-autoplay="true" data-vbtype="video" href="http://youtu.be/y_a-wB_1hHk"><i class="ti-control-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- /Featured Campaigns Section -->

    <section class="team-section bg-grey bd-bottom circle shape padding" id="volunteers">
        <div class="container">
            <div class="section-heading text-center mb-40">
                <h2>Meet Out Volunteers</h2>
                <span class="heading-border"></span>
                {{--<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br> It has survived not only five centuries.</p>--}}
            </div><!-- /Section Heading -->
            <div class="team-wrapper row">
                <div class="col-md-9 sm-padding">
                    <div class="team-wrap row">
                        <div class="col-md-4">
                            <div class="team-details">
                                <img src="{{asset('img/volunteers/emma.jpg')}}" alt="team">
                                <div class="hover">
                                    <h3>Emmanuella Nana Adjoa Aggrey</h3>
                                    <small class="text-white">Head of Arts and Creativity Department</small>
                                </div>
                            </div>
                        </div><!-- /Team-1 -->
                        <div class="col-md-4">
                            <div class="team-details">
                                <img src="{{asset('img/volunteers/pat.jpg')}}" alt="team">
                                <div class="hover">
                                    <h3>Patricia</h3>
                                    <small class="text-white">Head of Youth Development</small>
                                </div>
                            </div>
                        </div><!-- /Team-2 -->
                        <div class="col-md-4">
                            <div class="team-details">
                                <img src="{{asset('img/volunteers/steve.jpg')}}" alt="team">
                                <div class="hover">
                                    <h3>Stephenson Lordson</h3>
                                    <small class="text-white">Executive Director, International Relation and Media Consultant</small>
                                </div>
                            </div>
                        </div><!-- /Team-3 -->
                        <div class="col-md-4">
                            <div class="team-details">
                                <img src="{{asset('img/volunteers/rebecca.jpg')}}" alt="team">
                                <div class="hover">
                                    <h3>Rebecca Kumi Keyremeh</h3>
                                    <small class="text-white">Professional Nurse</small>
                                </div>
                            </div>
                        </div><!-- /Team-4 -->
                        <div class="col-md-4">
                            <div class="team-details">
                                <img src="{{asset('img/volunteers/ernestina.jpg')}}" alt="team">
                                <div class="hover">
                                    <h3>Ernestina Frimpomaa Amoako</h3>
                                    <small class="text-white">Gender Front Desk Officer</small>
                                </div>
                            </div>
                        </div><!-- /Team-5 -->
                        <div class="col-md-4">
                            <div class="team-details">
                                <img src="{{asset('img/volunteers/ben.jpg')}}" alt="team">
                                <div class="hover">
                                    <h3>Benjamin Arthur</h3>
                                    <small class="text-white">Information Technology Expert</small>
                                </div>
                            </div>
                        </div><!-- /Team-6 -->
                    </div>
                </div>
                <div class="col-md-3 sm-padding">
                    <div class="team-content">
                        <h2>Become a Volunteer?</h2>
                        <h3>Join your hand with us for a better life and beautiful future.</h3>
                        <p>Become a volunteer of GMVINT today. Be a teacher to our village school and our community medical screening. There will be Women empowerment programs all over the country.</p>

                        <ul class="check-list">
                            <li><i class="fa fa-check"></i>Free accommodation for volunteers coming from outside Ghana.</li>
                            <li><i class="fa fa-check"></i>Foreigners stand a chance of becoming part of our Ghanaian Community.</li>
                            <li><i class="fa fa-check"></i>Its an opportunity to help poor children.</li>
                            <li><i class="fa fa-check"></i>You decide which Region you volunteer in.</li>
                            <li><i class="fa fa-check"></i>Joining is totally free. We don't need any money from you.</li>
                        </ul>
                        <a href="#" class="btn btn-primary text-white" data-toggle="modal" data-target="#volunteerModal">Join With Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- /Team Section -->
    {{--All Modals Starts Here--}}
    <div class="modal" tabindex="-1" role="dialog" id="volunteerModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center">Contact The Following Numbers To Become A Volunteer</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p>+233 247719755</p>
                    <p>+233 206224004</p>
                    <p>+233 0240922752</p>
                    <p>Or you can email us at gmvint@yahoo.com or conwaac@gmail.com</p>
                </div>

            </div>
        </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" id="mgModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title text-center">Face Of Mother Ghana</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p>As part of our vision to bring health to every child, woman and youth, we are embarking on a 3-day campaign on sanitation.</p>
                    <p>This we know will eliminate Cholera, one of the health issues associated with improper sanitation in Ghana. This is in collaboration with the Ministry of Health, Zoomlion Ghana, all Regional Coordinating Officers, all MCE’s and DCE’s.</p>
                    <p>The search for Sanitation ambassador is still on going.</p>
                    <p>To become a sponsor, please call: 0247719755</p>
                    <p>To become a partner, please call: 0240992252</p>
                    <p>“PRA 3FIN” #make change now</p>
                </div>

            </div>
        </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" id="weModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title text-center">Women In The Oil and Gas Industry</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p>Human resource is an essential ingredient in the growth process especially if the
                        quality of the human capital is high irrespective of sex. It is therefore worrying to note
                        that the literacy rate among adults in Ghana is 45.9%. It is also important to note that illiteracy is higher for females than males in all
                        regions of the country and much worse for the northern sector of the country. It is in this
                        direction that this Organisation seeks to identify some of the challenges that women
                        face in their economic activities and to find solutions to them in order to enhance
                        the participation of women in productive activity in Ghana.</p>
                </div>

            </div>
        </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" id="gmModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title text-center">Women In The Oil and Gas Industry</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p>
                        Maternal and Child Mortality is one of the biggest and challenging problems we face as a Nation. GMVINT is embarking on finding the grass root solution to have both mother and child safe. We believe in the power of education and information sharing. Thus, a voice is needed to champion this.
                    </p>
                    <p>
                        For more information please contact: 0247719755.<br>
                        To sponsor our maternal health project please call: 0206224004/ 0240922752.

                    </p>
                </div>

            </div>
        </div>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="mothersHomeModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title text-center">Mothers Home And Educational Complex.</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p>
                        Fund Raising to build an ultra modern orphanage facility to serve as Home and Formal School
                        for Ghanaians.
                    </p>
                    <p>
                        For more information please contact: 0247719755.<br>
                        To sponsor our project please <a href="{{url('/payment')}}">click here</a>.

                    </p>
                </div>

            </div>
        </div>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="teenageModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title text-center">Addressing The Rise Of Teenage Pregnancy.</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-justify">
                    <p>
                        Teenage pregnancy is an emerging global issue that affects sustainable development.
                    </p>
                    <p>
                        On the 4th of June ,2021, Golden Mothers Vision International
                        organised a program about the rise of teenage pregnancy which took
                        place at Emmanuel Methodist International School located at Oduom-Kumasi
                        in the Ashanti Region. The program was purposely organised for the Junior
                        High School Three (3) students notifying them about teenage pregnancy,
                        it's effects and prevention.  We have undertaken to assess the work directed at
                        reducing unplanned teenage pregnancy, and to look at what else can be done to
                        support young people at risk of teenage pregnancy or early parenting.
                    </p>
                    <p>Madam Priscilla Sarpong (JHS Teacher) who spoke with the students said;  a teenager or a young girl getting pregnant won't be able to achieve her goal or aim and may result to school dropout . So abstainance is the best.</p>
                    <p>Richard Kwaku Yeboah (Procurement Officer) also added , "a mother is one to whom you hurry when you are troubled ". Unmarried pregnant adolescent will face stigma, rejection and disgrace from parents and peers as well as threats of violence. Girls who become pregnant before age
                        18 are also more likely to experience violence within a marriage or partnership.</p>
                    <p>However, Miss Grace Pokuaa (Delegate from Oforikrom Municipal Assembly) also stated the complications relating to teenage pregnancy and childbirth and how is leading to death for girls aged 15-19 globally. </p>
                    <p>Ernestina Amoako (Gender Front Desk Officer) concluded by advising the young boys about the rate of approaching the ladies with intent of engaging in sexual intercourse with them. </p>
                    <p>Further more encouraged programs aimed at reducing the high rate of teenage pregnancy included on the time table of the school tackling abstinence/prevention, providing more of education about birth control and teaching skills to cope with peer pressure.</p>
                    <p><strong>Richard Kwaku Yeboah and Ernestina Amoako</strong></p>
                </div>

            </div>
        </div>
    </div>

    {{--All Modals End Here--}}

    <section id="counter" class="counter-section">
        <donation-course></donation-course>
    </section><!-- Counter Section -->

    {{--<section class="events-section bg-grey bd-bottom padding">
        <div class="container">
            <div class="section-heading text-center mb-40">
                <h2>Events</h2>
                <span class="heading-border"></span>
                <p>Golden Mothers Vision International organizes various events to raise funds to support its course as well as events to help identify exceptional talents in the society that needs support to realize their dreams</p>
            </div><!-- /Section Heading -->
            <event-component></event-component>
        </div>
    </section>--}}
    <!-- Events Section -->

   {{-- <section class="testimonial-section bd-bottom padding">
        <div class="container">
            <div class="section-heading text-center mb-40">
                <h2>What People Say</h2>
                <span class="heading-border"></span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br> It has survived not only five centuries.</p>
            </div><!-- /Section Heading -->
            <div id="testimonial-carousel" class="testimonial-carousel owl-carousel">
                <div class="testimonial-item">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div class="testi-footer">
                        <img src="{{asset('img/team-1.jpg')}}" alt="profile">
                        <h4>Jonathan Smith <span>Marketer</span></h4>
                    </div>
                </div>
                <div class="testimonial-item">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div class="testi-footer">
                        <img src="{{asset('img/team-2.jpg')}}" alt="profile">
                        <h4>Angelina Rose <span>Designer</span></h4>
                    </div>
                </div>
                <div class="testimonial-item">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div class="testi-footer">
                        <img src="{{asset('img/team-3.jpg')}}" alt="profile">
                        <h4>Taylor Swift <span>Developer</span></h4>
                    </div>
                </div>
                <div class="testimonial-item">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div class="testi-footer">
                        <img src="{{asset('img/volunteers/ben.jpg')}}" alt="profile">
                        <h4>Benjamin Arthur <span>Programer</span></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>--}}<!-- Testimonial Section -->

    {{--<section class="blog-section bg-grey bd-bottom padding">
        <div class="container">
            <div class="section-heading text-center mb-40">
                <h2>Recent Stories</h2>
                <span class="heading-border"></span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br> It has survived not only five centuries.</p>
            </div><!-- /Section Heading -->
            <div class="row">
                <div class="col-lg-12 xs-padding">
                    <div class="blog-items grid-list row">
                        <div class="col-md-4 padding-15">
                            <div class="blog-post">
                                <img src="{{asset('img/home-blog-1.jpg')}}" alt="blog post">
                                <div class="blog-content">
                                    <span class="date"><i class="fa fa-clock-o"></i> January 01.2018</span>
                                    <h3><a href="#">Standard gallery post</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="#" class="post-meta">Read More</a>
                                </div>
                            </div>
                        </div><!-- Post 1 -->
                        <div class="col-md-4 padding-15">
                            <div class="blog-post">
                                <img src="{{asset('img/home-blog-2.jpg')}}" alt="blog post">
                                <div class="blog-content">
                                    <span class="date"><i class="fa fa-clock-o"></i> January 01.2018</span>
                                    <h3><a href="#">Blog post with couple photos</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="#" class="post-meta">Read More</a>
                                </div>
                            </div>
                        </div><!-- Post 2 -->
                        <div class="col-md-4 padding-15">
                            <div class="blog-post">
                                <img src="{{asset('img/home-blog-3.jpg')}}" alt="blog post">
                                <div class="blog-content">
                                    <span class="date"><i class="fa fa-clock-o"></i> January 01.2018</span>
                                    <h3><a href="#">Standard gallery post</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="#" class="post-meta">Read More</a>
                                </div>
                            </div>
                        </div><!-- Post 3 -->
                    </div>
                </div><!-- Blog Posts -->
            </div>
        </div>
    </section><!-- Blog Section -->

    <div class="sponsor-section bd-bottom">
        <div class="container">
            <ul id="sponsor-carousel" class="sponsor-items owl-carousel">
                <li class="sponsor-item">
                    <img src="{{asset('img/sponsor-1.png')}}" alt="sponsor-image">
                </li>
                <li class="sponsor-item">
                    <img src="{{asset('img/sponsor-2.png')}}" alt="sponsor-image">
                </li>
                <li class="sponsor-item">
                    <img src="{{asset('img/sponsor-3.png')}}" alt="sponsor-image">
                </li>
                <li class="sponsor-item">
                    <img src="{{asset('img/sponsor-4.png')}}" alt="sponsor-image">
                </li>
                <li class="sponsor-item">
                    <img src="{{asset('img/sponsor-5.png')}}" alt="sponsor-image">
                </li>
                <li class="sponsor-item">
                    <img src="{{asset('img/sponsor-6.png')}}" alt="sponsor-image">
                </li>
                <li class="sponsor-item">
                    <img src="{{asset('img/sponsor-7.png')}}" alt="sponsor-image">
                </li>
                <li class="sponsor-item">
                    <img src="{{asset('img/sponsor-8.png')}}" alt="sponsor-image">
                </li>
            </ul>
        </div>
    </div><!-- ./Sponsor Section -->--}}





@endsection
