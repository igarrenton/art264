/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "logo": {
        "strokepath": [
            {
                "path": "M150.993,98.576c0,0,10.75-11.071,9.5-23.827  s-19.783-47.562-4.736-57.47c9.384-6.179,18.443-4.111,25.102,8.462c0,0,15.144-26.244,35.889-9.371c0,0,12.745,8.373,3.745,25.873  c0,0,38.345-3.648,18.595,30.698c0,0-58.845-9.198-78.522,31.844c0,0-2.829-3.824-8.075-5.867",
                "duration": 800
            },
            {
                "path": "M148.379,98.576c0,0-13.175-14.111-11.925-26.867  s19.585-43.559,4.539-53.467s-20.596,2.749-22.98,7.25c0,0-15.144-26.244-35.889-9.371c0,0-12.745,8.373-3.745,25.873  c0,0-35.328-3.975-19.578,25.525c0,0,62.578,0.485,79.505,37.017c0,0,3.729-4.7,9.327-5.293",
                "duration": 800
            },
            {
                "path": "M136.852,105.756c0,0-11.777-23.132-43.507-30.655  c-22.602-5.359-43.102-8.609-57.102,10.641c0,0-5.356,7.294-3.675,18.273c0,0-18.881,5.092-16.49,29.977  c0,0,1.083,13.083,15.372,18.854c0,0-14.957,20.896,1.043,33.896c0,0,13.106,8.763,29.486,2.658c0,0,4.514,12.592,18.032,7.628  c0,0,4.64-44.755,55.965-80.207c0,0-2.983-6.162,0.876-10.245",
                "duration": 800
            },
            {
                "path": "M161.243,106.576c0,0,14.417-27.372,46.89-30.343  s48.41,0.365,56.402,13.881c0,0,2.282,3.332,2.048,12.611c0,0,17.392,8.699,13.586,33.408c0,0-1.903,10.542-16.498,15.488  c0,0,12.89,24.656-3.825,36.723c0,0-8.223,11.105-24.085,1.742c0,0-5.019,13.908-18.269,1.408c0,0,0.088-36.417-56.583-73.917  c0,0,3.74-5.905,1.215-10.205",
                "duration": 800
            },
            {
                "path": "M137.683,119.324c0,0,10.463,8.831,21.262,0  c0,0,57.304,37.794,56.174,74.294c0,0,0.367,3.088-5.655,12.683c-4.615,7.353,6.096,16.969-8.562,27.706  c-14.658,10.737-29.408,0-29.408,0s5.732,26.841-21.259,26.91s-26.71-27.229-26.71-27.229s-24.379,16.573-35.656-6.194  c0,0-2-2.75-0.25-9c1.973-7.048,2.823-9.761,0.652-12.5c-4.115-5.191-6.374-10.546-4.152-16.875s22.097-54.86,52.734-69.794",
                "duration": 800
            },
            {
                "path": "M137.683,112.742c0,0-0.006-6.067,5.644-9.167  c4.636-2.543,14.118-3.238,16.404,6.167c2.342,9.637-8.548,11.5-11.267,11.333c-2.72-0.167-9.341-0.417-10.78-7.583",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 290,
            "height": 261
        }
    }
}; 
 
 

/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#logo').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 1,
    "strokeColor": "#fff"
}).lazylinepainter('paint'); 
 });