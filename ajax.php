<?php
require_once("../config.php");
$data = $_GET["data"];

if(empty(trim($data)))
    die();

$spojeni = mysqli_connect(dbhost, dbuser, dbpass, dbname);
$pocet =  mysqli_query($spojeni,"SELECT `pocet` FROM `Kalkulacka_jason` WHERE `klavesa` = $data");
if(empty(trim($data)))
    mysqli_query($spojeni,"INSERT INTO `Kalkulacka_jason`(`klavesa`, `pocet`) VALUES ($data, "1")");
else
{
    mysqli_query($spojeni,"UPDATE `Kalkulacka_jason` SET `klavesa`= $data, `pocet` = $pocet + 1 WHERE `klavesa` = $data");
}

mysqli_close($spojeni);