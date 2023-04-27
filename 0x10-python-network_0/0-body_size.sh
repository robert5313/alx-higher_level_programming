#!/bin/bash
# Request send URL, and displays the size of the request
curl -s "${1}" | wc -c
