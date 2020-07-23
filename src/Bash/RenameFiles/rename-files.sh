#!/bin/bash
echo -e "$(tput bold)\nEnter the base name for the files:$(tput sgr0)"
read basename

currentFile=`basename "$0"`
shopt -s nullglob
files=(*)
total=${#files[@]}
i=1
echo -e "\nRenaming $total files. Please wait"

for file in ${files[@]}; do
  if [[ "$file" != "$currentFile" ]]; then
    padding=`seq  -f "0" -s '' $((${#i}-${#total}+1))`
    mv "$file" "${basename}_$padding$i.${file##*.}"
    ((i=i+1)) 
  fi
done

echo -e "\nFinished renaming $total files"
