<?php
// proxy.php

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Log request
$logFile = 'proxy_debug.log';
$timestamp = date('Y-m-d H:i:s');
$method = $_SERVER['REQUEST_METHOD'];
file_put_contents($logFile, "[$timestamp] Request: $method\n", FILE_APPEND);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$apiUrl = "http://80.74.28.245:8000/api/chat";
$inputData = file_get_contents("php://input");

if ($method === 'POST') {
    file_put_contents($logFile, "[$timestamp] Body: $inputData\n", FILE_APPEND);
}

$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $inputData);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Content-Length: " . strlen($inputData)
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);

if ($error) {
    file_put_contents($logFile, "[$timestamp] Curl Error: $error\n", FILE_APPEND);
    http_response_code(500);
    echo json_encode(["error" => "Proxy Error: " . $error]);
} else {
    file_put_contents($logFile, "[$timestamp] Success: $httpCode response length " . strlen($response) . "\n", FILE_APPEND);
    http_response_code($httpCode);
    echo $response;
}

curl_close($ch);
?>