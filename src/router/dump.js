<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Automattic\WooCommerce\Client;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();

});
Route::get('/orders', function() {
    return "This is order";
});
Route::get('/customers', function() {
    $woocommerce = new Client(
        // 'https://winedab.com/mission-ready/', 
        'https://winedab.com/', 
        'ck_531bb1db7deb309461b544bbcff88d7ed60ba3f2', 
        'cs_7840d58a204f02c882bc33ac58b7127761fb5bdb',
        // 'ck_2a63f1b5a302d1777e56fcc3aa5d54510e0e9849',
        // 'cs_07ddd82a66d5cbcd3d825669577df1436c526f78',
        [
            'wp-json' => true,
            'version' => 'wc/v3',
            // 'wc_api' => true, 
            // 'version' => 'v3',
            'query_string_auth' => true,
        ]
    );
    try {
        // Array of response results.
        $results = $woocommerce->get('orders',['customer'=>24]);
        // Example: ['customers' => [[ 'id' => 8, 'created_at' => '2015-05-06T17:43:51Z', 'email' => ...
        echo '<pre><code>' . print_r( $results, true ) . '</code><pre>'; // JSON output.
    
      
    } catch (HttpClientException $e) {
        echo '<pre><code>' . print_r( $e->getMessage(), true ) . '</code><pre>'; // Error message.
        echo '<pre><code>' . print_r( $e->getRequest(), true ) . '</code><pre>'; // Last request data.
        echo '<pre><code>' . print_r( $e->getResponse(), true ) . '</code><pre>'; // Last response data.
    }

  return  '<pre><code>' . print_r( $results, true ) . '</code><pre>';
});
