@extends('layouts.app')


@section('content')
<br><br><br>
    <div class="row">
        <div class="col-sm-1 col-md-3 col-lg-3"></div>
        <div class="col-sm-1 col-md-6 col-lg-6">
            <form novalidate class="form-control form-style text-center needs-validation" action="{{url('/pay')}}" method="post" id="payment-form">
                {{ csrf_field() }}
                <div class="form-group">
                    <input type="text" class="form-control pay-fields" name="name" placeholder="Full Name" required>
                    <div class="valid-feedback">
                        looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please choose a name.
                    </div>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control pay-fields" name="email" placeholder="Email" required>
                    <div class="valid-feedback">
                        looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please choose a valid email.
                    </div>
                </div>
                <div class="form-group">
                    <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4,9}" class="form-control pay-fields" name="phone_number" placeholder="Phone Number" required>
                    <div class="valid-feedback">
                        looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please choose a valid phone number.
                    </div>
                </div>
                <div class="form-group">
                    <input type="number"  class="form-control pay-fields" name="amount" placeholder="Amount" required>
                    <div class="valid-feedback">
                        looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please choose a valid amount you want to donate.
                    </div>
                </div>
                <div class="form-group">
                    <select class="form-control pay-fields" name="donation_course">
                        @forelse($projects as $project)
                            <option value="{{$project->id}}">{{$project->name}}</option>
                        @empty
                            <option >No Projects</option>
                        @endforelse
                    </select>
                </div>
                <div class="form-group">
                    <button id="one-button" class="btn btn-primary mx-3" type="button" onclick="isChecked('one')">One Time</button>
                    <button id="monthly-button" class="btn btn-outline-primary mx-3" type="button" onclick="isChecked('monthly')">Monthly</button>
                    <input id="one-radio" type="radio" class="form-control-radio" name="pay_type" value="one" checked hidden>
                    <input id="monthly-radio" type="radio" class="form-control-radio" name="pay_type" value="monthly" hidden>
                </div>

                <button type="submit" class="btn btn-primary" >Proceed To Make Payment</button>
                <p><small>Please note that you will be redirected to a trusted and secured payment platform (Paystack) to make the payment</small></p>
            </form>
        </div>
        <div class="col-sm-1 col-md-3 col-lg-3"></div>
    </div>
    <br><br>

@endsection
@section('script')
    <script>
        function isChecked(val){
            let currentValue =  $('input[name = "pay_type"]:checked').val()
            let oneButton = $('#one-button')
            let monthlyButton = $('#monthly-button')
            let oneRadio = $('#one-radio')
            let monthlyRadio = $('#monthly-radio')
            if (val !== currentValue) {
                switch (val) {
                    case 'one':
                        oneButton.toggleClass('btn-primary btn-outline-primary')
                        monthlyButton.toggleClass('btn-primary btn-outline-primary')
                        oneRadio.click()
                        break
                    case 'monthly':
                        oneButton.toggleClass('btn-primary btn-outline-primary')
                        monthlyButton.toggleClass('btn-primary btn-outline-primary')
                        monthlyRadio.click()
                        break
                }
            }
        }
        function submitForm() {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            let forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        }
        $(document).ready(function(){
            submitForm()
        });
    </script>
@endsection
