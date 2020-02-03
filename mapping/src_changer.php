<?php
header("Content-Type:application/json; charset:utf-8");

$targetDir = 'scan_png';
$allCount = count(glob($targetDir. DIRECTORY_SEPARATOR . "*.png"));
$alienCount = count(glob($targetDir. DIRECTORY_SEPARATOR . "alien*"));
$pooCount = count(glob($targetDir. DIRECTORY_SEPARATOR . "poo*"));
$rocketCount = count(glob($targetDir. DIRECTORY_SEPARATOR . "rocket*"));
$planetCount = count(glob($targetDir. DIRECTORY_SEPARATOR . "planet*"));
$saturnCount = count(glob($targetDir. DIRECTORY_SEPARATOR . "saturn*"));
$ufoCount = count(glob($targetDir. DIRECTORY_SEPARATOR . "ufo*"));
// echo count($allCount);
$CountArray = [$allCount,$alienCount,$pooCount,$rocketCount,$planetCount,$saturnCount,$ufoCount];
$Countjson = json_encode($CountArray);
print $Countjson;
exit;
?>