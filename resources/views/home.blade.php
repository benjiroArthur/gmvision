@extends('layouts.app')

@section('content')
    <div class="container-fluid pt-10">
        <dash-component registration-route="{{route('nurse-registration.store')}}" csrf-token="{{csrf_token()}}"></dash-component>
    </div>
@endsection
