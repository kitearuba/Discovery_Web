#!/bin/bash

# Verifica si no se proporcionaron argumentos
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    read -rp "Introduce argument(s) separated by spaces: " -a args
else
    args=("$@")
fi

# Itera sobre cada argumento y los muestra hasta el tercer argumento
count=0
for arg in "${args[@]}"; do
    if [ $count -lt 3 ]; then
        echo "$arg"
        ((count++))
    else
        break
    fi
done
