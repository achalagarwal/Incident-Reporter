<?php
   header('Access-Control-Allow-Origin: *');

   // Define database connection parameters
   $hn      = 'sql12.freemysqlhosting.net';
   $un      = 'sql12177324';
   $pwd     = 'iBaeParmHH';
   $db      = 'sql12177324';
   $cs      = 'utf8';

   // Set up the PDO parameters
   $dsn  = "mysql:host=" . $hn . ";port=3306;dbuserid=" . $db . ";charset=" . $cs;
   $opt  = array(
                        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                        PDO::ATTR_EMULATE_PREPARES   => false,
                       );
   // Create a PDO instance (connect to the database)
   $pdo  = new PDO($dsn, $un, $pwd, $opt);

   // Retrieve specific parameter from supplied URL
   $key  = strip_tags($_REQUEST['key']);
   $data    = array();


   // Determine which mode is being requested
   switch($key)
   {

      // Add a new record to the users table
      case "create":

         // Sanitise URL supplied values
         $userid       = filter_var($_REQUEST['userid'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $password   = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);

         // Attempt to run PDO prepared statement
         try {
            $sql  = "INSERT INTO users(userid, password) VALUES(:userid, :password)";
            $stmt    = $pdo->prepare($sql);
            $stmt->bindParam(':userid', $userid, PDO::PARAM_STR);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR);
            $stmt->execute();

            echo json_encode(array('message' => 'Congratulations the record ' . $userid . ' was added to the database'));
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;



      // Update an existing record in the users table
      /*case "update":

         // Sanitise URL supplied values
         $userid          = filter_var($_REQUEST['userid'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $password   = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         $recordID      = filter_var($_REQUEST['recordID'], FILTER_SANITIZE_NUMBER_INT);

         // Attempt to run PDO prepared statement
         try {
            $sql  = "UPDATE users SET userid = :userid, password = :password WHERE id = :recordID";
            $stmt =  $pdo->prepare($sql);
            $stmt->bindParam(':userid', $userid, PDO::PARAM_STR);
            $stmt->bindParam(':password', $password, PDO::PARAM_STR);
            $stmt->bindParam(':recordID', $recordID, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $userid . ' was updated');
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;

*/

      // Remove an existing record in the users table
    /*  case "delete":

         // Sanitise supplied record ID for matching to table record
         $recordID   =  filter_var($_REQUEST['recordID'], FILTER_SANITIZE_NUMBER_INT);

         // Attempt to run PDO prepared statement
         try {
            $pdo  = new PDO($dsn, $un, $pwd);
            $sql  = "DELETE FROM users WHERE id = :recordID";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':recordID', $recordID, PDO::PARAM_INT);
            $stmt->execute();

            echo json_encode('Congratulations the record ' . $userid . ' was removed');
         }
         // Catch any errors in running the prepared statement
         catch(PDOException $e)
         {
            echo $e->getMessage();
         }

      break;
   }
*/
?>
