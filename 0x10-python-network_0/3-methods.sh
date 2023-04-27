#!/bin/bash
curl -s -I "${1}" | grep "^Allow: .*" | cut -d " " -f 2-
