#!/bin/bash

# Verifica si no se proporcionaron argumentos
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Itera sobre cada argumento y crea una carpeta con el prefijo "ex"
    for arg in "$@"; do
        mkdir "ex$arg"
    done
fi
