#!/bin/bash
# Displays all HTTP methods the server will accept
curl -s "$1" -d "@$2" -X POST -H "Content-Type: application/json"
