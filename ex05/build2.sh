#!/bin/bash

# Check if no arguments are provided
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Iterate until there are no more arguments
    while [ $# -gt 0 ]; do
        # Create a folder with the prefix "ex" and the current argument
        mkdir "ex$1"
        # Move to the next argument
        shift
    done
fi
