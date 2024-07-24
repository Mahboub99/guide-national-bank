#!/bin/bash

# Make sure the zip file is found
if [ ! -f "build.zip" ]; then
    echo "File not found: build.zip"
    exit 1
fi

# Make test directory if not found
mkdir -p test

# Clear the test directory
rm -rf test/*

# Unzip the build.zip file
unzip build.zip -d test
mv ./test/build/* ./test
rm -rf ./test/build

# Run serve command
serve -s test