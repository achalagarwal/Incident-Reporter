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
   $data = array();


   // Attempt to query database table and retrieve data
   try {
      $stmt    = $pdo->query('SELECT id, userid, password FROM users ORDER BY userid ASC');
      while($row  = $stmt->fetch(PDO::FETCH_OBJ))
      {
         // Assign each row of data to associative array
         $data[] = $row;
      }

      // Return data as JSON
      echo json_encode($data);
   }
   catch(PDOException $e)
   {
      echo $e->getMessage();
   }


?>
