#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    
else
    args=("$@")
fi

count=0

while [ $count -lt 3 ] && [ $count -lt ${#args[@]} ]; do
    echo "${args[count]}"
    ((count++))
done