#!/usr/bin/python3
"""This code is for displaying response and tabulation of the url link"""

import urllib.request
with urllib.request.urlopen('https://alx-intranet.hbtn.io/status') as response:
    response = response.read()
    print("Body response:")
    print("\t- type: {}".format(type(response)))
    print("\t- content: {}".format(response))
    print("\t- utf8 content: {}".format(response.decode(encoding='utf-8')))
