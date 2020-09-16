# PLC SIMULATOR

Based on [node-opcua](http://node-opcua.github.io/) all kudos due

This script will let you expose the raspberry pi sensor hat values over an OPCUA server.

## Get started (local deployement) 
1. clone
2. set three env vars, one called HOSTNAME (set it to your OPC-UA IP or FQDN), one called PORT (the port you want your OPC-UA clients to connect) and one for your OPC UA resource path called RESOURCEPATH (e.g /myRA)
3. start the script (DEBUG=* if you want to see what the server is doing)

## Todo
add support for setting variables to do cool things like use the led matrix display over OPCUA set
