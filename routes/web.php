<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [App\Http\Controllers\PagesController::class, 'welcome'])->middleware('visitor')->name('welcome');


Route::get('/about', [App\Http\Controllers\PagesController::class, 'about'])->middleware('visitor')->name('about');

Route::get('gallery', [App\Http\Controllers\PagesController::class, 'gallery'])->middleware('visitor')->name('gallery');
Route::get('contact', [App\Http\Controllers\PagesController::class, 'contact'])->middleware('visitor')->name('contact');

Route::get('payment', [App\Http\Controllers\PagesController::class, 'payment'])->middleware('visitor')->name('payment');

Auth::routes();


Route::get('home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('statistics', [App\Http\Controllers\VisitorController::class, 'index'])->name('statistics');
Route::post('pay', [App\Http\Controllers\PaymentController::class, 'redirectToGateway'])->name('pay');
Route::get('payment/callback', [App\Http\Controllers\PaymentController::class, 'handleGatewayCallback'])->name('pay-callback');
Route::get('payment/payment-info', [App\Http\Controllers\PaymentController::class, 'getDonationInfo'])->name('payment-info');
Route::post('files/get-images', [App\Http\Controllers\PagesController::class, 'getImages'])->name('get-images');

Route::resource('activity-video', App\Http\Controllers\ActivityVideoController::class);
Route::resource('nurse-registration', App\Http\Controllers\NurseRegistrationController::class);
Route::post('nurse/verify-registration', [App\Http\Controllers\NurseRegistrationController::class, 'verifyRegistration']);
Route::post('nurse/upload-file', [App\Http\Controllers\NurseRegistrationController::class, 'uploadFile']);
