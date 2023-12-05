<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
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
Route::resource('/users', UserController::class)->middleware(['auth', 'verified']);
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('getCoordinator',[UserController::class, 'getCoordinator'])->name("getCoordinator");
Route::get('getIndex',[UserController::class, 'getIndex'])->name("getIndex");
Route::get('ban/{id}',[UserController::class, 'ban'])->name("ban");
Route::get('unban/{id}',[UserController::class, 'unban'])->name("unban");
Route::get('/userLocation/{id}',[UserController::class, 'userLocation'])->name("userLocation");

require __DIR__.'/auth.php';
