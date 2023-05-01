#!/usr/bin/python3
"""This code is for displaying response and tabulation of the url link"""

import urllib.request
with urllib.request.urlopen('https://alx-intranet.hbtn.io/status') as response:
    html = response.read()
