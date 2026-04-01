#!/bin/bash

cd /home/ubuntu/app

sudo pkill -f node || true

sleep 2

sudo nohup node app.js > app.log 2>&1 &
