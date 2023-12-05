<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;
//use MeiliSearch\Client;
use App\Models\Info;
use App\Models\User;



class DashboardController extends Controller
{
    
  public function __construct(){
    if ( App::environment('local') ) {
        
        $this->url = "http://127.0.0.1:7700";

    } else if(App::environment('development')){
        $this->url = "http://127.0.0.1:7700";

    } 
}
    public function __invoke(Request $request)
    {
        $results = null;
        $user=  User::all();
       // $client = new Client( $this->url, 'masterKey');
       // $results = $client->stats();
        //dd($results);
       
        return view('dashboard',[
            'results' => $results,
            'user' => $user
        ]);
    }
  

    
}
