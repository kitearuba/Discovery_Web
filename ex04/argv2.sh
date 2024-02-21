#!/bin/bash

# Check if no arguments are provided
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    read -rp "Introduce argument(s) separated by spaces: " input
    # Split the input into an array
    IFS=' ' read -ra args <<< "$input"
else
    args=("$@")
fi

# Initialize a counter
count=0

# Iterate over each argument and print up to the third argument
while [ $count -lt 3 ] && [ $count -lt ${#args[@]} ]; do
    echo "${args[count]}"
    ((count++))
done
