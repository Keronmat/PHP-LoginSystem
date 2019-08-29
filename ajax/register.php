<?php 

	// Allow the config
	define('__CONFIG__', true);
	// Require the config
    require_once "../inc/config.php"; 
    

    if($_SERVER['REQUEST_METHOD']== 'POST'){
        //ALways return JSON format
        header('Content.Type: application/json');
        
        $return = [];

        // Make sure the user does not exist.

        //Make sure the user Can be added and is added.

        //Return the proper information back to javascript to redirect us.

        $return['redirect'] ='/Login_Registration_Page/dashboard.php';

        $return['name'] = 'keron';
        echo json_encode($return,JSON_PRETTY_PRINT);exit;
    }else {
        //use to kill the script. Redirect the user.Do something regardless
        exit("test");
    }
?>