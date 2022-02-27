<?php

namespace App\Http\Controllers;

use App\Models\Visitor;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'admin']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $visitorsAll = Visitor::all();
        $visitors = $visitorsAll->groupBy('date');
        $visitorsPerMonth = $visitorsAll->groupBy(function($q) {
            return Carbon::parse($q->date)->format('Y-m');
        });

        $data = [];
        $dataPerMonth = [];
        foreach($visitors as $key => $visitor){
            $dataSet['date'] = $key;
            $dataSet['count'] = count($visitor);
            $data[] = $dataSet;
        }
        foreach($visitorsPerMonth as $key => $visitor){
            $dataSet['date'] = $key;
            $dataSet['count'] = count($visitor);
            $dataPerMonth[] = $dataSet;
        }
        return response()->json(['daily' => $data, 'monthly' => $dataPerMonth]);
    }
}
